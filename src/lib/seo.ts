export function canonicalUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/,"") || "https://example.com";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

export function articleJsonLd({ title, url, date, description }: { title: string; url: string; date: string; description?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: date,
    mainEntityOfPage: url,
    description
  };
}

export function ramenStyleJsonLd({ name, url }: { name: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${name} Ramen`,
    mainEntityOfPage: url
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
}
