/**
 * Philosophy, story, making and the brand tag — one section. This was four
 * separate stops before (intro paragraph and brand tag inline in page.tsx,
 * Materials.tsx, Story.tsx); they said one thing between them and now read as
 * one passage.
 *
 * TODO — THE BIOGRAPHY AND THE QUOTE ARE INVENTED PLACEHOLDER COPY. Written to
 * fill a layout, not from anything the maker said. Replace with her own words
 * before this goes live. Consolidating made this the narrative centre of the
 * page, so it matters more here than it did when it was a block halfway down.
 *
 * TODO — THE MATERIAL NAMES ARE MOSTLY UNVERIFIED. Only the waxed thread is
 * confirmed (polipropileno). Trapillo, seda and the latón/conchas details were
 * inferred from the product photos, not stated by the maker. A material name is
 * a labelling claim, not a copy tweak — verify each one with her.
 *
 * TODO — there is no photograph of the maker in the assets. The two photographs
 * here are her work, and they are captioned as her work; the previous version
 * of this file passed a product shot off as a portrait of her in its alt text.
 * A real shot of her hands working would sit better than either.
 */
export default function Story() {
  return (
    <section id="sobre-mi" className="px-6 py-24 md:px-12 md:py-32">
      {/* Philosophy — unboxed, whitespace does the work. */}
      <p className="reveal mx-auto max-w-2xl font-serif text-xl leading-[1.7] tracking-wide text-ink/80 md:text-2xl md:leading-[1.75]">
        Tejo cada pieza a mano, punto a punto, con hilos naturales y sin prisa.
        No hay stock ni producción en serie: cada bolso se hace por encargo, en
        el color y el tamaño que elijas.
      </p>

      {/* Sobre mí — photograph and voice, side by side. */}
      <div className="mx-auto mt-24 grid max-w-6xl items-center gap-12 md:mt-32 md:grid-cols-[0.9fr_1fr] md:gap-20">
        <div className="reveal aspect-[4/5] overflow-hidden bg-oat">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
          <img
            src="/products/sombrero-crudo.jpg"
            alt="Sombrero de crochet en hilo crudo, tejido a mano"
            loading="lazy"
            className="h-full w-full object-cover object-[55%_30%]"
          />
        </div>

        <div className="reveal">
          <p className="font-serif text-xl leading-[1.65] text-ink/80 md:text-2xl md:leading-[1.7]">
            Aprendí a tejer con mi abuela, en verano, para no aburrirme. Años
            después volví al ganchillo para desconectar del trabajo y acabé
            tejiendo para medio barrio.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 md:text-sm">
            Hoy tejo por encargo desde casa, en Madrid. Cada bolso me lleva
            entre dos y tres semanas: elijo el hilo, pruebo el color contigo y
            lo hago del tamaño que necesites. No hay dos iguales, y esa es la
            idea.
          </p>

          <blockquote className="mt-10 border-l-2 border-clay pl-6">
            <p className="font-serif text-lg italic leading-relaxed text-ink/75 md:text-xl">
              «Prefiero tejer diez bolsos al año que mil iguales».
            </p>
          </blockquote>
        </div>
      </div>

      {/* How the pieces are made — a paragraph, not its own stop. The gallery
          captions already name a material per piece, so this stays short and
          says why rather than repeating the list. */}
      <p className="reveal mx-auto mt-24 max-w-2xl text-base leading-loose text-ink/65 md:mt-32">
        Cada pieza empieza en un ovillo. Para los bolsos bombonera uso trapillo
        de algodón, tiras de tejido de punto cortadas y recicladas; cuando la
        pieza es de diario, hilo encerado de polipropileno, resistente y con
        tacto ceroso; y para las más delicadas, hilo de seda, por su brillo
        natural. El latón dorado y las conchas de los cierres no son crochet,
        pero también son la pieza.
      </p>

      {/* Proof photograph — the closures at full width, where the detail reads.
          Landscape source (1280x855), so a wide frame downscales it. */}
      <figure className="reveal mx-auto mt-20 max-w-4xl md:mt-28">
        <div className="aspect-[3/2] overflow-hidden bg-oat">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
          <img
            src="/products/conchas-detalle.jpg"
            alt="Detalle de conchas y perlas cosidas al cierre de un bolso de crochet"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <figcaption className="mt-4 text-[0.7rem] uppercase tracking-[0.25em] text-ink/55">
          Conchas y perlas, cosidas a mano una a una
        </figcaption>
      </figure>

      {/* The brand tag — the signature, and the close of the passage. */}
      <div className="mx-auto mt-24 grid max-w-5xl items-center gap-10 md:mt-32 md:grid-cols-2 md:gap-16">
        <div className="reveal aspect-[4/5] overflow-hidden bg-oat">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
          <img
            src="/products/etiqueta.jpg"
            alt="Etiqueta dorada con el nombre Hebras cosida a un bolso de crochet"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="reveal">
          <h2 className="font-serif font-light text-4xl tracking-wide md:text-5xl">
            Hebras
          </h2>
          <p className="mt-6 font-serif text-lg italic leading-relaxed text-ink/75 md:text-xl">
            Cada pieza que sale de mis manos lleva esta etiqueta.
          </p>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/70 md:text-sm">
            Es la firma de la marca: si la lleva, la he tejido yo.
          </p>
        </div>
      </div>
    </section>
  );
}
