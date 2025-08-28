import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: { extend: {} },
  plugins: [typography],
} satisfies Config;
