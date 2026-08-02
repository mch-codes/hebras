/**
 * Materials block.
 *
 * TODO — COPY HERE IS STILL MOSTLY INVENTED PLACEHOLDER TEXT. Only the waxed
 * thread is confirmed (polipropileno). Trapillo, seda and the latón/conchas
 * details were inferred from the product photos, not from anything the maker
 * actually said — verify each with her before this goes live, since a material
 * name on a product page is a labelling claim, not a copy tweak.
 */
const materials = [
  {
    name: "Trapillo de algodón",
    description:
      "Tiras de tejido de punto, cortadas y recicladas, la base de los bolsos bombonera.",
  },
  {
    name: "Hilo encerado de polipropileno",
    description: "Resistente y con tacto ceroso, para piezas de uso diario.",
  },
  {
    name: "Hilo de seda",
    description: "Para los bolsos más delicados, con un brillo natural.",
  },
  {
    name: "Latón dorado y conchas",
    description:
      "Detalles y cierres que no son crochet, pero sí parte de la pieza.",
  },
];

export default function Materials() {
  return (
    <section className="mx-auto max-w-5xl px-6 md:px-12">
      <div className="border-t border-taupe/30 py-20 md:py-28">
        <p className="reveal text-[0.7rem] uppercase tracking-[0.3em] text-ink/45">
          Materiales
        </p>
        <h2 className="reveal mt-5 font-serif font-light text-3xl tracking-wide md:text-4xl">
          De qué están hechas
        </h2>

        <dl className="reveal mt-14 grid gap-10 sm:grid-cols-2 md:mt-20 md:gap-14">
          {materials.map(({ name, description }) => (
            <div key={name}>
              <dt className="font-serif text-lg">{name}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink/60">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
