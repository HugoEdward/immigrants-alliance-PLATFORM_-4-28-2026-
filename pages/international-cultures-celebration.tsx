import Link from 'next/link';
import type { GetStaticProps } from 'next';
import { formatCelebrationRange } from '@/lib/paymentConfig';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'International Cultures Celebration',
  description: 'A week-long celebration of the world\'s cultures in NYC — Passport to the World national pavilions, International Cultures Conference at the UN, Star of Harmony Awards, Presentation of Nations\' Flags, and the International Cultures–Immigrants Parade. June 2027.',
  breadcrumbs: [{ name: 'Programs', href: '/programs' }, { name: 'International Cultures Celebration', href: '/international-cultures-celebration' }],
  schema: [
    { '@context': 'https://schema.org', '@type': 'Event', name: 'International Cultures Celebration 2027', startDate: '2027-06-05', endDate: '2027-06-12', eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled', location: { '@type': 'Place', name: 'Manhattan, New York City', address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } }, organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' }, description: 'A week-long Mini-World\'s Fair with national pavilions, conference at the United Nations, Star of Harmony Awards, and the International Cultures–Immigrants Parade.' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is the International Cultures Celebration?', acceptedAnswer: { '@type': 'Answer', text: 'A week-long annual celebration in NYC including Passport to the World national pavilions, International Cultures Conference at the UN, Star of Harmony Awards, Presentation of Nations\' Flags, and the International Cultures–Immigrants Parade.' } },
      { '@type': 'Question', name: 'When is the next full Celebration?', acceptedAnswer: { '@type': 'Answer', text: 'The full week-long Celebration restarts in 2027, from June 5 through June 12, 2027. Starting in 2027, it runs annually from the first Saturday of June through the second Saturday of June.' } },
      { '@type': 'Question', name: 'What is Passport to the World?', acceptedAnswer: { '@type': 'Answer', text: 'A Mini-World\'s Fair with national pavilions across Manhattan, powered by MundusPASS. Attendees use a digital Passport card for entry and cultural engagement.' } },
    ] },
  ],
} });

export default function CelebrationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white text-center py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.94), rgba(139,105,20,.7))' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>The World Comes to New York</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>International Cultures<br />Celebration</h1>
          <p className="text-xl opacity-90 mb-3 max-w-2xl mx-auto">A week-long celebration of the world&rsquo;s cultures — national pavilions, diplomacy, awards, and a parade that turns the Avenue of the Americas into the world&rsquo;s proudest stage.</p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2.5 rounded-full text-sm mt-4">
            <span>📅 Full Celebration restarts: <strong className="text-gold-light">June 5–12, 2027</strong></span>
            <span className="text-white/30">|</span>
            <span>📅 2026 Parade: <strong className="text-gold-light">June 13, 2026</strong></span>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>What is the International Cultures Celebration?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">The International Cultures Celebration is a week-long annual event in New York City that brings together nations, cultures, organizations, merchants, and millions of attendees in a coordinated celebration of the world&rsquo;s diversity. It is not a single event — it is an ecosystem of interconnected programs designed to promote cultural diplomacy, economic engagement, and intercultural understanding at international scale.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Starting in 2027, the Celebration runs annually from the first Saturday of June through the second Saturday of June. For 2027: <strong>June 5 through June 12, 2027</strong>.</p>

          <h3 className="text-2xl font-bold text-navy mb-6 mt-12" style={{ fontFamily: 'Playfair Display, serif' }}>The Five Pillars of the Celebration</h3>
          <div className="space-y-6">
            {[
              { num: '1', title: 'PASSPORT TO THE WORLD', sub: 'powered by MundusPASS', desc: 'A Mini-World\u2019s Fair with national pavilions throughout Manhattan. Each participating nation selects or approves its pavilion venue, programming, and official presentation — at cultural centers, consulates, or independent venues. Attendees carry a digital Passport to the World card for entry and participation tracking. This is the main economic engine of the Celebration.', accent: '#C5973B' },
              { num: '2', title: 'International Cultures Conference', sub: 'at the United Nations Headquarters, NYC', desc: 'A global conference bringing together government officials, cultural leaders, immigrant advocates, academic researchers, and international organizations to discuss cultural diplomacy, immigration policy, economic empowerment, and intercultural understanding.', accent: '#2A5F8F' },
              { num: '3', title: 'Star of Harmony Awards', sub: '', desc: 'An annual celebration honoring individuals and organizations who exemplify intercultural harmony, immigrant empowerment, and cultural leadership. Recipients are recognized at a formal ceremony during Celebration week.', accent: '#8B6914' },
              { num: '4', title: 'Presentation of Nations\u2019 Flags Ceremony', sub: '', desc: 'A diplomatic ceremony where Consul Generals and national representatives present their flags in a display of international unity that precedes the Parade and symbolizes the cooperative spirit of the Celebration.', accent: '#1B3A5C' },
              { num: '5', title: 'International Cultures\u2013Immigrants Parade', sub: '', desc: 'The culmination of the Celebration. Fifteen blocks of the Avenue of the Americas (6th Avenue, 42nd to 57th Street) become the world\u2019s stage — with dance, music, floats, cultural delegations, and pageantry from every continent. The 41st Parade: June 13, 2026.', accent: '#0E7C6B' },
            ].map(p => (
              <div key={p.num} className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-5" style={{ boxShadow: '0 2px 8px rgba(10,22,40,.06)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold shrink-0" style={{ background: p.accent }}>{p.num}</div>
                <div>
                  <h4 className="text-lg font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>{p.title}</h4>
                  {p.sub && <p className="text-xs text-gold-dark font-semibold mb-2">{p.sub}</p>}
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Passport */}
      <section className="bg-warm py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>The Digital Passport to the World Card</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Attendees require a valid digital Passport to the World card — located inside the International Cultures Celebration section of the mobile app — to enter national pavilions. Each pavilion visit creates a digital participation record.</p>
          <p className="text-gray-600 leading-relaxed mb-4">This participation record is not just a ticket. It is a cultural diplomacy, data, engagement, and economic infrastructure tool used for:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {['Celebration prizes and sponsored prizes', 'National visitor statistics', 'Sponsor reporting and ROI documentation', 'Tourism and trade follow-up', 'Educational and cultural exchange engagement', 'Business opportunity follow-up', 'Sponsor offers and campaigns', 'Future prizes including trip-for-two-around-the-world'].map(item => (
              <div key={item} className="bg-white rounded-lg px-4 py-3 text-sm text-navy border border-gray-100">✓ {item}</div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">Passport to the World is powered by MundusPASS — the digital access and participation-record infrastructure. Mundus.Center is the planned economic operating infrastructure.</p>
        </div>
      </section>

      {/* National and Community Participation Gains */}
      <section className="bg-navy py-16 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gold-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>National and Community Participation Gains</h2>
          <p className="text-white/80 leading-relaxed mb-6">Holding an independent national pavilion — alone, without shared promotion, without coordinated multicultural attendance, without digital infrastructure — costs far more than most nations or organizations can afford, with far less certainty of reach.</p>
          <p className="text-white/80 leading-relaxed mb-6">Through the International Cultures Celebration, each participating nation and organization benefits from collective promotion, shared multicultural attendance, sponsor visibility, digital participation records, national visitor statistics, and long-term cultural and economic engagement opportunities.</p>
          <div className="bg-gold/15 border border-gold/30 rounded-2xl p-8 text-center my-8">
            <p className="text-gold-light text-4xl font-extrabold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>$100,000+</p>
            <p className="text-white/80 text-sm">National ROI strategic value of participation</p>
            <p className="text-white/50 text-xs mt-2 max-w-lg mx-auto">Each participating nation and organization benefits from collective multicultural promotion, shared attendance, sponsor visibility, digital participation data, and long-term cultural and economic engagement — delivering strategic value of $100,000 or greater.</p>
          </div>
        </div>
      </section>

      {/* National Participation */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>National Participation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">National coordination and participation is currently free, provided the nation participates throughout the full International Cultures Celebration ecosystem:</p>
          <div className="bg-warm rounded-xl p-6 space-y-2 mb-6">
            {['Passport to the World national pavilion', 'International Cultures Conference', 'Star of Harmony Awards', 'Presentation of Nations\u2019 Flags Ceremony', 'National contingent in the International Cultures–Immigrants Parade'].map(item => (
              <p key={item} className="text-sm text-navy font-medium">✓ {item}</p>
            ))}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">Nations are not merely appearing symbolically — they are participating throughout the full week, contributing to cultural diplomacy, tourism, trade, education, and community engagement.</p>
        </div>
      </section>

      {/* S.E.E.D. Member Organization Benefits */}
      <section className="bg-warm py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>S.E.E.D. Member Organization Benefits</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Through Immigrants Alliance membership, eligible Member Organizations may access S.E.E.D. benefits managed by Mundus.Center and powered by MundusPASS. Member Organizations can raise over $50,000 during their International Cultures Celebration participation, and their participation is free as part of their S.E.E.D./organization membership. Non-member organizations may participate for a $5,000 fee.</p>
          <h3 className="text-lg font-bold text-navy mt-8 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Revenue Opportunities for Member Organizations</h3>
          <div className="space-y-3">
            {[
              { pct: '50%', text: 'of Passport to the World digital card sales they generate' },
              { pct: '100%', text: 'of internal national pavilion sales they manage (food, souvenirs, cultural products, approved offerings)' },
              { pct: '50%', text: 'of national pavilion corporate sponsorships they help generate' },
            ].map(item => (
              <div key={item.text} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <span className="text-2xl font-extrabold text-teal shrink-0" style={{ fontFamily: 'Playfair Display, serif' }}>{item.pct}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold text-navy mt-8 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Additional Member Benefits</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {['Increased membership engagement', 'Organization visibility and recognition', 'Stronger connection with national community', 'Participation in the International Cultures Conference', 'Star of Harmony Award nomination opportunities', 'Participation in the Presentation of Nations\u2019 Flags', 'Free participation in the International Cultures–Immigrants Parade'].map(b => (
              <div key={b} className="bg-white rounded-lg px-4 py-3 text-sm text-navy border border-gray-100">✓ {b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Participates */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Who Participates</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Governments and national missions',
              'Consulates and embassies',
              'National cultural institutions',
              'Tourism and trade agencies',
              'S.E.E.D. Member Organizations',
              'Immigrant and cultural organizations',
              'Merchants and sponsors',
              'The multicultural public',
            ].map(p => (
              <div key={p} className="card p-5"><p className="text-sm text-navy font-medium">{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* InternationalCulturesCelebration.com */}
      <section className="bg-warm py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>InternationalCulturesCelebration.com</h2>
          <p className="text-gray-600 leading-relaxed mb-4">InternationalCulturesCelebration.com is the planned independent platform dedicated to governments, nations, cities, consulates, diplomats, tourism agencies, trade agencies, cultural institutions, sponsors, and international participation.</p>
          <p className="text-gray-600 leading-relaxed mb-4">A nation&rsquo;s interests extend beyond the nonprofit immigrant federation mission of ImmigrantsAlliance.org. The independent platform will serve those broader national, diplomatic, and economic interests — including a future city competition system where cities compete to be named and showcased in their nation&rsquo;s production at the International Cultures Celebration in NYC.</p>
          <p className="text-gray-500 text-sm italic">ImmigrantsAlliance.org introduces and connects to the Celebration. InternationalCulturesCelebration.com will become the dedicated international participation platform.</p>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-navy py-14 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gold-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Get Involved</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/register-organization" className="btn-gold text-sm">Register Organization →</Link>
            <Link href="/join-seed" className="btn-teal text-sm">Economic Empowerment →</Link>
            <Link href="/parade-registration" className="btn-outline text-sm">Register for 2026 Parade →</Link>
            <Link href="/register-merchant" className="btn-outline text-sm">Join as Merchant →</Link>
            <Link href="/register-ambassador" className="btn-outline text-sm">Become Ambassador →</Link>
            <Link href="/contact" className="btn-outline text-sm">Sponsorship Inquiry →</Link>
          </div>
          <p className="text-white/30 text-xs mt-6">Economic infrastructure powered by Mundus.Center · Passport to the World powered by MundusPASS</p>
        </div>
      </section>
    </>
  );
}
