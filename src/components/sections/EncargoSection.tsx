import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WatchGrid from "@/components/ui/WatchGrid";
import QuoteRequestModal from "@/components/ui/QuoteRequestModal";
import Reveal from "@/components/ui/Reveal";
import { getWatches } from "@/lib/sanity/queries";

export default async function EncargoSection() {
  const watches = await getWatches();
  const encargo = watches.filter((w) => w.availability === "encargo");

  return (
    <section
      id="encargo"
      aria-labelledby="encargo-heading"
      className="border-b border-line bg-dark py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            headingId="encargo-heading"
            label="A tu medida"
            title="Relojes por encargo"
            description="Conseguimos casi cualquier reloj. Contanos la marca, referencia, medida o color que buscás — si viene en varios colores, decinos cuál te gusta — y te traemos la pieza que tanto querés."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <QuoteRequestModal />
          </div>
        </Reveal>

        <div className="mt-16">
          <WatchGrid watches={encargo} />
        </div>
      </Container>
    </section>
  );
}
