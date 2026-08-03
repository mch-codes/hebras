"use client";

import { INSTAGRAM } from "@/lib/site";
import { scrollToId } from "@/components/SmoothScroll";

/** Fixed over the hero, so the Instagram CTA is reachable from anywhere. */
export default function Header() {
  // Keeps the href (middle-click, right-click, keyboard all still work) but
  // scrolls manually so the fragment never lands in the address bar.
  const scrollToHash = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToId(e.currentTarget.hash.slice(1));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-ink/50 via-ink/20 to-transparent backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-12">
        <a
          href="#top"
          onClick={scrollToHash}
          className="-ml-[0.034em] font-serif text-xl tracking-wide text-paper md:text-2xl"
        >
          Hebras
        </a>

        <nav className="hidden items-center gap-10 text-[0.9rem] font-semibold uppercase tracking-[0.25em] text-paper sm:flex">
          <a
            href="#coleccion"
            onClick={scrollToHash}
            className="underline-offset-8 hover:underline"
          >
            Colección
          </a>
          <a
            href="#sobre-mi"
            onClick={scrollToHash}
            className="underline-offset-8 hover:underline"
          >
            Sobre mí
          </a>
        </nav>

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 border border-paper/40 bg-paper/10 px-4 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-paper backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink md:px-5"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            className="h-3.5 w-3.5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5.5" />
            <circle cx="12" cy="12" r="4.4" />
            <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
          </svg>
          <span>Instagram</span>
        </a>
      </div>
    </header>
  );
}
