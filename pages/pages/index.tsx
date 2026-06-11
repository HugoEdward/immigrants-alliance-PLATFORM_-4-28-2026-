import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'Immigrants Are the Spirit of the World — Parade This Saturday in NYC',
    description: 'Immigrants Alliance — 41st International Cultures–Immigrants Parade, Saturday June 13, 2026, 11:00 AM, Avenue of the Americas from 42nd to 57th Street, NYC. Register your organization, national contingent, soccer/fútbol club, youth team, band, or cultural group.',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: '41st International Cultures–Immigrants Parade',
        startDate: '2026-06-13T11:00:00-04:00',
        endDate: '2026-06-13T16:00:00-04:00',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'Place',
          name: 'Avenue of the Americas, Midtown Manhattan',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Avenue of the Americas, 42nd to 57th Street',
            addressLocality: 'New York',
            addressRegion: 'NY',
            addressCountry: 'US',
          },
        },
        organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' },
        description: 'A moving world-cultures showcase where national and cultural contingents parade, perform, dance, exhibit, and celebrate the contributions immigrant communities bring to the United States.',
        image: 'https://immigrantsalliance.org/IMMIGRANTS_ALLIANCE_Logo.jpg',
        isAccessibleForFree: true,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'NGO',
        name: 'Immigrants Alliance',
        url: 'https://immigrantsalliance.org',
        foundingDate: '1976',
        areaServed: 'Worldwide',
        memberOf: { '@type': 'Organization', name: 'United Nations ECOSOC' },
      },
    ],
  },
});

export default function HomePage() {
  return (
    <>
      {/* URGENT PARADE HERO */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #1B3A5C 27%, #0E7C6B 53%, #C5973B 78%, #B8322A 100%)',
          backgroundSize: '350% 350%',
          animation: 'iaGradientShift 12s ease infinite',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 25% 45%, rgba(232,195,106,.18), transparent 65%), radial-gradient(ellipse at 75% 25%, rgba(255,255,255,.08), transparent 55%)' }} />

        <style jsx>{`
          @keyframes iaGradientShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
          @keyframes iaPulse { 0%,100% { transform: scale(1); box-shadow: 0 0 0 rgba(255,255,255,0); } 50% { transform: scale(1.04); box-shadow: 0 0 35px rgba(232,195,106,.25); } }
          @keyframes iaFadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block mb-6" style={{ animation: 'iaPulse 2s ease infinite' }}>
              <div className="bg-red-700 text-white px-7 py-3 rounded-full text-base md:text-xl font-black tracking-wide uppercase shadow-2xl border-2 border-red-300">
                🎉 This Saturday — June 13 · 11:00 AM · Avenue of the Americas
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05]" style={{ fontFamily: 'Playfair Display, serif', animation: 'iaFadeUp .75s ease' }}>
              Immigrants Are<br />
              <span className="text-gold-light" style={{ textShadow: '0 0 42px rgba(232,195,106,.35)' }}>the Spirit of the World.</span>
            </h1>

            <div className="space-y-3 mb-8" style={{ animation: 'iaFadeUp 1s ease' }}>
              <p className="text-xl md:text-2xl font-bold text-white/95">
                The engine of the economy of every developed nation.
              </p>
              <p className="text-lg md:text-xl text-gold-light font-semibold italic">
                Let&rsquo;s showcase this Saturday — our strength together.
              </p>
            </div>

            <div className="bg-white/[.08] backdrop-blur-sm border border-gold/40 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-8" style={{ animation: 'iaFadeUp 1.2s ease' }}>
              <div className="text-2xl md:text-4xl font-black text-gold-light mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                41st International Cultures–Immigrants Parade
              </div>
              <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">
                A moving world-cultures showcase where national contingents, families, youth, soccer clubs, folk groups, bands, artists, and organizations parade, perform, dance, exhibit, and represent the cultures that built New York.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-7">
                <div>
                  <div className="text-3xl mb-1">📅</div>
                  <div className="text-white font-bold text-lg">Saturday</div>
                  <div className="text-gold-light text-sm font-semibold">June 13, 2026</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">🕚</div>
                  <div className="text-white font-bold text-lg">11:00 AM</div>
                  <div className="text-gold-light text-sm font-semibold">Parade Step-Off</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">📍</div>
                  <div className="text-white font-bold text-lg">Avenue of the Americas</div>
                  <div className="text-gold-light text-sm font-semibold">42nd to 57th Street</div>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-white/10 text-center text-sm">
                <span className="text-white/70">Member Organizations participate free as a benefit.</span>
                <span className="mx-2 text-white/30">·</span>
                <span className="text-white/70">Non-member organizations: $5,000 contribution after review.</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap mb-8" style={{ animation: 'iaFadeUp 1.4s ease' }}>
              <Link href="/parade-registration" className="bg-gold text-navy px-8 py-4 rounded-xl font-black text-lg no-underline hover:bg-gold-light transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5">
                🎉 Register for the Parade →
              </Link>
              <Link href="/register-organization" className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg no-underline hover:bg-white/20 hover:border-gold transition-all">
                Register Your Organization
              </Link>
              <Link href="/join-seed" className="bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg no-underline hover:bg-teal-light transition-all">
                Economic Empowerment
              </Link>
            </div>

            <div className="bg-white/[.06] border border-white/10 rounded-xl px-5 py-4 inline-block mb-6">
              <p className="text-gold-light text-sm md:text-base font-bold">First 1,000,000 Founding Members Join Free for Life</p>
              <p className="text-white/60 text-xs mt-1">Individual members — <Link href="/register" className="text-gold underline">join now</Link></p>
            </div>

            <div className="text-2xl md:text-3xl leading-loose opacity-85" aria-label="International flags representing participating communities">
              🇺🇸 🇲🇽 🇨🇴 🇧🇷 🇭🇹 🇩🇴 🇯🇲 🇪🇨 🇵🇪 🇬🇹 🇭🇳 🇸🇻 🇳🇬 🇬🇭 🇸🇳 🇪🇹 🇮🇳 🇵🇰 🇧🇩 🇨🇳 🇵🇭 🇰🇷 🇻🇳 🇮🇷 🇵🇸 🇱🇧 🇪🇬 🇲🇦 🇵🇱 🇮🇪 🇮🇹 🇵🇹 🇬🇧 🇩🇪 🇫🇷 🇹🇷 🇯🇵 🇹🇭
            </div>
            <p className="text-white/55 text-sm mt-4">Since 1976 · UN ECOSOC consultative status since 1989 · 190+ countries</p>
          </div>
        </div>
      </section>

      {/* ALL CULTURES WELCOME */}
      <section className="bg-gold py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-navy text-lg md:text-xl font-bold leading-relaxed">
            Every community has a place: national federations, socio-cultural organizations, associations, clubs, consulates, UN Missions, cultural and business attachés, soccer/fútbol clubs, youth groups, folk groups, bands, cultural schools, families, and diaspora leaders.
          </p>
          <p className="text-navy/70 text-sm mt-2">Tibet, Taiwan, Lebanon, Palestine, Indigenous/native nations, diaspora communities, and all cultural communities are welcome to be represented respectfully.</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-navy border-b-[3px] border-gold">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {[{ n: '190+', l: 'Countries' }, { n: '1976', l: 'Founded' }, { n: '41', l: 'Annual Parades' }, { n: '🇺🇳', l: 'UN ECOSOC' }, { n: 'June 13', l: '2026 Parade' }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>{s.n}</div>
              <div className="text-[0.65rem] opacity-80 uppercase tracking-widest text-white mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO SHOULD PARTICIPATE */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Who Should Parade, Perform & Represent Their Culture on June 13</h2>
          <p className="text-center text-gray-500 max-w-3xl mx-auto mb-8 text-sm leading-relaxed">
            If you lead a community, represent a nation, organize a cultural group, coach a youth team, serve a consulate, or help your people be seen with dignity — this invitation is for you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['National Contingents', 'Federations & Associations', 'Socio-Cultural Organizations', 'Immigrant & Diaspora Groups', 'Soccer / Fútbol Clubs', 'Youth & Children Teams', 'Dance, Music & Folk Groups', 'Cultural Schools & Bands', 'Consulates & UN Missions', 'Cultural / Business Attachés', 'Tourism Boards & Chambers', 'Families & Community Leaders'].map(item => (
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
              { level: 'Emerging Organization', amount: '$275K', d: 'Start organizing members, collecting dues, participating in programs, and building the foundation for sustainable support.' },
              { level: 'Growing Federation', amount: '$550K', d: 'Activate chapters, merchants, professionals, sponsors, and cultural participation to grow recurring support.' },
              { level: 'National Federation', amount: '$950K+', d: 'Coordinate national contingents, member organizations, merchants, Passport to the World participation, pavilions, sponsorships, and long-term economic development.' },
            ].map(c => (
              <div key={c.level} className="card border-t-4 border-t-teal">
                <div className="text-2xl font-black text-teal mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{c.amount}</div>
                <h3 className="text-base font-bold text-navy mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{c.level}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 italic max-w-xl mx-auto mb-8">Illustrative scenarios only. Depending on activation, membership growth, merchant enrollment, sponsorships, and program implementation, Economic Empowerment Member Organizations may work toward meaningful yearly sustainable income. Results are not guaranteed and depend on execution.</p>
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
              { icon: '🎉', t: 'Parade', d: 'June 13, 2026. Your culture, your music, your moment. Free for member organizations.', href: '/parade-registration', cta: 'Register →' },
              { icon: '🏛', t: 'Organizations', d: '$100/month or $1,000/year. Free Parade participation. International visibility.', href: '/register-organization', cta: 'Register →' },
              { icon: '🌱', t: 'Economic Empowerment', d: 'Build sustainable income through S.E.E.D. — membership, merchants, Passport to the World.', href: '/join-seed', cta: 'Explore →' },
              { icon: '🌐', t: 'Celebration', d: 'A week-long Mini-World’s Fair — pavilions, conference at the UN, awards, and the Parade.', href: '/international-cultures-celebration', cta: 'Learn More →' },
            ].map(p => (
              <Link key={p.t} href={p.href} className="bg-white/[.04] border border-white/10 rounded-xl p-5 no-underline hover:border-gold/50 transition-all group">
                <div className="text-2xl mb-2">{p.icon}</div><h3 className="text-sm font-bold text-gold-light mb-1 group-hover:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{p.t}</h3><p className="text-white/50 text-xs leading-relaxed mb-2">{p.d}</p><span className="text-gold text-xs font-semibold">{p.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CELEBRATION MEDIA */}
      <section className="py-12 bg-warm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Share the Story Your Community Brings to New York</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto mb-6">Photos and videos speak 1,000 words. CulturesCelebration.com is the official home for Celebration photos, videos, archives, national contingents, and cultural presentations from 1986 forward.</p>
          <Link href="https://www.culturescelebration.com" className="btn-gold">Visit CulturesCelebration.com →</Link>
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
            {[{ type: 'Story', title: 'From a Suitcase to 40 Employees', tag: 'Lagos → Toronto' }, { type: 'Mayor', title: '“This City Would Not Function Without Immigrants”', tag: 'Duisburg, Germany' }, { type: 'Success', title: 'Undocumented at Nine. Doctor at Twenty-Three.', tag: 'Southwest USA' }].map(v => (
              <article key={v.title} className="card"><span className="bg-gold/15 text-gold-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{v.type}</span><h3 className="text-sm font-bold text-navy mt-2 mb-1 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h3><p className="text-xs text-gray-400 italic">{v.tag}</p></article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy py-12 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>This Saturday, June 13, 2026.<br /><span className="text-gold-light">The Avenue of the Americas is waiting for your culture.</span></h2>
          <p className="text-white/60 text-sm">Bring your flag. Bring your music. Bring your youth. Bring your story. Let New York see what your community contributes to America.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link href="/parade-registration" className="bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-lg font-bold text-sm no-underline transition-all">Register for the Parade →</Link>
            <Link href="/register-organization" className="btn-gold text-sm px-8 py-3.5">Register Your Organization →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
