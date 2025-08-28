import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Josh Slavin";
  const subtitle = searchParams.get("subtitle") || "Eat. Ride. Learn.";
  const domain = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/^https?:\/\//, "") || "joshsdomain.com";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
          color: "white",
          fontFamily: "Inter, system-ui, Arial",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800 }}>{title}</div>
        <div style={{ fontSize: 28, opacity: 0.7, marginTop: 12 }}>{subtitle}</div>
        <div style={{ position: "absolute", bottom: 40, right: 64, fontSize: 20, opacity: 0.6 }}>{domain}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
