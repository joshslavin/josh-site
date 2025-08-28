import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["i.ytimg.com"] },
  async redirects() {
    return [
      // Redirect all www traffic to apex (vercel handles https automatically)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.joshuaslavin.com" }],
        destination: "https://joshuaslavin.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
