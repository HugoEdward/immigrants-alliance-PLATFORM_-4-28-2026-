import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { merchants, getAllMerchantCategories } from '@/lib/federation/merchants';
import type { MerchantRecord } from '@/lib/federation/types';

export const getStaticPaths: GetStaticPaths = async () => {
  const catSlugs = getAllMerchantCategories().map(c => c.toLowerCase().replace(/ /g, '-'));
  const citySlugs = Array.from(new Set(merchants.map(m => m.city.toLowerCase().replace(/ /g, '-'))));
  const all = Array.from(new Set([...catSlugs, ...citySlugs]));
  return { paths: all.map(f => ({ params: { filter: f } })), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.filter as string;
  // Try category
  const byCat = merchants.filter(m => m.category.toLowerCase().replace(/ /g, '-') === slug);
  if (byCat.length > 0) return { props: { items: byCat, label: byCat[0].category, filterType: 'category', title: `${byCat[0].category} Merchants`, breadcrumbs: [{ name: 'Merchants', href: '/merchants' }, { name: byCat[0].category, href: `/merchants/${slug}` }] } };
  // Try city
  const byCity = merchants.filter(m => m.city.toLowerCase().replace(/ /g, '-') === slug);
  if (byCity.length > 0) return { props: { items: byCity, label: byCity[0].city, filterType: 'city', title: `Merchants in ${byCity[0].city}`, breadcrumbs: [{ name: 'Merchants', href: '/merchants' }, { name: byCity[0].city, href: `/merchants/${slug}` }] } };
  return { notFound: true };
};

export default function MerchantFilterPage({ items, label, filterType }: { items: MerchantRecord[]; label: string; filterType: string }) {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-14"><div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #8B6914)' }} /><div className="relative z-10 max-w-3xl mx-auto px-6"><span className="section-label" style={{ color: '#E8C36A' }}>{filterType === 'city' ? 'City' : 'Category'}</span><h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{filterType === 'city' ? `Merchants in ${label}` : label}</h1></div></section>
      <section className="py-12"><div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{items.map(m => (
          <div key={m.slug} className="card"><h3 className="font-bold text-navy text-base mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{m.name}</h3><p className="text-xs text-gray-400 mb-2">{m.city}, {m.country} · {m.category}</p><p className="text-gray-500 text-sm leading-relaxed mb-3">{m.description}</p><span className="inline-block bg-gold/10 text-gold-dark text-xs px-3 py-1 rounded-full font-bold">{m.discount}</span></div>
        ))}</div>
        <div className="text-center mt-10"><Link href="/register-merchant" className="btn-gold text-sm">Register Your Business →</Link></div>
      </div></section>
    </>
  );
}
