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
          row-aligned grid leaves a ragged gap under every short one. The cost is
          two Safari multicol bugs, both worked around: eager images in
          GalleryItem, fade-only reveal in globals.css.

          One column until lg, capped at 50rem: the portrait files are 801px
          wide, so an uncapped single column would be upscaling them by 1023px
          viewport. Two columns from lg, where the halves land at 448–576px. */}
      <div className="mx-auto max-w-[50rem] columns-1 gap-6 lg:max-w-none lg:columns-2 lg:gap-10">
        {products.map((p) => (
          <GalleryItem key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
