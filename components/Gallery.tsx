import GalleryItem, { type Product } from "./GalleryItem";

// Ratios stay within each file's orientation but vary, so the masonry
// reads as uneven heights instead of a metronome.
//
// Order matters here. Eleven photos in three balanced columns means a photo's
// neighbours are the one below it AND the one roughly four slots later, in the
// next column over. So each repeated subject — the two bombonera mint shots,
// the two pulseras, the two conchas, the three sombreros — is spaced six slots
// apart, which clears both. The only pair closer than that is the two
// sombreros at slots 2 and 4: three hats can't all be six apart in eleven
// slots, and two apart is the one short distance that is never a neighbour in
// either direction.
const products: Product[] = [
  {
    name: "Bolso bombonera verde agua",
    material: "Trapillo de algodón",
    ratio: "aspect-[2/3]",
    src: "/products/bolso-mint-colgado.jpg",
  },
  {
    name: "Sombrero crudo",
    material: "Algodón y conchas",
    ratio: "aspect-[3/4]",
    src: "/products/sombrero-crudo.jpg",
  },
  {
    name: "Pulseras tejidas",
    material: "Pieza única",
    ratio: "aspect-[3/2]",
    src: "/products/pulseras-detalle.jpg",
  },
  {
    name: "Sombrero camel",
    material: "Hilo de algodón",
    ratio: "aspect-[4/5]",
    src: "/products/sombrero-camel.jpg",
  },
  {
    name: "Detalle de conchas y perlas",
    material: "Hecho a mano",
    ratio: "aspect-[4/3]",
    src: "/products/conchas-detalle.jpg",
  },
  {
    name: "Bolso burdeos con asa de piedras",
    material: "Hilo encerado",
    ratio: "aspect-[4/3]",
    src: "/products/bolso-burdeos.jpg",
  },
  {
    name: "Bolso bombonera sobre madera",
    material: "Trapillo de algodón",
    ratio: "aspect-[2/3]",
    src: "/products/bolso-mint.jpg",
  },
  {
    name: "Bolso redondo con flecos",
    material: "Hilo de seda",
    ratio: "aspect-[3/4]",
    src: "/products/bolso-flecos.jpg",
  },
  {
    name: "Pulseras en tonos tierra",
    material: "Hilo de algodón",
    ratio: "aspect-[3/4]",
    src: "/products/pulseras.jpg",
  },
  {
    name: "Conjunto de sombrero y bolso",
    material: "Por encargo",
    ratio: "aspect-[4/5]",
    src: "/products/sombrero-y-bolso.jpg",
  },
  {
    name: "Bolso crudo con conchas",
    material: "Algodón y latón dorado",
    ratio: "aspect-[3/2]",
    src: "/products/bolso-conchas.jpg",
  },
  // etiqueta.jpg is the brand tag — it lives in its own section on app/page.tsx.
];

// Sits centred on each corner of the frame, paper padding cutting the line.
const corners = [
  "left-0 top-0 -translate-x-1/2 -translate-y-1/2 -rotate-45",
  "right-0 top-0 translate-x-1/2 -translate-y-1/2 rotate-45",
  "left-0 bottom-0 -translate-x-1/2 translate-y-1/2 rotate-[225deg]",
  "right-0 bottom-0 translate-x-1/2 translate-y-1/2 rotate-[135deg]",
];

export default function Gallery() {
  return (
    <section id="coleccion" className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
      {/* The frame wraps heading and grid together, so the section reads as one
          plate rather than a title floating above photos. */}
      <div className="relative border border-taupe/50 px-6 py-14 md:px-12 md:py-20">
        {corners.map((pos) => (
          <svg
            key={pos}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className={`absolute ${pos} h-4 w-4 bg-paper px-0.5 text-clay`}
          >
            <path d="M12 21s-8-5-8-10.2A4.8 4.8 0 0 1 12 7.2a4.8 4.8 0 0 1 8 3.6C20 16 12 21 12 21Z" />
          </svg>
        ))}

        {/* Legend-style: straddles the top border, paper background cuts the
            line. No .reveal — its keyframe ends on transform:none, which would
            undo the centering translate. */}
        <h2 className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-6 text-center font-serif font-light text-3xl tracking-wide md:text-4xl">
          Colección
        </h2>
        {/* Grid, not CSS columns. Each figure keeps its own aspect ratio, so
            nothing gets centre-cropped and rows just end ragged — and dropping
            multicol takes both Safari fragmentation bugs with it (lazy images
            never loading past column 1, mispaints mid-transform).
            Wider gap at one column: on phones the caption sits under each photo
            and needs air before the next one. */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {products.map((p) => (
            <GalleryItem key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
