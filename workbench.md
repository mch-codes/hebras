# Workbench — Hero redesign gauntlet

**Piece:** Hero section
**Reference:** bottegaveneta.com (screenshot, 1440×900, real Chrome — Playwright's bundled Chromium is Akamai-blocked)
**Cap:** 5 rounds, hard
**Decisions taken before round 1:** fonts switched site-wide to Fraunces + Work Sans (brief overrode the shipped Cormorant + Jost); no video asset exists, so craftsmanship-as-hero is carried by a still-image sequence.

---

## Hero — round 1/5
- **Changed:** Font swap site-wide (`app/layout.tsx`, `app/globals.css` tokens); `components/Hero.tsx` rewritten as a full-bleed 58/42 diptych — left panel cycles three bag stills, right panel three hat/pulsera stills, pure-CSS 21s crossfade, panels half a cycle apart. Bottom-weighted scrim, hairline masthead rule, Work Sans kicker `CROCHET ARTESANAL — MADRID`, Fraunces wordmark, solid paper CTA. Parallax overscan cut 40vh → 16vh to protect sharpness on ~1280px sources. `Header.tsx` left-bearing retuned for Fraunces; `SmoothScroll.tsx` Firefox fallback now drives both panels.
- **Critic found:** "The photography is never allowed to be seen undarkened. `Hero.tsx:115` lays a scrim across the *entire* frame — `bg-gradient-to-t from-ink/90 via-ink/45 to-ink/5` — so at mid-height the crochet is under a 45% wash of `#2b2420`, and `Header.tsx:16` adds `backdrop-blur-md` over the top band, visibly smearing the strap and the door in both panels. The stitch texture, which is the entire claim of the brand, is muted everywhere except the darkest bottom sixth. Bottega applies zero overlay and zero blur."
- **Current gap:** Scrim + header blur suppress the stitch texture across the whole frame.
- **Rounds used:** 1 of 5
