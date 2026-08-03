import { INSTAGRAM } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="reveal mx-auto max-w-2xl px-6 py-28 text-center md:py-40"
    >
      <h2 className="font-serif font-light text-3xl leading-snug tracking-wide md:text-4xl">
        ¿Te gusta alguna pieza?
      </h2>
      <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink/65">
        Cada bolso se teje por encargo. Escríbeme y hablamos de colores, tamaño
        y tiempos, sin compromiso.
      </p>

      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-12 inline-block border-b border-transparent pb-2 font-serif text-2xl text-clay transition-colors hover:border-clay md:text-3xl"
      >
        @hebrastejidos
      </a>
    </section>
  );
}
