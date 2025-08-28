import Card from "@/components/card";
export default function DestinationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Japan" desc="Ramen atlas, routes, and guides" />
        <Card title="Korea" desc="4 Rivers and city eats" />
        <Card title="Thailand" desc="Markets and recipes" />
      </div>
    </div>
  );
}
