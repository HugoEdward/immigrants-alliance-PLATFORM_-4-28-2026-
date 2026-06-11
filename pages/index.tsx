import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'Immigrants Are the Spirit of the World — 41st Parade THIS SATURDAY',
    description: '41st International Cultures–Immigrants Parade: THIS SATURDAY June 13, 2026, 11AM, Avenue of the Americas, 42nd–57th St, NYC. Immigrants are the engine of every developed nation. Join us!',
    schema: [
      {
        '@context': 'https://schema.org', '@type': 'Event',
        name: '41st International Cultures–Immigrants Parade',
        startDate: '2026-06-13T11:00:00-04:00',
        endDate: '2026-06-13T16:00:00-04:00',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: { '@type': 'Place', name: 'Avenue of the Americas, Midtown Manhattan', address: { '@type': 'PostalAddress', streetAddress: '6th Avenue, 42nd to 57th Street', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } },
        organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' },
        description: 'The 41st International Cultures Celebration and Immigrants Parade. A vibrant showcase of dances, music, floats, and traditions from every continent.',
        image: 'https://immigrantsalliance.org/IMMIGRANTS_ALLIANCE_Logo.jpg',
        isAccessibleForFree: true,
      },
      {
        '@context': 'https://schema.org', '@type': 'NGO',
        name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org',
        foundingDate: '1976', areaServed: 'Worldwide',
        memberOf: { '@type': 'Organization', name: 'United Nations ECOSOC' },
      },
    ],
  },
});

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          PARADE HERO — THIS SATURDAY — Maximum urgency
          ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        {/* Animated gradient background */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #1B3A5C 25%, #0E7C6B 50%, #C9A84C 75%, #C0392B 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 12s ease infinite',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.15), transparent 70%)' }} />

        <style jsx>{`
          @keyframes gradientShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
          @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="text-center max-w-4xl mx-auto">

            {/* THIS SATURDAY badge */}
            <div className="inline-block mb-6" style={{ animation: 'pulse 2s ease infinite' }}>
              <div className="bg-red-600 text-white px-8 py-3 rounded-full text-lg md:text-xl font-black tracking-wide uppercase shadow-2xl border-2 border-red-400">
                🎉 THIS SATURDAY — JUNE 13
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05]" style={{ fontFamily: 'Playfair Display, serif', animation: 'fadeInUp 0.8s ease' }}>
              Immigrants Are<br />
              <span className="text-gold-light" style={{ textShadow: '0 0 40px rgba(201,168,76,0.4)' }}>the Spirit of the World!</span>
            </h1>

            {/* Sub-headlines */}
            <div className="space-y-2 mb-8" style={{ animation: 'fadeInUp 1s ease' }}>
              <p className="text-xl md:text-2xl font-bold text-white/90">
                The Engine of the Economy of Every Developed Nation.
              </p>
              <p className="text-lg md:text-xl text-gold-light font-semibold italic">
                Let&rsquo;s Showcase This Saturday — Our Strength Together!
              </p>
            </div>

            {/* Event details — big and clear */}
            <div className="bg-white/[.08] backdrop-blur-sm border border-gold/40 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8" style={{ animation: 'fadeInUp 1.2s ease' }}>
              <div className="text-3xl md:text-4xl font-black text-gold-light mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                41st International Cultures–Immigrants Parade
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mt-6">
                <div className="text-center">
                  <div className="text-3xl mb-1">📅</div>
                  <div className="text-white font-bold text-lg">Saturday</div>
                  <div className="text-gold-light text-sm font-semibold">June 13, 2026</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">🕚</div>
                  <div className="text-white font-bold text-lg">11:00 AM</div>
                  <div className="text-gold-light text-sm font-semibold">Step-Off</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">📍</div>
                  <div className="text-white font-bold text-lg">6th Avenue</div>
                  <div className="text-gold-light text-sm font-semibold">42nd → 57th Street</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <span className="text-white/60 text-sm">Midtown Manhattan, New York City</span>
                <span className="mx-2 text-white/30">·</span>
                <span className="text-white/60 text-sm">FREE for Member Organizations</span>
              </div>
            </div>

            {/* CTAs — large and urgent */}
            <div className="flex gap-4 justify-center flex-wrap mb-8" style={{ animation: 'fadeInUp 1.4s ease' }}>
              <Link href="/parade-registration" className="bg-gold text-navy px-8 py-4 rounded-xl font-black text-lg no-underline hover:bg-gold-light transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5">
                🎉 Register for the Parade →
              </Link>
              <Link href="/register-organization" className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg no-underline hover:bg-white/20 hover:border-gold transition-all">
                Register Your Organization
              </Link>
            </div>

            {/* Flags — visual representation of unity */}
            <div className="text-2xl md:text-3xl leading-loose opacity-80" style={{ animation: 'fadeInUp 1.6s ease' }}>
              🇺🇸 🇲🇽 🇨🇴 🇧🇷 🇭🇹 🇩🇴 🇯🇲 🇪🇨 🇵🇪 🇬🇹 🇭🇳 🇸🇻 🇳🇬 🇬🇭 🇸🇳 🇪🇹 🇮🇳 🇵🇰 🇧🇩 🇨🇳 🇵🇭 🇰🇷 🇻🇳 🇮🇷 🇵🇸 🇱🇧 🇪🇬 🇲🇦 🇵🇱 🇮🇪 🇮🇹 🇵🇹 🇬🇧 🇩🇪 🇫🇷 🇹🇷 🇯🇵 🇹🇭
            </div>

            <p className="text-white/50 text-sm mt-4">
              Since 1976 · UN ECOSOC Consultative Status since 1989 · 190+ Countries
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ALL CULTURES WELCOME BANNER ═══ */}
      <section className="bg-gold py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-navy text-lg md:text-xl font-bold leading-relaxed">
            Immigrants from <strong>ALL</strong> cultural backgrounds — including Iranians, Palestinians, and communities from every nation on Earth — are encouraged and welcome at Immigrants Alliance and to participate in ALL our programs and events.
          </p>
          <Link href="/register" className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-bold text-sm mt-4 no-underline hover:bg-opacity-90">Join Free — First 1,000,000 Members →</Link>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="bg-navy border-b-[3px] border-gold">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ n: '190+', l: 'Countries' }, { n: '1976', l: 'Founded' }, { n: '41', l: 'Annual Parades' }, { n: '🇺🇳', l: 'UN ECOSOC Status' }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>{s.n}</div>
              <div className="text-[0.65rem] opacity-80 uppercase tracking-widest text-white mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHAT WE DO ═══ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Your culture is not a problem to solve.<br />It is a gift the world needs.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🤝', t: 'You Are Not Alone', d: 'People in 190+ countries understand your journey because they have lived it. When you join, you join a family.' },
              { icon: '💪', t: 'Your Independence Matters', d: 'We offer tools, not charity. Build real financial independence so your children never have to depend on anyone else\u2019s generosity.' },
              { icon: '🎓', t: 'Your Culture Is Medicine', d: 'Every time cultures meet — prejudice shrinks. Your traditions, your food, your music, your language — they heal the world.' },
            ].map(c => (
              <div key={c.t} className="card">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white mb-4" style={{ background: 'linear-gradient(135deg, #1B3A5C, #0E7C6B)' }}>{c.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>{c.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOUR PATHWAYS ═══ */}
      <section className="bg-navy py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>Choose your path</h2>
            <p className="text-white/50 text-sm mt-2">Whether you lead an organization, run a business, serve in government, or want to participate — there is a place for you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🏛', t: 'Organizations', d: 'Join the federation. Access Economic Empowerment through S.E.E.D., free Celebration participation, and international visibility.', href: '/register-organization', cta: 'Register →' },
              { icon: '🎉', t: 'Parade — THIS SATURDAY', d: 'June 13, 2026. Avenue of the Americas. 11 AM. Your culture, your music, your moment. Free for members.', href: '/parade-registration', cta: 'Register Now →' },
              { icon: '🌱', t: 'Economic Empowerment', d: 'Build sustainable income through S.E.E.D. — membership, merchants, Passport to the World, and MundusPASS.', href: '/join-seed', cta: 'Apply →' },
              { icon: '🌐', t: 'Celebration', d: 'A week-long Mini-World\u2019s Fair — national pavilions, conference at the UN, awards, and the Parade. June 2027.', href: '/international-cultures-celebration', cta: 'Explore →' },
            ].map(p => (
              <Link key={p.t} href={p.href} className="bg-white/[.04] border border-white/10 rounded-xl p-6 no-underline hover:border-gold/50 transition-all group">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="text-base font-bold text-gold-light mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>{p.t}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-3">{p.d}</p>
                <span className="text-gold text-xs font-semibold">{p.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CITIES NEED IMMIGRANTS ═══ */}
      <section className="bg-warm py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-navy text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Why your city needs immigrants</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
            <p>In every country where birth rates are falling and populations are aging, immigrants keep hospitals staffed, schools open, farms productive, and businesses growing. This is not opinion. It is demographic reality.</p>
            <p>The restaurant you love was probably started by an immigrant. The nurse who cared for your parent may have trained in another country. The engineer designing your city&rsquo;s next bridge may have arrived with nothing but a degree and a dream.</p>
            <p className="font-semibold text-navy">If you are a citizen reading this: welcome your immigrant neighbors. If you are an immigrant reading this: you are already home.</p>
          </div>
        </div>
      </section>

      {/* ═══ SAFETY INTELLIGENCE ═══ */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-navy text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Know before you go</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: 'Safety Map', d: 'Red = danger. Yellow = caution. Green = safer. Click any city for guidance.', href: '/live/danger-map', cta: 'Open Map' },
              { t: 'Discrimination Monitor', d: 'Community-reported incidents by city, type, and severity.', href: '/live/discrimination', cta: 'View Reports' },
              { t: 'Safer Destinations', d: 'Compare cities by safety, support services, and community strength.', href: '/live/safe-cities', cta: 'Find Places' },
            ].map(item => (
              <div key={item.t} className="card flex flex-col">
                <h3 className="text-lg font-bold mb-2 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>{item.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{item.d}</p>
                <Link href={item.href} className="btn-gold justify-center text-sm">{item.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STORIES ═══ */}
      <section className="bg-warm py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Stories that change minds</h2>
            <Link href="/voices" className="text-teal text-sm font-semibold hover:underline no-underline hidden md:block">All stories →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { type: 'Story', title: 'From a Suitcase to 40 Employees', desc: 'Amara arrived in Toronto from Lagos with two bags. Today she runs a catering company celebrating three continents.', tag: 'Lagos → Toronto' },
              { type: 'Mayor', title: '\u201CThis City Would Not Function Without Immigrants\u201D', desc: 'A German mayor explains why his administration actively recruits immigrant families and entrepreneurs.', tag: 'Duisburg, Germany' },
              { type: 'Success', title: 'Undocumented at Nine. Doctor at Twenty-Three.', desc: 'Dr. Reyes chose to practice in the community that raised her \u2014 because they never gave up on her.', tag: 'Southwest USA' },
            ].map(v => (
              <article key={v.title} className="card">
                <span className="bg-gold/15 text-gold-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{v.type}</span>
                <h3 className="text-base font-bold text-navy mt-3 mb-2 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-2">{v.desc}</p>
                <p className="text-xs text-gray-400 italic">{v.tag}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { q: 'The Alliance connected me with legal help when I had no one to turn to. Within two days, I had an attorney.', n: 'Maria G.', l: 'New York' },
              { q: 'S.E.E.D. transformed our organization. We went from surviving on grants to building real income.', n: 'Dr. Akin O.', l: 'Nairobi' },
              { q: 'The Parade gave my children pride in their heritage. They finally saw their culture celebrated.', n: 'Priya K.', l: 'London' },
            ].map(t => (
              <blockquote key={t.n} className="bg-warm rounded-2xl p-6 border border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">&ldquo;{t.q}&rdquo;</p>
                <footer className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold">{t.n.split(' ').map(w => w[0]).join('')}</div>
                  <div><cite className="text-sm font-bold text-navy not-italic">{t.n}</cite><p className="text-[0.65rem] text-gray-400">{t.l}</p></div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA — PARADE FOCUS ═══ */}
      <section className="py-16 text-white text-center" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C, #0E7C6B)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-4xl mb-4">🌍</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            This Saturday, We March Together.
          </h2>
          <p className="text-xl text-gold-light font-bold mb-2">
            June 13 · 11 AM · Avenue of the Americas · 42nd to 57th Street
          </p>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">190+ countries. Every language, every faith, every background. All welcome.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/parade-registration" className="bg-gold text-navy px-8 py-4 rounded-xl font-black text-lg no-underline hover:bg-gold-light transition-all shadow-lg">🎉 Register for the Parade →</Link>
            <Link href="/register" className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg no-underline hover:bg-white/20 transition-all">Join Free →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
