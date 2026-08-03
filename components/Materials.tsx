/**
 * Materials block.
 *
 * TODO — COPY HERE IS STILL MOSTLY INVENTED PLACEHOLDER TEXT. Only the waxed
 * thread is confirmed (polipropileno). Trapillo, seda and the latón/conchas
 * details were inferred from the product photos, not from anything the maker
 * actually said — verify each with her before this goes live, since a material
 * name on a product page is a labelling claim, not a copy tweak.
 */
export default function Materials() {
  return (
    <section className="mx-auto max-w-5xl px-6 md:px-12">
      <div className="py-20 md:py-28">
        <h2 className="reveal text-center font-serif font-light text-3xl tracking-wide md:text-4xl">
          De qué están hechas
        </h2>

        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-base leading-loose text-ink/65 md:mt-12">
          Cada pieza empieza en un ovillo. Para los bolsos bombonera uso
          trapillo de algodón, tiras de tejido de punto cortadas y recicladas;
          cuando la pieza es de diario, hilo encerado de polipropileno,
          resistente y con tacto ceroso; y para las más delicadas, hilo de seda,
          por su brillo natural. El latón dorado y las conchas de los cierres no
          son crochet, pero también son la pieza.
        </p>
      </div>
    </section>
  );
}
