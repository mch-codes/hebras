export type Product = {
  name: string;
  material?: string;
  /** e.g. "aspect-[3/4]" — keep the mix uneven so the grid stays organic. */
  ratio: string;
  src: string;
};

export default function GalleryItem({ name, material, ratio, src }: Product) {
  return (
    <figure className="reveal group mb-8 break-inside-avoid md:mb-12">
      <div className={`${ratio} overflow-hidden bg-oat`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-serif text-base">{name}</span>
        {/* Always visible on touch — hover can't reveal it there. */}
        {material && (
          <span className="text-[0.7rem] uppercase tracking-[0.15em] text-ink/40 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
            {material}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
