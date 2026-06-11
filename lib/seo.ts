// lib/seo.ts — Centralized SEO/GEO configuration for ImmigrantsAlliance.org
// Drop this file into /lib/ and import from any page

export const SITE = {
  name: 'Immigrants Alliance',
  url: 'https://immigrantsalliance.org',
  logo: 'https://immigrantsalliance.org/IMMIGRANTS_ALLIANCE_Logo.jpg',
  ogImage: 'https://immigrantsalliance.org/IMMIGRANTS_ALLIANCE_Logo.jpg',
  locale: 'en_US',
  founded: '1976',
  ecosoc: '1989',
  twitter: '@ImmigrantsOrg', // update when account exists
  email: 'Connect@ImmigrantsAlliance.org',
};

// ============================================================
// PER-PAGE SEO DATA — unique title, description, keywords per route
// ============================================================
export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  canonical?: string;
  schema?: object | object[];
  noindex?: boolean;
}

export const PAGE_SEO: Record<string, PageSEO> = {
  '/': {
    title: 'Immigrants Alliance — Unite. Empower. Thrive.',
    description: 'A global federation connecting immigrant organizations in 190+ countries. Economic empowerment through S.E.E.D., International Cultures Celebration, and the 41st Immigrants Parade. UN ECOSOC since 1989.',
    keywords: ['immigrants alliance', 'immigrant organizations', 'multicultural development', 'UN ECOSOC', 'immigrants parade NYC', 'SEED economic empowerment', 'cultural diversity', 'immigrant support worldwide'],
    ogTitle: 'Your Culture Is a Gift the World Needs — Immigrants Alliance',
  },
  '/about': {
    title: 'About — Immigrants Alliance',
    description: 'Founded in 1976 by Hugo E. Juarez. UN ECOSOC Consultative Status since 1989. A nonpartisan, secular global multicultural economic development organization serving 190+ countries.',
    keywords: ['immigrants alliance history', 'Hugo Juarez founder', 'UN ECOSOC NGO', 'multicultural organization', 'immigrant advocacy since 1976', 'international cultures mission'],
  },
  '/programs': {
    title: 'Programs — Immigrants Alliance',
    description: 'S.E.E.D. economic empowerment, International Cultures Celebration, Immigrants Parade, MundusPASS, mentorship, entrepreneurship, and immigration services for immigrant communities worldwide.',
    keywords: ['immigrant programs', 'SEED economic empowerment', 'immigrant entrepreneurship', 'cultural celebration programs', 'immigrant mentorship', 'MundusPASS'],
  },
  '/parade-registration': {
    title: '41st International Cultures–Immigrants Parade | June 13, 2026 | NYC',
    description: 'Register for the 41st International Cultures–Immigrants Parade. June 13, 2026, Avenue of the Americas, 42nd to 57th Street, NYC. Free for member organizations. Since 1986.',
    keywords: ['immigrants parade NYC 2026', 'international cultures parade', 'cultural parade New York', 'June 13 2026 parade', 'Avenue of the Americas parade', 'multicultural parade registration'],
    ogTitle: '41st Immigrants Parade — June 13, 2026 — NYC',
  },
  '/international-cultures-celebration': {
    title: 'International Cultures Celebration — Immigrants Alliance',
    description: 'A week-long celebration of world cultures — national pavilions, conference at the UN, Star of Harmony Award, Passport to the World, and the Immigrants Parade. Since 1986.',
    keywords: ['international cultures celebration', 'cultural festival NYC', 'immigrant celebration', 'Passport to the World', 'Star of Harmony Award', 'multicultural festival'],
  },
  '/register': {
    title: 'Join Immigrants Alliance — Free Membership',
    description: 'Join 190+ countries. First 1,000,000 founding members free for life. Individual, family, organization, and merchant memberships. Programs, events, economic empowerment.',
    keywords: ['join immigrants alliance', 'immigrant membership', 'free immigrant membership', 'immigrant organization membership', 'founding member'],
    ogTitle: 'First 1,000,000 Members Join Free — Immigrants Alliance',
  },
  '/register-organization': {
    title: 'Register Your Organization — Immigrants Alliance',
    description: 'Strengthen your organization forever. Join the federation of 190+ countries. Access S.E.E.D. economic empowerment, free parade participation, international visibility, and sustainable revenue.',
    keywords: ['register immigrant organization', 'nonprofit federation', 'SEED program organizations', 'immigrant nonprofit membership', 'multicultural organization network'],
    ogTitle: 'Strengthen Your Organization. Forever.',
  },
  '/join-seed': {
    title: 'S.E.E.D. — Economic Empowerment — Immigrants Alliance',
    description: 'Transform your nonprofit into a self-sustaining institution. S.E.E.D. provides a dedicated Development Officer, $250K+ revenue goal, and connection to 190+ countries. Launching September 15, 2026.',
    keywords: ['SEED economic empowerment', 'nonprofit sustainability', 'immigrant organization funding', 'development officer program', 'nonprofit revenue generation'],
    ogTitle: 'S.E.E.D. — Your Organization. Self-Sustaining. Forever.',
  },
  '/register-merchant': {
    title: 'Register as Merchant — Immigrants Alliance',
    description: 'Join MundusPASS. Access millions of members with guaranteed discounts. Zero risk — no upfront cost. Free for micro-merchants under $30K revenue.',
    keywords: ['MundusPASS merchant', 'immigrant merchant network', 'merchant discount program', 'multicultural business network'],
  },
  '/register-ambassador': {
    title: 'Become an Ambassador — Immigrants Alliance',
    description: 'Represent Immigrants Alliance in your city. Build bridges between cultures. Connect organizations, merchants, and communities. Apply today.',
    keywords: ['immigrant ambassador', 'cultural ambassador', 'community representative', 'immigrants alliance ambassador'],
  },
  '/voices': {
    title: 'Global Voices — Immigrants Alliance',
    description: 'Stories from immigrant communities worldwide. Success stories, civic voices, family journeys, and the people building bridges between cultures.',
    keywords: ['immigrant stories', 'immigration success stories', 'multicultural voices', 'immigrant experience', 'cultural bridge builders'],
  },
  '/faq': {
    title: 'FAQ — Immigrants Alliance',
    description: 'Frequently asked questions about Immigrants Alliance membership, S.E.E.D., the International Cultures–Immigrants Parade, MundusPASS, and our programs.',
    keywords: ['immigrants alliance FAQ', 'SEED program FAQ', 'immigrants parade FAQ', 'membership FAQ'],
  },
  '/contact': {
    title: 'Contact — Immigrants Alliance',
    description: 'Reach Immigrants Alliance. General inquiries, organization registration, parade registration, S.E.E.D. program, merchant enrollment, and partnerships.',
    keywords: ['contact immigrants alliance', 'immigrants alliance email', 'immigrant organization contact'],
  },
  '/world': {
    title: 'World Federation — 190+ Countries — Immigrants Alliance',
    description: 'Explore the Immigrants Alliance federation by country and city. Organizations, merchants, ambassadors, and communities across 190+ countries.',
    keywords: ['immigrant organizations worldwide', 'global immigrant network', 'immigrant federation countries', 'multicultural organizations by country'],
  },
  '/organizations': {
    title: 'Organization Directory — Immigrants Alliance',
    description: 'Browse immigrant and multicultural organizations worldwide. Searchable by country, city, and category. Cultural, religious, professional, and nonprofit organizations.',
    keywords: ['immigrant organizations directory', 'multicultural organizations', 'nonprofit directory immigrants', 'cultural organizations worldwide'],
  },
  '/merchants': {
    title: 'Merchant Directory — Immigrants Alliance',
    description: 'Find immigrant-owned businesses offering MundusPASS discounts. Restaurants, legal services, healthcare, retail, and more worldwide.',
    keywords: ['immigrant owned businesses', 'MundusPASS discounts', 'multicultural merchants', 'immigrant business directory'],
  },
  '/ambassadors': {
    title: 'Ambassadors — Immigrants Alliance',
    description: 'Meet the Immigrants Alliance ambassadors building bridges between cultures in their cities worldwide.',
    keywords: ['immigrant ambassadors', 'cultural ambassadors', 'immigrants alliance representatives'],
  },
  '/live': {
    title: 'Live Safety Intelligence — Immigrants Alliance',
    description: 'Real-time safety data for immigrant communities. Danger maps, discrimination monitoring, and safe city comparisons worldwide.',
    keywords: ['immigrant safety map', 'immigration danger zones', 'safe cities immigrants', 'discrimination monitor'],
  },
  '/live/danger-map': {
    title: 'Global Danger Map — Immigrants Alliance',
    description: 'Interactive safety map for immigrants. Real-time risk levels by city and country. Know before you go.',
    keywords: ['immigrant danger map', 'immigration risk map', 'safe countries immigrants', 'immigration safety data'],
  },
  '/live/discrimination': {
    title: 'Discrimination Monitor — Immigrants Alliance',
    description: 'Community-reported discrimination incidents by city, type, and severity. Report and track hate incidents affecting immigrant communities.',
    keywords: ['immigration discrimination', 'hate incident reporting', 'immigrant discrimination monitor', 'anti-immigrant incidents'],
  },
  '/live/safe-cities': {
    title: 'Safe Cities for Immigrants — Immigrants Alliance',
    description: 'Compare cities by safety, support services, and community strength for immigrants. Find welcoming destinations worldwide.',
    keywords: ['safe cities immigrants', 'immigrant friendly cities', 'sanctuary cities', 'best cities immigrants'],
  },
  '/login': { title: 'Login — Immigrants Alliance', description: 'Sign in to your Immigrants Alliance account.', keywords: [], noindex: true },
  '/signup': { title: 'Sign Up — Immigrants Alliance', description: 'Create your Immigrants Alliance account.', keywords: [], noindex: true },
  '/dashboard': { title: 'Dashboard — Immigrants Alliance', description: 'Your Immigrants Alliance member dashboard.', keywords: [], noindex: true },
  '/admin': { title: 'Admin — Immigrants Alliance', description: 'Immigrants Alliance admin panel.', keywords: [], noindex: true },
  '/search': { title: 'Search — Immigrants Alliance', description: 'Search the Immigrants Alliance federation.', keywords: [], noindex: true },
};

// ============================================================
// SCHEMA GENERATORS — reusable JSON-LD builders
// ============================================================
export function eventSchema(overrides?: Partial<Record<string, any>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: '41st International Cultures–Immigrants Parade',
    startDate: '2026-06-13T09:00:00-04:00',
    endDate: '2026-06-13T16:00:00-04:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Avenue of the Americas, Midtown Manhattan',
      address: { '@type': 'PostalAddress', streetAddress: '6th Avenue, 42nd to 57th Street', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
    },
    organizer: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    description: 'The 41st International Cultures Celebration and Immigrants Parade — a vibrant showcase of dances, music, floats, and traditions from every continent. Since 1986.',
    image: SITE.ogImage,
    isAccessibleForFree: true,
    ...overrides,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(i => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function orgDirectorySchema(org: { name: string; country: string; city?: string; description?: string; url?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    description: org.description,
    url: org.url,
    address: { '@type': 'PostalAddress', addressLocality: org.city, addressCountry: org.country },
    memberOf: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  };
}

// ============================================================
// AI Q&A BLOCKS — structured for ChatGPT/Perplexity/Claude citation
// ============================================================
export const AI_QA_BLOCKS = {
  whatIs: {
    q: 'What is Immigrants Alliance?',
    a: 'Immigrants Alliance is a nonpartisan, secular global multicultural economic development organization founded in 1976 by Hugo E. Juarez. It holds Special Consultative Status with the United Nations Economic and Social Council (ECOSOC) since 1989. The organization connects immigrant, diaspora, cultural, civic, and community organizations across 190+ countries through programs like the S.E.E.D. economic empowerment initiative, the International Cultures Celebration, and the annual International Cultures–Immigrants Parade in New York City.',
  },
  whatIsSEED: {
    q: 'What is the S.E.E.D. program?',
    a: 'S.E.E.D. (Sustainable Economic Empowerment and Development) is an Immigrants Alliance program that transforms fragile nonprofits into financially self-sustaining institutions. Each participating organization receives a dedicated Development Officer and a roadmap to generate $250,000+ in new annual revenue through diversified funding, membership, merchant partnerships, and the MundusPASS economic engine. S.E.E.D. launches September 15, 2026.',
  },
  whatIsParade: {
    q: 'What is the International Cultures–Immigrants Parade?',
    a: 'The International Cultures–Immigrants Parade is an annual celebration of immigrant cultures held in Midtown Manhattan, New York City since 1986. The 41st edition takes place on June 13, 2026 on the Avenue of the Americas from 42nd to 57th Street, starting at 9:00 AM. It features dances, music, floats, and cultural traditions from every continent. Participation is free for Immigrants Alliance member organizations.',
  },
  howToJoin: {
    q: 'How do I join Immigrants Alliance?',
    a: 'Individual membership is free for the first 1,000,000 founding members. Visit immigrantsalliance.org/register to join. Organization membership is available for cultural, religious, professional, and nonprofit organizations serving immigrant communities. Merchant membership connects businesses to the MundusPASS discount network. All memberships are available at immigrantsalliance.org.',
  },
  unEcosoc: {
    q: 'Does Immigrants Alliance have UN ECOSOC status?',
    a: 'Yes. The Immigrants Foundation (the parent organization of Immigrants Alliance) has held Special Consultative Status with the United Nations Economic and Social Council (ECOSOC) since 1989, unanimously endorsed by all member governments.',
  },
};

// ============================================================
// SITEMAP URLS — comprehensive list for dynamic sitemap
// ============================================================
export const SITEMAP_URLS: { loc: string; changefreq: string; priority: number }[] = [
  { loc: '/', changefreq: 'weekly', priority: 1.0 },
  { loc: '/about', changefreq: 'monthly', priority: 0.8 },
  { loc: '/programs', changefreq: 'monthly', priority: 0.8 },
  { loc: '/international-cultures-celebration', changefreq: 'monthly', priority: 0.9 },
  { loc: '/register', changefreq: 'monthly', priority: 0.9 },
  { loc: '/register-organization', changefreq: 'monthly', priority: 0.9 },
  { loc: '/register-ambassador', changefreq: 'monthly', priority: 0.8 },
  { loc: '/register-merchant', changefreq: 'monthly', priority: 0.8 },
  { loc: '/join-seed', changefreq: 'monthly', priority: 0.9 },
  { loc: '/parade-registration', changefreq: 'weekly', priority: 0.95 },
  { loc: '/voices', changefreq: 'weekly', priority: 0.8 },
  { loc: '/faq', changefreq: 'monthly', priority: 0.8 },
  { loc: '/contact', changefreq: 'monthly', priority: 0.7 },
  { loc: '/world', changefreq: 'weekly', priority: 0.9 },
  { loc: '/organizations', changefreq: 'weekly', priority: 0.8 },
  { loc: '/merchants', changefreq: 'weekly', priority: 0.8 },
  { loc: '/ambassadors', changefreq: 'weekly', priority: 0.8 },
  { loc: '/live', changefreq: 'daily', priority: 0.8 },
  { loc: '/live/danger-map', changefreq: 'daily', priority: 0.8 },
  { loc: '/live/discrimination', changefreq: 'daily', priority: 0.7 },
  { loc: '/live/safe-cities', changefreq: 'daily', priority: 0.7 },
];

// Helper: get SEO data for a route, with sensible fallback
export function getPageSEO(path: string): PageSEO {
  return PAGE_SEO[path] || {
    title: `${path.replace(/\//g, ' ').trim()} — Immigrants Alliance`,
    description: SITE.name + ' — a global federation connecting immigrant organizations in 190+ countries.',
    keywords: ['immigrants alliance'],
  };
}
