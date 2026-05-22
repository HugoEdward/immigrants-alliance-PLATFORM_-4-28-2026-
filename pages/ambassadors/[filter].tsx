import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ambassadors } from '@/lib/federation/ambassadors';
import type { AmbassadorRecord } from '@/lib/federation/types';

export const getStaticPaths: GetStaticPaths = async () => {
  const countrySlugs = Array.from(new Set(ambassadors.map(a => a.country.toLowerCase().replace(/ /g, '-'))));
  const citySlugs = Array.from(new Set(ambassadors.map(a => a.city.toLowerCase().replace(/ /g, '-'))));
  const all = Array.from(new Set([...countrySlugs, ...citySlugs]));
  return { paths: all.map(f => ({ params: { filter: f } })), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.filter as string;
  const byCountry = ambassadors.filter(a => a.country.toLowerCase().replace(/ /g, '-') === slug);
  if (byCountry.length > 0) return { props: { items: byCountry, label: byCountry[0].country, title: `Ambassadors in ${byCountry[0].country}`, breadcrumbs: [{ name: 'Ambassadors', href: '/ambassadors' }, { name: byCountry[0].country, href: `/ambassadors/${slug}` }] } };
  const byCity = ambassadors.filter(a => a.city.toLowerCase().replace(/ /g, '-') === slug);
  if (byCity.length > 0) return { props: { items: byCity, label: byCity[0].city, title: `Ambassadors in ${byCity[0].city}`, breadcrumbs: [{ name: 'Ambassadors', href: '/ambassadors' }, { name: byCity[0].city, href: `/ambassadors/${slug}` }] } };
  return { notFound: true };
};

export default function AmbassadorFilterPage({ items, label }: { items: AmbassadorRecord[]; label: string }) {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-14"><div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #0E7C6B)' }} /><div className="relative z-10 max-w-3xl mx-auto px-6"><span className="section-label" style={{ color: '#E8C36A' }}>Federation Leadership</span><h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Ambassadors in {label}</h1></div></section>
      <section className="py-12"><div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-4">{items.map(a => (
          <div key={a.slug} className="card"><div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold shrink-0">{a.name.split(' ').map(w => w[0]).join('')}</div><div><h3 className="font-bold text-navy text-sm">{a.name}</h3><p className="text-[0.65rem] text-gray-400">{a.city} · {a.role}</p></div></div><p className="text-gray-500 text-sm leading-relaxed">{a.bio}</p></div>
        ))}</div>
        <div className="text-center mt-10"><Link href="/register-ambassador" className="btn-gold">Become an Ambassador →</Link></div>
      </div></section>
    </>
  );
}
