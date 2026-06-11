// pages/sitemap.xml.tsx — Dynamic sitemap generation
// Replaces the static /public/sitemap.xml (delete the static one after deploying this)
import type { GetServerSideProps } from 'next';
import { SITEMAP_URLS, SITE } from '@/lib/seo';

function SitemapPage() { return null; }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const today = new Date().toISOString().split('T')[0];

  // Static pages from SEO config
  const staticUrls = SITEMAP_URLS.map(u =>
    `  <url>
    <loc>${SITE.url}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  ).join('\n');

  // TODO: When Supabase is connected, add dynamic pages:
  // - Organization detail pages from organizations table
  // - Merchant filter pages
  // - Country/city pages from federation data
  // Example:
  // const { data: orgs } = await supabase.from('organizations').select('slug').eq('status', 'approved');
  // const orgUrls = orgs?.map(o => `<url><loc>${SITE.url}/organizations/${o.slug}</loc>...`) || [];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.write(xml);
  res.end();

  return { props: {} };
};

export default SitemapPage;
