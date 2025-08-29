"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Define your navigation items
  const nav = [
    { href: "/videos", label: "Videos" },
    { href: "/ramen", label: "Ramen Atlas" },
    { href: "/cycling", label: "Cycling" },
    { href: "/articles", label: "Articles" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex items-center justify-between py-6">
      {/* Site title */}
      <Link href="/" className="text-xl font-semibold">
        Josh Slavin
      </Link>

      {/* Navigation and actions */}
      <nav className="flex items-center gap-4 text-sm">
        {nav.map(({ href, label }) => {
          // Determine if this link is currently active
          const active =
            pathname === href ||
            (href !== "/" && pathname && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`hover:underline underline-offset-4 ${
                active ? "underline font-medium" : ""
              }`}
            >
              {label}
            </Link>
          );
        })}

        {/* YouTube call‑to‑action */}
        <Link
          href="https://www.youtube.com/@JoshSlavin"
          className="ml-4 rounded-md px-3 py-1.5 text-white bg-[hsl(var(--brand-2))] hover:opacity-90"
        >
          Watch on YouTube
        </Link>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-2 rounded-md p-2 border border-neutral-200 dark:border-neutral-800"
          aria-label="Toggle dark mode"
        >
          {mounted ? (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />) : null}
        </button>
      </nav>
    </header>
  );
}