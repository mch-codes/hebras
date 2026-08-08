"use client";

import { useEffect, useRef, useState } from "react";

import { INSTAGRAM } from "@/lib/site";

export type Product = {
  name: string;
  material?: string;
  /** The file's own ratio, e.g. "aspect-[2/3]" — set so nothing gets cropped. */
  ratio: string;
  src: string;
};

export default function GalleryItem({
  name,
  material,
  ratio,
  src,
  index,
}: Product & { index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  // null until the observer has spoken, so the server HTML and the first paint
  // carry no state attribute and the tile is plainly visible — JS off, or JS
  // broken, and the gallery still reads. All the mobile motion hangs off this
  // attribute, so its absence is the safe state, not a hidden one.
  const [shown, setShown] = useState<boolean | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fires on the way out as well as in — that's the whole point of holding
    // isIntersecting rather than unobserving after the first hit.
    const io = new IntersectionObserver(([e]) => setShown(e.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    /* The whole tile is the link. It used to be a figure with cursor-pointer and
       a separate "Ver en Instagram" line underneath — the cursor was a lie, and
       six copies of the same CTA under six photos is more chrome than photo.
       Six identical hrefs, so the accessible name says which piece.

       mb, not grid gap: multicol has no row gap. */
    <a
      ref={ref}
      href={INSTAGRAM}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${name} — ver en Instagram`}
      data-slide={shown === null ? undefined : shown ? "in" : "out"}
      // ponytail: index % 2, not index — a plain index makes the last tile wait
      // 450ms even when it enters alone. Two adjacent tiles are all that can
      // enter together on a phone, and they get 0 and 90ms.
      style={{ "--stagger": (index % 2) * 90 } as React.CSSProperties}
      className="reveal group mb-14 block break-inside-avoid lg:mb-16"
    >
      <figure>
        {/* The aspect-ratio wrapper reserves the box before the file lands, so a
            loading photo never shifts the page. */}
        <div className={`${ratio} overflow-hidden bg-oat`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
          {/* No loading="lazy": Safari resolves it against the pre-fragmentation
              layout, so photos past column 1 never load. Six ~150 KB files. */}
          <img
            src={src}
            alt={name}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Always visible, no hover reveal. The caption is the only text in the
            section and it is what pairs a piece with the yarn it is made of —
            hiding it behind hover meant a desktop visitor never saw either. */}
        <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <span className="relative font-serif text-lg after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-clay after:transition-transform after:duration-[350ms] after:ease-out group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">
            {name}
          </span>
          {material && (
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-ink/55">
              {material}
            </span>
          )}
        </figcaption>
      </figure>
    </a>
  );
}
