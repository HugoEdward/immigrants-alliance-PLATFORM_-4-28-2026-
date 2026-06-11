import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { countries } from '@/lib/countries';
import FormSuccess from '@/components/FormSuccess';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Request for Recognition as Member Organization',
  breadcrumbs: [{ name: 'Register', href: '/register' }, { name: 'Organization', href: '/register-organization' }],
  description: 'Request for recognition as a Member Organization of Immigrants Alliance. $100/month or $1,000/year. No dues for active S.E.E.D. Economic Empowerment members. Join the global federation.',
} });

const orgTypes = [
  'National Umbrella (Federation)', 'State/Provincial Umbrella', 'Local Cultural/Civic Organization',
  'Immigrant / Diaspora Organization', 'Social Club', 'Sports Club', 'Soccer / Fútbol Club',
  'Children / Youth Team', 'Cultural School', 'Dance / Music / Folklore Group',
  'Chamber / Professional Association', 'Religious / Faith-Based Community Organization',
  'Service Provider (Legal, Health, etc.)', 'Educational Institution', 'Other Nonprofit',
];

export default function RegisterOrganization() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError('');
    const f = new FormData(e.currentTarget);
    const details = [
      `Org structure: ${f.get('org_structure')}`,
      `Current members: ${f.get('active_members') || 'N/A'}`,
      `Projected members (6 months): ${f.get('projected_members') || 'N/A'}`,
      f.get('org_structure') === 'umbrella' ? `Umbrella of ${f.get('umbrella_count') || 'N/A'} member organizations with ${f.get('umbrella_active') || 'N/A'} active orgs, avg ${f.get('umbrella_avg_members') || 'N/A'} members each, projected ${f.get('umbrella_projected') || 'N/A'}` : '',
      `Deputy: ${f.get('deputy_name') || 'N/A'} — ${f.get('deputy_position') || ''} — ${f.get('deputy_email') || ''} — ${f.get('deputy_phone') || ''}`,
    ].filter(Boolean).join('\n');

    const { error: dbErr } = await supabase.from('organizations').insert([{
      name: f.get('name'), type: f.get('type'), country: f.get('country'),
      country_represented: f.get('country_represented'),
      mission: details,
      contact_name: f.get('contact_name'), contact_title: f.get('contact_title'),
      contact_email: f.get('contact_email'), phone: f.get('phone'), website: f.get('website'),
      active_members: f.get('active_members') ? parseInt(f.get('active_members') as string) : null,
    }]);
    if (dbErr) { setError('Submission failed. Please email ImmigrantsAlliance@gmail.com'); console.error(dbErr); }
    else { setSubmitted(true); }
    setLoading(false);
  }

  if (submitted) return <div className="bg-warm min-h-screen py-16"><FormSuccess title="Application Submitted!" message="Your Request for Recognition as Member Organization has been submitted. The Director of Membership will contact you. Email: ImmigrantsAlliance@gmail.com" backLink="/" backLabel="← Back to Home" /></div>;

  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.95), rgba(27,58,92,.9))' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Membership</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Request for Recognition as<br />Member Organization</h1>
          <p className="text-base opacity-85">Immigrants Alliance · International Cultures Mission · a brainchild of Immigrants Foundation · a United Nations NGO ECOSOC & DPI</p>
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Preamble */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 mb-6 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">On behalf of our organization, we respectfully submit this formal request for recognition as a Member Organization of Immigrants Alliance. Like many nonprofits today, we face significant challenges that limit our ability to serve our communities fully. We believe that only through collective action can we overcome these constraints and protect the well-being of our community.</p>
            <p>In the spirit of Immigrants Alliance&rsquo;s mission — to dismantle cultural ignorance, foster intercultural harmony, and empower immigrant communities through education and sustainable development — our partnership will amplify our mutual impact.</p>
          </div>

          {/* Fee structure */}
          <div className="bg-navy rounded-xl p-6 text-white text-center mb-6">
            <p className="text-gold-light font-bold text-sm mb-2">Organization Membership: $100/month or $1,000/year</p>
            <p className="text-white/70 text-xs">No dues for active S.E.E.D. Sustainable Economic Empowerment & Development members.</p>
            <p className="text-white/50 text-[0.65rem] mt-2">Processed through MundusPASS (95% to your organization, 5% service fee)</p>
          </div>

          {/* Grant message */}
          <div className="bg-teal/5 border border-teal/15 rounded-xl p-5 mb-6 text-center">
            <span className="text-teal text-xs font-bold uppercase tracking-wider">🎓 Grant Available</span>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">Qualified organizations may receive a grant equivalent to the registration fee and first month of Economic Empowerment / S.E.E.D. organization membership.</p>
          </div>

          {/* Application form */}
          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
            <h2 className="text-xl font-bold text-navy text-center mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Member Organization Application</h2>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">{error}</div>}
            <form onSubmit={handleSubmit}>
              {/* President / Official Representative */}
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mt-2 mb-4 border-b border-gray-100 pb-2">Official Representative</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Full Name *</label><input name="contact_name" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Title (e.g., President) *</label><input name="contact_title" required className="form-field" /></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Organization Legal Name *</label><input name="name" required className="form-field" /></div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Address *</label><input name="website" required placeholder="Full organization address" className="form-field" /></div>
              <div className="grid md:grid-cols-3 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Cell Phone *</label><input name="phone" type="tel" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Business Tel.</label><input name="bus_tel" type="tel" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email *</label><input name="contact_email" type="email" required className="form-field" /></div>
              </div>

              {/* Deputy */}
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mt-6 mb-4 border-b border-gray-100 pb-2">Official Deputy</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Deputy Name</label><input name="deputy_name" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Position</label><input name="deputy_position" className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Deputy Cell Phone</label><input name="deputy_phone" type="tel" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Deputy Bus. Tel.</label><input name="deputy_bus_tel" type="tel" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Deputy Email</label><input name="deputy_email" type="email" className="form-field" /></div>
              </div>

              {/* Organization Details */}
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mt-6 mb-4 border-b border-gray-100 pb-2">Organization Details</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Organization Type *</label><select name="type" required className="form-field"><option value="">Select...</option>{orgTypes.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Country of Operation *</label><select name="country" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Country / Culture Represented *</label><select name="country_represented" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>

              {/* Applying As */}
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mt-6 mb-4 border-b border-gray-100 pb-2">We Are Applying As</h3>
              <div className="mb-5">
                <select name="org_structure" required className="form-field">
                  <option value="">Select...</option>
                  <option value="single">Single Member Organization</option>
                  <option value="umbrella">Umbrella of Member Organizations</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Current Members</label><input name="active_members" type="number" placeholder="Number" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Projected Members & Friends (6 months)</label><input name="projected_members" type="number" placeholder="Number" className="form-field" /></div>
              </div>
              <p className="text-xs text-gray-400 mb-5 italic">If applying as an Umbrella: indicate the number of member organizations, active organizations, and average members per organization below.</p>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Number of Member Organizations (if umbrella)</label><input name="umbrella_count" type="number" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Active Member Organizations (if umbrella)</label><input name="umbrella_active" type="number" className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Average Members per Org (if umbrella)</label><input name="umbrella_avg_members" type="number" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Projected Members & Friends (if umbrella)</label><input name="umbrella_projected" type="number" className="form-field" /></div>
              </div>

              {/* Commitment */}
              <div className="bg-warm rounded-xl p-5 mb-5 border border-gray-100">
                <label className="flex items-start gap-3">
                  <input type="checkbox" name="parade_commitment" className="mt-1" />
                  <span className="text-sm text-gray-600 leading-relaxed">Our commitment begins with active participation in the International Cultures–Immigrants Parade on the second Saturday of June, a vibrant showcase of unity and solidarity in our multicultural society.</span>
                </label>
              </div>

              <p className="text-xs text-gray-400 mb-5">Please attach your Organization&rsquo;s By-Laws and latest Organization&rsquo;s Resolution naming the Elected Officers, with their names and addresses. Email to: <a href="mailto:ImmigrantsAlliance@gmail.com" className="text-teal underline">ImmigrantsAlliance@gmail.com</a></p>

              <div className="text-center mt-8"><button type="submit" disabled={loading} className="btn-gold px-12 py-4 text-lg disabled:opacity-50">{loading ? 'Submitting...' : 'Submit Application →'}</button></div>
            </form>
            <div className="text-center mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-400 text-xs mb-2">Member Organizations participate free in the International Cultures Celebration.</p>
              <a href="/international-cultures-celebration" className="text-teal text-sm font-semibold hover:underline">Learn about the Celebration →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
