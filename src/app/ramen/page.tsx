import Link from "next/link";
import { allRamenStyles } from "contentlayer/generated";

export const revalidate = 3600;

export default function RamenIndex() {
  const styles = allRamenStyles.sort((a,b) => a.title.localeCompare(b.title));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ramen Atlas</h1>
      <p className="mb-6 opacity-80 max-w-2xl">Every regional style, mapped and explained. Start with origin stories, flavor profiles, and shop picks.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {styles.map((s) => (
          <Link key={s.slug} href={s.url} className="rounded-2xl border p-5 hover:shadow transition">
            <h3 className="font-semibold">{s.title}</h3>
            {s.region && <p className="text-sm opacity-70 mt-1">{s.region}</p>}
            {Array.isArray(s.flavor_profile) && (
              <div className="mt-3 flex flex-wrap gap-2">
                {s.flavor_profile.slice(0,3).map((t: string) => (
                  <span key={t} className="text-xs rounded-full border px-2 py-0.5">{t}</span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
