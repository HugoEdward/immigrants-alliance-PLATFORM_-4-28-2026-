import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'Home',
    description: 'Immigrants Alliance — a federation connecting immigrant, diaspora, cultural, civic, and community organizations in 190+ countries. Economic Empowerment through S.E.E.D., International Cultures Celebration, and the International Cultures–Immigrants Parade.',
    schema: {
      '@context': 'https://schema.org', '@type': 'Event',
      name: '41st International Cultures–Immigrants Parade',
      startDate: '2026-06-13T11:00:00-04:00',
      endDate: '2026-06-13T16:00:00-04:00',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: 'Avenue of the Americas', address: { '@type': 'PostalAddress', streetAddress: '6th Avenue, 42nd to 57th Street', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } },
      organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' },
    },
  },
});

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO — 5-second clarity ═══ */}
      <section className="relative overflow-hidden text-white" style={{ padding: '80px 0 100px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.92), rgba(27,58,92,.85), rgba(14,124,107,.8))' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-gold/20 border border-gold text-gold-light px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5">Since 1976 · UN ECOSOC · 190+ Countries</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.08]" style={{ fontFamily: 'Playfair Display, serif' }}>
              You left everything behind<br />so your family could have<br /><span className="text-gold-light">everything ahead.</span>
            </h1>
            <p className="text-lg leading-relaxed opacity-90 mb-8 font-light max-w-lg">
              From Lagos to Lima, Damascus to Dhaka — you carried your family and your culture across borders most people will never cross. Immigrants Alliance exists so you never face what comes next alone.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/register-organization" className="btn-gold">Register Your Organization →</Link>
              <Link href="/parade-registration" className="btn-outline">🎉 Register for the Parade</Link>
            </div>
            <div className="mt-6 bg-white/[.06] border border-white/10 rounded-xl px-5 py-3 inline-block">
              <p className="text-gold-light text-sm font-bold">First 1,000,000 Founding Members Join Free for Life</p>
              <p className="text-white/60 text-xs mt-1">Individual members — <Link href="/register" className="text-gold underline">join now</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR — immediate credibility ═══ */}
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

      {/* ═══ WHAT WE DO — 3 clear promises ═══ */}
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

      {/* ═══ FOUR PATHWAYS — one clear section for all audiences ═══ */}
      <section className="bg-navy py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>Choose your path</h2>
            <p className="text-white/50 text-sm mt-2">Whether you lead an organization, run a business, serve in government, or want to participate — there is a place for you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🏛', t: 'Organizations', d: 'Join the federation. Access Economic Empowerment through S.E.E.D., free Celebration participation, and international visibility.', href: '/register-organization', cta: 'Register →' },
              { icon: '🎉', t: 'Parade', d: 'June 13, 2026. Avenue of the Americas. Your culture, your music, your moment. Free for members.', href: '/parade-registration', cta: 'Register →' },
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

      {/* ═══ WHY CITIES NEED IMMIGRANTS — the argument ═══ */}
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

      {/* ═══ SAFETY INTELLIGENCE — compact ═══ */}
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

      {/* ═══ GLOBAL VOICES — 3 featured stories, not 9 ═══ */}
      <section className="bg-warm py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Stories that change minds</h2>
            <Link href="/voices" className="text-teal text-sm font-semibold hover:underline no-underline hidden md:block">All stories →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { type: 'Story', title: 'From a Suitcase to 40 Employees', desc: 'Amara arrived in Toronto from Lagos with two bags. Today she runs a catering company celebrating three continents.', tag: 'Lagos → Toronto' },
              { type: 'Mayor', title: '"This City Would Not Function Without Immigrants"', desc: 'A German mayor explains why his administration actively recruits immigrant families and entrepreneurs.', tag: 'Duisburg, Germany' },
              { type: 'Success', title: 'Undocumented at Nine. Doctor at Twenty-Three.', desc: 'Dr. Reyes chose to practice in the community that raised her — because they never gave up on her.', tag: 'Southwest USA' },
            ].map(v => (
              <article key={v.title} className="card">
                <span className="bg-gold/15 text-gold-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{v.type}</span>
                <h3 className="text-base font-bold text-navy mt-3 mb-2 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-2">{v.desc}</p>
                <p className="text-xs text-gray-400 italic">{v.tag}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-6 md:hidden"><Link href="/voices" className="text-teal text-sm font-semibold hover:underline no-underline">All stories →</Link></div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF — testimonials ═══ */}
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

      {/* ═══ FINAL CTA — one clear action ═══ */}
      <section className="bg-navy py-14 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            You traveled thousands of miles.<br /><span className="text-gold-light">We are here to help you build what comes next.</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">190+ countries. Every language, every faith, every background.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/register-organization" className="btn-gold text-base px-8 py-3.5">Register Your Organization →</Link>
            <Link href="/parade-registration" className="btn-outline text-base px-8 py-3.5">Register for the Parade →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
