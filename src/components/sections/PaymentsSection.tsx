import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { getSiteSettings } from "@/lib/sanity/queries";

export default async function PaymentsSection() {
  const { paymentMethods } = await getSiteSettings();

  return (
    <section
      id="pagos"
      aria-labelledby="pagos-heading"
      className="border-b border-line py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            headingId="pagos-heading"
            label="Cómo pagar"
            title="Métodos de pago"
            description="Coordinamos el medio de pago que más te convenga. Ante cualquier duda, consultanos directamente por WhatsApp."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {(paymentMethods ?? []).map((method, i) => (
            <Reveal key={method.title} delay={Math.min(i * 0.08, 0.3)}>
              <div className="h-full border border-line bg-dark p-6">
                <h3 className="font-serif text-lg font-medium text-off-white">
                  {method.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-gray">
                  {method.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
