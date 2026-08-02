import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const notes = ["100% algodón", "Hecho a mano", "Piezas únicas"];

export default function Page() {
  return (
    <main>
      <Hero />

      {/* Intro / philosophy — deliberately unboxed, whitespace does the work. */}
      <section className="reveal mx-auto max-w-2xl px-6 py-24 md:py-32">
        <p className="font-serif text-xl leading-[1.7] tracking-wide text-ink/80 md:text-2xl md:leading-[1.75]">
          Tejo cada pieza a mano, punto a punto, con hilos naturales y sin
          prisa. No hay stock ni producción en serie: cada bolso se hace por
          encargo, en el color y el tamaño que elijas.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-ink/55">
          Piezas pensadas para durar años y acompañarte a todas partes.
        </p>
      </section>

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

      <Gallery />

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
        <ul className="reveal grid gap-10 border-y border-taupe/30 py-12 text-center sm:grid-cols-3">
          {notes.map((note) => (
            <li
              key={note}
              className="font-serif text-lg tracking-wide text-ink/75"
            >
              {note}
            </li>
          ))}
        </ul>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
