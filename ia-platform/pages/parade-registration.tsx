import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { countries } from '@/lib/countries';
import FormSuccess from '@/components/FormSuccess';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: { title: 'Parade Registration' } });

export default function ParadeRegistration() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError('');
    const f = new FormData(e.currentTarget);
    const { error: dbErr } = await supabase.from('parade_registrations').insert([{
      org_name: f.get('org_name'), country_represented: f.get('country_represented'),
      country_operation: f.get('country_operation'), contact_name: f.get('contact_name'),
      contact_title: f.get('contact_title'), contact_email: f.get('contact_email'),
      phone: f.get('phone'), membership_status: f.get('membership_status'),
      showcase_description: f.get('showcase_description'),
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
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>41st International Cultures — Immigrants Parade</h1>
          <p className="text-navy/80 text-lg mb-6">Midtown Manhattan, New York City</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-navy/90 space-y-3 text-sm">
              <div><strong>📍 Route:</strong> Avenue of the Americas, 42nd → 57th St</div>
              <div><strong>🕘 Time:</strong> 9:00 AM Step-Off</div>
              <div><strong>🏳 Ceremony:</strong> Official Presentation of Nations Flags</div>
              <div><strong>💰 Cost:</strong> FREE for members · $5,000 non-members</div>
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

      <section className="bg-warm py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
            <h2 className="text-2xl font-bold text-navy text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Register for the 41st Immigrants Parade</h2>
            <p className="text-center text-gray-500 mb-8 text-sm">Organization registration · Deadline: May 30, 2026</p>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Organization Name *</label><input name="org_name" required className="form-field" /></div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Country Represented *</label><select name="country_represented" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Country of Operation *</label><select name="country_operation" required className="form-field"><option value="">Select...</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Contact Person *</label><input name="contact_name" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Title *</label><input name="contact_title" required className="form-field" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email *</label><input name="contact_email" type="email" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Phone *</label><input name="phone" type="tel" required className="form-field" /></div>
              </div>
              <div className="mb-5">
                <label className="block font-semibold text-sm mb-1.5 text-navy">Membership Status *</label>
                <select name="membership_status" required className="form-field"><option value="">Select...</option><option value="active">Active Member (1+ year)</option><option value="applying">I&apos;d like to apply for membership</option><option value="non-member">Non-member ($5,000 fee)</option></select>
                <p className="text-xs text-gray-500 mt-1">Members participate FREE. <Link href="/register-organization" className="text-teal underline">Apply for membership</Link> for free participation.</p>
              </div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Describe Your Cultural Showcase</label><textarea name="showcase_description" rows={4} placeholder="Dance, music, floats, bands, traditional dress..." className="form-field" /></div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Estimated Participants</label><input name="participants_count" type="number" placeholder="e.g., 50" className="form-field" /></div>
              <div className="text-center mt-8"><button type="submit" disabled={loading} className="btn-gold px-12 py-4 text-lg disabled:opacity-50">{loading ? 'Submitting...' : 'Submit Parade Registration →'}</button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
