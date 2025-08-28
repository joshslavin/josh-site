const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL && !/^https?:\/\//.test(process.env.NEXT_PUBLIC_SITE_URL) ? `https://${process.env.NEXT_PUBLIC_SITE_URL}` : (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));

export const metadata = {
  metadataBase: new URL(siteUrl),
