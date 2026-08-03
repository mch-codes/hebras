import Hero from "@/components/Hero";
import Intentions from "@/components/Intentions";
import Gallery from "@/components/Gallery";
import Materials from "@/components/Materials";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Plain-text trust markers — deliberately not badges or certification seals,
 * which read as fake on a one-person business.
 *
 * TODO: "Respondo en menos de 24h" is a public commitment. Confirmed with the
 * seller, but if response times slip it should be softened or dropped.
 */
const trust = [
  "Hecho a mano en Madrid",
  "Piezas únicas, no en serie",
  "Respondo en menos de 24 h",
];

export default function Page() {
  return (
    <main>
      <Hero />
      <Intentions />

      {/* Intro / philosophy — deliberately unboxed, whitespace does the work. */}
      <section className="reveal mx-auto max-w-2xl px-6 py-20 md:py-28">
        <p className="font-serif text-xl leading-[1.7] tracking-wide text-ink/80 md:text-2xl md:leading-[1.75]">
          Tejo cada pieza a mano, punto a punto, con hilos naturales y sin
          prisa. No hay stock ni producción en serie: cada bolso se hace por
          encargo, en el color y el tamaño que elijas.
        </p>
      </section>

      <Gallery />
      <Materials />
      <Story />

      {/* The brand tag — this is the signature, not a product. */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 pb-24 md:grid-cols-2 md:gap-16 md:px-12 md:pb-32">
        <div className="reveal aspect-[4/5] overflow-hidden bg-oat">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
          <img
            src="/products/etiqueta.jpg"
            alt="Etiqueta dorada con el nombre Hebras cosida a un bolso de crochet"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="reveal">
          <h2 className="font-serif font-light text-4xl tracking-wide md:text-5xl">
            Hebras
          </h2>
          <p className="mt-6 font-serif text-lg italic leading-relaxed text-ink/75 md:text-xl">
            Cada pieza que sale de mis manos lleva esta etiqueta.
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">
            Es la firma de la marca: si la lleva, la he tejido yo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-12">
        <ul className="reveal grid gap-8 border-y border-taupe/30 py-10 sm:grid-cols-3 sm:gap-10">
          {trust.map((label) => (
            <li
              key={label}
              className="text-center text-sm leading-snug text-ink/70"
            >
              {label}
            </li>
          ))}
        </ul>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
