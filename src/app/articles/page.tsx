import Link from "next/link";
import { allArticles } from "contentlayer/generated";

export const revalidate = 600;

export default function ArticlesIndex() {
  const posts = allArticles.sort((a,b) => (a.date < b.date ? 1 : -1));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(p => (
          <Link key={p.url} href={p.url} className="rounded-2xl border p-5 hover:shadow transition">
            <h3 className="font-semibold">{p.title}</h3>
            {p.summary ? <p className="text-sm opacity-75 mt-1">{p.summary}</p> : null}
            <p className="text-xs opacity-60 mt-2">{new Date(p.date).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
