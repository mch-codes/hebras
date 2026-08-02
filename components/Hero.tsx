export default function Hero() {
  return (
    <header className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[1fr_0.85fr] md:items-center md:gap-20 md:px-12 md:pb-32 md:pt-24">
      <div>
        <h1 className="font-serif text-[19vw] leading-[0.85] tracking-[-0.02em] md:text-[8.5rem]">
          Hebras
        </h1>

        {/* Hand-drawn swirl underline — echoes the logo's curling thread. */}
        <svg
          viewBox="0 0 320 40"
          fill="none"
          aria-hidden="true"
          className="mt-3 w-56 text-clay md:w-72"
        >
          <path
            d="M2 26c38-14 78-16 118-6 34 8 66 14 96 4 14-5 22-14 14-20-7-5-16 2-14 10 3 11 17 16 30 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <p className="mt-10 font-serif text-xl italic tracking-wide text-ink/80 md:text-2xl">
          Hebras crochet artesanal
        </p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/65">
          Bolsos tejidos a crochet — para mujeres que valoran lo hecho a mano,
          lo sostenible y lo auténtico.
        </p>

        <a
          href="#galeria"
          className="mt-16 inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-ink/50 transition-colors hover:text-clay"
        >
          Ver piezas
          <span aria-hidden="true" className="text-base leading-none">
            ↓
          </span>
        </a>
      </div>

      <div className="aspect-[2/3] overflow-hidden bg-oat">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
        <img
          src="/products/hero.jpg"
          alt="Bolso de crochet burdeos con cadena de perlas"
          className="h-full w-full object-cover"
        />
      </div>
    </header>
  );
}
