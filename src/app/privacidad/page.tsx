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
