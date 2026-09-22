import Image from "next/image";
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

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-xs font-light text-gray sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <p>Relojes 100% originales.</p>
        </div>
      </Container>
    </footer>
  );
}
