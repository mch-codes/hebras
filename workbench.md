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
- **Rounds used:** 1 of 5 — loop stopped early by the owner, not by the cap. Gap still open.

---

# Piece: Gallery (`#coleccion`)

**Reference:** bottegaveneta.com, scrolled to their product section (reused screenshots, no re-shoot)
**Cap:** 1 round, hard — set by the owner to control cost
**Scope:** gallery only. Fonts, colors and tokens frozen.

## Gallery — round 1/1
- **Changed:** `Gallery.tsx`, `GalleryItem.tsx`, and the two `#coleccion`-scoped rules in `globals.css`. Cut the set from eleven photos of eight things to six distinct pieces (dropped `bolso-mint.jpg`, `pulseras.jpg`, `sombrero-crudo.jpg`, `sombrero-y-bolso.jpg`, `conchas-detalle.jpg`). Grid is now one column up to `lg` capped at 50rem, two above it. Removed the decorative border-and-heart-corner frame; heading now sits plainly above the grid. Tiles render 576px at 1440 (was 341px), every one still under its source width. Ratios are each file's native ratio, so nothing is cropped. Captions always visible instead of hover-revealed; the tile itself is the link. CSS selector moved `#coleccion figure` → `#coleccion .reveal`, stagger `nth-child(3n)` → `nth-child(2n)`.
- **Critic found:** "`figcaption` carries only `name` + `material` — 'Bolso bombonera verde agua' / 'TRAPILLO DE ALGODÓN'. Material is a spec label, not editorial content: it names the yarn and stops. Across all six tiles the section says nothing about the making — no hours, no stitch, no hand. The photographs are all finished-object shots, so the section currently reads as a product grid from any dropshipper who owns a camera; nothing on screen distinguishes hand-crocheted-in-Madrid from machine-made. Add a third optional field to `Product` — one line per piece, ~8-14 words, concrete and specific to *that* object, with the material folded into it or demoted."
- **Current gap:** No process/making content paired with the pieces. **Blocked on the owner:** closing it needs six true per-piece facts (hours, stitch, construction) that only the seller can supply. Inventing them would fabricate product claims — same hazard as the existing unverified-materials TODO in `Materials.tsx`.
- **Rounds used:** 1 of 1 — cap reached, stopped as instructed.
