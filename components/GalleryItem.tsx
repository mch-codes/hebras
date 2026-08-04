import { INSTAGRAM } from "@/lib/site";

export type Product = {
  name: string;
  material?: string;
  /** e.g. "aspect-[3/4]" — keep the mix uneven so the grid stays organic. */
  ratio: string;
  src: string;
};

export default function GalleryItem({ name, material, ratio, src }: Product) {
  return (
    /* mb, not grid gap: multicol has no row gap. Roomier at one column, where
       the caption sits under the photo and needs air before the next. */
    <figure className="reveal group mb-10 cursor-pointer break-inside-avoid sm:mb-6 lg:mb-8">
      {/* The aspect-ratio wrapper reserves the box before the file lands, so a
          loading photo never shifts the page. */}
      <div className={`${ratio} overflow-hidden bg-oat`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
        {/* No loading="lazy": Safari resolves it against the pre-fragmentation
            layout, so photos past column 1 never load. Eleven ~150 KB files. */}
        <img
          src={src}
          alt={name}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Visible by default on touch (no hover there); revealed on hover/focus from sm up. */}
      <figcaption
        className="mt-3 transition-all duration-[450ms] ease-out
                   sm:translate-y-2 sm:opacity-0
                   sm:group-hover:translate-y-0 sm:group-hover:opacity-100
                   sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <span className="font-serif text-base">{name}</span>
          {material && (
            <span className="text-[0.7rem] uppercase tracking-[0.15em] text-ink/70">
              {material}
            </span>
          )}
        </div>

        {/* Inquiry, never an order — no price, no cart, no commitment. */}
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer noopener"
          className="group/cta mt-1 inline-flex min-h-11 items-center gap-2 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-ink/70"
        >
          <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-clay after:transition-transform after:duration-[350ms] after:ease-out group-hover/cta:after:scale-x-100 group-focus-visible/cta:after:scale-x-100">
            Ver en Instagram
          </span>
          <span
            aria-hidden="true"
            className="text-sm leading-none transition-transform duration-[350ms] ease-out group-hover/cta:translate-x-1 group-focus-visible/cta:translate-x-1"
          >
            →
          </span>
        </a>
      </figcaption>
    </figure>
  );
}
