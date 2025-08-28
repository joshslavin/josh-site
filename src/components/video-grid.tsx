import { fetchChannelUploads } from "@/lib/youtube";

export const revalidate = 600;

export default async function VideoGrid() {
  const videos = await fetchChannelUploads({ maxResults: 6 });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map(v => (
        <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} className="group">
          <div className="aspect-video rounded-xl border overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={v.thumbnail} alt={v.title} className="h-full w-full object-cover group-hover:opacity-90" />
          </div>
          <h3 className="mt-2 text-sm font-medium line-clamp-2">{v.title}</h3>
        </a>
      ))}
    </div>
  );
}
