import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  schema?: object | object[];
  breadcrumbs?: { name: string; href: string }[];
}

export default function Layout({ children, title, description, schema, breadcrumbs }: LayoutProps) {
  const siteName = 'Immigrants Alliance';
  const pageTitle = title
    ? `${title} — ${siteName}`
    : `${siteName} — Unite. Empower. Thrive.`;
  const pageDesc = description || 'Nonpartisan, secular global multicultural economic development organization. UN ECOSOC Consultative Status since 1989.';
  const siteUrl = 'https://immigrantsalliance.org';
  const ogImage = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80';

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: siteName,
    alternateName: ['International Cultures Mission', 'Immigrants Foundation'],
    url: siteUrl,
    logo: `${siteUrl}/IMMIGRANTS_ALLIANCE_Logo.jpg`,
    foundingDate: '1976',
    description: 'A nonpartisan, secular global multicultural economic development organization empowering immigrant communities worldwide. Founded 1976. UN ECOSOC Consultative Status since 1989.',
    address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
    memberOf: { '@type': 'Organization', name: 'United Nations Economic and Social Council (ECOSOC)', description: 'Special Consultative Status since 1989' },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    knowsAbout: ['Immigration', 'Multicultural Development', 'Cultural Exchange', 'Economic Empowerment', 'Immigrant Rights', 'Cultural Diplomacy', 'Sustainable Development'],
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '190+', unitText: 'countries served' },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: pageDesc,
    publisher: { '@type': 'Organization', name: siteName },
    inLanguage: 'en',
    potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/search?q={search_term_string}` }, 'query-input': 'required name=search_term_string' },
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      ...breadcrumbs.map((b, i) => ({ '@type': 'ListItem', position: i + 2, name: b.name, item: `${siteUrl}${b.href}` })),
    ],
  } : null;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={ogImage} />

        {/* GEO SEO */}
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />

        {/* Multilingual readiness — expand when /es, /pt, /fr routes exist */}
        <meta httpEquiv="content-language" content="en" />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />

        {/* Schema.org Organization — every page */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

        {/* Breadcrumb Schema */}
        {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}

        {/* Page-specific schema if provided */}
        {schema && (Array.isArray(schema)
          ? schema.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)
          : <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        )}

        {/* AI-search + indexing directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
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
