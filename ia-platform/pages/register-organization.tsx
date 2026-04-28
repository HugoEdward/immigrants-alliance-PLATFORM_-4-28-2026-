import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { countries } from '@/lib/countries';
import FormSuccess from '@/components/FormSuccess';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: { title: 'Register Organization' } });

const orgTypes = ['National Umbrella (Federation)', 'State/Provincial Umbrella', 'Local Cultural/Civic Organization', 'Religious Organization', 'Professional Association', 'Service Provider (Legal, Health, etc.)', 'Educational Institution', 'Other Nonprofit'];

export default function RegisterOrganization() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setError('');
    const f = new FormData(e.currentTarget);
    const { error: dbErr } = await supabase.from('organizations').insert([{
      name: f.get('name'), type: f.get('type'), country: f.get('country'),
      country_represented: f.get('country_represented'),
      year_established: f.get('year_established') ? parseInt(f.get('year_established') as string) : null,
      mission: f.get('mission'), contact_name: f.get('contact_name'), contact_title: f.get('contact_title'),
      contact_email: f.get('contact_email'), phone: f.get('phone'), website: f.get('website'),
      active_members: f.get('active_members') ? parseInt(f.get('active_members') as string) : null,
    }]);
    if (dbErr) { setError('Submission failed. Please try again or email Connect@ImmigrantsAlliance.org'); console.error(dbErr); }
    else { setSubmitted(true); }
    setLoading(false);
  }

  if (submitted) return <div className="bg-warm min-h-screen py-16"><FormSuccess title="Application Submitted!" message="Your organization membership application has been submitted. Our Membership Director will contact you within 5 business days." backLink="/" backLabel="← Back to Home" /></div>;

  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.95), rgba(27,58,92,.9))' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Membership</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Register Your Organization</h1>
          <p className="text-lg opacity-85">Join the global Alliance. $100/month or $1,000/year.</p>
        </div>
      </section>
      <section className="bg-warm py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Organization Legal Name *</label><input name="name" required className="form-field" /></div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Organization Type *</label><select name="type" required className="form-field"><option value="">Select...</option>{orgTypes.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Country of Operation *</label><select name="country" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Country/Culture Represented *</label><select name="country_represented" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Year Established</label><input name="year_established" type="number" placeholder="e.g., 1995" className="form-field" /></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Organization Mission *</label><textarea name="mission" rows={3} required placeholder="Describe your mission and programs" className="form-field" /></div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Contact Person *</label><input name="contact_name" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Title *</label><input name="contact_title" required className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email *</label><input name="contact_email" type="email" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Phone (with country code) *</label><input name="phone" type="tel" required className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Website</label><input name="website" type="url" placeholder="https://" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Active Members</label><input name="active_members" type="number" placeholder="Approximate" className="form-field" /></div>
              </div>
              <div className="text-center mt-8"><button type="submit" disabled={loading} className="btn-gold px-12 py-4 text-lg disabled:opacity-50">{loading ? 'Submitting...' : 'Submit Application →'}</button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
