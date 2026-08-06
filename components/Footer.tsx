"use client";

import { INSTAGRAM } from "@/lib/site";
import { scrollToId } from "@/components/SmoothScroll";

/**
 * Contact, trust markers and the colophon in one footer — was three separate
 * stops before (Contact.tsx, the trust row inline in page.tsx, and this file).
 *
 * Plain-text trust markers — deliberately not badges or certification seals,
 * which read as fake on a one-person business.
 *
 * TODO: "Respondo en menos de 24 h" is a public commitment. Confirmed with the
 * seller, but if response times slip it should be softened or dropped.
 */
const trust = [
  "Hecho a mano en Madrid",
  "Piezas únicas, no en serie",
  "Respondo en menos de 24 h",
];

export default function Footer() {
  return (
    /* Inverted. The page is paper from the hero down, so it used to just stop;
       ink gives it a floor. No top border — the colour change is the rule. */
    <footer className="bg-ink text-paper">
      {/* The ask. Keeps the #contacto anchor the old Contact section owned. */}
      <section
        id="contacto"
        className="reveal mx-auto max-w-2xl px-6 py-28 text-center md:py-40"
      >
        <h2 className="font-serif font-light text-3xl leading-snug tracking-wide md:text-4xl">
          ¿Te gusta alguna pieza?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-paper/75 md:text-sm">
          Cada bolso se teje por encargo. Escríbeme y hablamos de colores,
          tamaño y tiempos, sin compromiso.
        </p>

        {/* Paper, not clay: clay on ink is about 2:1: the accent that carried
            this link on a paper background disappears on an ink one. Contrast
            has to come from the paper, and taupe does the hover. */}
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-10 inline-flex min-h-11 items-center border-b border-transparent pb-2 pt-2 font-serif text-2xl text-paper transition-colors hover:border-taupe md:text-3xl"
        >
          @hebrastejidos
        </a>
      </section>

      {/* One thin row, no icons, no boxes. */}
      <ul className="mx-auto grid max-w-5xl gap-6 border-t border-paper/15 px-6 py-8 text-center text-[0.62rem] uppercase tracking-[0.3em] text-paper/70 sm:grid-cols-3 sm:gap-10 md:px-12">
        {trust.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 border-t border-paper/15 px-6 py-10 text-[0.7rem] uppercase tracking-[0.25em] text-paper/70 sm:flex-row sm:justify-between sm:gap-4 md:px-12">
        {/* Back to the hero — same manual scroll as the header logo, so the
            fragment never lands in the address bar. */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("top");
          }}
          className="flex min-h-11 items-center font-serif text-base normal-case tracking-normal text-paper transition-colors hover:text-taupe"
        >
          Hebras
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer noopener"
          className="flex min-h-11 items-center transition-colors hover:text-taupe"
        >
          Sigue el proceso en @hebrastejidos
        </a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
