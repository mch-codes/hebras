import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import Footer from "@/components/Footer";

/**
 * Four sections, down from ten. The work comes first — the hero's CTA says
 * "Ver piezas" — then the passage that explains who made it, then the ask.
 */
export default function Page() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Story />
      <Footer />
    </main>
  );
}
