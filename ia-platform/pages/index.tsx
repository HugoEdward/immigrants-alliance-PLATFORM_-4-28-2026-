import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return { props: { title: 'Home', description: 'Empowering immigrants, uniting cultures, building futures since 1976.' } };
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ padding: '80px 0 100px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.92) 0%, rgba(27,58,92,.85) 50%, rgba(14,124,107,.8) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-gold/20 border border-gold text-gold-light px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5">Since 1976 · UN ECOSOC Consultative Status</div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Empowering Immigrants.<br /><span className="text-gold-light">Uniting Cultures.</span><br />Building Futures.
            </h1>
            <p className="text-lg leading-relaxed opacity-90 mb-8 font-light max-w-lg">A nonpartisan, secular global multicultural economic development organization advancing positive intercultural relations, sustainable development, and immigrant empowerment — in every city, in every nation.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/register-organization" className="btn-gold">Register Your Organization →</Link>
              <Link href="/parade-registration" className="btn-outline">🎉 41st Immigrants Parade</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy border-b-[3px] border-gold">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[ { num: '50+', label: 'Countries Served' }, { num: '1976', label: 'Year Founded' }, { num: '41', label: 'Annual Parades' }, { num: '🇺🇳', label: 'UN ECOSOC Status' } ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>{s.num}</div>
              <div className="text-xs opacity-80 uppercase tracking-widest text-white">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Our Mission</span>
            <h2 className="text-4xl font-bold mb-4 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Dismantling Cultural Ignorance. Building a Harmonious World.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[ { icon: '🌐', title: 'Unite Global Communities', desc: 'Connecting multicultural organizations across 50+ countries through cultural exchange and financial empowerment.' }, { icon: '💪', title: 'Empower & Enable', desc: 'Helping organizations achieve financial sustainability through SEED and MundusPass.' }, { icon: '🎓', title: 'Educate & Eradicate', desc: 'Services, programs, and events that help immigrants thrive and eradicate cultural ignorance.' } ].map((c) => (
              <div key={c.title} className="card">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl text-white mb-5" style={{ background: 'linear-gradient(135deg, #1B3A5C, #0E7C6B)' }}>{c.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Column CTA */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Get Started</span>
            <h2 className="text-4xl font-bold mb-4 text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>Three Ways to Join the Movement</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[ { icon: '🏛', title: 'Register Organization', desc: 'Join the global federated network. Access programs, events, revenue sharing.', href: '/register-organization' }, { icon: '🌱', title: 'Join SEED Program', desc: 'Transform your nonprofit into a self-sustaining institution. $250K+ revenue goal.', href: '/join-seed' }, { icon: '🎉', title: 'Parade Registration', desc: 'June 13, 2026. Avenue of the Americas, NYC. FREE for members.', href: '/parade-registration' } ].map((c) => (
              <div key={c.title} className={`bg-white/5 border ${c.title === 'Join SEED Program' ? 'border-2 border-gold' : 'border-white/10 hover:border-gold'} rounded-2xl p-8 text-center transition-all`}>
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-bold text-gold-light mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{c.title}</h3>
                <p className="text-white/70 text-sm mb-6">{c.desc}</p>
                <Link href={c.href} className="btn-gold text-sm">{c.title === 'Parade Registration' ? 'Register for Parade →' : c.title === 'Join SEED Program' ? 'Apply to SEED →' : 'Register Now →'}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEED Preview */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,61,46,.94), rgba(14,124,107,.9))' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <span className="section-label" style={{ color: '#E8C36A' }}>🌱 Launching September 15, 2026</span>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>SEED — Sustainable Economic Empowerment & Development</h2>
            <p className="opacity-90 mb-6">Transforming fragile nonprofits into self-sustaining institutions with dedicated Development Officers, recurring revenue, and global networks.</p>
            <Link href="/join-seed" className="btn-gold">Apply to SEED →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[ { n: '$250K+', l: 'Revenue Goal/Org' }, { n: '92%', l: 'NGOs Lack Sustainability' }, { n: '50+', l: 'Countries' }, { n: '1:1', l: 'Dedicated Dev Officer' } ].map((s) => (
              <div key={s.l} className="bg-white/10 border border-white/20 rounded-lg p-5 text-center">
                <strong className="block text-2xl text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>{s.n}</strong>
                <span className="text-xs opacity-80 uppercase tracking-widest">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
