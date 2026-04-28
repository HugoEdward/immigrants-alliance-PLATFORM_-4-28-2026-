import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: { title: 'Contact' } });

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true);
    const f = new FormData(e.currentTarget);
    await supabase.from('contact_submissions').insert([{ name: f.get('name'), email: f.get('email'), subject: f.get('subject'), message: f.get('message') }]);
    setSubmitted(true); setLoading(false);
  }

  return (
    <>
      <section className="text-white text-center py-16" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Let&apos;s Connect</h1>
          <p className="text-lg opacity-85">Questions about membership, programs, events, or partnerships.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 text-center mb-8" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
            <div className="text-4xl mb-4">✉</div>
            <h2 className="text-2xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Email Us</h2>
            <p className="text-gray-500 mb-6">For all inquiries:</p>
            <a href="mailto:Connect@ImmigrantsAlliance.org" className="text-xl font-bold text-blue-mid hover:text-gold transition-colors">Connect@ImmigrantsAlliance.org</a>
            <div className="border-t border-gray-100 mt-6 pt-6">
              <p className="text-sm text-gray-500 mb-2"><strong>SEED Program:</strong></p>
              <a href="mailto:SEEDthrive@gmail.com" className="text-teal font-semibold">SEEDthrive@gmail.com</a>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
            {submitted ? (
              <div className="text-center py-8"><div className="text-5xl mb-4">✅</div><h3 className="text-xl font-bold text-navy mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Message Sent!</h3><p className="text-gray-500">We&apos;ll respond within 2 business days.</p></div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-navy mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <div><label className="block font-semibold text-sm mb-1.5 text-navy">Name *</label><input name="name" required className="form-field" /></div>
                    <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email *</label><input name="email" type="email" required className="form-field" /></div>
                  </div>
                  <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Subject</label><input name="subject" className="form-field" /></div>
                  <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Message *</label><textarea name="message" rows={5} required className="form-field" /></div>
                  <button type="submit" disabled={loading} className="btn-gold w-full justify-center disabled:opacity-50">{loading ? 'Sending...' : 'Send Message →'}</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
