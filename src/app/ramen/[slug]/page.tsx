import { notFound } from "next/navigation";
import { allRamenStyles } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";

export const generateStaticParams = async () =>
  allRamenStyles.map((s) => ({ slug: s.slug }));

export default function RamenStylePage({ params }: { params: { slug: string }}) {
  const style = allRamenStyles.find((s) => s.slug === params.slug);
  if (!style) return notFound();
  return (
    <article className="prose dark:prose-invert max-w-3xl">
      <h1>{style.title}</h1>
      {style.aka?.length ? <p><strong>Also known as:</strong> {style.aka.join(", ")}</p> : null}
      <Mdx code={style.body.code} />
      {Array.isArray(style.notable_shops) && (
        <section>
          <h2>Notable Shops</h2>
          <ul>
            {style.notable_shops.map((x: any) => (
              <li key={x.name}><strong>{x.name}</strong>{x.city ? ` — ${x.city}` : ''}{x.notes ? ` — ${x.notes}` : ''}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
