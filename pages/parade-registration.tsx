import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { countries } from '@/lib/countries';
import FormSuccess from '@/components/FormSuccess';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Parade Registration',
  breadcrumbs: [{ name: 'Programs', href: '/programs' }, { name: 'Parade Registration', href: '/parade-registration' }],
  description: 'Register for the 41st International Cultures–Immigrants Parade. June 13, 2026. Avenue of the Americas, Midtown Manhattan, NYC. Free for member organizations.',
  schema: {
    '@context': 'https://schema.org', '@type': 'Event',
    name: '41st International Cultures–Immigrants Parade',
    startDate: '2026-06-13T11:00:00-04:00',
    endDate: '2026-06-13T15:00:00-04:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: { '@type': 'Place', name: 'Avenue of the Americas', address: { '@type': 'PostalAddress', streetAddress: '6th Avenue, 42nd to 57th Street', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } },
    organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' },
  },
} });

export default function ParadeRegistration() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError('');
    const f = new FormData(e.currentTarget);
    const participationDetails = [
      `Organization / group type: ${f.get('organization_type') || 'Not provided'}`,
      `Nationality / culture represented: ${f.get('nationality_represented') || f.get('country_represented') || 'Not provided'}`,
      `City / region represented: ${f.get('city_region_represented') || 'Not provided'}`,
      `National contingent participation: ${f.get('national_contingent') || 'Not provided'}`,
      `Soccer/fútbol or sports team: ${f.get('soccer_team') || 'Not provided'}`,
      `Youth / children participation: ${f.get('youth_participation') || 'Not provided'}`,
      `Flags / banners / costumes / music: ${f.get('presentation_elements') || 'Not provided'}`,
      `Consulate, UN Mission, or community affiliation: ${f.get('consulate_affiliation') || 'Not provided'}`,
      `Grant interest: ${f.get('grant_interest') || 'Not provided'}`,
      '',
      `Cultural showcase description: ${f.get('showcase_description') || 'Not provided'}`,
    ].join('\n');

    const { error: dbErr } = await supabase.from('parade_registrations').insert([{
      org_name: f.get('org_name'), country_represented: f.get('country_represented'),
      country_operation: f.get('country_operation'), contact_name: f.get('contact_name'),
      contact_title: f.get('contact_title'), contact_email: f.get('contact_email'),
      phone: f.get('phone'), membership_status: f.get('membership_status'),
      showcase_description: participationDetails,
      participants_count: f.get('participants_count') ? parseInt(f.get('participants_count') as string) : 0,
      parade_year: 2026,
    }]);
    if (dbErr) { setError('Submission failed. Email Connect@ImmigrantsAlliance.org'); console.error(dbErr); }
    else { setSubmitted(true); }
    setLoading(false);
  }

  if (submitted) return <div className="bg-warm min-h-screen py-16"><FormSuccess title="Parade Registration Submitted!" message="Our team will contact you. Questions: Connect@ImmigrantsAlliance.org" backLink="/" backLabel="← Back to Home" /></div>;

  return (
    <>
      <section className="relative overflow-hidden text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(139,105,20,.93), rgba(197,151,59,.9))' }} />
        <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: 'repeating-linear-gradient(90deg, #C0392B 0, #C0392B 20px, #1B3A5C 20px, #1B3A5C 40px, #1B8C4E 40px, #1B8C4E 60px, #C5973B 60px, #C5973B 80px, #0E7C6B 80px, #0E7C6B 100px)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="section-label" style={{ color: '#0A1628' }}>🎉 June 13, 2026</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>41st International Cultures–Immigrants Parade</h1>
          <p className="text-navy/80 text-lg mb-2">Midtown Manhattan, New York City</p>
          <p className="text-navy/50 text-sm mb-6">Part of the <a href="/international-cultures-celebration" className="text-teal font-semibold underline">International Cultures Celebration</a> · Official event at <a href="https://culturescelebration.com/parade" target="_blank" rel="noopener noreferrer" className="text-teal font-semibold underline">CulturesCelebration.com ↗</a></p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-navy/90 space-y-3 text-sm">
              <div><strong>📍 Route:</strong> Avenue of the Americas, 42nd → 57th St</div>
              <div><strong>🕘 Time:</strong> 11:00 AM Step-Off</div>
              <div><strong>🏳 Ceremony:</strong> Official Presentation of Nations Flags</div>
              <div><strong>💰 Cost:</strong> FREE for S.E.E.D. Member Organizations · $5,000 for non-members</div>
              <div><strong>⏰ Deadline:</strong> May 30, 2026</div>
            </div>
            <div className="bg-navy rounded-2xl p-6 text-white text-center">
              <h3 className="text-gold-light font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Parade Route</h3>
              <div className="bg-white/[.08] rounded-lg p-5 text-left">
                <div className="flex items-center gap-3 mb-3"><div className="w-3 h-3 bg-gold rounded-full" /><span className="text-sm">START — 42nd St & 6th Ave</span></div>
                <div className="ml-1.5 border-l-2 border-dashed border-white/30 pl-5 py-2 text-xs opacity-70">↑ 15 blocks of celebration</div>
                <div className="flex items-center gap-3 mt-3"><div className="w-3 h-3 bg-teal-light rounded-full" /><span className="text-sm">END — 57th St & 6th Ave</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Participate */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Who Should Participate</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Consuls General & UN Missions',
              'Cultural / Business / Tourism Attachés',
              'Socio-Cultural Organizations',
              'National Contingents',
              'Soccer / Fútbol Clubs',
              'Children & Youth Teams',
              'Social Clubs & Cultural Schools',
              'Folklore / Dance / Music Groups',
              'Chambers & Professional Associations',
              'Ethnic Media & Civic Leaders',
              'Faith-Based Community Organizations',
              'Diaspora & Immigrant Organizations',
            ].map(item => (
              <div key={item} className="bg-warm rounded-xl p-4 text-center"><p className="text-sm text-navy font-medium">{item}</p></div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            If your organization represents a nation, city, region, culture, diaspora community, social club, or soccer/fútbol team in the New York Tri-State area, this registration helps us group your participation under the correct national contingent and coordinate with consulates, UN Missions, cultural leaders, and community organizers.
          </p>
        </div>
      </section>

      {/* Grant Message */}
      <section className="bg-teal/5 border-y border-teal/15 py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-4 py-1.5 rounded-full text-xs font-bold text-teal uppercase tracking-wider mb-4">🎓 Grant Available</div>
          <h2 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Grant Opportunity for Qualified Organizations</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">Qualified organizations may receive a grant equivalent to the registration fee and first month of Economic Empowerment / S.E.E.D. organization membership. Contact us or indicate your interest in the registration form below.</p>
        </div>
      </section>

      {/* Photos & Videos from Previous Parades */}
      <section className="bg-warm py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Photos & Videos from Previous Parades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { caption: 'National flags lining the Avenue of the Americas — a display of unity among nations' },
              { caption: 'Families marching together — children carrying the cultures of their parents with pride' },
              { caption: 'Youth cultural groups performing traditional dances — the next generation preserving heritage' },
              { caption: 'Consul Generals presenting flags at the Presentation of Nations\' Flags Ceremony' },
              { caption: 'Floats and music from every continent — fifteen blocks of celebration on Sixth Avenue' },
              { caption: 'Communities united — neighbors from dozens of nations walking side by side' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy/10 to-teal/10 flex items-center justify-center text-4xl">📸</div>
                <p className="px-4 py-3 text-xs text-gray-500 leading-relaxed">{item.caption}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4 italic">Photos and videos from previous International Cultures–Immigrants Parades will be featured here as assets become available.</p>
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
            <h2 className="text-xl font-bold text-navy text-center mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Parade Participation Agreement</h2>
            <p className="text-center text-xs text-gray-400 mb-1">41st International Cultures–Immigrants Parade · Saturday, June 13, 2026</p>
            <p className="text-center text-xs text-gray-400 mb-6">Avenue of the Americas from 42nd to 57th St, NYC · Produced by Immigrants Alliance</p>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">{error}</div>}
            <form onSubmit={handleSubmit}>
              {/* Coordinating Organization */}
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mt-2 mb-4 border-b border-gray-100 pb-2">Coordinating Organization</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Representative Name *</label><input name="contact_name" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Organization Name *</label><input name="org_name" required className="form-field" /></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Organization Address *</label><input name="org_address" required className="form-field" /></div>
              <div className="grid md:grid-cols-3 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">President&rsquo;s Cell *</label><input name="phone" type="tel" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Other Tel.</label><input name="other_tel" type="tel" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email *</label><input name="contact_email" type="email" required className="form-field" /></div>
              </div>

              {/* Membership status */}
              <div className="mb-5">
                <label className="block font-semibold text-sm mb-1.5 text-navy">Membership Status *</label>
                <select name="membership_status" required className="form-field"><option value="">Select...</option><option value="member">Member Organization of Immigrants Alliance (FREE)</option><option value="applying">Applying for membership (FREE if approved)</option><option value="non-member">Non-Member Organization ($5,000 contribution)</option></select>
                <p className="text-xs text-gray-500 mt-1">Member Organizations in good standing participate FREE. <Link href="/register-organization" className="text-teal underline">Apply for membership</Link> if not yet a member.</p>
              </div>

              {/* National contingent */}
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mt-6 mb-4 border-b border-gray-100 pb-2">Contingent Information</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Nation or Culture Represented *</label><select name="country_represented" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Name of Contingent *</label><input name="contingent_name" required placeholder="e.g., Dominican Republic, India, Senegal..." className="form-field" /></div>
              </div>

              {/* Main Parade Coordinator */}
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mt-6 mb-4 border-b border-gray-100 pb-2">Main Parade Coordinator</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Coordinator Name *</label><input name="contact_title" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Position</label><input name="coordinator_position" className="form-field" /></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Coordinator Address</label><input name="coordinator_address" className="form-field" /></div>
              <div className="grid md:grid-cols-3 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Coordinator Cell</label><input name="coordinator_cell" type="tel" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Bus. Tel.</label><input name="coordinator_bus_tel" type="tel" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email</label><input name="coordinator_email" type="email" className="form-field" /></div>
              </div>

              {/* Contingent details */}
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mt-6 mb-4 border-b border-gray-100 pb-2">Contingent Components</h3>
              <p className="text-xs text-gray-400 mb-4">Please indicate the approximate total number in each category.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Organizations in Contingent</label><input name="org_count" type="number" className="form-field" placeholder="Number" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Total Performing Groups</label><input name="performing_groups" type="number" className="form-field" placeholder="Number" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Bands</label><input name="bands" type="number" className="form-field" placeholder="Number" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Floats</label><input name="floats" type="number" className="form-field" placeholder="Number" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Trucks w/Props & Sound</label><input name="trucks" type="number" className="form-field" placeholder="Number" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Open Cars / Cars</label><input name="cars" type="number" className="form-field" placeholder="Number" /></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Total Estimated Participants *</label><input name="participants_count" type="number" required placeholder="e.g., 100" className="form-field" /></div>

              {/* Additional from IA enhancements */}
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mt-6 mb-4 border-b border-gray-100 pb-2">Participation Details</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Parade Marshal Name</label><input name="parade_marshal" className="form-field" placeholder="Name of your contingent's marshal" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Diplomatic Corps / Ambassador</label><input name="diplomatic_corps" className="form-field" placeholder="Ambassador, Consul General, Attaché..." /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Soccer / Fútbol or Sports Team?</label><select name="soccer_team" className="form-field"><option value="">Select...</option><option>Yes — adult team</option><option>Yes — children/youth team</option><option>Yes — both</option><option>No</option></select></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Youth / Children Participation</label><select name="youth_participation" className="form-field"><option value="">Select...</option><option>Yes — children</option><option>Yes — youth/teen group</option><option>No</option></select></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Description of Cultural Showcase</label><textarea name="showcase_description" rows={3} placeholder="Uniforms, costumes, dances, flags, music, floats, national representation..." className="form-field" /></div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Grant Interest</label><select name="grant_interest" className="form-field"><option value="">Select...</option><option>Yes — we request grant consideration</option><option>No</option></select></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Lineup Notes / Special Requests</label><input name="lineup_notes" className="form-field" placeholder="Position preference, adjacency requests..." /></div>
              </div>

              {/* Liability Insurance */}
              <div className="bg-warm rounded-xl p-5 mb-5 border border-gray-100">
                <label className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1" />
                  <span className="text-xs text-gray-600 leading-relaxed">Our organization agrees to indemnify and hold harmless the Immigrants Alliance, the Immigrants Foundation, the International Cultures Mission, and the City of New York from any and all claims for personal injury or property damage resulting from activities in connection with the NYC Parade Permit. Our organization attests that it has the necessary Liability Insurance and agrees to comply with all pertinent provisions of New York laws, rules, and regulations. This Agreement is subject to revocation for non-compliance.</span>
                </label>
              </div>

              <p className="text-xs text-gray-400 mb-5">Non-Member Organizations: $5,000 contribution plus certified Liability Insurance. Payment instructions will be provided after review and approval. Qualified organizations may receive grant support subject to eligibility, review, approval, and availability. Email application and attachments to <a href="mailto:ImmigrantsAlliance@gmail.com" className="text-teal underline">ImmigrantsAlliance@gmail.com</a>.</p>

              <div className="text-center mt-8"><button type="submit" disabled={loading} className="btn-gold px-12 py-4 text-lg disabled:opacity-50">{loading ? 'Submitting...' : 'Submit Parade Registration →'}</button></div>
            </form>
            {/* Temporary contribution instructions */}
            <div className="bg-warm rounded-xl p-5 mt-6 border border-gray-100">
              <p className="text-xs text-navy font-bold mb-2">Contribution Information</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-2">Non-Member Organizations: $5,000 contribution. After review and approval, qualified applicants will receive complete instructions for participation. Until MundusPASS / Stripe contribution processing is activated, you may send your contribution by Zelle to <a href="mailto:ImmigrantsAlliance@gmail.com" className="text-teal underline">ImmigrantsAlliance@gmail.com</a>. Include organization name, contact name, and &ldquo;Parade 2026&rdquo; in the memo.</p>
              <p className="text-[0.6rem] text-gray-400 italic">This is a temporary contribution option while MundusPASS / Stripe is being activated. Permanent contribution processing will be handled through MundusPASS / Stripe once activated.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
