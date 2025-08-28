export default function Hero() {
  return (
    <section className="py-10 md:py-16">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Eat. Ride. Learn.</h1>
      <p className="mt-4 max-w-2xl text-lg opacity-80">
        I travel by bike to taste the world—ramen deep-dives, market rituals, and long-ride fuel along the way.
      </p>
      <div className="mt-6">
        <a href="/ramen" className="inline-block rounded-2xl px-5 py-3 border text-sm hover:shadow">
          Start with the Ramen Atlas →
        </a>
      </div>
    </section>
  );
}
