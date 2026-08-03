/**
 * Founder block.
 *
 * TODO — EVERYTHING IN THIS FILE IS INVENTED PLACEHOLDER COPY. It was written
 * to fill the layout, not from anything the maker actually said. Replace the
 * name, the story and the quote with her own words before this goes live.
 *
 * TODO: photo is a stand-in — there is no portrait of the maker in the assets.
 * Needs a real shot of her working (hands + yarn reads better than a posed
 * portrait for handmade goods).
 */
export default function Story() {
  return (
    <section
      id="sobre-mi"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[0.9fr_1fr] md:gap-20 md:px-12 md:py-32"
    >
      <div className="reveal aspect-[4/5] overflow-hidden bg-oat">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
        <img
          src="/products/sombrero-crudo.jpg"
          alt="La creadora de Hebras con uno de sus sombreros tejidos a mano"
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
        <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/60">
          Hoy tejo por encargo desde casa, en Madrid. Cada bolso me lleva entre
          dos y tres semanas: elijo el hilo, pruebo el color contigo y lo hago
          del tamaño que necesites. No hay dos iguales, y esa es la idea.
        </p>

        <blockquote className="mt-10 border-l-2 border-clay pl-6">
          <p className="font-serif text-lg italic leading-relaxed text-ink/75 md:text-xl">
            «Prefiero tejer diez bolsos al año que mil iguales».
          </p>
        </blockquote>
      </div>
    </section>
  );
}
