import { notFound } from "next/navigation";
import { allRouteGuides } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";

export const generateStaticParams = async () =>
  allRouteGuides.map((r) => ({ slug: r.slug }));

export default function RoutePage({ params }: { params: { slug: string }}) {
  const route = allRouteGuides.find((r) => r.slug === params.slug);
  if (!route) return notFound();
  return (
    <article className="prose dark:prose-invert max-w-3xl">
      <h1>{route.title}</h1>
      <p className="text-sm opacity-70">{route.region || route.country}</p>
      <Mdx code={route.body.code} />
    </article>
  );
}
