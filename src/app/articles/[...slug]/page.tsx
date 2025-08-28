import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allArticles } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import { canonicalUrl } from "@/lib/seo";

export const generateStaticParams = async () =>
  allArticles.map((a) => ({ slug: a._raw.flattenedPath.split('/') }));

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const path = params.slug.join("/");
  const post = allArticles.find(a => a._raw.flattenedPath === path);
  if (!post) return {};
  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.summary || "";
  const url = canonicalUrl(post.url);
  const og = `/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: og }] },
    twitter: { card: "summary_large_image" },
  };
}

export default function ArticlePage({ params }: { params: { slug: string[] } }) {
  const path = params.slug.join("/");
  const post = allArticles.find(a => a._raw.flattenedPath === path);
  if (!post) return notFound();
  return (
    <article className="prose dark:prose-invert max-w-3xl">
      <h1>{post.title}</h1>
      <p className="text-sm opacity-70">{new Date(post.date).toLocaleDateString()}</p>
      <Mdx code={post.body.code} />
    </article>
  );
}
