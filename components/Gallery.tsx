import GalleryItem, { type Product } from "./GalleryItem";

// Ratios match each file's native shape so object-cover barely crops.
const products: Product[] = [
  {
    name: "Bolso bombonera verde agua",
    material: "Trapillo de algodón",
    ratio: "aspect-[2/3]",
    src: "/products/bolso-mint-colgado.jpg",
  },
  {
    name: "Bolso burdeos con asa de piedras",
    material: "Hilo encerado",
    ratio: "aspect-[3/2]",
    src: "/products/bolso-burdeos.jpg",
  },
  {
    name: "Bolso redondo con flecos",
    material: "Hilo de seda",
    ratio: "aspect-[2/3]",
    src: "/products/bolso-flecos.jpg",
  },
  {
    name: "Bolso crudo con conchas",
    material: "Algodón y latón dorado",
    ratio: "aspect-[3/2]",
    src: "/products/bolso-conchas.jpg",
  },
  {
    name: "Sombrero camel",
    material: "Hilo de algodón",
    ratio: "aspect-[2/3]",
    src: "/products/sombrero-camel.jpg",
  },
  {
    name: "Pulseras tejidas",
    material: "Pieza única",
    ratio: "aspect-[3/2]",
    src: "/products/pulseras-detalle.jpg",
  },
  {
    name: "Sombrero crudo",
    material: "Algodón y conchas",
    ratio: "aspect-[2/3]",
    src: "/products/sombrero-crudo.jpg",
  },
  {
    name: "Detalle de conchas y perlas",
    material: "Hecho a mano",
    ratio: "aspect-[3/2]",
    src: "/products/conchas-detalle.jpg",
  },
  {
    name: "Bolso bombonera sobre madera",
    material: "Trapillo de algodón",
    ratio: "aspect-[2/3]",
    src: "/products/bolso-mint.jpg",
  },
  {
    name: "Set de sombrero y bolso",
    material: "Por encargo",
    ratio: "aspect-[2/3]",
    src: "/products/sombrero-y-bolso.jpg",
  },
  {
    name: "Pulseras en tonos tierra",
    material: "Hilo de algodón",
    ratio: "aspect-[2/3]",
    src: "/products/pulseras.jpg",
  },
  // etiqueta.jpg is the brand tag — it lives in its own section on app/page.tsx.
];

export default function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
      <h2 className="reveal mb-14 font-serif font-light text-3xl tracking-wide md:mb-20 md:text-4xl">
        Piezas
      </h2>
      {/* Masonry, not a strict grid: the photos are mixed 2:3 and 3:2, and a
          rigid grid would centre-crop half of them. */}
      <div className="columns-1 gap-12 sm:columns-2 lg:gap-20">
        {products.map((p) => (
          <GalleryItem key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
