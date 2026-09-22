import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WatchGrid from "@/components/ui/WatchGrid";
import Reveal from "@/components/ui/Reveal";
import { getWatches } from "@/lib/sanity/queries";

export default async function StockSection() {
  const watches = await getWatches();
  const stock = watches.filter((w) => w.availability === "stock");

  return (
    <section
      id="stock"
      aria-labelledby="stock-heading"
      className="border-b border-line py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            headingId="stock-heading"
            label="Disponibles ahora"
            title="Relojes en stock"
            description="Piezas listas para entrega inmediata. Consultá disponibilidad y fotos reales por WhatsApp."
          />
        </Reveal>

        <div className="mt-16">
          <WatchGrid watches={stock} />
        </div>
      </Container>
    </section>
  );
}
