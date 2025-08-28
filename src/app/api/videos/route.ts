import { NextResponse } from "next/server";
import { fetchChannelUploads } from "@/lib/youtube";

export const revalidate = 600;

export async function GET() {
  try {
    const videos = await fetchChannelUploads({ maxResults: 12 });
    return NextResponse.json({ videos });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "error" }, { status: 500 });
  }
}
