"use client";

import { scrollToId } from "@/components/SmoothScroll";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center gap-2 border-t border-taupe/30 px-6 py-10 text-[0.7rem] uppercase tracking-[0.25em] text-ink/70 sm:flex-row sm:justify-between sm:gap-4 md:px-12">
      {/* Back to the hero — same manual scroll as the header logo, so the
          fragment never lands in the address bar. */}
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("top");
        }}
        className="flex min-h-11 items-center font-serif text-base normal-case tracking-normal text-ink transition-colors hover:text-clay"
      >
        Hebras
      </a>
      <a
        href="https://instagram.com/hebrastejidos"
        target="_blank"
        rel="noreferrer noopener"
        className="flex min-h-11 items-center transition-colors hover:text-clay"
      >
        @hebrastejidos
      </a>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
