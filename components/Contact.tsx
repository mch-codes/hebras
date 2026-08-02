import { INSTAGRAM, waLink } from "@/lib/site";

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
        y tiempos — sin compromiso.
      </p>

      <div className="mt-12 flex flex-col items-center gap-8">
        <a
          href={waLink("Hola Hebras, me gustaría preguntarte por una pieza.")}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-[0.7rem] uppercase tracking-[0.25em] text-paper transition-colors hover:bg-clay"
        >
          Preguntar por WhatsApp
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer noopener"
          className="border-b border-clay pb-2 font-serif text-2xl text-clay transition-colors hover:text-ink md:text-3xl"
        >
          @hebrastejidos
        </a>
      </div>
    </section>
  );
}
