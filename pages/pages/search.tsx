'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { countries, allCities } from '@/lib/federation/geoData';
import { organizations } from '@/lib/federation/organizations';
import { merchants } from '@/lib/federation/merchants';
import { ambassadors } from '@/lib/federation/ambassadors';

type Result = { type: string; name: string; href: string; sub: string; };

export default function SearchPage() {
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    if (q.length < 2) return [];
    const lq = q.toLowerCase();
    const r: Result[] = [];
    countries.forEach(c => { if (c.name.toLowerCase().includes(lq) || c.slug.includes(lq)) r.push({ type: 'Country', name: c.name, href: `/world/${c.slug}`, sub: c.continent }); });
    allCities.forEach(c => { if (c.name.toLowerCase().includes(lq) || c.slug.includes(lq)) r.push({ type: 'City', name: c.name, href: `/world/${c.countrySlug}/${c.slug}`, sub: c.countrySlug }); });
    organizations.forEach(o => { if (o.name.toLowerCase().includes(lq) || o.city.toLowerCase().includes(lq) || o.country.toLowerCase().includes(lq)) r.push({ type: 'Organization', name: o.name, href: `/organizations/${o.slug}`, sub: `${o.city}, ${o.country}` }); });
    merchants.forEach(m => { if (m.name.toLowerCase().includes(lq) || m.city.toLowerCase().includes(lq) || m.category.toLowerCase().includes(lq)) r.push({ type: 'Merchant', name: m.name, href: `/merchants`, sub: `${m.city} · ${m.category}` }); });
    ambassadors.forEach(a => { if (a.name.toLowerCase().includes(lq) || a.city.toLowerCase().includes(lq) || a.country.toLowerCase().includes(lq)) r.push({ type: 'Ambassador', name: a.name, href: `/ambassadors`, sub: `${a.city}, ${a.country}` }); });
    // Programs and events
    const programs = [
      { name: 'International Cultures Celebration', href: '/international-cultures-celebration', sub: 'Annual week-long celebration in NYC' },
      { name: 'Passport to the World', href: '/international-cultures-celebration', sub: 'Mini-World\'s Fair · powered by MundusPASS' },
      { name: 'International Cultures–Immigrants Parade', href: '/parade-registration', sub: 'June 13, 2026 · Avenue of the Americas' },
      { name: 'S.E.E.D. Program', href: '/join-seed', sub: 'Sustainable Economic Empowerment & Development' },
      { name: 'Star of Harmony Awards', href: '/international-cultures-celebration', sub: 'Annual award ceremony' },
      { name: 'International Cultures Conference', href: '/international-cultures-celebration', sub: 'At the United Nations, NYC' },
    ];
    programs.forEach(p => { if (p.name.toLowerCase().includes(lq) || p.sub.toLowerCase().includes(lq)) r.push({ type: 'Program', name: p.name, href: p.href, sub: p.sub }); });
    return r.slice(0, 20);
  }, [q]);

  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Search the Federation</h1>
          <input type="text" value={q} onChange={e => setQ(e.target.value)} placeholder="Search countries, cities, organizations, merchants..." className="form-field text-navy text-lg px-6 py-4 rounded-xl" autoFocus />
        </div>
      </section>
      <section className="py-10 min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-6">
          {q.length < 2 ? (
            <p className="text-center text-gray-400 text-sm py-10">Type at least 2 characters to search across the federation.</p>
          ) : results.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-10">No results for &ldquo;{q}&rdquo;. Try a different term.</p>
          ) : (
            <div className="space-y-2">
              {results.map((r, i) => (
                <Link key={i} href={r.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 no-underline hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div><div className="font-bold text-navy text-sm">{r.name}</div><div className="text-xs text-gray-400">{r.sub}</div></div>
                  <span className="bg-warm text-navy text-[0.6rem] px-3 py-1 rounded-full font-bold uppercase">{r.type}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
