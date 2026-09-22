# ============================================================
#  HUNNIDS - Agrega paginas de Terminos y Privacidad + links
#  Ejecutalo DENTRO de la carpeta del repo (vercel-app-page).
#  Uso:  powershell -ExecutionPolicy Bypass -File agregar-legales.ps1
# ============================================================

$ErrorActionPreference = "Stop"

# Verifica que estamos en la raiz del repo
if (-not (Test-Path "package.json")) {
    Write-Host "ERROR: No encuentro package.json." -ForegroundColor Red
    Write-Host "Move este script a la carpeta del repo (vercel-app-page) y volve a ejecutarlo." -ForegroundColor Yellow
    exit 1
}

$utf8 = New-Object System.Text.UTF8Encoding($false)  # UTF-8 sin BOM

function Write-File($path, $content) {
    $dir = Split-Path -Parent $path
    if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    [System.IO.File]::WriteAllText((Join-Path (Get-Location) $path), $content, $utf8)
    Write-Host ("  OK  " + $path) -ForegroundColor Green
}

Write-Host "Escribiendo archivos..." -ForegroundColor Cyan

$content = @'
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso, compra, envíos, garantía, cambios y protección de datos de HUNNIDS.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "22 de septiembre de 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-28">
      <h2 className="font-serif text-2xl font-light text-off-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm font-light leading-relaxed text-gray sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export default function TerminosPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}`;

  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-silver transition-colors hover:text-off-white"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Volver al inicio
        </Link>

        <span className="mt-10 block text-[11px] font-medium uppercase tracking-[0.3em] text-silver">
          Legal
        </span>
        <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-off-white sm:text-5xl">
          Términos y Condiciones
        </h1>
        <p className="mt-5 text-sm font-light leading-relaxed text-gray">
          Última actualización: {LAST_UPDATED}
        </p>

        <div className="mt-14 space-y-12">
          <Section title="1. Titular del sitio">
            <p>
              Este sitio web es operado por <strong className="font-medium text-off-white">{SITE.name}</strong>{" "}
              (en adelante, &ldquo;{SITE.name}&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;el vendedor&rdquo;), una tienda de
              relojes con base en Mar del Plata, Provincia de Buenos Aires, Argentina, que opera de
              forma exclusivamente online.
            </p>
            <p>
              Podés contactarnos por WhatsApp al{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                +54 9 223 454 7845
              </a>{" "}
              o por Instagram en{" "}
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                @{SITE.instagramHandle}
              </a>
              .
            </p>
          </Section>

          <Section title="2. Aceptación de los términos">
            <p>
              El uso de este sitio y la realización de cualquier compra implican la aceptación plena
              de estos Términos y Condiciones. Si no estás de acuerdo con ellos, te pedimos que no
              utilices el sitio ni realices operaciones. {SITE.name} podrá modificar estos términos en
              cualquier momento; la versión vigente será siempre la publicada en esta página.
            </p>
          </Section>

          <Section title="3. Productos">
            <p>
              {SITE.name} comercializa relojes <strong className="font-medium text-off-white">100% originales</strong>,
              tanto nuevos como usados o refurbished/importados, de marcas reconocidas. Todos los
              productos son auténticos; no vendemos réplicas ni imitaciones.
            </p>
            <p>
              Las fotografías y descripciones son ilustrativas y buscan reflejar el producto con la
              mayor fidelidad posible. En el caso de relojes usados, cualquier marca de uso relevante
              se informa antes de la compra. La disponibilidad está sujeta a stock; algunos modelos se
              ofrecen bajo la modalidad &ldquo;por encargo&rdquo;.
            </p>
          </Section>

          <Section title="4. Precios">
            <p>
              Los precios se expresan en pesos argentinos (ARS), salvo que se indique lo contrario, y
              pueden modificarse sin previo aviso. El precio válido para cada operación es el
              confirmado al momento de coordinar la compra. En caso de un error tipográfico o de
              carga evidente en un precio, {SITE.name} se reserva el derecho de cancelar la operación y
              reintegrar cualquier importe abonado.
            </p>
          </Section>

          <Section title="5. Proceso de compra">
            <p>
              Las compras se coordinan y confirman a través de nuestros canales de atención (WhatsApp
              e Instagram). En esa instancia se acuerdan el modelo, el precio final, el medio de pago y
              los datos de envío. La operación se considera perfeccionada una vez confirmado el pedido
              y recibido el pago correspondiente.
            </p>
          </Section>

          <Section title="6. Medios de pago">
            <p>
              Aceptamos múltiples medios de pago. Las opciones disponibles y sus condiciones (por
              ejemplo, transferencia bancaria u otras alternativas) se informan al coordinar cada
              compra. Los pagos se procesan de forma segura y {SITE.name} no almacena datos sensibles de
              tarjetas ni cuentas.
            </p>
          </Section>

          <Section title="7. Envíos">
            <p>
              Realizamos <strong className="font-medium text-off-white">envío gratuito a todo el país</strong>. Los
              plazos de entrega son estimados y dependen del destino y del correo o transporte
              utilizado. Una vez despachado el pedido, {SITE.name} no es responsable por demoras
              atribuibles al servicio de correo, aunque colaboramos en el seguimiento hasta la entrega.
            </p>
          </Section>

          <Section title="8. Garantía">
            <p>
              Todos nuestros relojes cuentan con una{" "}
              <strong className="font-medium text-off-white">garantía propia de 3 meses</strong> que cubre defectos de
              funcionamiento del movimiento. Algunos productos incluyen además garantía internacional o
              extendida del fabricante, lo cual se informa en cada caso.
            </p>
            <p>
              La garantía no cubre: daños por mal uso, golpes, contacto con agua fuera de la resistencia
              especificada del modelo, manipulación o apertura por parte de terceros no autorizados,
              desgaste normal de uso, ni elementos consumibles como pila o malla. Para gestionar la
              garantía, escribinos por WhatsApp y te indicamos los pasos a seguir.
            </p>
          </Section>

          <Section title="9. Cambios, devoluciones y derecho de arrepentimiento">
            <p>
              De acuerdo con la Ley 24.240 de Defensa del Consumidor, en las compras a distancia el
              comprador tiene derecho a revocar la aceptación dentro de los{" "}
              <strong className="font-medium text-off-white">10 (diez) días corridos</strong> contados a partir de la
              recepción del producto, sin necesidad de expresar motivo y sin penalidad alguna.
            </p>
            <p>
              Para ejercer este derecho, el producto debe devolverse sin uso, en las mismas condiciones
              en que fue recibido y con su empaque y accesorios completos. Para iniciar una devolución o
              cambio, contactanos por WhatsApp dentro del plazo indicado y coordinaremos la logística.
            </p>
          </Section>

          <Section title="10. Encargos y permutas">
            <p>
              Los pedidos bajo la modalidad &ldquo;por encargo&rdquo; pueden requerir una seña para su
              gestión, la cual se informa previamente. Las permutas de relojes están sujetas a la
              evaluación previa del reloj ofrecido por el cliente y a la aceptación por parte de {SITE.name}.
            </p>
          </Section>

          <Section title="11. Propiedad intelectual">
            <p>
              La marca {SITE.name}, el logo, los textos, las fotografías y demás contenidos de este sitio
              son propiedad de {SITE.name} y están protegidos por la legislación vigente. Queda prohibida
              su reproducción o uso sin autorización previa. Las marcas de los fabricantes de relojes
              mencionadas pertenecen a sus respectivos titulares.
            </p>
          </Section>

          <Section title="12. Protección de datos personales">
            <p>
              Los datos personales que nos brindás (como nombre, contacto y domicilio de envío) se
              utilizan únicamente para gestionar tu compra, coordinar el envío y mantener la
              comunicación. No comercializamos ni cedemos tus datos a terceros, salvo lo estrictamente
              necesario para concretar el pago o la entrega. El tratamiento de datos se realiza conforme
              a la Ley 25.326 de Protección de Datos Personales. Podés solicitar el acceso, la
              rectificación o la supresión de tus datos escribiéndonos por nuestros canales de contacto.
            </p>
          </Section>

          <Section title="13. Ley aplicable y jurisdicción">
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Ante
              cualquier conflicto, serán competentes los tribunales que correspondan según la normativa
              de defensa del consumidor. El consumidor puede además presentar reclamos ante la autoridad
              de aplicación de Defensa del Consumidor a través de la Ventanilla Única Federal
              (consumidor.gob.ar).
            </p>
          </Section>

          <Section title="14. Contacto">
            <p>
              Ante cualquier duda sobre estos Términos y Condiciones o sobre una compra, podés
              escribirnos por{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                WhatsApp
              </a>{" "}
              o por{" "}
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                Instagram
              </a>
              . Estamos para ayudarte.
            </p>
          </Section>
        </div>
      </div>
    </Container>
  );
}

'@
Write-File "src/app/terminos/page.tsx" $content

$content = @'
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo HUNNIDS recopila, utiliza y protege tus datos personales conforme a la Ley 25.326 de Protección de Datos Personales de Argentina.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "22 de septiembre de 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-28">
      <h2 className="font-serif text-2xl font-light text-off-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm font-light leading-relaxed text-gray sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export default function PrivacidadPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}`;

  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-silver transition-colors hover:text-off-white"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Volver al inicio
        </Link>

        <span className="mt-10 block text-[11px] font-medium uppercase tracking-[0.3em] text-silver">
          Legal
        </span>
        <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-off-white sm:text-5xl">
          Política de Privacidad
        </h1>
        <p className="mt-5 text-sm font-light leading-relaxed text-gray">
          Última actualización: {LAST_UPDATED}
        </p>

        <div className="mt-14 space-y-12">
          <Section title="1. Responsable de los datos">
            <p>
              En <strong className="font-medium text-off-white">{SITE.name}</strong> respetamos tu privacidad y nos
              comprometemos a proteger los datos personales que compartís con nosotros. Esta Política de
              Privacidad describe qué información recopilamos, con qué finalidad la usamos y cuáles son
              tus derechos. El tratamiento de datos se realiza conforme a la Ley 25.326 de Protección de
              Datos Personales de la República Argentina.
            </p>
          </Section>

          <Section title="2. Qué datos recopilamos">
            <p>Podemos recopilar los siguientes datos personales:</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-gray-2">
              <li>Datos de identificación y contacto: nombre, número de teléfono/WhatsApp, usuario de Instagram y correo electrónico, cuando los proporcionás.</li>
              <li>Datos de envío: domicilio y localidad necesarios para hacerte llegar el pedido.</li>
              <li>Datos de la operación: modelo adquirido, medio de pago acordado y comunicaciones relacionadas con la compra.</li>
            </ul>
            <p>
              No recopilamos datos sensibles ni almacenamos información completa de tarjetas de crédito o
              débito ni de cuentas bancarias.
            </p>
          </Section>

          <Section title="3. Cómo obtenemos tus datos">
            <p>
              Obtenemos tus datos directamente de vos cuando nos contactás o realizás una compra a través
              de nuestros canales (WhatsApp, Instagram o este sitio). También podemos recopilar
              información técnica básica de navegación con fines estadísticos y de mejora del sitio.
            </p>
          </Section>

          <Section title="4. Para qué usamos tus datos">
            <p>Utilizamos tus datos únicamente para:</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-gray-2">
              <li>Gestionar y concretar tu compra.</li>
              <li>Coordinar el envío y hacer su seguimiento.</li>
              <li>Mantener la comunicación con vos y brindarte soporte, incluida la garantía.</li>
              <li>Mejorar nuestros productos, el sitio y la experiencia de compra.</li>
            </ul>
          </Section>

          <Section title="5. Con quién compartimos tus datos">
            <p>
              No vendemos ni cedemos tus datos personales a terceros con fines comerciales. Solo
              compartimos la información estrictamente necesaria con los proveedores que intervienen en la
              operación —por ejemplo, empresas de correo o logística para el envío, y plataformas de pago
              para procesar la transacción— y siempre de forma limitada al cumplimiento de ese fin.
            </p>
          </Section>

          <Section title="6. Conservación y seguridad">
            <p>
              Conservamos tus datos durante el tiempo necesario para cumplir con las finalidades descritas
              y con las obligaciones legales aplicables. Adoptamos medidas razonables para proteger la
              información contra el acceso no autorizado, la pérdida o el uso indebido.
            </p>
          </Section>

          <Section title="7. Cookies y tecnologías similares">
            <p>
              El sitio puede utilizar cookies o tecnologías similares para su correcto funcionamiento y
              para obtener estadísticas de uso de forma anónima. Podés configurar tu navegador para
              limitar o bloquear las cookies, teniendo en cuenta que algunas funciones del sitio podrían
              verse afectadas.
            </p>
          </Section>

          <Section title="8. Tus derechos">
            <p>
              Como titular de los datos, tenés derecho a acceder, rectificar, actualizar y solicitar la
              supresión de tu información personal. Para ejercer estos derechos, escribinos por{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                WhatsApp
              </a>{" "}
              o por{" "}
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                Instagram
              </a>
              . La Agencia de Acceso a la Información Pública (AAIP), órgano de control de la Ley 25.326,
              tiene la atribución de atender las denuncias y reclamos vinculados al incumplimiento de las
              normas sobre protección de datos personales.
            </p>
          </Section>

          <Section title="9. Menores de edad">
            <p>
              Nuestros productos y comunicaciones están dirigidos a personas mayores de edad. No
              recopilamos de forma intencional datos de menores sin el consentimiento de sus padres o
              tutores.
            </p>
          </Section>

          <Section title="10. Cambios en esta política">
            <p>
              Podemos actualizar esta Política de Privacidad en cualquier momento. La versión vigente será
              siempre la publicada en esta página, con su fecha de última actualización.
            </p>
          </Section>

          <Section title="11. Contacto">
            <p>
              Si tenés preguntas sobre esta política o sobre el tratamiento de tus datos, escribinos por
              WhatsApp al{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                +54 9 223 454 7845
              </a>{" "}
              o por Instagram en{" "}
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-4 transition-colors hover:text-off-white"
              >
                @{SITE.instagramHandle}
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </Container>
  );
}

'@
Write-File "src/app/privacidad/page.tsx" $content

$content = @'
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { generalInquiryUrl } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-dark">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image src="/logo.png" alt={SITE.name} width={133} height={40} className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-gray">
              {SITE.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={generalInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-gray transition-colors hover:border-silver hover:text-silver"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-gray transition-colors hover:border-silver hover:text-silver"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-silver">
              Navegación
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-gray transition-colors hover:text-off-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-silver">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-sm font-light text-gray">
              <li>
                <a
                  href={generalInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-off-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>Mar del Plata — envíos a todo el país</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-xs font-light text-gray sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/terminos" className="transition-colors hover:text-off-white">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="transition-colors hover:text-off-white">
              Política de Privacidad
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

'@
Write-File "src/components/layout/Footer.tsx" $content

$content = @'
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/terminos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/privacidad`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

'@
Write-File "src/app/sitemap.ts" $content

Write-Host ""
Write-Host "Listo. Archivos creados/actualizados." -ForegroundColor Green
Write-Host ""
Write-Host "Ahora, para publicar, corre estos comandos:" -ForegroundColor Cyan
Write-Host '   git add .'
Write-Host '   git commit -m "Agrega paginas de Terminos y Privacidad + links en footer"'
Write-Host '   git push'