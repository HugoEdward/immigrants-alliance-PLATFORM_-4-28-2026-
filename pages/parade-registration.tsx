import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: '41st International Cultures–Immigrants Parade',
  description: '41st International Cultures–Immigrants Parade — Saturday, June 13, 2026, 11:00 AM, Avenue of the Americas, 42nd to 57th Street, NYC. Submit your Parade Organization Application through CulturesCelebration.com.',
  breadcrumbs: [{ name: 'Parade', href: '/parade-registration' }],
  schema: { '@context': 'https://schema.org', '@type': 'Event', name: '41st International Cultures–Immigrants Parade', startDate: '2026-06-13T11:00:00-04:00', endDate: '2026-06-13T16:00:00-04:00', eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled', location: { '@type': 'Place', name: 'Avenue of the Americas, 42nd–57th Street', address: { '@type': 'PostalAddress', streetAddress: '6th Avenue, 42nd to 57th Street', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } }, organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' } },
} });

export default function ParadeRegistration() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-center py-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.94), rgba(14,124,107,.85))' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-white">
          <div className="inline-block bg-red-600/90 text-white px-4 py-2 rounded-lg text-sm font-bold mb-5 animate-pulse">📅 Saturday, June 13, 2026 · 11:00 AM · NYC</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>41st International Cultures–<br />Immigrants Parade</h1>
          <p className="text-base opacity-85 mb-2">Avenue of the Americas, 42nd to 57th Street, Midtown Manhattan</p>
          <p className="text-sm opacity-70">Produced by Immigrants Alliance · Sponsored by International Cultures Mission</p>
        </div>
      </section>

      {/* Application routing notice */}
      <section className="bg-gold/10 border-y border-gold/30 py-8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Submit Your Parade Organization Application</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-xl mx-auto">Parade participation applications are now managed through <strong>CulturesCelebration.com</strong>, the official International Cultures Celebration event platform. If you are applying for the International Cultures–Immigrants Parade, please submit your organization application through the official Parade Organization Application.</p>
          <div className="flex flex-wrap gap-3 justify-center mb-5">
            <a href="https://www.culturescelebration.com/apply/parade-organization" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-lg font-bold text-sm no-underline transition-all">Submit Parade Organization Application ↗</a>
            <a href="https://www.culturescelebration.com/apply" target="_blank" rel="noopener noreferrer" className="btn-gold no-underline text-sm px-6 py-3">Open Celebration Application Hub ↗</a>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-xs text-gray-500 max-w-md mx-auto">
            <p className="font-bold text-navy mb-1">Having difficulty submitting?</p>
            <p>Email your application immediately to <a href="mailto:connect@immigrantsalliance.org" className="text-teal underline font-semibold">connect@immigrantsalliance.org</a> with the subject: <em>Parade Participation Application</em>.</p>
          </div>
        </div>
      </section>

      {/* Inclusivity statement */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm leading-relaxed mb-6">Organizations representing <strong>Tibet, Taiwan, Lebanon, Palestine</strong>, Indigenous/native nations, diaspora communities, and all cultural communities are welcome to submit their information.</p>
        </div>
      </section>

      {/* Who should participate */}
      <section className="bg-warm py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy text-center mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Who Should Parade, Perform & Represent Their Culture</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['National Contingents', 'Socio-Cultural Organizations', 'Immigrant & Diaspora Groups', 'Soccer / Fútbol Clubs', 'Youth & Children Teams', 'Dance, Music & Folk Groups', 'Cultural Schools & Bands', 'Faith-Based Organizations', 'Consulates & UN Missions', 'Cultural / Tourism Attachés', 'Chambers of Commerce', 'Families & Communities'].map(item => (
              <div key={item} className="bg-white rounded-xl p-4 text-center border border-gray-100"><span className="text-xs text-navy font-medium">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant + member benefits */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-teal/5 border border-teal/15 rounded-xl p-5">
              <span className="text-teal text-xs font-bold uppercase tracking-wider">🎓 Grant Opportunity</span>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">Qualified organizations may receive a grant equivalent to the participation contribution and first month of Economic Empowerment / S.E.E.D. organization membership. Subject to review, approval, and availability.</p>
            </div>
            <div className="bg-navy/5 border border-navy/10 rounded-xl p-5">
              <span className="text-navy text-xs font-bold uppercase tracking-wider">🏛 Member Organizations</span>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">Member Organizations of Immigrants Alliance in good standing participate <strong>free</strong>. Non-member organizations: $5,000 contribution. <Link href="/register-organization" className="text-teal underline">Register your organization →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* Photos & Videos */}
      <section className="bg-warm py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy text-center mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Photos & Videos from Previous Parades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'National flags lining the Avenue of the Americas — a display of unity among nations',
              'Families parading together — children carrying the cultures of their parents with pride',
              'Youth soccer/fútbol teams and cultural groups — the next generation celebrating heritage',
              'Consul Generals and diplomatic representatives at the Presentation of Nations\u2019 Flags Ceremony',
              'Floats and music from every continent — fifteen blocks of cultural celebration on Sixth Avenue',
              'Socio-cultural organizations and diaspora communities united on the Avenue of the Americas',
            ].map((cap, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden"><div className="aspect-[4/3] bg-gradient-to-br from-navy/10 to-teal/10 flex items-center justify-center text-4xl">📸</div><p className="px-4 py-3 text-xs text-gray-500 leading-relaxed">{cap}</p></div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4 italic">Share your photos and videos through <a href="https://www.culturescelebration.com" target="_blank" rel="noopener noreferrer" className="text-teal underline">CulturesCelebration.com</a> so your community&rsquo;s cultural presentation becomes part of the Celebration&rsquo;s living archive.</p>
        </div>
      </section>

      {/* About IA's role */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>About Immigrants Alliance&rsquo;s Role</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">Immigrants Alliance produces and organizes the International Cultures–Immigrants Parade as the federation and community-organizing partner. CulturesCelebration.com manages the official Celebration application process, event operations, and Living Archive.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/register-organization" className="btn-gold text-sm">Register Your Organization →</Link>
            <Link href="/join-seed" className="btn-outline text-navy border-navy text-sm hover:bg-navy/5 no-underline">Economic Empowerment →</Link>
            <a href="https://www.culturescelebration.com/apply/parade-organization" target="_blank" rel="noopener noreferrer" className="btn-outline text-navy border-navy text-sm hover:bg-navy/5 no-underline">Official Parade Application ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
