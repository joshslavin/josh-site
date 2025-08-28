/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
};
