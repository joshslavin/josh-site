import { resolveHandleToChannelId } from "./yt-handle";
const API = "https://www.googleapis.com/youtube/v3";

export type YTVideo = { id: string; title: string; publishedAt: string; thumbnail: string };

export async function fetchChannelUploads({ maxResults = 12, channel = process.env.YOUTUBE_CHANNEL_ID || process.env.YOUTUBE_CHANNEL_HANDLE }: { maxResults?: number; channel?: string } = {}) {
  const key = process.env.YOUTUBE_API_KEY!;
  if (!channel) throw new Error("Set YOUTUBE_CHANNEL_ID or YOUTUBE_CHANNEL_HANDLE");
  const channelId = channel.startsWith("@") ? await resolveHandleToChannelId(channel, key) : channel;

  const url = new URL(`${API}/search`);
  url.searchParams.set("part", "snippet");
  url.searchParams.set("channelId", channelId);
  url.searchParams.set("order", "date");
  url.searchParams.set("type", "video");
  url.searchParams.set("maxResults", String(maxResults));
  url.searchParams.set("key", key);

  const res = await fetch(url.toString(), { next: { revalidate: 600 } });
  if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);
  const data = await res.json();
  return (data.items || []).map((it: any) => ({
    id: it.id.videoId,
    title: it.snippet.title,
    publishedAt: it.snippet.publishedAt,
    thumbnail: it.snippet.thumbnails?.medium?.url ?? "",
  }));
}
