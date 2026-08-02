import Hero from "@/components/Hero";
import Intentions from "@/components/Intentions";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Plain-text trust markers with hairline icons — deliberately not badges or
 * certification seals, which read as fake on a one-person business.
 *
 * TODO: "Respondo en menos de 24h" is a public commitment. Confirmed with the
 * seller, but if response times slip it should be softened or dropped.
 */
const trust = [
  {
    label: "Hecho a mano en Madrid",
    path: "M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10Zm0-7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  },
  {
    label: "Piezas únicas, no en serie",
    path: "M12 3.5 14.2 9l5.8.4-4.5 3.8 1.5 5.7L12 15.8l-5 3.1 1.5-5.7L4 9.4 9.8 9 12 3.5Z",
  },
  {
    label: "Respondo en menos de 24h",
    path: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.75-9.3V7h-1.5v5.3l3.6 2.2.8-1.3-2.9-1.5Z",
  },
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
        <p className="mt-6 text-sm leading-relaxed text-ink/55">
          Piezas pensadas para durar años y acompañarte a todas partes.
        </p>
      </section>

      <Gallery />
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
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ink/45">
            La etiqueta
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-wide md:text-5xl">
            Hebras
          </h2>
          <p className="mt-6 font-serif text-lg italic leading-relaxed text-ink/75 md:text-xl">
            Toda pieza que sale de mis manos lleva esta etiqueta.
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">
            Es la firma de la marca: si la lleva, la he tejido yo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-12">
        <ul className="reveal grid gap-8 border-y border-taupe/30 py-10 sm:grid-cols-3 sm:gap-10">
          {trust.map(({ label, path }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 text-center sm:flex-col sm:gap-3"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-clay"
              >
                <path d={path} />
              </svg>
              <span className="text-sm leading-snug text-ink/70">{label}</span>
            </li>
          ))}
        </ul>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
