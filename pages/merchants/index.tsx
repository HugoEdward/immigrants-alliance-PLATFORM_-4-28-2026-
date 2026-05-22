import Link from 'next/link';
import { merchants, getAllMerchantCategories } from '@/lib/federation/merchants';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Merchant Directory',
  description: 'Discover immigrant-owned businesses and culturally connected merchants in the Immigrants Alliance ecosystem. MundusPASS partner merchants worldwide.',
  breadcrumbs: [{ name: 'Merchants', href: '/merchants' }],
} });

export default function MerchantsIndex() {
  const categories = getAllMerchantCategories();
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-14">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #8B6914)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Federation Commerce</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Merchant Directory</h1>
          <p className="text-base opacity-85">Businesses that serve and celebrate immigrant communities. Future MundusPASS partners.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(c => <Link key={c} href={`/merchants/${c.toLowerCase().replace(/ /g, '-')}`} className="bg-warm text-navy text-xs px-4 py-2 rounded-full font-bold no-underline hover:bg-gold/20 transition-colors">{c}</Link>)}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {merchants.map(m => (
              <div key={m.slug} className="card">
                <h3 className="font-bold text-navy text-base mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{m.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{m.city}, {m.country} · {m.category} · Owner from {m.ownerNationality}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{m.description}</p>
                <span className="inline-block bg-gold/10 text-gold-dark text-xs px-3 py-1 rounded-full font-bold">{m.discount}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-wrap gap-3 justify-center"><Link href="/register-merchant" className="btn-gold">Register Your Business →</Link><Link href="/international-cultures-celebration" className="btn-outline text-navy border-navy text-sm hover:bg-navy/5">Explore Celebration →</Link></div>
        </div>
      </section>
    </>
  );
}
