// components/Layout.tsx — SEO/GEO Enhanced
// REPLACES the existing Layout.tsx
// Adds: canonical URLs, per-page keywords, expanded hreflang, AI citation meta

import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { SITE, getPageSEO } from '@/lib/seo';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  schema?: object | object[];
  breadcrumbs?: { name: string; href: string }[];
}

export default function Layout({ children, title, description, schema, breadcrumbs }: LayoutProps) {
  const router = useRouter();
  const path = router.asPath.split('?')[0].split('#')[0];
  const pageSEO = getPageSEO(path);

  const pageTitle = title
    ? (title.includes('Immigrants Alliance') ? title : `${title} — ${SITE.name}`)
    : pageSEO.title;
  const pageDesc = description || pageSEO.description;
  const ogTitle = pageSEO.ogTitle || pageTitle;
  const canonicalUrl = `${SITE.url}${path === '/' ? '' : path}`;
  const keywords = pageSEO.keywords.join(', ');
  const noindex = pageSEO.noindex || false;

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: SITE.name,
    alternateName: ['International Cultures Mission', 'Immigrants Foundation'],
    url: SITE.url,
    logo: SITE.logo,
    foundingDate: SITE.founded,
    description: 'A nonpartisan, secular global multicultural economic development organization empowering immigrant communities worldwide. Founded 1976. UN ECOSOC Consultative Status since 1989.',
    address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
    memberOf: { '@type': 'Organization', name: 'United Nations Economic and Social Council (ECOSOC)', description: 'Special Consultative Status since 1989' },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    knowsAbout: ['Immigration', 'Multicultural Development', 'Cultural Exchange', 'Economic Empowerment', 'Immigrant Rights', 'Cultural Diplomacy'],
    sameAs: [
      // Add social profiles when they exist:
      // 'https://facebook.com/ImmigrantsAlliance',
      // 'https://twitter.com/ImmigrantsOrg',
      // 'https://linkedin.com/company/immigrants-alliance',
    ].filter(Boolean),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: pageDesc,
    publisher: { '@type': 'Organization', name: SITE.name },
    inLanguage: ['en', 'es', 'pt', 'fr', 'ar'],
    potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/search?q={search_term_string}` }, 'query-input': 'required name=search_term_string' },
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      ...breadcrumbs.map((b, i) => ({ '@type': 'ListItem', position: i + 2, name: b.name, item: `${SITE.url}${b.href}` })),
    ],
  } : null;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical URL — critical for SEO (prevents duplicate content) */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Keywords — still used by Bing and some AI engines */}
        {keywords && <meta name="keywords" content={keywords} />}

        {/* OpenGraph — with per-page canonical URL */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={SITE.ogImage} />
        <meta property="og:locale" content={SITE.locale} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={SITE.ogImage} />

        {/* GEO SEO — New York headquarters */}
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />

        {/* Multilingual hreflang — signals global audience to Google */}
        <meta httpEquiv="content-language" content="en" />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es" href={canonicalUrl} />
        <link rel="alternate" hrefLang="pt" href={canonicalUrl} />
        <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
        <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
        <link rel="alternate" hrefLang="zh" href={canonicalUrl} />
        <link rel="alternate" hrefLang="hi" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        {/* Indexing directives */}
        <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
        <meta name="googlebot" content={noindex ? 'noindex' : 'index, follow'} />

        {/* Schema.org — Organization + WebSite on every page */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

        {/* Breadcrumbs schema */}
        {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}

        {/* Page-specific schema */}
        {schema && (Array.isArray(schema)
          ? schema.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)
          : <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        )}

        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A1628" />
        <link rel="apple-touch-icon" href="/IMMIGRANTS_ALLIANCE_Logo.jpg" />
      </Head>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[9999] focus:bg-gold focus:text-navy focus:px-6 focus:py-3 focus:font-bold">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">{children}</main>
      <Footer />
    </>
  );
}
