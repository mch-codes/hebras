import GalleryItem, { type Product } from "./GalleryItem";

// Six pieces, one per subject. The old set was eleven photos of eight things —
// two bomboneras, three sombreros, two pulseras — which is why it needed an
// ordering rule to keep repeats out of each other's neighbouring slots. With no
// subject shown twice there is nothing to space apart, so order is free and set
// by rhythm instead: portrait, landscape, portrait, so neither column runs a
// stack of the same shape.
//
// Ratios are each file's own ratio (801x1200 and 855x1280 → 2/3, 1280x855 →
// 3/2). Nothing is cropped, and at two columns a tile renders 576px at 1280 —
// under every source width, so the stitch reads at full file resolution.
const products: Product[] = [
  {
    name: "Bolso bombonera verde agua",
    material: "Trapillo de algodón",
    ratio: "aspect-[2/3]",
    src: "/products/bolso-mint-colgado.jpg",
  },
  {
    name: "Pulseras tejidas",
    material: "Hilo de algodón",
    ratio: "aspect-[3/2]",
    src: "/products/pulseras-detalle.jpg",
  },
  {
    name: "Sombrero camel",
    material: "Hilo de algodón",
    ratio: "aspect-[2/3]",
    src: "/products/sombrero-camel.jpg",
  },
  {
    name: "Bolso crudo con conchas",
    material: "Algodón y latón dorado",
    ratio: "aspect-[3/2]",
    src: "/products/bolso-conchas.jpg",
  },
  {
    name: "Bolso redondo con flecos",
    material: "Hilo de seda",
    ratio: "aspect-[2/3]",
    src: "/products/bolso-flecos.jpg",
  },
  {
    name: "Bolso burdeos con asa de piedras",
    material: "Hilo encerado",
    ratio: "aspect-[3/2]",
    src: "/products/bolso-burdeos.jpg",
  },
  // Left out on purpose: the second bombonera, the second pulseras, the crudo
  // sombrero, the conjunto and the conchas close-up. All are the same subjects
  // as the six above, and a second angle of a piece costs a slot without adding
  // a piece.
  //
  // etiqueta.jpg is the brand tag. It has no section of its own any more — the
  // page is Hero, Gallery, Footer — so it is currently unused, along with
  // sombrero-crudo.jpg and conchas-detalle.jpg.
];

const half = Math.ceil(products.length / 2);
const columns = [products.slice(0, half), products.slice(half)];

export default function Gallery() {
  return (
    <section id="coleccion" className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-36">
      {/* Plain centred label, no frame. The border-and-corner-hearts plate that
          used to wrap this cost 96px of padding on each side — which came
          straight off the photos — and put ornament in front of the work. */}
      <h2 className="mb-16 text-center font-serif font-light text-3xl tracking-wide md:mb-24 md:text-4xl">
        Colección
      </h2>

      {/* Masonry, not a strict grid: the photos are mixed 2:3 and 3:2, so a
          row-aligned grid leaves a ragged gap under every short one.

          Two flex columns, not multicol. Multicol did the same job with less
          markup, but Safari mispaints a fragmented child while it is mid
          transform — blanks, or a figure drawn in the wrong column until
          something forces a repaint — which is why the reveal in here used to be
          fade-only. The photos now travel as well as fade, so the fragmentation
          had to go. Two plain columns, no fragmentation, no bug, and the eager
          <img> in GalleryItem is no longer load-bearing either.

          The split is the same one multicol was already picking: of the five
          places to cut, first-half/second-half leaves the columns closest in
          height, so the layout is unchanged.

          85% and centred on mobile: ~15% off the old full-bleed tile, and the
          margin gives the slide somewhere to come from. Columns stack below lg,
          and a contiguous split means stacking them replays the original order.

          overflow-x-clip so the off-screen start position can't add a sideways
          scroll. clip, not hidden: hidden would make this a scroll container.
          max-lg only — up top the photos and titles arrive from the left and
          right, and a clip on the column edge would shave them mid-fade. The
          section's own padding absorbs the travel, so nothing overflows. */}
      <div className="mx-auto flex max-w-[85%] flex-col max-lg:overflow-x-clip lg:max-w-none lg:flex-row lg:gap-10">
        {columns.map((column, c) => (
          <div key={c} className="lg:min-w-0 lg:flex-1">
            {column.map((p, i) => (
              <GalleryItem
                key={p.name}
                /* Position in the whole list, for the mobile stagger, where the
                   two columns are stacked back into one. */
                index={c * columns[0].length + i}
                /* The right-hand column trails its neighbour by 140ms, so a
                   visible pair reads left then right.

                   ponytail: two steps, not index × 140. A running index would
                   have the last tile waiting 700ms after it enters, and on a
                   gallery this tall it enters alone, halfway down the page, long
                   after the first pair sequenced. Only one tile per column is on
                   screen at a time, so a pair is the whole sequence anyone
                   actually sees. */
                late={c === 1}
                {...p}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
