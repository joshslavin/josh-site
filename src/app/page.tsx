import Hero from "@/components/hero";
import Card from "@/components/card";
import NewsletterEmbed from "@/components/newsletter-embed";
import VideoGrid from "@/components/video-grid";

export default function Page() {
  return (
    <>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Ramen Atlas" href="/ramen" desc="Every regional style, mapped and explained." />
        <Card title="Cycling Routes" href="/cycling" desc="Routes, GPX, stamps, and what to eat." />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Videos</h2>
        <VideoGrid />
      </section>

      <section className="mt-10">
        <NewsletterEmbed />
      </section>
    </>
  );
}
