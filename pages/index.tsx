import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return { props: {
    title: 'Home',
    description: 'Empowering immigrants, celebrating cultures, and building economic independence across 190+ countries since 1976. UN ECOSOC Consultative Status.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: '41st International Cultures–Immigrants Parade',
      startDate: '2026-06-13T11:00:00-04:00',
      endDate: '2026-06-13T15:00:00-04:00',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: 'Avenue of the Americas', address: { '@type': 'PostalAddress', streetAddress: '6th Avenue, 42nd to 57th Street', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } },
      organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' },
      description: 'The world\'s premier celebration of immigrant cultures — dance, music, floats, and pageantry from every continent.',
    },
  } };
};

const voices = [
  { type: 'Story', title: 'From a Suitcase to a Business That Employs 40 People', desc: 'Amara arrived in Toronto from Lagos with two bags and a phone number. Today she runs a catering company celebrating the food of three continents — and her neighborhood considers her irreplaceable.', tag: 'Entrepreneur · Lagos → Toronto' },
  { type: 'Mayor', title: '"This City Would Not Function Without Immigrants"', desc: 'The mayor of a German industrial city explains how immigrant workers, entrepreneurs, and families revitalized neighborhoods that were emptying — and why his administration actively recruits newcomers.', tag: 'Civic Leader · Duisburg, Germany' },
  { type: 'Family', title: 'Our Daughter Speaks Three Languages. We Speak Hope.', desc: 'A family from Damascus, now in Berlin, shares how their daughter became the bridge between two worlds — translating not just words at school meetings, but understanding between cultures.', tag: 'Family · Damascus → Berlin' },
  { type: 'Video', title: 'The Nurse Who Saved a Ward — and Came From the Philippines', desc: 'A short documentary about Maria, who left Manila to work in a London hospital. When the ward was understaffed during a crisis, she trained six colleagues. The hospital credits her with saving the department.', tag: '🎬 Video · Manila → London' },
  { type: 'Advocate', title: 'Why Every Country Needs More Immigrants — The Data Is Clear', desc: 'Declining birth rates in Japan, Italy, South Korea. Aging populations in Canada, Germany, Australia. Labor shortages everywhere. Nations that welcome immigrants grow stronger. Nations that close doors grow older.', tag: 'Global Research · Demographic Analysis' },
  { type: 'Culture', title: 'The Festival That Changed a City\u2019s Mind', desc: 'When a small town in Yorkshire hosted its first multicultural festival, 200 people came. The next year, 3,000. By the third year, the town council made it permanent — and property values rose.', tag: 'Cultural Leader · Yorkshire, UK' },
  { type: 'Podcast', title: 'Voices Without Borders: A Conversation With Three Continents', desc: 'A live podcast recording where an Ethiopian poet in Nairobi, a Colombian architect in Madrid, and a Vietnamese chef in Melbourne discuss what home means when you carry it inside you.', tag: '🎙 Podcast · Nairobi · Madrid · Melbourne' },
  { type: 'Success', title: 'I Was Undocumented at Nine. I Became a Doctor at Twenty-Three.', desc: 'Dr. Reyes shares the 14-year journey from crossing a border to completing medical residency — and why she chose to practice in the same community that raised her, because they never gave up on her.', tag: 'Dr. Reyes · Southwest USA' },
  { type: 'Civic Leader', title: 'A Brazilian Mayor Explains Why He Built an Immigrant Welcome Center', desc: 'In a mid-size city in southern Brazil, Venezuelan and Haitian families were sleeping in bus stations. The mayor built a center — and within a year, 80% of the families had jobs, housing, and their children in school.', tag: 'Mayor · Curitiba, Brazil' },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden text-white" style={{ padding: '80px 0 100px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.92) 0%, rgba(27,58,92,.85) 50%, rgba(14,124,107,.8) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-gold/20 border border-gold text-gold-light px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5">Since 1976 · UN ECOSOC Consultative Status</div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
              You left everything behind<br />so your family could have<br /><span className="text-gold-light">everything ahead.</span>
            </h1>
            <p className="text-lg leading-relaxed opacity-90 mb-8 font-light max-w-lg">
              You may have left Lagos or Lima, Damascus or Dhaka, Havana or Hanoi. You carried your children, your hopes, and your culture across borders most people will never cross. That took extraordinary courage. Immigrants Alliance exists in 190+ countries so that you — and your family — never have to face what comes next alone. We help you find safety, build your future, protect your dignity, and celebrate the culture only you can give the world.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/register" className="btn-gold">Join Us — It&rsquo;s Free →</Link>
              <Link href="/parade-registration" className="btn-outline">🎉 41st International Cultures–Immigrants Parade</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Stats ═══ */}
      <section className="bg-navy border-b-[3px] border-gold">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ num: '190+', label: 'Countries Served' }, { num: '1976', label: 'Year Founded' }, { num: '41', label: 'Annual Parades' }, { num: '🇺🇳', label: 'UN ECOSOC Status' }].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>{s.num}</div>
              <div className="text-xs opacity-80 uppercase tracking-widest text-white">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Mission ═══ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Why We Exist</span>
            <h2 className="text-4xl font-bold mb-4 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Your culture is not a problem to solve.<br />It is a gift the world needs.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { icon: '🌐', title: 'You Are Not Alone', desc: 'Whether you pray in a mosque in Marseille, a temple in Toronto, a church in Caracas, or a synagogue in São Paulo — there are people in 190+ countries who understand your journey because they have lived it. When you join this Alliance, you join a family.' },
              { icon: '💪', title: 'Your Independence Matters', desc: 'We don\'t offer charity. We offer tools. Through S.E.E.D. and MundusPass, we help you and your organization build real financial independence — so your children never have to depend on anyone else\'s generosity. Your skills have value. Your work has dignity. Your future is yours to build.' },
              { icon: '🎓', title: 'Your Culture Is Medicine', desc: 'Every time a Korean grandmother teaches a neighbor to make kimchi, every time a Dominican band plays in a park, every time an Indian family shares Diwali with the building — prejudice shrinks. Your culture is not a burden. It is the cure for ignorance. You are part of that healing.' },
            ].map((c) => (
              <div key={c.title} className="card">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl text-white mb-5" style={{ background: 'linear-gradient(135deg, #1B3A5C, #0E7C6B)' }}>{c.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ A Message to Every Citizen ═══ */}
      <section className="bg-warm py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label">A Message to Every Nation</span>
          <h2 className="text-3xl font-bold mb-6 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Why your city needs immigrants</h2>
          <div className="text-left space-y-4 text-gray-600 leading-relaxed">
            <p>In every country where birth rates are falling and populations are aging, immigrants are the ones keeping hospitals staffed, schools open, farms productive, and businesses growing. This is not opinion. It is demographic reality.</p>
            <p>The restaurant you love was probably started by an immigrant. The nurse who cared for your parent may have trained in another country. The engineer designing your city&rsquo;s next bridge may have arrived with nothing but a degree and a dream.</p>
            <p>Immigrants don&rsquo;t weaken nations. They build them. They always have. Every great city in human history was made great by the people who came from somewhere else — and chose to stay.</p>
            <p className="font-semibold text-navy">If you are a citizen reading this: welcome your immigrant neighbors. If you are an immigrant reading this: you are already home.</p>
          </div>
        </div>
      </section>

      {/* ═══ 3-Column CTA ═══ */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Your Next Step</span>
            <h2 className="text-4xl font-bold mb-4 text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>Three ways to begin — right now</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { icon: '🏛', title: 'Register Your Organization', desc: 'Whether you lead a cultural association, a religious group, a professional network, or a service provider — there is a place for you in this Alliance. Membership gives you access to funding, events, global recognition, and a worldwide support network.', href: '/register-organization', cta: 'Register Organization →' },
              { icon: '🌱', title: 'Economic Empowerment', desc: 'Your organization deserves more than survival. S.E.E.D. assigns a dedicated Development Officer to help you reach $250,000+ in annual sustainable revenue. Not a grant. Not a donation. Real independence.', href: '/join-seed', cta: 'Apply for S.E.E.D. →' },
              { icon: '🌐', title: 'International Cultures Celebration', desc: 'A week-long celebration — national pavilions, diplomacy, awards, and a parade that turns NYC into the world\'s stage. Full restart: June 2027.', href: '/international-cultures-celebration', cta: 'Explore Celebration →' },
              { icon: '🎉', title: 'March in the Parade', desc: 'June 13, 2026. Fifteen blocks of the Avenue of the Americas become the world\'s proudest stage. Your culture. Your music. Your traditions. Your moment. Free for member organizations.', href: '/parade-registration', cta: 'Register for Parade →' },
            ].map((c) => (
              <div key={c.title} className={`bg-white/5 border ${c.title.includes('S.E.E.D') ? 'border-2 border-gold' : 'border-white/10 hover:border-gold'} rounded-2xl p-8 text-center transition-all`}>
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-bold text-gold-light mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{c.title}</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">{c.desc}</p>
                <Link href={c.href} className="btn-gold text-sm">{c.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SEED Preview ═══ */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,61,46,.94), rgba(14,124,107,.9))' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <span className="section-label" style={{ color: '#E8C36A' }}>🌱 Launching September 15, 2026</span>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Your organization was built to serve your community. S.E.E.D. makes sure it can afford to.</h2>
            <p className="opacity-90 mb-6 leading-relaxed">Most nonprofits are one bad quarter away from closing their doors. S.E.E.D. changes that — with a dedicated Development Officer, a clear revenue plan, and the backing of a global network that believes your mission matters.</p>
            <Link href="/join-seed" className="btn-gold">Economic Empowerment through S.E.E.D. →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ n: '$250K+', l: 'Revenue Goal per Organization' }, { n: '92%', l: 'of NGOs Lack Sustainability' }, { n: '190+', l: 'Countries Served' }, { n: '1:1', l: 'Dedicated Development Officer' }].map((s) => (
              <div key={s.l} className="bg-white/10 border border-white/20 rounded-lg p-5 text-center">
                <strong className="block text-2xl text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>{s.n}</strong>
                <span className="text-xs opacity-80 uppercase tracking-widest">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Safety Intelligence ═══ */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-label">Before You Travel. Before You Move.</span>
            <h2 className="text-4xl font-bold mb-4 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Know before you go.</h2>
            <p className="text-gray-500 leading-relaxed">Our safety tools help you understand conditions in any city or country — so you can make informed decisions for yourself and your family. Search a destination. Check the risk level. Read community guidance. Plan wisely.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { title: 'Discrimination Monitor', desc: 'See where incidents have been reported — by city, by type, by severity. Because the first step to safety is knowing what others have experienced.', href: '/live/discrimination', cta: 'View Reports' },
              { title: 'Interactive Safety Map', desc: 'Red means danger. Yellow means caution. Green means safer. Click any city to see practical guidance for visiting, working, or settling there with your family.', href: '/live/danger-map', cta: 'Open Safety Map' },
              { title: 'Safer Destinations', desc: 'Thinking about relocating? Compare cities by safety ratings, immigrant support services, and community strength — before you make the move.', href: '/live/safe-cities', cta: 'Find Safer Places' },
            ].map((item) => (
              <div key={item.href} className="card flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                <Link href={item.href} className="btn-gold justify-center text-sm">{item.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Global Voices / Immigrant Angels ═══ */}
      <section className="py-20" aria-labelledby="voices-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-label">Global Voices · Immigrant Angels</span>
            <h2 id="voices-heading" className="text-4xl font-bold mb-4 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>The stories that change minds — from every continent</h2>
            <p className="text-gray-500 leading-relaxed">Articles. Videos. Podcasts. Interviews with mayors, cultural leaders, advocates, and families from Lagos to London, from Dhaka to Duisburg. Every immigrant carries a story the world needs to hear. Every welcoming city has a leader who understood that immigrants don&rsquo;t weaken nations — they build them.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voices.map((v) => (
              <article key={v.title} className="card flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold/15 text-gold-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{v.type}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{v.desc}</p>
                <p className="text-xs text-gray-400 italic">{v.tag}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Have a story to share? Know a leader who deserves recognition?</p>
            <Link href="/contact" className="btn-gold text-sm">Submit a Story →</Link>
          </div>
        </div>
      </section>

      {/* ═══ Ecosystem Pathways — elegant teasers ═══ */}
      <section className="bg-navy py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">The Alliance Ecosystem</span>
            <h2 className="text-3xl font-bold mb-3 text-gold-light" style={{ fontFamily: 'Playfair Display, serif' }}>Built for every role in the immigrant journey</h2>
            <p className="text-white/50 text-sm">Whether you lead a cultural organization, run a business, or serve in government — there is a place for you in this movement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🏛', title: 'Organizations', desc: 'Build sustainable income, gain international visibility, and join a federation of socio-cultural organizations that share resources and opportunities.', href: '/join-seed', cta: 'Explore S.E.E.D. →' },
              { icon: '🏪', title: 'Merchants & Professionals', desc: 'Reach immigrant families who trust the Alliance. Offer your services to a growing community of members who value culturally aware businesses.', href: '/register-organization', cta: 'Learn More →' },
              { icon: '🏛️', title: 'Cities & Governments', desc: 'Partner with the Alliance for cultural diplomacy, tourism, and international cooperation. Host a Passport to the World pavilion in your city.', href: '/contact', cta: 'Start a Conversation →' },
              { icon: '⭐', title: 'Leadership & Expansion', desc: 'Help build the Alliance in your country. Become a regional coordinator, a federation partner, or a cultural ambassador for your community.', href: '/contact', cta: 'Express Interest →' },
            ].map(p => (
              <Link key={p.title} href={p.href} className="bg-white/[.04] border border-white/10 rounded-xl p-6 no-underline hover:border-gold/50 transition-all group">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="text-base font-bold text-gold-light mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>{p.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-3">{p.desc}</p>
                <span className="text-gold text-xs font-semibold group-hover:underline">{p.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="bg-navy py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            You traveled thousands of miles<br />to give your family a better life.<br /><span className="text-gold-light">We are here to help you build it.</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">190+ countries. Five decades. Every language, every faith, every background. One promise: you and your family will never walk alone.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register" className="btn-gold text-base px-8 py-4">Join the Alliance — Free →</Link>
            <Link href="/register-organization" className="btn-outline text-base px-8 py-4">Register Your Organization →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
