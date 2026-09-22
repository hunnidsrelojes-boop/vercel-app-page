# Automatización Hunnids

Cuatro workflows de n8n listos para importar. Cubren:

1. **[1-whatsapp-lead-handler.json](workflows/1-whatsapp-lead-handler.json)** — responde WhatsApp automáticamente, clasifica el mensaje (lead / seguimiento / soporte / otro) y lo guarda en tu Google Sheet.
2. **[2-instagram-lead-handler.json](workflows/2-instagram-lead-handler.json)** — agente de ventas para DMs de Instagram. Usa el playbook comercial completo de Hunnids (rol, tono argentino, sistema de 3 niveles: 🟢 consulta / 🟡 interesado / 🔥 lead caliente), tiene memoria de la conversación (relee los últimos mensajes de esa misma persona antes de responder, no evalúa cada mensaje aislado) y, cuando detecta un lead caliente, arma el resumen estructurado (qué busca, modelo, presupuesto, forma de pago, objeción, etc.) y te avisa por WhatsApp con ese resumen listo para cerrar.
3. **[3-lead-followup-scheduler.json](workflows/3-lead-followup-scheduler.json)** — corre todos los días a las 10am, revisa el Sheet y manda un mensaje de seguimiento a los leads que llevan +24h sin respuesta (máximo 3 seguimientos por lead, para no ser pesado).
4. **[4-watch-search-agent.json](workflows/4-watch-search-agent.json)** — recibe una búsqueda (marca/modelo + presupuesto opcional), busca en eBay, Jomashop y Chrono24, y te manda las opciones encontradas por WhatsApp.

Todos usan **Claude (Anthropic API)** para clasificar mensajes y redactar respuestas, y **Google Sheets** como CRM de leads.

---

## 0. Antes de importar: cuentas que necesitas

| Cuenta | Para qué | Costo |
|---|---|---|
| [Meta for Developers](https://developers.facebook.com/) app con WhatsApp Business + Instagram Messaging | Recibir y enviar mensajes | Gratis (mensajes tienen costo por conversación pasado cierto volumen) |
| [Anthropic Console](https://console.anthropic.com/) API key | Clasificar mensajes y redactar respuestas | Pago por uso, muy barato para este volumen |
| Google Sheets (tu cuenta normal de Google) | Guardar leads | Gratis |
| [eBay Developer](https://developer.ebay.com/) — app gratuita | Buscar relojes en eBay vía API oficial | Gratis |

**Nota sobre Jomashop y Chrono24:** ninguno tiene API pública, así que el workflow 4 les "lee" el HTML de la página de resultados de búsqueda. Esto es más frágil que una API:
- Si el sitio cambia su diseño, hay que actualizar los selectores CSS en el nodo `Parse Jomashop HTML` / `Parse Chrono24 HTML`.
- Chrono24 probablemente tenga protección anti-bot (Cloudflare) que bloquee peticiones simples — si ves que siempre vuelve vacío, lo más confiable es contratar un servicio de scraping tipo ScraperAPI o Browserless (unos dólares/mes) y apuntar la URL del nodo `Search Chrono24` a través de ese servicio en vez de directo.
- Usa esto con moderación (búsquedas puntuales, no cientos por hora) para no tener problemas con los términos de servicio de esos sitios.

---

## 1. Setup en n8n (una sola vez)

Entra a tu instancia de n8n → **Credentials** → crea estas 4:

1. **"Anthropic API (x-api-key)"** — tipo *Header Auth*. Header name: `x-api-key`. Value: tu API key de Anthropic.
2. **"Meta Graph API Token"** — tipo *Bearer Auth*. Token: el **Permanent Access Token** de tu app de Meta (con permisos `whatsapp_business_messaging` e `instagram_manage_messages`).
3. **"Google Sheets - Hunnids"** — tipo *Google Sheets OAuth2*, conecta tu cuenta de Google normalmente (n8n te lleva por el flujo de login).
4. **"eBay API Client Credentials"** — tipo *Basic Auth*. Usuario: tu eBay Client ID. Contraseña: tu eBay Client Secret.

## 2. Crea el Google Sheet de leads

Crea un Google Sheet nuevo, nombra la hoja **`Leads`**, y en la fila 1 pega exactamente estos encabezados (ya están en [leads-sheet-template.csv](leads-sheet-template.csv)):

```
message_id,fecha,canal,nombre,telefono,mensaje,clasificacion,interes,urgencia,estado,ultimo_contacto,follow_up_count,suggested_reply,resumen_lead,phoneNumberId,igAccountId
```

> Si ya habías creado el Sheet antes de esta versión, agregale la columna `resumen_lead` (entre `suggested_reply` e `igAccountId`) — ahí se guarda el resumen del lead caliente para Instagram.

Copia el ID del Sheet (la parte de la URL entre `/d/` y `/edit`).

## 3. Importa cada workflow

En n8n: **Workflows → Import from File** → selecciona cada `.json` de la carpeta `workflows/`.

En cada workflow importado, reemplaza estos placeholders (búscalos con Ctrl+F en el editor de n8n o edita el nodo directamente):

| Placeholder | Dónde | Reemplázalo por |
|---|---|---|
| `REPLACE_WITH_YOUR_SHEET_ID` | nodos de Google Sheets | el ID de tu Sheet del paso 2 |
| `REPLACE_WITH_OWNER_NUMBER` | nodos "Build Owner Notify Request" / "Build WhatsApp Summary Request" | tu número de WhatsApp personal (con código de país, sin `+`, ej `5215512345678`) |
| `REPLACE_WITH_YOUR_WHATSAPP_PHONE_NUMBER_ID` | workflow 2 y 4 | el `phone_number_id` de tu número de WhatsApp Business (lo ves en Meta for Developers → WhatsApp → API Setup) |
| Credenciales `REPLACE_ME` | todos los nodos HTTP/Sheets | selecciona la credencial correspondiente que creaste en el paso 1 |

## 4. Conecta los webhooks en Meta

En tu app de Meta for Developers → **Webhooks**:
- Para WhatsApp: suscribe el campo `messages`, apunta la URL a la del nodo Webhook del workflow 1 (n8n te la muestra al activar el workflow), y usa el mismo *Verify Token* que configures ahí (en Meta te lo pide al verificar — el workflow ya responde automáticamente al challenge).
- Para Instagram: igual pero con el campo `messages` de Instagram, apuntando al webhook del workflow 2.

**Activa (toggle ON)** los 3 workflows (1, 2, 3) en n8n para que corran en producción. El workflow 4 lo disparas manualmente (ver abajo).

## 5. Cómo usar el buscador de relojes (workflow 4)

Actívalo y copia su URL de webhook. Puedes dispararlo:
- Desde tu celular con un shortcut/atajo que haga un POST, o
- Con cualquier cliente HTTP:

```bash
curl -X POST https://TU-N8N.app/webhook/hunnids-watch-search \
  -H "Content-Type: application/json" \
  -d '{"query": "Rolex Submariner", "max_price": 12000}'
```

Te va a llegar un WhatsApp con la lista ordenada por precio, con link a cada opción.

---

## Qué revisar antes de poner esto en producción

- **Prueba cada workflow con "Execute Workflow" en n8n** antes de activarlo, usando datos de ejemplo, para confirmar que las credenciales están bien conectadas.
- El nodo "Build Claude Request" del workflow 2 (Instagram) tiene hardcodeado el nombre **"Fausto"** como el dueño al que se deriva la conversación cuando escala a lead caliente (dentro del `systemPrompt`, secciones 9 y 18). Si no es el nombre correcto, buscalo y reemplazalo ahí.
- El workflow 1 (WhatsApp) todavía usa un prompt simple de clasificación, no el playbook completo de ventas. Si querés el mismo tratamiento (niveles, memoria de conversación, resumen estructurado) para WhatsApp, decime y lo hago igual.
- Los prompts de Claude están en español y en tono cálido — ajústalos en los nodos "Build Claude Request" si quieres otro tono o agregar info específica de tu catálogo.
- El límite de 3 seguimientos automáticos por lead evita spam, pero puedes ajustarlo en el nodo "Filter Needs Followup" del workflow 3.
- Revisa los selectores CSS de Jomashop/Chrono24 la primera vez inspeccionando la página (clic derecho → Inspeccionar) — es muy probable que necesiten un ajuste fino a como está el sitio hoy.
