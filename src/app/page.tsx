import Hero from "@/components/sections/Hero";
import StockSection from "@/components/sections/StockSection";
import EncargoSection from "@/components/sections/EncargoSection";
import PaymentsSection from "@/components/sections/PaymentsSection";
import ContactSection from "@/components/sections/ContactSection";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <StockSection />
      <EncargoSection />
      <PaymentsSection />
      <ContactSection />
    </>
  );
}
