import Link from "next/link";
import VideoGrid from "@/components/video-grid";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] items-center mb-12">
        <div>
          <p className="text-xs uppercase tracking-widest opacity-60">Eat · Ride · Learn</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
            Ramen deep‑dives, market rituals, and cycling routes
          </h1>
          <p className="mt-4 text-base opacity-80 max-w-prose">
            I make field‑tested guides and videos—so you can slurp better bowls, build
            better habits, and ride farther with less guesswork.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/videos" className="btn btn-primary">Watch on YouTube</Link>
            <Link href="/ramen" className="btn btn-outline">Explore Ramen Atlas</Link>
          </div>
        </div>
        <div className="card p-4">
          <h3 className="font-medium">Latest uploads</h3>
          <div className="mt-4">
            <VideoGrid />
          </div>
        </div>
      </section>

      {/* Ramen Atlas teaser */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Ramen Atlas</h2>
          <Link href="/ramen" className="text-sm hover:underline">View all →</Link>
        </div>
        <p className="mt-2 opacity-75 max-w-prose">
          Region-by-region notes from eating around Japan—broths, tare, noodles, and shop tips you can actually use.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link href="/ramen/tokushima" className="card p-4">
            <h3 className="font-medium">Tokushima</h3>
            <p className="text-sm opacity-70">Porky shoyu with rice‑back fats and bold tare.</p>
          </Link>
          <Link href="/ramen/wakayama" className="card p-4">
            <h3 className="font-medium">Wakayama</h3>
            <p className="text-sm opacity-70">Rich tonkotsu‑shoyu and hayazushi pairing.</p>
          </Link>
        </div>
      </section>

      {/* Cycling teaser */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Cycling Routes</h2>
          <Link href="/cycling" className="text-sm hover:underline">All routes →</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link href="/cycling/korea-4-rivers-overview" className="card p-4">
            <h3 className="font-medium">Korea 4 Rivers Overview</h3>
            <p className="text-sm opacity-70">The full certificate route: surfaces, stamps, logistics, and traps.</p>
          </Link>
          <Link href="/articles" className="card p-4">
            <h3 className="font-medium">Articles</h3>
            <p className="text-sm opacity-70">Rituals, skills, and systems for a calmer day.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
