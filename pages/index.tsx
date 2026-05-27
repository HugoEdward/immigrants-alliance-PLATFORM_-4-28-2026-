import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Home',
  description: 'Immigrants Alliance — 41st International Cultures–Immigrants Parade, Saturday June 13, 2026, 11:00 AM, Avenue of the Americas, NYC. Register your organization, national contingent, soccer/fútbol club, or cultural group. Economic Empowerment through S.E.E.D.',
  schema: { '@context': 'https://schema.org', '@type': 'Event', name: '41st International Cultures–Immigrants Parade', startDate: '2026-06-13T11:00:00-04:00', endDate: '2026-06-13T16:00:00-04:00', eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled', location: { '@type': 'Place', name: 'Avenue of the Americas', address: { '@type': 'PostalAddress', streetAddress: '6th Avenue, 42nd to 57th Street', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } }, organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' } },
} });

export default function HomePage() {
  return (
    <>
      {/* HERO — urgent mobilization */}
      <section className="relative overflow-hidden text-white" style={{ padding: '70px 0 90px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.93), rgba(27,58,92,.86), rgba(14,124,107,.8))' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-red-600/90 text-white px-4 py-2 rounded-lg text-sm font-bold mb-5 animate-pulse">📅 Saturday, June 13, 2026 · 11:00 AM · NYC</div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-4 leading-[1.08]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Next Saturday, June 13 —<br /><span className="text-gold-light">Let&rsquo;s Celebrate Our International Cultures in New York City.</span>
            </h1>
            <p className="text-lg leading-relaxed opacity-90 mb-6 font-light max-w-lg">
              41st Annual International Cultures–Immigrants Parade. Avenue of the Americas, 42nd to 57th Street. National contingents, organizations, soccer clubs, youth teams, bands, folk groups, and families from every continent.
            </p>
            <div className="flex gap-3 flex-wrap mb-5">
              <Link href="/parade-registration" className="bg-red-600 hover:bg-red-500 text-white px-6 py-3.5 rounded-lg font-bold text-sm no-underline transition-all">🎉 Register for the Parade →</Link>
              <Link href="/register-organization" className="btn-gold">Register Your Organization →</Link>
              <Link href="/join-seed" className="btn-outline">Economic Empowerment →</Link>
            </div>
            <div className="bg-white/[.06] border border-white/10 rounded-xl px-5 py-3 inline-block">
              <p className="text-gold-light text-sm font-bold">First 1,000,000 Founding Members Join Free for Life</p>
              <p className="text-white/60 text-xs mt-1">Individual members — <Link href="/register" className="text-gold underline">join now</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-navy border-b-[3px] border-gold">
        <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[{ n: '190+', l: 'Countries' }, { n: '1976', l: 'Founded' }, { n: '41', l: 'Annual Parades' }, { n: '🇺🇳', l: 'UN ECOSOC' }, { n: 'June 13', l: '2026 Parade' }].map(s => (
            <div key={s.l} className="text-center"><div className="text-2xl md:text-3xl font-extrabold text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>{s.n}</div><div className="text-[0.6rem] opacity-80 uppercase tracking-widest text-white mt-1">{s.l}</div></div>
          ))}
        </div>
      </section>

      {/* WHO SHOULD PARADE */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Who Should Parade, Perform & Represent Their Culture on June 13</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['National Contingents', 'Socio-Cultural Organizations', 'Immigrant & Diaspora Groups', 'Soccer / Fútbol Clubs', 'Youth & Children Teams', 'Dance, Music & Folk Groups', 'Cultural Schools & Bands', 'Faith-Based Organizations', 'Consulates & UN Missions', 'Cultural / Tourism Attachés', 'Chambers of Commerce', 'Families & Communities'].map(item => (
              <div key={item} className="bg-warm rounded-xl p-4 text-center border border-gray-100"><span className="text-xs text-navy font-medium">{item}</span></div>
            ))}
          </div>
          <div className="text-center mt-8"><Link href="/parade-registration" className="btn-gold">Register Your Contingent →</Link></div>
        </div>
      </section>

      {/* ECONOMIC EMPOWERMENT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">🌱 Sustainable Economic Empowerment & Development</span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Economic Empowerment for Organizations</h2>
            <p className="text-gray-600 text-sm leading-relaxed">Your organization should not survive only on donations, volunteers, and emergency fundraising. Economic Empowerment helps socio-cultural organizations build sustainable income, activate members, enroll merchants, participate in Passport to the World, and strengthen their community for the long term.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { level: 'Emerging Organization', d: 'Start organizing members, collecting dues, participating in programs, and building the foundation for sustainable support.' },
              { level: 'Growing Federation', d: 'Activate chapters, merchants, professionals, sponsors, and cultural participation to grow recurring support.' },
              { level: 'National Federation', d: 'Coordinate national contingents, member organizations, merchants, Passport to the World participation, pavilions, sponsorships, and long-term economic development.' },
            ].map(c => (
              <div key={c.level} className="card border-t-4 border-t-teal">
                <h3 className="text-base font-bold text-navy mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{c.level}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 italic max-w-xl mx-auto mb-8">Depending on activation, participation, membership growth, merchant enrollment, sponsorships, and program implementation, Economic Empowerment Member Organizations may work toward meaningful yearly sustainable income. Results are not guaranteed and depend on execution.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/join-seed" className="btn-gold">Explore Economic Empowerment →</Link>
            <Link href="/register-organization" className="btn-outline text-navy border-navy text-sm hover:bg-navy/5 no-underline">Register Your Organization →</Link>
          </div>
        </div>
      </section>

      {/* THREE PROMISES */}
      <section className="bg-warm py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Your culture is not a problem. It is a gift the world needs.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '🤝', t: 'You Are Not Alone', d: 'People in 190+ countries understand your journey. When you join, you join a family.' },
              { icon: '💪', t: 'Your Independence Matters', d: 'We offer tools, not charity. Build real financial independence through Economic Empowerment.' },
              { icon: '🎓', t: 'Your Culture Is Medicine', d: 'Every time cultures meet — prejudice shrinks. Your traditions heal the world.' },
            ].map(c => (
              <div key={c.t} className="card"><div className="text-2xl mb-3">{c.icon}</div><h3 className="text-lg font-bold mb-2 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>{c.t}</h3><p className="text-gray-500 text-sm leading-relaxed">{c.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR PATHWAYS */}
      <section className="bg-navy py-14 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gold-light text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Choose your path</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🎉', t: 'Parade', d: 'June 13, 2026. Your culture, your music, your moment. Free for members.', href: '/parade-registration', cta: 'Register →' },
              { icon: '🏛', t: 'Organizations', d: '$100/month or $1,000/year. Free Celebration participation. International visibility.', href: '/register-organization', cta: 'Register →' },
              { icon: '🌱', t: 'Economic Empowerment', d: 'Build sustainable income through S.E.E.D. — membership, merchants, Passport to the World.', href: '/join-seed', cta: 'Explore →' },
              { icon: '🌐', t: 'Celebration', d: 'A week-long Mini-World\u2019s Fair — pavilions, conference at the UN, awards, and the Parade.', href: '/international-cultures-celebration', cta: 'Learn More →' },
            ].map(p => (
              <Link key={p.t} href={p.href} className="bg-white/[.04] border border-white/10 rounded-xl p-5 no-underline hover:border-gold/50 transition-all group">
                <div className="text-2xl mb-2">{p.icon}</div><h3 className="text-sm font-bold text-gold-light mb-1 group-hover:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{p.t}</h3><p className="text-white/50 text-xs leading-relaxed mb-2">{p.d}</p><span className="text-gold text-xs font-semibold">{p.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-5 text-navy text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Know before you go</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[{ t: 'Safety Map', d: 'Red = danger. Yellow = caution. Green = safer.', href: '/live/danger-map' }, { t: 'Discrimination Monitor', d: 'Community-reported incidents by city and type.', href: '/live/discrimination' }, { t: 'Safer Destinations', d: 'Compare cities by safety and support.', href: '/live/safe-cities' }].map(item => (
              <Link key={item.t} href={item.href} className="card no-underline group flex flex-col"><h3 className="text-base font-bold mb-1 text-navy group-hover:text-teal" style={{ fontFamily: 'Playfair Display, serif' }}>{item.t}</h3><p className="text-gray-500 text-xs leading-relaxed flex-1">{item.d}</p></Link>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="bg-warm py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-5"><h2 className="text-xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Stories that change minds</h2><Link href="/voices" className="text-teal text-sm font-semibold hover:underline no-underline hidden md:block">All stories →</Link></div>
          <div className="grid md:grid-cols-3 gap-4">
            {[{ type: 'Story', title: 'From a Suitcase to 40 Employees', tag: 'Lagos → Toronto' }, { type: 'Mayor', title: '"This City Would Not Function Without Immigrants"', tag: 'Duisburg, Germany' }, { type: 'Success', title: 'Undocumented at Nine. Doctor at Twenty-Three.', tag: 'Southwest USA' }].map(v => (
              <article key={v.title} className="card"><span className="bg-gold/15 text-gold-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{v.type}</span><h3 className="text-sm font-bold text-navy mt-2 mb-1 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h3><p className="text-xs text-gray-400 italic">{v.tag}</p></article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy py-12 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Saturday, June 13, 2026.<br /><span className="text-gold-light">The Avenue of the Americas is waiting for you.</span></h2>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link href="/parade-registration" className="bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-lg font-bold text-sm no-underline transition-all">Register for the Parade →</Link>
            <Link href="/register-organization" className="btn-gold text-sm px-8 py-3.5">Register Your Organization →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
