"use client";

import { useEffect, useRef, useState } from "react";

import { INSTAGRAM } from "@/lib/site";

// Which side a tile arrives from, cycled by index so no two neighbours come in
// the same way. Photo and title share the direction — they're one piece, and
// sending them opposite ways reads as two unrelated things landing.
const DIRECTIONS = [
  [0, 1], // up from below
  [-1, 0], // in from the left
  [0, -1], // down from above
  [1, 0], // in from the right
];

// The photo travels further than the title only because it is bigger; 24px on a
// 576px photo and 10px on a line of type are about the same gesture. Vary the
// side, not the distance — that's what keeps it a reveal and not a slide.
const PHOTO_TRAVEL = 24;
const TITLE_TRAVEL = 10;

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
  late,
}: Product & { index: number; late: boolean }) {
  const [dx, dy] = DIRECTIONS[index % DIRECTIONS.length];
  // The <a> is the observed box and is never transformed — the slide happens on
  // the <figure> inside it. IntersectionObserver reads the *transformed* rect,
  // so animating the observed element walks it out of the viewport and it can
  // never report its way back in. That's what made the mobile tiles disappear
  // for good instead of sliding back.
  const ref = useRef<HTMLAnchorElement>(null);
  // Watched separately from the tile: the caption sits at the bottom of an
  // ~860px tile, so "15% of the tile is visible" happens with the caption still
  // most of a screen below the fold — the reveal played out unseen and the
  // title read as static by the time you scrolled to it.
  const capRef = useRef<HTMLElement>(null);
  // null until the observer has spoken, so the server HTML and the first paint
  // carry no state attribute and the tile is plainly visible — JS off, or JS
  // broken, and the gallery still reads. All the mobile motion hangs off this
  // attribute, so its absence is the safe state, not a hidden one.
  const [shown, setShown] = useState<boolean | null>(null);
  // Sticky: the desktop reveals are once per page, so these only ever go
  // false → true. Same observer, no extra ones to register. Two flags because
  // the photo and the title are triggered by different boxes — the tile's top
  // and the caption itself — which is most of what puts a screen of scrolling
  // between them.
  const [entered, setEntered] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const tile = ref.current;
    const cap = capRef.current;
    if (!tile || !cap) return;
    // One observer, two targets. The tile drives the mobile slide and keeps
    // reporting both ways; the caption drives the desktop title and only ever
    // latches on.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target === cap) {
            if (e.isIntersecting) setSeen(true);
          } else {
            setShown(e.isIntersecting);
            if (e.isIntersecting) setEntered(true);
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(tile);
    io.observe(cap);
    return () => io.disconnect();
  }, []);

  return (
    /* The whole tile is the link. It used to be a figure with cursor-pointer and
       a separate "Ver en Instagram" line underneath — the cursor was a lie, and
       six copies of the same CTA under six photos is more chrome than photo.
       Six identical hrefs, so the accessible name says which piece.

       mb on the tile, not a gap on the column: the column is a plain block, and
       a margin is one property against a flex context this doesn't need. */
    <a
      ref={ref}
      href={INSTAGRAM}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${name} — ver en Instagram`}
      data-slide={shown === null ? undefined : shown ? "in" : "out"}
      // Same null-first rule as data-slide: no attribute before the observer
      // reports, so a caption is never hidden by CSS that JS might not undo.
      data-photo={shown === null ? undefined : entered ? "y" : "n"}
      data-seen={shown === null ? undefined : seen ? "y" : "n"}
      // ponytail: index % 2, not index — a plain index makes the last tile wait
      // 450ms even when it enters alone. Two adjacent tiles are all that can
      // enter together on a phone, and they get 0 and 90ms.
      style={
        {
          "--stagger": (index % 2) * 90,
          "--stagger-lg": late ? 140 : 0,
          "--photo-from": `translate(${dx * PHOTO_TRAVEL}px, ${dy * PHOTO_TRAVEL}px)`,
          "--title-from": `translate(${dx * TITLE_TRAVEL}px, ${dy * TITLE_TRAVEL}px)`,
        } as React.CSSProperties
      }
      className="group mb-14 block lg:mb-16"
    >
      <figure>
        {/* The aspect-ratio wrapper reserves the box before the file lands, so a
            loading photo never shifts the page. */}
        <div className={`tile-photo ${ratio} overflow-hidden bg-oat`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
          {/* Still eager. The reason used to be load-bearing — Safari resolved
              loading="lazy" against the pre-fragmentation layout and never
              loaded anything past column 1 — and with multicol gone it is only
              a preference now. Six ~150 KB files, all of them the section. */}
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
        <figcaption
          ref={capRef}
          className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
        >
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
