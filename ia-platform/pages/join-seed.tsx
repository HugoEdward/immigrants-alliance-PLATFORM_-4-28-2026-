import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { countries } from '@/lib/countries';
import FormSuccess from '@/components/FormSuccess';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: { title: 'Join SEED Program' } });

export default function JoinSeed() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError('');
    const f = new FormData(e.currentTarget);
    const { error: dbErr } = await supabase.from('seed_applications').insert([{
      org_name: f.get('org_name'), org_country: f.get('org_country'), contact_name: f.get('contact_name'),
      contact_email: f.get('contact_email'), phone: f.get('phone'),
      annual_budget: f.get('annual_budget'), current_revenue_sources: f.get('current_revenue_sources'),
      primary_challenge: f.get('primary_challenge'), goals: f.get('goals'),
      member_count: f.get('member_count') ? parseInt(f.get('member_count') as string) : null,
      has_building: f.get('has_building') === 'yes',
    }]);
    if (dbErr) { setError('Submission failed. Please email SEEDthrive@gmail.com'); console.error(dbErr); }
    else { setSubmitted(true); }
    setLoading(false);
  }

  if (submitted) return <div className="bg-warm min-h-screen py-16"><FormSuccess title="SEED Application Submitted!" message="Our team will contact you within 10 business days. Questions: SEEDthrive@gmail.com" backLink="/" backLabel="← Back to Home" /></div>;

  return (
    <>
      <section className="relative overflow-hidden text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,61,46,.94), rgba(14,124,107,.9))' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="section-label" style={{ color: '#E8C36A' }}>🌱 Global Launch: September 15, 2026</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>SEED — Sustainable Economic Empowerment & Development</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Transform your nonprofit. Goal: $250,000+/year in new sustainable revenue.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">How SEED Works</span><h2 className="text-3xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>12 Pillars of Empowerment</h2></div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Sustainable Revenues ($250K+)', 'Dedicated Development Officer', 'Local Ownership & Global Alliances', 'Sustainable Dev Campaign', 'Financial-Mission Alignment', 'Stable Recurring Revenue', 'International Cultures Events', 'Own Your Cultural Center', 'Preserve Cultural Heritage', 'Community Engagement', 'Social Cohesion', 'Local & Global Impact'].map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 text-sm"><span className="text-teal font-bold mr-2">{i + 1}.</span><span className="text-navy font-medium">{p}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
            <h2 className="text-2xl font-bold text-navy text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>SEED Program Application</h2>
            <p className="text-center text-gray-500 mb-8 text-sm">Must be an Alliance member. <Link href="/register-organization" className="text-teal underline">Register first</Link> if needed.</p>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Organization Name *</label><input name="org_name" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Country *</label><select name="org_country" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Contact Person *</label><input name="contact_name" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email *</label><input name="contact_email" type="email" required className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Phone *</label><input name="phone" type="tel" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Active Members</label><input name="member_count" type="number" placeholder="Approximate" className="form-field" /></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Annual Operating Budget *</label><select name="annual_budget" required className="form-field"><option value="">Select range...</option><option>Under $10,000</option><option>$10,000 – $50,000</option><option>$50,000 – $100,000</option><option>$100,000 – $500,000</option><option>$500,000 – $1,000,000</option><option>Over $1,000,000</option></select></div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Current Revenue Sources *</label><textarea name="current_revenue_sources" rows={3} required placeholder="Donations, grants, membership fees, events..." className="form-field" /></div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Primary Challenge *</label><textarea name="primary_challenge" rows={3} required placeholder="Biggest obstacle to financial sustainability?" className="form-field" /></div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Goals for SEED *</label><textarea name="goals" rows={3} required placeholder="What do you hope to achieve?" className="form-field" /></div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Own or lease a building?</label><select name="has_building" className="form-field"><option value="no">No</option><option value="yes">Yes</option></select></div>
              <div className="bg-teal/5 border border-teal/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-navy mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>💳 Membership Payment</h3>
                <p className="text-sm text-gray-500 mb-3">SEED requires active Organization Membership ($100/month or $1,000/year).</p>
                <div className="bg-gold/10 border border-gold/30 rounded-lg p-3 text-sm text-gold-dark font-medium">⏳ Online payment coming soon. Submit now — our team will contact you for payment.</div>
              </div>
              <div className="text-center"><button type="submit" disabled={loading} className="btn-gold px-12 py-4 text-lg disabled:opacity-50">{loading ? 'Submitting...' : 'Submit SEED Application →'}</button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
