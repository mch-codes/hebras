import { waLink } from "@/lib/site";

export type Product = {
  name: string;
  material?: string;
  /** e.g. "aspect-[3/4]" — keep the mix uneven so the grid stays organic. */
  ratio: string;
  src: string;
};

export default function GalleryItem({ name, material, ratio, src }: Product) {
  return (
    <figure className="reveal group mb-14 break-inside-avoid md:mb-20">
      <div className={`${ratio} overflow-hidden bg-oat`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <figcaption className="mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-serif text-base">{name}</span>
          {material && (
            <span className="text-[0.7rem] uppercase tracking-[0.15em] text-ink/40">
              {material}
            </span>
          )}
        </div>

        {/* Inquiry, never an order — no price, no cart, no commitment. */}
        <a
          href={waLink(`Hola Hebras, me interesa «${name}». ¿Me cuentas más?`)}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-clay"
        >
          Preguntar por WhatsApp
          <span aria-hidden="true" className="text-sm leading-none">
            →
          </span>
        </a>
      </figcaption>
    </figure>
  );
}
