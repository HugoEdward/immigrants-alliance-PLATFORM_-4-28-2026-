import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { countries } from '@/lib/countries';
import FormSuccess from '@/components/FormSuccess';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Merchant & Professional Registration',
  description: 'Join the Immigrants Alliance merchant ecosystem. Reach immigrant families through MundusPASS, cultural events, and the global federation network.',
  breadcrumbs: [{ name: 'Register', href: '/register' }, { name: 'Merchant', href: '/register-merchant' }],
} });

export default function RegisterMerchant() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError('');
    const f = new FormData(e.currentTarget);
    const { error: dbErr } = await supabase.from('merchants').insert([{
      business_name: f.get('business_name'), contact_name: f.get('contact_name'),
      email: f.get('email'), phone: f.get('phone'), country: f.get('country'),
      city: f.get('city'), business_type: f.get('business_type'),
      owner_nationality: f.get('owner_nationality'), website: f.get('website'),
      discount_offer: f.get('discount_offer'), interest_sponsorship: f.get('interest_sponsorship') === 'yes',
    }]);
    if (dbErr) { setError('Submission failed. Please email Connect@ImmigrantsAlliance.org'); console.error(dbErr); }
    else { setSubmitted(true); }
    setLoading(false);
  }

  if (submitted) return <div className="bg-warm min-h-screen py-16"><FormSuccess title="Merchant Application Submitted!" message="Our team will review your application and contact you about MundusPASS integration and event participation." backLink="/" backLabel="← Back to Home" /></div>;

  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #8B6914)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Federation Commerce</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Join the Alliance as a Merchant or Professional</h1>
          <p className="text-base opacity-85 max-w-2xl mx-auto">Reach immigrant families who trust the Alliance. Offer your services to a growing community of members who value culturally aware businesses. Participate in cultural events and integrate with MundusPASS.</p>
          <p className="text-xs opacity-50 mt-3">MundusPASS-ready · Designed to connect with the Mundus.Center economic infrastructure</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-5 mb-10">
          {[
            { icon: '👥', title: 'Access the Community', desc: 'Your business becomes visible to Alliance members across your city and region — families who prefer merchants they can trust.' },
            { icon: '💳', title: 'MundusPASS Integration', desc: 'When members pay with MundusPASS, your business earns loyalty and recurring customers. You offer 15–25% discounts; the ecosystem works for you.' },
            { icon: '🎪', title: 'Event Participation', desc: 'Participate in cultural events, Passport to the World pavilions, and the annual Celebration — reaching thousands of families in person.' },
          ].map(b => (
            <div key={b.title} className="card text-center">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-navy text-sm mb-2">{b.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-warm py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
            <h2 className="text-2xl font-bold text-navy text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Merchant Registration</h2>
            <p className="text-center text-gray-500 mb-8 text-sm">One-time $1,000 setup. No ongoing fees. Access the entire membership.</p>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Business Name *</label><input name="business_name" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Contact Person *</label><input name="contact_name" required className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email *</label><input name="email" type="email" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Phone *</label><input name="phone" type="tel" required className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Country *</label><select name="country" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">City *</label><input name="city" required className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Business Type *</label><input name="business_type" required placeholder="e.g., Restaurant, Legal Services, Healthcare" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Owner Nationality</label><select name="owner_nationality" className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Website / Social Media</label><input name="website" placeholder="https://" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Discount for Members *</label><input name="discount_offer" required placeholder="e.g., 15% on all services" className="form-field" /></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Interested in event sponsorship?</label><select name="interest_sponsorship" className="form-field"><option value="no">Not at this time</option><option value="yes">Yes, I&apos;d like to learn more</option></select></div>
              <div className="text-center mt-8"><button type="submit" disabled={loading} className="btn-gold px-12 py-4 text-lg disabled:opacity-50">{loading ? 'Submitting...' : 'Submit Merchant Application →'}</button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
