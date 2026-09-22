import { SITE } from "@/lib/constants";

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function watchInquiryUrl(watchName: string): string {
  return buildWhatsAppUrl(
    `Hola! Me interesa consultar por el reloj "${watchName}" que vi en la web de HUNNIDS.`
  );
}

export function generalInquiryUrl(): string {
  return buildWhatsAppUrl("Hola! Quiero consultar sobre relojes HUNNIDS.");
}

export function encargoWatchInquiryUrl(watchName: string): string {
  return buildWhatsAppUrl(
    `Hola! Quiero consultar precio y disponibilidad del ${watchName} por encargo.`
  );
}

export function encargoPhotoInquiryUrl(): string {
  return buildWhatsAppUrl(
    "Hola! Quiero hacer un encargo pero no tengo todos los datos del reloj a mano. Te mando una foto por acá para que me ayuden a identificarlo."
  );
}

export interface QuoteRequestData {
  brand: string;
  model: string;
  reference: string;
  size: string;
}

export function quoteRequestUrl(data: QuoteRequestData): string {
  const lines = [
    "Hola! Quiero solicitar una cotización por encargo:",
    data.brand ? `Marca: ${data.brand}` : null,
    `Modelo: ${data.model}`,
    data.reference ? `Referencia: ${data.reference}` : null,
    data.size ? `Medida: ${data.size}` : null,
  ].filter(Boolean);
  return buildWhatsAppUrl(lines.join("\n"));
}
