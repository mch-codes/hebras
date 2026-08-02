/**
 * Full-bleed lifestyle photo, wordmark, one line, one CTA — nothing else.
 *
 * The CTA sends people into the catalog rather than straight to WhatsApp: the
 * sticky header already keeps WhatsApp reachable, and asking before they've
 * seen a single piece converts worse.
 *
 * hero.jpg is portrait (855×1280), so object-position is tuned to keep the bag
 * and the model's arm in frame on wide viewports.
 * TODO: a landscape or square lifestyle shot would sit far better full-bleed.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="hero-frame relative flex min-h-[88vh] items-end overflow-hidden bg-oat"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
      <img
        src="/products/hero.jpg"
        alt="Bolso de crochet burdeos con cadena de perlas, llevado a mano"
        fetchPriority="high"
        className="hero-parallax absolute inset-0 h-full w-full object-cover object-[42%_28%]"
      />
      {/* Scrim — the photo is light at the bottom, text needs the contrast. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/5"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:px-12 md:pb-24">
        <h1 className="font-serif font-light text-[18vw] leading-[0.85] tracking-[-0.02em] text-paper md:text-[8rem]">
          Hebras
        </h1>
        <p className="mt-5 max-w-lg font-serif text-xl italic tracking-wide text-paper/90 md:text-3xl">
          Bolsos tejidos a mano, uno a uno.
        </p>

        <a
          href="#galeria"
          className="mt-10 inline-flex items-center gap-3 border border-paper/70 px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-paper transition-colors hover:bg-paper hover:text-ink md:mt-12"
        >
          Ver piezas
        </a>
      </div>
    </section>
  );
}
