import { MapPin, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";
import { generalInquiryUrl } from "@/lib/whatsapp";

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Respuesta rápida, todos los días",
    href: generalInquiryUrl(),
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: `@${SITE.instagramHandle}`,
    href: SITE.instagramUrl,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Mar del Plata · envíos a todo el país",
    href: undefined,
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="bg-dark py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            headingId="contacto-heading"
            label="Hablemos"
            title="Contacto"
            description="La forma más rápida de consultar disponibilidad, precios o hacer un encargo es por WhatsApp."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <WhatsAppButton href={generalInquiryUrl()} />
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {CHANNELS.map((channel, i) => {
            const Icon = channel.icon;
            const content = (
              <div className="flex h-full flex-col items-center gap-3 border border-line bg-black px-6 py-8 text-center transition-colors hover:border-silver-dim">
                <Icon className="h-5 w-5 text-silver" strokeWidth={1.5} />
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-off-white">
                  {channel.label}
                </p>
                <p className="text-xs font-light text-gray">{channel.value}</p>
              </div>
            );
            return (
              <Reveal key={channel.label} delay={i * 0.08}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
