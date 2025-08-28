'use client';
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/ramen", label: "Ramen Atlas" },
  { href: "/cycling", label: "Cycling" },
  { href: "/videos", label: "Videos" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-xl">Josh Slavin</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm hover:opacity-80">{i.label}</Link>
          ))}
          <ThemeToggle />
        </nav>
        <button className="md:hidden rounded-xl border px-3 py-2 text-sm" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-nav">
          Menu
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="md:hidden border-t">
          <div className="px-4 py-3 grid gap-3">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-sm" onClick={() => setOpen(false)}>{i.label}</Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
