'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const current = theme === 'system' ? systemTheme : theme;
  const label = current === 'dark' ? '🌙' : '☀️';
  const next = current === 'dark' ? 'light' : 'dark';
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(next)}
      className="rounded-full border px-3 py-1 text-sm hover:shadow"
      title={`Switch to ${next} mode`}
    >
      {label}
    </button>
  );
}
