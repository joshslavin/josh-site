import "./globals.css";
import { ReactNode } from "react";
import { Inter, Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "next-themes";

// load fonts with desired weights and CSS variable names
const inter = Inter({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-sans" });
const newsreader = Newsreader({ subsets: ["latin"], weight: ["400","600"], variable: "--font-serif" });

export const viewport = {
  themeColor: "#111827",
};

export const metadata = {
  title: "Josh Slavin",
  description: "Videos, articles, and more from Josh Slavin.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="antialiased min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-6xl px-4">
            <SiteHeader />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}