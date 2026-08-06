"use client";

import { scrollToId } from "@/components/SmoothScroll";

/**
 * Editorial front page: a full-bleed diptych of stills that crossfades on its
 * own, with the wordmark, one line and one CTA on a single baseline row along
 * the bottom.
 *
 * A diptych rather than one photo across the whole frame because the source
 * files are only ~1280px on the long edge. Stretched edge to edge at 1440 a
 * portrait still needs a 1.7x upscale; in a 58% panel it renders at ~0.98x, and
 * the landscape details in the 42% panel at ~1.05x. Same full-bleed result, no
 * mush — and a two-panel spread is how a magazine would run it anyway.
 *
 * The crossfade is pure CSS (.hero-seq in globals.css): the first still in each
 * panel is a plain opaque <img> and the two above it fade in and out over it,
 * so there is no state, no timer, and prefers-reduced-motion just switches the
 * animations off and lands on the first still.
 *
 * The CTA sends people into the catalog rather than straight to Instagram: the
 * sticky header already keeps Instagram reachable, and asking before they've
 * seen a single piece converts worse.
 */

/** First entry of each panel is the base layer — it carries the real alt text
 *  and stays opaque; the two above it are the same subject matter fading past,
 *  so they're decorative and stay out of the accessibility tree.
 *
 *  Left panel is bags, right panel is hats and pulseras. The two cycles run
 *  half a turn apart and the split by subject is what stops them ever landing
 *  on two photographs of the same thing side by side. */
const panelA = [
  {
    src: "/products/hero.jpg",
    alt: "Bolso de crochet burdeos con cadena de perlas, llevado a mano",
    pos: "object-[45%_28%]",
  },
  { src: "/products/bolso-mint-colgado.jpg", alt: "", pos: "object-[45%_45%]" },
  { src: "/products/bolso-flecos.jpg", alt: "", pos: "object-[42%_42%]" },
];

/** Portrait sources only. The two landscape detail shots read as the more
 *  obvious "craft" pictures, but a 1280x855 file in a full-height 605px panel
 *  has to be scaled to ~1.2x and then sliced to a third of its width — the
 *  stitches turn to mush. These three are portrait, so the same panel
 *  *downscales* them, and each is close enough to read as texture anyway. */
const panelB = [
  {
    src: "/products/sombrero-camel.jpg",
    alt: "Sombrero de crochet camel tejido a mano, visto de perfil",
    pos: "object-[45%_40%]",
  },
  { src: "/products/pulseras.jpg", alt: "", pos: "object-[52%_38%]" },
  { src: "/products/sombrero-y-bolso.jpg", alt: "", pos: "object-[50%_48%]" },
];

function Panel({
  stills,
  priority = false,
  className = "",
}: {
  stills: typeof panelA;
  /** Only the panel that is on screen at 390px gets an eager first still —
   *  everything else stays lazy so a phone never pays for the hidden panel. */
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* The parallax drift rides the wrapper, so the stills inside only ever
          animate opacity — one transform per panel instead of three. */}
      <div className="hero-parallax hero-seq absolute inset-0">
        {stills.map(({ src, alt, pos }, i) => (
          /* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */
          <img
            key={src}
            src={src}
            alt={alt}
            aria-hidden={alt ? undefined : true}
            {...(priority && i === 0
              ? { fetchPriority: "high" as const }
              : { loading: "lazy" as const, fetchPriority: "low" as const })}
            className={`absolute inset-0 h-full w-full object-cover ${pos}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    /* svh, not vh: on iOS the vh unit is the *large* viewport, so a full-height
       hero hides the wordmark and CTA under the browser chrome until you
       scroll. Shorter than full height on phones too — a portrait photo cropped
       to a tall narrow box loses the bag. */
    <section
      id="top"
      className="hero-frame relative flex min-h-[78svh] items-end overflow-hidden bg-oat md:min-h-screen"
    >
      {/* gap-px over paper draws the gutter: a hairline of the page colour
          between the two panels, the only rule the images get. */}
      <div className="absolute inset-0 grid bg-paper md:grid-cols-[58fr_42fr] md:gap-px">
        <Panel stills={panelA} priority />
        {/* Desktop only. display:none plus loading="lazy" means a phone never
            fetches any of this panel's three files. */}
        <Panel stills={panelB} className="hero-seq-late hidden md:block" />
      </div>

      {/* Scrim. Weighted to the bottom third, where the type sits, because the
          stills rotate and some of them are pale right where the kicker lands. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/5"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 md:px-12 md:pb-16">
        {/* One rule, everything hanging off it — the masthead line of the page. */}
        <div className="border-t border-paper/30 pt-6 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12 md:pt-8">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.32em] text-paper/85 md:text-[0.68rem]">
              Crochet artesanal — Madrid
            </p>
            {/* -0.045em cancels the "H" left side bearing in Fraunces at
                display optical size, so the wordmark's stem lands on the same
                line as the rule above it and the header logo's. */}
            {/* One fluid value instead of a vw/rem pair, so there is no jump at
                the md breakpoint. Fraunces sets wider than the old face — 15vw
                is what keeps "Hebras" on one line down to 320px. */}
            <h1 className="-ml-[0.045em] mt-3 font-serif font-light text-[clamp(3rem,15vw,8.5rem)] leading-[0.85] tracking-[-0.035em] text-paper md:mt-4">
              Hebras
            </h1>
          </div>

          <div className="mt-6 flex flex-col md:mt-0 md:max-w-[19rem] md:items-end md:pb-2 md:text-right">
            <p className="font-serif text-lg italic leading-snug text-paper/90 md:text-xl">
              Bolsos tejidos a mano, uno a uno.
            </p>
            <button
              onClick={() => scrollToId("coleccion")}
              className="mt-6 inline-flex min-h-11 cursor-pointer items-center self-start border border-paper bg-paper px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:bg-transparent hover:text-paper md:mt-7 md:self-end"
            >
              Ver piezas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
