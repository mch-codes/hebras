import { INSTAGRAM } from "@/lib/site";

/**
 * Browse-by-use-case tiles. On a real store these open filtered collections;
 * with 11 made-to-order pieces there is nothing to filter, so every tile sends
 * people to Instagram, where the work and the DMs already live.
 */
const intentions = [
  {
    label: "Para regalar",
    tagline: "Una pieza que no tiene nadie más.",
    src: "/products/bolso-conchas.jpg",
    hover: "/products/conchas-detalle.jpg",
  },
  {
    label: "Para el día a día",
    tagline: "Ligeros, resistentes, de diario.",
    src: "/products/bolso-mint.jpg",
    hover: "/products/bolso-mint-colgado.jpg",
  },
  {
    label: "Para viajar",
    tagline: "Sombreros y bolsos de verano.",
    src: "/products/sombrero-crudo.jpg",
    hover: "/products/sombrero-camel.jpg",
  },
  {
    label: "A medida",
    tagline: "Tu color, tu tamaño, tu pieza.",
    src: "/products/bolso-flecos.jpg",
    hover: "/products/etiqueta.jpg",
  },
];

// Both layers share this: scale-[1.06] is the minimum that keeps the corners
// covered at 2° on a 4:5 tile, so the rotation never exposes the oat backing.
const layer =
  "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:rotate-2 group-hover:scale-[1.06]";

export default function Intentions() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
      <ul
        aria-label="Qué estás buscando"
        className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8"
      >
        {intentions.map(({ label, tagline, src, hover }) => (
          <li key={label} className="reveal">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${label} — ver en Instagram`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-oat">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
                <img src={src} alt="" loading="lazy" className={layer} />
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
                <img
                  src={hover}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                  className={`${layer} opacity-0 group-hover:opacity-100`}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <span className="font-serif text-lg leading-tight text-paper md:text-xl">
                    {label}
                  </span>
                  <span className="mt-1.5 block text-[0.7rem] leading-snug text-paper/75">
                    {tagline}
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
