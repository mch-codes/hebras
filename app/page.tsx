import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

/**
 * Three sections. The work carries the page — the hero's CTA says "Ver piezas"
 * — and the footer makes the ask.
 */
export default function Page() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Footer />
    </main>
  );
}
