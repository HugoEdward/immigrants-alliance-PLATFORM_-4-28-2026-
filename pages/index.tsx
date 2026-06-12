import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: '41st International Cultures–Immigrants Parade — Tomorrow, Saturday — NYC',
    description: '41st International Cultures–Immigrants Parade. June 13, 2026, 11AM, Avenue of the Americas, 42nd–57th St, New York City. 41 years of celebrating every culture. UN ECOSOC since 1989.',
    schema: [
      {
        '@context': 'https://schema.org', '@type': 'Event',
        name: '41st International Cultures–Immigrants Parade',
        startDate: '2026-06-13T11:00:00-04:00',
        endDate: '2026-06-13T16:00:00-04:00',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: { '@type': 'Place', name: 'Avenue of the Americas', address: { '@type': 'PostalAddress', streetAddress: '6th Avenue, 42nd to 57th Street', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } },
        organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' },
        description: 'The 41st International Cultures Celebration and Immigrants Parade. A vibrant showcase of dances, music, floats, and traditions from every continent. Since 1986.',
        image: 'https://immigrantsalliance.org/IMMIGRANTS_ALLIANCE_Logo.jpg',
        isAccessibleForFree: true,
      },
    ],
  },
});

export default function HomePage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0A1628',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1600&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.3,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.9) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '60px 24px', maxWidth: '900px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(192,57,43,0.9)',
            color: '#fff',
            padding: '8px 24px',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            🎉 Tomorrow, Saturday — June 13, 2026
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            41st International Cultures—<br />
            <span style={{ color: '#C9A84C' }}>Immigrants Parade</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '8px',
            fontWeight: 500,
          }}>
            June 13, 2026 · 11:00 AM · Avenue of the Americas
          </p>
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '32px',
          }}>
            42nd to 57th Street · Midtown Manhattan · New York City
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/parade-registration" style={{
              background: '#C9A84C', color: '#0A1628',
              padding: '14px 28px', borderRadius: '6px',
              fontWeight: 800, fontSize: '0.95rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              About the Parade
            </Link>
            <Link href="/programs" style={{
              background: 'transparent', color: '#FFFFFF',
              padding: '14px 28px', borderRadius: '6px',
              fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.3)',
              display: 'inline-block',
            }}>
              Programs
            </Link>
            <Link href="/international-cultures-celebration" style={{
              background: 'transparent', color: '#C9A84C',
              padding: '14px 28px', borderRadius: '6px',
              fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none',
              border: '2px solid rgba(201,168,76,0.3)',
              display: 'inline-block',
            }}>
              International Cultures Celebration 2027
            </Link>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', marginTop: '28px' }}>
            Since 1976 · UN ECOSOC Consultative Status since 1989 · 190+ Countries
          </p>
        </div>
      </section>

      {/* ══════ STATISTICS ROW ══════ */}
      <section style={{ background: '#0D2240', borderTop: '3px solid #C9A84C', borderBottom: '3px solid #C9A84C' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto', padding: '36px 24px',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px',
          textAlign: 'center',
        }}>
          {[
            { num: '41', label: 'Years' },
            { num: '🌍', label: 'All Cultures' },
            { num: '1000s', label: 'of Participants' },
            { num: '🇺🇳', label: 'UN ECOSOC Consultative Status' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '2rem', fontWeight: 900, color: '#C9A84C' }}>{s.num}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ WELCOME MESSAGE ══════ */}
      <section style={{ background: '#C9A84C', padding: '40px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.6rem', color: '#0A1628', marginBottom: '12px', fontWeight: 800 }}>
            Immigrants Are the Spirit of the World
          </h2>
          <p style={{ color: '#0A1628', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '8px' }}>
            The engine of the economy of every developed nation. Your culture is not a problem — it is a gift the world needs.
          </p>
          <p style={{ color: '#0A1628', fontSize: '0.88rem', lineHeight: 1.6, opacity: 0.85 }}>
            Immigrants from <strong>all</strong> cultural backgrounds — including Iranians, Palestinians, and communities from every nation — are welcome to participate in all our programs and events.
          </p>
        </div>
      </section>

      {/* ══════ FOUR PROGRAM CARDS ══════ */}
      <section style={{ background: '#0A1628', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: '10px' }}>Programs &amp; Initiatives</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '2rem', fontWeight: 800, color: '#FFFFFF' }}>Building Sustainable Futures</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}>
            {[
              {
                icon: '🌱', title: 'Economic Empowerment / S.E.E.D.',
                desc: 'Transform your nonprofit into a self-sustaining institution. Dedicated Development Officer. $250K+ revenue goal. Launching September 15, 2026.',
                href: '/join-seed', cta: 'Learn More →',
              },
              {
                icon: '🎪', title: 'International Cultures Celebration',
                desc: 'A week-long celebration of world cultures — national pavilions, conference, Star of Harmony Award, Passport to the World, and the Immigrants Parade.',
                href: '/international-cultures-celebration', cta: 'Explore →',
              },
              {
                icon: '🎉', title: 'Immigrants Parade',
                desc: 'The 41st edition — Tomorrow, Saturday, June 13. Avenue of the Americas, 42nd to 57th Street. Dances, music, floats, and traditions from every continent.',
                href: '/parade-registration', cta: 'Learn More →',
              },
              {
                icon: '🌐', title: 'Global Voices',
                desc: 'Stories from immigrant communities worldwide. Success stories, civic voices, family journeys — the people building bridges between cultures.',
                href: '/voices', cta: 'Read Stories →',
              },
            ].map(card => (
              <Link key={card.title} href={card.href} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '10px',
                padding: '28px 24px',
                textDecoration: 'none',
                display: 'block',
                transition: 'border-color 0.2s',
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1rem', fontWeight: 700, color: '#C9A84C', marginBottom: '8px' }}>{card.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '12px' }}>{card.desc}</p>
                <span style={{ fontSize: '0.82rem', color: '#C9A84C', fontWeight: 600 }}>{card.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHY CITIES NEED IMMIGRANTS ══════ */}
      <section style={{ background: '#0D2240', padding: '56px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', textAlign: 'center', marginBottom: '20px' }}>
            Why Your City Needs Immigrants
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '14px' }}>
            In every country where birth rates are falling and populations are aging, immigrants keep hospitals staffed, schools open, farms productive, and businesses growing. This is not opinion. It is demographic reality.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '14px' }}>
            The restaurant you love was probably started by an immigrant. The nurse who cared for your parent may have trained in another country. The engineer designing your city&rsquo;s next bridge may have arrived with nothing but a degree and a dream.
          </p>
          <p style={{ color: '#FFFFFF', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 600 }}>
            If you are a citizen: welcome your immigrant neighbors. If you are an immigrant: you are already home.
          </p>
        </div>
      </section>

      {/* ══════ PATHWAYS ══════ */}
      <section style={{ background: '#0A1628', padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', fontWeight: 800, color: '#C9A84C' }}>Choose Your Path</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '6px' }}>Whether you lead an organization, run a business, or want to participate — there is a place for you.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {[
              { icon: '🏛', t: 'Organizations', d: 'Join the federation. Access S.E.E.D., free Celebration participation, and international visibility.', href: '/register-organization' },
              { icon: '👤', t: 'Individuals & Families', d: 'First 1,000,000 founding members join free for life. All programs, all events, all support.', href: '/register' },
              { icon: '🏪', t: 'Merchants', d: 'Join MundusPASS. Access millions of members. Zero upfront cost for micro-merchants.', href: '/register-merchant' },
              { icon: '🌍', t: 'Ambassadors', d: 'Represent Immigrants Alliance in your city. Build bridges between cultures.', href: '/register-ambassador' },
            ].map(p => (
              <Link key={p.t} href={p.href} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'block',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '0.95rem', fontWeight: 700, color: '#C9A84C', marginBottom: '6px' }}>{p.t}</h3>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{p.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SAFETY INTELLIGENCE ══════ */}
      <section style={{ background: '#0D2240', padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>Know Before You Go</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {[
              { t: 'Safety Map', d: 'Red = danger. Yellow = caution. Green = safer. Click any city.', href: '/live/danger-map', cta: 'Open Map' },
              { t: 'Discrimination Monitor', d: 'Community-reported incidents by city, type, and severity.', href: '/live/discrimination', cta: 'View Reports' },
              { t: 'Safer Destinations', d: 'Compare cities by safety, support, and community strength.', href: '/live/safe-cities', cta: 'Find Places' },
            ].map(item => (
              <div key={item.t} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '24px 20px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{item.t}</h3>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '14px' }}>{item.d}</p>
                <Link href={item.href} style={{ background: '#C9A84C', color: '#0A1628', padding: '8px 16px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>{item.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section style={{ background: '#0A1628', padding: '56px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              { q: 'The Alliance connected me with legal help when I had no one to turn to. Within two days, I had an attorney.', n: 'Maria G.', l: 'New York' },
              { q: 'S.E.E.D. transformed our organization. We went from surviving on grants to building real income.', n: 'Dr. Akin O.', l: 'Nairobi' },
              { q: 'The Parade gave my children pride in their heritage. They finally saw their culture celebrated.', n: 'Priya K.', l: 'London' },
            ].map(t => (
              <blockquote key={t.n} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '10px', padding: '24px', margin: 0 }}>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '16px' }}>&ldquo;{t.q}&rdquo;</p>
                <footer style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0D2240', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700 }}>
                    {t.n.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <cite style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF', fontStyle: 'normal' }}>{t.n}</cite>
                    <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{t.l}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section style={{ background: 'linear-gradient(135deg, #0A1628, #0D2240)', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px' }}>
            Let Us Showcase Our Strength Together
          </h2>
          <p style={{ color: '#C9A84C', fontSize: '1rem', fontWeight: 600, marginBottom: '6px' }}>
            Tomorrow, Saturday, June 13 · 11:00 AM
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', marginBottom: '28px' }}>
            Avenue of the Americas, 42nd to 57th Street · New York City
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/parade-registration" style={{ background: '#C9A84C', color: '#0A1628', padding: '14px 28px', borderRadius: '6px', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-block' }}>
              About the Parade
            </Link>
            <Link href="/programs" style={{ background: 'transparent', color: '#FFFFFF', padding: '14px 28px', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)', display: 'inline-block' }}>
              Programs
            </Link>
            <Link href="/international-cultures-celebration" style={{ background: 'transparent', color: '#C9A84C', padding: '14px 28px', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', border: '2px solid rgba(201,168,76,0.3)', display: 'inline-block' }}>
              International Cultures Celebration 2027
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ RESPONSIVE GRID FIX ══════ */}
      <style jsx>{`
        @media (max-width: 640px) {
          section > div > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
