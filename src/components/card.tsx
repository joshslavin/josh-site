import Link from "next/link";
type Props = { title: string; href?: string; desc?: string; children?: React.ReactNode };
export default function Card({ title, href = "#", desc, children }: Props) {
  const C = (
    <div className="group block rounded-2xl border p-5 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold group-hover:underline">{title}</h3>
      {desc && <p className="mt-2 text-sm opacity-75">{desc}</p>}
      {children}
    </div>
  );
  return href ? <Link href={href}>{C}</Link> : C;
}
