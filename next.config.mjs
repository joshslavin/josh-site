import { withContentlayer } from "next-contentlayer";
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["i.ytimg.com"] },
};
export default withContentlayer(nextConfig);
