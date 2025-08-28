import "../styles/globals.css";
import { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Josh Slavin — Eat. Ride. Learn.",
  description: "Ramen deep-dives, market rituals, and cycling routes.",
  openGraph: { title: "Josh Slavin — Eat. Ride. Learn.", description: "Ramen deep-dives, market rituals, and cycling routes.", images: [{ url: "/api/og?title=Josh%20Slavin" }] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {plausibleDomain ? (
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        ) : null}
        <ThemeProvider>
          <div className="mx-auto max-w-6xl px-4">
            <Header />
            <main className="py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
