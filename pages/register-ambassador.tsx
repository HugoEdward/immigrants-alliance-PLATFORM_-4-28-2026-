import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { countries } from '@/lib/countries';
import FormSuccess from '@/components/FormSuccess';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Become an Ambassador',
  description: 'Become a strategic federation partner. Help build the Immigrants Alliance in your city, country, or region. Leadership, cultural diplomacy, and community empowerment.',
  breadcrumbs: [{ name: 'Register', href: '/register' }, { name: 'Ambassador', href: '/register-ambassador' }],
} });

export default function RegisterAmbassador() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError('');
    const f = new FormData(e.currentTarget);
    const { error: dbErr } = await supabase.from('ambassadors').insert([{
      name: f.get('name'), email: f.get('email'), phone: f.get('phone'),
      country: f.get('country'), city: f.get('city'), languages: f.get('languages'),
      organization: f.get('organization'), social_reach: f.get('social_reach'),
      motivation: f.get('motivation'),
    }]);
    if (dbErr) { setError('Submission failed. Please email Connect@ImmigrantsAlliance.org'); console.error(dbErr); }
    else { setSubmitted(true); }
    setLoading(false);
  }

  if (submitted) return <div className="bg-warm min-h-screen py-16"><FormSuccess title="Ambassador Application Submitted!" message="Our federation team will review your application and contact you. Thank you for your leadership." backLink="/" backLabel="← Back to Home" /></div>;

  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #0E7C6B)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Federation Leadership</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Become an Alliance Ambassador</h1>
          <p className="text-base opacity-85 max-w-2xl mx-auto">Ambassadors are not volunteers. They are strategic federation partners who help build the Alliance in their city, connect organizations and merchants, and represent immigrant communities with dignity on the international stage.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-5 mb-10">
          {[
            { icon: '🌍', title: 'International Representation', desc: 'Represent your community at Alliance events, International Cultures Celebrations, and diplomatic gatherings.' },
            { icon: '🏛', title: 'Federation Building', desc: 'Help establish Alliance chapters, recruit organizations, and connect merchants in your city or region.' },
            { icon: '💼', title: 'Strategic Opportunity', desc: 'Access leadership development, international networking, and economic opportunity within the federation ecosystem.' },
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
            <h2 className="text-2xl font-bold text-navy text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Ambassador Application</h2>
            <p className="text-center text-gray-500 mb-8 text-sm">Tell us about yourself and how you envision building the Alliance in your area.</p>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Full Name *</label><input name="name" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email *</label><input name="email" type="email" required className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Phone *</label><input name="phone" type="tel" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Country *</label><select name="country" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">City *</label><input name="city" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Languages Spoken</label><input name="languages" placeholder="e.g., English, Spanish, Mandarin" className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Organization (if any)</label><input name="organization" className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Social / Community Reach</label><input name="social_reach" placeholder="e.g., 500 followers, 200 members" className="form-field" /></div>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Why do you want to be an ambassador? *</label><textarea name="motivation" rows={4} required placeholder="Tell us about your vision for building the Alliance in your area." className="form-field" /></div>
              <div className="text-center mt-8"><button type="submit" disabled={loading} className="btn-gold px-12 py-4 text-lg disabled:opacity-50">{loading ? 'Submitting...' : 'Submit Ambassador Application →'}</button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
