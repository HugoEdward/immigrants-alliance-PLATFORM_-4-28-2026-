import Link from 'next/link';
import { organizations } from '@/lib/federation/organizations';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Organization Directory',
  description: 'Explore immigrant and multicultural organizations in the Immigrants Alliance federation. Cultural, civic, humanitarian, professional, and community organizations worldwide.',
  breadcrumbs: [{ name: 'Organizations', href: '/organizations' }],
} });

export default function OrganizationsIndex() {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-14">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Federation Directory</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Organizations</h1>
          <p className="text-base opacity-85">Cultural, civic, humanitarian, and professional organizations building the immigrant federation worldwide.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {organizations.map(o => (
              <Link key={o.slug} href={`/organizations/${o.slug}`} className="card no-underline group">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-navy text-base group-hover:text-teal transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>{o.name}</h3>
                  {o.seed && <span className="bg-teal/10 text-teal text-[0.6rem] px-2 py-0.5 rounded-full font-bold">S.E.E.D.</span>}
                </div>
                <p className="text-xs text-gray-400 mb-2">{o.city}, {o.country} · {o.type}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{o.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">{o.services.map(s => <span key={s} className="bg-warm text-navy text-[0.6rem] px-2 py-0.5 rounded-full font-medium">{s}</span>)}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-wrap gap-3 justify-center"><Link href="/register-organization" className="btn-gold">Register Your Organization →</Link><Link href="/international-cultures-celebration" className="btn-teal">International Cultures Celebration →</Link></div>
        </div>
      </section>
    </>
  );
}
