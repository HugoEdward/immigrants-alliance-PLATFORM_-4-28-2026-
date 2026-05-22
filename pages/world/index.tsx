import Link from 'next/link';
import { countries, allCities } from '@/lib/federation/geoData';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'World — Global Federation Directory',
  description: 'Explore the Immigrants Alliance federation across 190+ countries. Find country hubs, city guides, organizations, merchants, and ambassadors worldwide.',
  breadcrumbs: [{ name: 'World', href: '/world' }],
  schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'World Federation Directory — Immigrants Alliance' },
} });

export default function WorldIndex() {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #0E7C6B, #1B3A5C)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Global Federation</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>The Alliance Worldwide</h1>
          <p className="text-base opacity-85">190+ countries. Thousands of organizations. One mission. Explore the federation — find your country, your city, your community.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Countries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {countries.map(c => (
              <Link key={c.slug} href={`/world/${c.slug}`} className="card p-5 no-underline group">
                <h3 className="font-bold text-navy text-sm group-hover:text-teal transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>{c.name}</h3>
                <p className="text-[0.65rem] text-gray-400 mt-1">{c.continent}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>City Guides</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allCities.map(c => {
              const dot = c.safetyLevel === 'safer' ? 'bg-green-500' : c.safetyLevel === 'caution' ? 'bg-amber-400' : 'bg-red-500';
              return (
                <Link key={c.slug} href={`/world/${c.countrySlug}/${c.slug}`} className="card p-5 no-underline group">
                  <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${dot}`} /><h3 className="font-bold text-navy text-sm group-hover:text-teal transition-colors">{c.name}</h3></div>
                  <p className="text-[0.65rem] text-gray-400 mt-1 line-clamp-2">{c.immigrantHighlight}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gold-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Build the Alliance in your country</h2>
          <p className="text-white/50 text-sm mb-6 max-w-lg mx-auto">Every city needs an ambassador. Every country needs organizations. Every community deserves representation.</p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link href="/register-ambassador" className="btn-gold text-sm">Become Ambassador →</Link>
            <Link href="/register-organization" className="btn-teal text-sm">Register Organization →</Link>
            <Link href="/register-merchant" className="btn-outline text-sm">Join as Merchant →</Link>
            <Link href="/join-seed" className="btn-outline text-sm">Economic Empowerment →</Link>
            <Link href="/international-cultures-celebration" className="btn-outline text-sm">Explore Celebration →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { href: '/organizations', label: 'Organizations', icon: '🏛' },
              { href: '/merchants', label: 'Merchants', icon: '🏪' },
              { href: '/ambassadors', label: 'Ambassadors', icon: '⭐' },
              { href: '/voices', label: 'Global Voices', icon: '📖' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="bg-white/[.04] border border-white/10 rounded-lg p-4 text-center no-underline hover:border-gold/40 transition-all">
                <div className="text-xl mb-1">{l.icon}</div>
                <div className="text-white/70 text-xs font-bold">{l.label}</div>
              </Link>
            ))}
          </div>
          <p className="text-white/25 text-xs mt-6">Economic infrastructure powered by <span className="text-gold/50">Mundus.Center</span> · MundusPASS-ready</p>
        </div>
      </section>
    </>
  );
}
