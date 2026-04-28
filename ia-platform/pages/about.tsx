import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: { title: 'About' } });

const timeline = [
  { year: '1976', text: 'Hugo Edward Juarez founds the Immigrants Foundation.' },
  { year: 'Early 1980s', text: 'Unified Immigrants Alliance formed with umbrella organization leaders.' },
  { year: '1986', text: '1st International Cultures Conference, Passport to the World, and Immigrants Parade — Statue of Liberty centennial.' },
  { year: '1989', text: 'NGO Consultative Status with U.N. ECOSOC — unanimously endorsed.' },
  { year: 'Early 2000s', text: 'Immigrants Building at 7 West 44th Street & 5th Avenue established.' },
  { year: '2024', text: '40th Immigrants Parade through Midtown Manhattan.' },
  { year: '2026', text: '41st Parade (June 13). SEED launches September 15.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.95), rgba(27,58,92,.9))' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Our Story, Our Mission, Our Future</h1>
          <p className="text-lg opacity-85">Founded in 1976 — nearly five decades of building bridges between cultures.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-600">Immigrants Alliance is a nonpartisan, secular global multicultural economic development federated social welfare organization dedicated to promoting positive intercultural relations.</p>
          <div className="bg-warm border-l-4 border-gold rounded-r-lg p-7 space-y-3">
            {[['UNITE', 'global communities through cultural exchange and financial empowerment.'], ['ENABLE', 'organizations to achieve financial sustainability through SEED and MundusPass.'], ['EMPOWER', 'immigrants to reach their full potential, thrive, and build bridges.'], ['PROVIDE', 'access to essential services, programs, and events.'], ['ERADICATE', 'cultural ignorance by fostering inclusive, harmonious societies.']].map(([w, d]) => (
              <p key={w} className="text-base leading-relaxed"><strong className="text-navy">{w}</strong> {d}</p>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-navy mt-16 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Our History</h2>
          <div className="relative pl-10">
            <div className="absolute left-4 top-0 bottom-0 w-[3px] rounded" style={{ background: 'linear-gradient(to bottom, #C5973B, #0E7C6B)' }} />
            {timeline.map((item) => (
              <div key={item.year} className="relative mb-9">
                <div className="absolute -left-[26px] top-1 w-3.5 h-3.5 bg-gold rounded-full border-[3px] border-cream" />
                <div className="text-lg font-bold text-gold-dark mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{item.year}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-navy mt-16 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Affiliated Organizations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card"><h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Immigrants Foundation</h3><p className="text-sm text-gray-500 mb-4">Mother organization, founded 1976. UN ECOSOC Consultative Status since 1989.</p><div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/15 px-4 py-2 rounded-lg text-xs text-navy">🇺🇳 UN ECOSOC Since 1989</div></div>
            <div className="card"><h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>International Cultures Mission</h3><p className="text-sm text-gray-500">Promoting positive intercultural relations. Sponsor of the annual International Cultures Celebration since 1986.</p></div>
          </div>

          <div className="mt-16 text-center"><Link href="/register-organization" className="btn-gold">Join the Alliance →</Link></div>
        </div>
      </section>
    </>
  );
}
