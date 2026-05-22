import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { countries, getCitiesByCountry, type CountryNode, type CityNode } from '@/lib/federation/geoData';

interface Props { country: CountryNode; cities: CityNode[]; }

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: countries.map(c => ({ params: { country: c.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.country as string;
  const country = countries.find(c => c.slug === slug);
  if (!country) return { notFound: true };
  const cities = getCitiesByCountry(slug);
  return { props: {
    country, cities,
    title: `Immigrants from ${country.name}`,
    description: country.overview.slice(0, 155),
    breadcrumbs: [{ name: 'World', href: '/world' }, { name: country.name, href: `/world/${country.slug}` }],
    schema: {
      '@context': 'https://schema.org', '@type': 'Place',
      name: country.name, description: country.overview,
      containedInPlace: { '@type': 'Place', name: country.continent },
    },
  } };
};

export default function CountryPage({ country, cities }: Props) {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C, #0E7C6B)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>{country.continent}</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Immigrants from {country.name}</h1>
          <p className="text-base opacity-85 max-w-2xl mx-auto">{country.overview}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {[
            { title: 'Cultural Contributions', text: country.culturalContributions, icon: '🎨' },
            { title: 'Economic Contributions', text: country.economicContributions, icon: '💼' },
            { title: 'Alliance Presence', text: country.alliancePresence, icon: '🤝' },
          ].map(s => (
            <div key={s.title} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: 'linear-gradient(135deg, #1B3A5C, #0E7C6B)' }}>{s.icon}</div>
              <div><h2 className="text-xl font-bold text-navy mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{s.title}</h2><p className="text-gray-500 leading-relaxed text-sm">{s.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {cities.length > 0 && (
        <section className="bg-warm py-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Cities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {cities.map(city => {
                const dot = city.safetyLevel === 'safer' ? 'bg-green-500' : city.safetyLevel === 'caution' ? 'bg-amber-400' : 'bg-red-500';
                return (
                  <Link key={city.slug} href={`/world/${country.slug}/${city.slug}`} className="card no-underline group">
                    <div className="flex items-center gap-2 mb-2"><span className={`w-2.5 h-2.5 rounded-full ${dot}`} /><h3 className="font-bold text-navy text-base group-hover:text-teal transition-colors">{city.name}</h3></div>
                    <p className="text-gray-500 text-xs leading-relaxed">{city.immigrantHighlight}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Federation invitation */}
      <section className="bg-navy py-12 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gold-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Join the {country.name} chapter of the Alliance</h2>
          <p className="text-white/50 text-sm mb-6 max-w-lg mx-auto">Whether you represent an organization, run a business, or want to lead — there is a place for you in the {country.name} federation.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/register-organization" className="btn-gold text-sm">Register Organization →</Link>
            <Link href="/join-seed" className="btn-teal text-sm">Economic Empowerment →</Link>
            <Link href="/register-ambassador" className="btn-outline text-sm">Become Ambassador →</Link>
            <Link href="/register-merchant" className="btn-outline text-sm">Join as Merchant →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
