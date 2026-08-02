export default function Contact() {
  return (
    <section
      id="contacto"
      className="reveal mx-auto max-w-2xl px-6 py-28 text-center md:py-40"
    >
      <h2 className="font-serif text-3xl leading-snug tracking-wide md:text-4xl">
        ¿Te llevas una pieza?
      </h2>
      <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink/65">
        Cada bolso se teje por encargo. Escríbeme por Instagram y hablamos de
        colores, tamaño y tiempos.
      </p>

      <div className="mt-12 flex flex-col items-center gap-6">
        <a
          href="https://instagram.com/hebrastejidos"
          target="_blank"
          rel="noreferrer noopener"
          className="border-b border-clay pb-2 font-serif text-2xl text-clay transition-colors hover:text-ink md:text-3xl"
        >
          @hebrastejidos
        </a>
        {/* TODO: set the real number, or delete this link. */}
        <a
          href="https://wa.me/34600000000"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[0.7rem] uppercase tracking-[0.3em] text-ink/50 transition-colors hover:text-ink"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
