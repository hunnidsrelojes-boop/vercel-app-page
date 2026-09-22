import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Reveal from "@/components/ui/Reveal";
import { getBrands } from "@/lib/sanity/queries";
import { generalInquiryUrl } from "@/lib/whatsapp";

export default async function Hero() {
  const brands = await getBrands();

  return (
    <section
      id="inicio"
      aria-labelledby="inicio-heading"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-line pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-silver) 0, transparent 45%), radial-gradient(circle at 80% 70%, var(--color-silver) 0, transparent 40%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative py-20">
        <Reveal>
          <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.35em] text-silver">
            Relojes originales
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            id="inicio-heading"
            className="max-w-3xl font-serif text-5xl font-light leading-[1.05] text-off-white sm:text-6xl lg:text-7xl"
          >
            Mucho más que dar la hora.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-gray sm:text-lg">
            Seleccionamos relojes 100% originales para quienes valoran la
            precisión, el diseño y la historia detrás de cada pieza.
            Asesoramiento personalizado, siempre por WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#stock"
              className="inline-flex items-center justify-center rounded-sm bg-silver px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-silver-light"
            >
              Ver stock
            </a>
            <WhatsAppButton
              href={generalInquiryUrl()}
              label="Consultar por WhatsApp"
              variant="outline"
            />
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-16">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray">
              Marcas disponibles
            </p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {brands.map((brand) => (
                <span
                  key={brand.slug}
                  className="text-sm font-light tracking-wide text-gray"
                >
                  {brand.name}
                </span>
              ))}
              <span className="text-sm font-light tracking-wide text-gray">
                y más
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
