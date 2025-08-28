const API = "https://www.googleapis.com/youtube/v3";

export async function resolveHandleToChannelId(handle: string, key: string): Promise<string> {
  const url = new URL(`${API}/search`);
  url.searchParams.set("part", "snippet");
  url.searchParams.set("q", handle.startsWith('@') ? handle : `@${handle}`);
  url.searchParams.set("type", "channel");
  url.searchParams.set("maxResults", "1");
  url.searchParams.set("key", key);
  const res = await fetch(url.toString(), { next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(`YouTube handle lookup failed: ${res.status}`);
  const data = await res.json();
  const item = data.items?.[0];
  if (!item?.snippet?.channelId) throw new Error("Channel not found for handle");
  return item.snippet.channelId;
}
