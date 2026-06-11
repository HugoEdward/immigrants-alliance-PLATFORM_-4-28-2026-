import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { organizations } from '@/lib/federation/organizations';
import type { OrgRecord } from '@/lib/federation/types';

type PageData = { mode: 'org'; org: OrgRecord } | { mode: 'country'; orgs: OrgRecord[]; countryName: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const orgPaths = organizations.map(o => ({ params: { id: o.slug } }));
  const countrySlugs = Array.from(new Set(organizations.map(o => o.country.toLowerCase().replace(/ /g, '-'))));
  const countryPaths = countrySlugs.map(c => ({ params: { id: c } }));
  const citySlugs = Array.from(new Set(organizations.map(o => o.city.toLowerCase().replace(/ /g, '-'))));
  const cityPaths = citySlugs.map(c => ({ params: { id: c } }));
  return { paths: [...orgPaths, ...countryPaths, ...cityPaths], fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  // Try org first
  const org = organizations.find(o => o.slug === id);
  if (org) return { props: { mode: 'org', org, title: org.name, description: org.description, breadcrumbs: [{ name: 'Organizations', href: '/organizations' }, { name: org.name, href: `/organizations/${org.slug}` }] } };
  // Try country
  const byCountry = organizations.filter(o => o.country.toLowerCase().replace(/ /g, '-') === id);
  if (byCountry.length > 0) return { props: { mode: 'country', orgs: byCountry, countryName: byCountry[0].country, title: `Organizations in ${byCountry[0].country}`, breadcrumbs: [{ name: 'Organizations', href: '/organizations' }, { name: byCountry[0].country, href: `/organizations/${id}` }] } };
  // Try city
  const byCity = organizations.filter(o => o.city.toLowerCase().replace(/ /g, '-') === id);
  if (byCity.length > 0) return { props: { mode: 'country', orgs: byCity, countryName: byCity[0].city, title: `Organizations in ${byCity[0].city}`, breadcrumbs: [{ name: 'Organizations', href: '/organizations' }, { name: byCity[0].city, href: `/organizations/${id}` }] } };
  return { notFound: true };
};

export default function OrgDynamic(props: any) {
  if (props.mode === 'org') {
    const o: OrgRecord = props.org;
    return (
      <>
        <section className="relative overflow-hidden text-white py-14"><div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C)' }} /><div className="relative z-10 max-w-3xl mx-auto px-6 text-center"><span className="section-label" style={{ color: '#E8C36A' }}>{o.type} Organization</span><h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{o.name}</h1><p className="text-sm opacity-70">{o.city}, {o.country}</p><div className="flex flex-wrap gap-2 justify-center mt-4">{o.seed && <span className="bg-teal/20 text-teal-light text-xs px-3 py-1 rounded-full font-bold">🌱 S.E.E.D.</span>}{o.paradeParticipant && <span className="bg-gold/20 text-gold-light text-xs px-3 py-1 rounded-full font-bold">🎉 Parade</span>}</div></div></section>
        <section className="py-12"><div className="max-w-3xl mx-auto px-6"><p className="text-gray-600 leading-relaxed mb-6">{o.description}</p><h2 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Services</h2><div className="flex flex-wrap gap-2 mb-8">{o.services.map(s => <span key={s} className="bg-warm text-navy text-sm px-4 py-2 rounded-lg font-medium">{s}</span>)}</div>{o.website && <p className="mb-6"><a href={o.website} target="_blank" rel="noopener noreferrer" className="text-teal font-semibold hover:underline">Visit Website →</a></p>}<div className="flex flex-wrap gap-3"><Link href="/register-organization" className="btn-gold text-sm">Register Organization →</Link><Link href="/join-seed" className="btn-teal text-sm">Economic Empowerment →</Link><Link href="/parade-registration" className="btn-outline text-navy border-navy text-sm hover:bg-navy/5">Parade Registration →</Link></div></div></section>
      </>
    );
  }

  const orgs: OrgRecord[] = props.orgs;
  const name: string = props.countryName;
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-14"><div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C)' }} /><div className="relative z-10 max-w-3xl mx-auto px-6"><span className="section-label" style={{ color: '#E8C36A' }}>Federation Directory</span><h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Organizations in {name}</h1></div></section>
      <section className="py-12"><div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-5">{orgs.map(o => (
          <Link key={o.slug} href={`/organizations/${o.slug}`} className="card no-underline group"><h3 className="font-bold text-navy text-base group-hover:text-teal transition-colors mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{o.name}</h3><p className="text-xs text-gray-400 mb-2">{o.city}, {o.country} · {o.type}</p><p className="text-gray-500 text-sm leading-relaxed">{o.description}</p></Link>
        ))}</div>
        <div className="text-center mt-10"><Link href="/register-organization" className="btn-gold text-sm">Register Your Organization →</Link></div>
      </div></section>
    </>
  );
}
