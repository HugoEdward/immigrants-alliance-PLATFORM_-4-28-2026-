import Link from 'next/link';
import { ambassadors } from '@/lib/federation/ambassadors';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Ambassador Directory',
  description: 'Meet the strategic federation partners building the Immigrants Alliance worldwide. Ambassadors connect organizations, merchants, and communities in their cities.',
  breadcrumbs: [{ name: 'Ambassadors', href: '/ambassadors' }],
} });

export default function AmbassadorsIndex() {
  const byCountry = ambassadors.reduce<Record<string, typeof ambassadors>>((acc, a) => { (acc[a.country] = acc[a.country] || []).push(a); return acc; }, {});
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-14">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #0E7C6B)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Federation Leadership</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Alliance Ambassadors</h1>
          <p className="text-base opacity-85">Strategic federation partners building the Alliance in their cities and countries.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {Object.entries(byCountry).map(([country, ambs]) => (
            <div key={country} className="mb-10">
              <h2 className="text-xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{country}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {ambs.map(a => (
                  <div key={a.slug} className="card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold shrink-0">{a.name.split(' ').map(w => w[0]).join('')}</div>
                      <div><h3 className="font-bold text-navy text-sm">{a.name}</h3><p className="text-[0.65rem] text-gray-400">{a.city} · {a.role}</p></div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{a.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Every city needs an ambassador. Could that be you?</p>
            <Link href="/register-ambassador" className="btn-gold">Become an Ambassador →</Link>
            <Link href="/international-cultures-celebration" className="btn-outline text-navy border-navy text-sm hover:bg-navy/5 no-underline">Explore Celebration →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
