"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Weighted momentum scrolling for the whole page.
 *
 * Lenis drives the real window scroll (it doesn't transform a wrapper), so the
 * scroll-driven animations in globals.css — .reveal and the hero parallax —
 * keep working untouched.
 *
 * ponytail: module-level singleton instead of a context provider. There is
 * exactly one Lenis per page and the only consumers are two click handlers.
 */
let lenis: Lenis | null = null;

/** Matches the [id] scroll-margin-top in globals.css — Lenis ignores scroll-margin. */
const HEADER_OFFSET = -88;

/** Smooth-scrolls to a section without touching the URL. Safe before mount. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: HEADER_OFFSET });
  } else {
    // No Lenis: reduced motion, or JS still booting. globals.css already
    // downgrades this to an instant jump for reduced-motion users.
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis();

    // Firefox has no scroll-driven animations, so the CSS hero parallax never
    // runs there. Drive the same drift off the rAF loop we already have — the
    // feature test means this self-disables the day Firefox ships it.
    // ponytail: linear approximation of the view-timeline, not the same curve.
    const heroes = CSS.supports("animation-timeline: view()")
      ? []
      : [...document.querySelectorAll<HTMLElement>(".hero-parallax")];
    for (const hero of heroes) {
      hero.style.top = "-8vh";
      hero.style.height = "calc(100% + 16vh)";
      hero.style.willChange = "transform";
    }

    let frame = requestAnimationFrame(function raf(time) {
      lenis?.raf(time);
      if (heroes.length) {
        const p = Math.min(1, window.scrollY / window.innerHeight);
        const y = `translateY(${(p * 2 - 1) * 8}vh)`;
        for (const hero of heroes) hero.style.transform = y;
      }
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
