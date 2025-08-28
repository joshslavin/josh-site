export default function Footer() {
  return (
    <footer className="border-t mt-12 py-10 text-sm opacity-80">
      <div className="mx-auto max-w-6xl px-4 grid gap-2">
        <p>&copy; {new Date().getFullYear()} Josh Slavin</p>
        <p>Follow: <a href="https://youtube.com/@JoshSlavin" className="underline">YouTube</a> · <a href="https://instagram.com/slavinjoshua" className="underline">Instagram</a> · <a href="https://tiktok.com/@slavinjoshua" className="underline">TikTok</a></p>
      </div>
    </footer>
  );
}
