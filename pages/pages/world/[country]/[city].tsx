import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { allCities, countries, type CityNode } from '@/lib/federation/geoData';

interface Props { city: CityNode; countryName: string; }

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allCities.map(c => {
    const cSlug = c.countrySlug === 'usa' ? 'usa' : c.countrySlug === 'canada' ? 'canada' : c.countrySlug === 'portugal' ? 'portugal' : c.countrySlug;
    return { params: { country: cSlug, city: c.slug } };
  }),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const countrySlug = params?.country as string;
  const citySlug = params?.city as string;
  const city = allCities.find(c => c.countrySlug === countrySlug && c.slug === citySlug);
  if (!city) return { notFound: true };
  const country = countries.find(c => c.slug === countrySlug);
  const countryName = country?.name || countrySlug;
  return { props: {
    city, countryName,
    title: `${city.name} — Immigrant Community Guide`,
    description: city.immigrantHighlight.slice(0, 155),
    breadcrumbs: [{ name: 'World', href: '/world' }, { name: countryName, href: `/world/${countrySlug}` }, { name: city.name, href: `/world/${countrySlug}/${city.slug}` }],
    schema: {
      '@context': 'https://schema.org', '@type': 'City',
      name: city.name, description: city.immigrantHighlight,
      containedInPlace: { '@type': 'Country', name: countryName },
    },
  } };
};

export default function CityPage({ city, countryName }: Props) {
  const dot = city.safetyLevel === 'safer' ? 'bg-green-500' : city.safetyLevel === 'caution' ? 'bg-amber-400' : 'bg-red-500';
  const label = city.safetyLevel === 'safer' ? '🟢 Lower Risk' : city.safetyLevel === 'caution' ? '🟡 Caution' : '🔴 Higher Risk';

  return (
    <>
      <section className="relative overflow-hidden text-white py-14">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="section-label" style={{ color: '#E8C36A' }}>City Guide</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{city.name}</h1>
          <p className="text-sm opacity-70 mb-4">{countryName}</p>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm"><span className={`w-3 h-3 rounded-full ${dot}`} />{label}</div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          {[
            { t: 'Immigrant Community', text: city.immigrantHighlight },
            { t: 'Culture & Identity', text: city.culturalNote },
            { t: 'Opportunities (Visit · Work · Live)', text: city.opportunities },
            { t: 'Local Organizations & Support', text: city.localOrgs },
            { t: 'Events & Participation', text: city.events },
          ].map(s => (
            <div key={s.t}>
              <h2 className="text-lg font-bold text-navy mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{s.t}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-warm py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Get involved in {city.name}</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/register-organization" className="btn-gold text-sm">Register Organization →</Link>
            <Link href="/register-merchant" className="btn-teal text-sm">Join as Merchant →</Link>
            <Link href="/register-ambassador" className="btn-outline text-navy border-navy text-sm hover:bg-navy/5">Become Ambassador →</Link>
            <Link href="/live/danger-map" className="btn-outline text-navy border-navy text-sm hover:bg-navy/5">Check Safety Map →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
