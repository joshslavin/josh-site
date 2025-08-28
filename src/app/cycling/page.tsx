import Link from "next/link";
import { allRouteGuides } from "contentlayer/generated";

export const revalidate = 3600;

export default function CyclingIndex() {
  const routes = allRouteGuides.sort((a,b) => a.title.localeCompare(b.title));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cycling Routes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {routes.map((r) => (
          <Link key={r.slug} href={r.url} className="rounded-2xl border p-5 hover:shadow transition">
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-sm opacity-70 mt-1">{r.region || r.country}</p>
            <p className="text-xs opacity-60 mt-1">{r.distance_km ? `${r.distance_km} km` : ''}{r.climb_m ? ` · ${r.climb_m} m` : ''}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
