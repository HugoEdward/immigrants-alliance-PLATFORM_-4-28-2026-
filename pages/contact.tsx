import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Contact & Help',
  breadcrumbs: [{ name: 'Contact', href: '/contact' }],
  description: 'Find answers to the most common questions about Immigrants Alliance — organization membership, parade registration, Economic Empowerment through S.E.E.D., individual membership, and more.',
  schema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'How do I register my organization?', acceptedAnswer: { '@type': 'Answer', text: 'Visit immigrantsalliance.org/register-organization. Organization membership is $100/month or $1,000/year. No dues for active S.E.E.D. Economic Empowerment members.' } },
    { '@type': 'Question', name: 'When is the next Parade?', acceptedAnswer: { '@type': 'Answer', text: '41st International Cultures–Immigrants Parade: Saturday, June 13, 2026, 11:00 AM, Avenue of the Americas, 42nd to 57th Street, NYC.' } },
    { '@type': 'Question', name: 'Can individuals join for free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The first 1,000,000 Founding Members join free for life. After that, individual membership is $10/month.' } },
  ] },
} });

const quickAnswers = [
  { q: 'How do I register my organization?', a: 'Organization membership is $100/month or $1,000/year. No dues for active S.E.E.D. Economic Empowerment members.', link: '/register-organization', cta: 'Register Organization →' },
  { q: 'How do I register for the Parade?', a: 'Submit the Parade Participation Agreement online. Member Organizations participate free. Non-members: $5,000 fee.', link: '/parade-registration', cta: 'Register for Parade →' },
  { q: 'Who can participate in the Parade?', a: 'National contingents, socio-cultural organizations, immigrant/diaspora groups, soccer/fútbol clubs, youth teams, dance/music/folklore groups, faith-based organizations, chambers of commerce, and diplomatic delegations.' },
  { q: 'Can soccer/fútbol clubs participate?', a: 'Yes. Youth soccer and fútbol teams, adult teams, and cultural sports clubs are warmly invited to march as part of their national contingent.' },
  { q: 'Can children and youth teams participate?', a: 'Yes. Children and youth cultural groups, youth soccer teams, and student organizations are welcome.' },
  { q: 'What is the Parade date and time?', a: '41st International Cultures–Immigrants Parade: Saturday, June 13, 2026, 11:00 AM, Avenue of the Americas, 42nd to 57th Street, NYC.' },
  { q: 'What documents are required?', a: 'Organization By-Laws and latest Resolution naming Elected Officers. Parade contingents also need certified Liability Insurance (non-members). Submit online or email to ImmigrantsAlliance@gmail.com.' },
  { q: 'What is the organization membership fee?', a: '$100/month or $1,000/year. No dues for active S.E.E.D. members. Processed through MundusPASS (95% to your organization, 5% service fee).', link: '/register-organization', cta: 'Register →' },
  { q: 'Is there a grant?', a: 'Qualified organizations may receive a grant equivalent to the registration fee and first month of Economic Empowerment / S.E.E.D. membership. Subject to review, approval, and availability.' },
  { q: 'Can individuals join?', a: 'Yes. The first 1,000,000 Founding Members join free for life. After that threshold, individual membership is $10/month.', link: '/register', cta: 'Join as Individual →' },
  { q: 'What is Economic Empowerment through S.E.E.D.?', a: 'S.E.E.D. (Sustainable Economic Empowerment & Development) helps organizations build structured membership, merchant participation, and sustainable income. Managed by Mundus.Center, powered by MundusPASS.', link: '/join-seed', cta: 'Learn More →' },
  { q: 'What is CulturesCelebration.com?', a: 'The official International Cultures Celebration platform for national participation, Passport to the World, the Conference at the UN, Star of Harmony Awards, and the International Cultures–Immigrants Parade.', link: 'https://culturescelebration.com', cta: 'Visit ↗', ext: true },
  { q: 'What is Immigrants Alliance\u2019s role?', a: 'Immigrants Alliance is the federation and community-organizing partner connecting immigrant, diaspora, cultural, civic, and community organizations. CulturesCelebration.com is the official Celebration platform. Mundus.Center manages the economic infrastructure.' },
  { q: 'How do Consulates and UN Missions participate?', a: 'Through the National Participation Application at CulturesCelebration.com. Immigrants Alliance connects official participation with diaspora communities and organizations.', link: '/diplomatic-consular-participation', cta: 'Diplomatic Participation →' },
];

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
      <section className="text-white text-center py-14" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>How Can We Help?</h1>
          <p className="text-base opacity-85">Find your answer below. If your question is not listed, contact us at the bottom of this page.</p>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-3">
          {quickAnswers.map((qa, i) => (
            <details key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden group" style={{ boxShadow: '0 1px 4px rgba(10,22,40,.06)' }}>
              <summary className="px-6 py-4 cursor-pointer font-bold text-navy text-sm hover:bg-warm transition-colors list-none flex items-center justify-between" style={{ fontFamily: 'Playfair Display, serif' }}>
                {qa.q}
                <span className="text-gold text-lg ml-2 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 border-t border-gray-50">
                <p className="text-gray-600 text-sm leading-relaxed mt-3">{qa.a}</p>
                {qa.link && (
                  <div className="mt-3">
                    {qa.ext ? (
                      <a href={qa.link} target="_blank" rel="noopener noreferrer" className="text-teal text-sm font-semibold hover:underline">{qa.cta}</a>
                    ) : (
                      <Link href={qa.link} className="text-teal text-sm font-semibold hover:underline">{qa.cta}</Link>
                    )}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-warm py-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold text-navy text-center mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/register-organization" className="card p-4 text-center no-underline hover:shadow-lg transition-all"><span className="text-2xl">🏛</span><p className="text-xs text-navy font-bold mt-2">Register Organization</p></Link>
            <Link href="/parade-registration" className="card p-4 text-center no-underline hover:shadow-lg transition-all"><span className="text-2xl">🎉</span><p className="text-xs text-navy font-bold mt-2">Parade Registration</p></Link>
            <Link href="/join-seed" className="card p-4 text-center no-underline hover:shadow-lg transition-all"><span className="text-2xl">🌱</span><p className="text-xs text-navy font-bold mt-2">Economic Empowerment</p></Link>
            <Link href="/register" className="card p-4 text-center no-underline hover:shadow-lg transition-all"><span className="text-2xl">👤</span><p className="text-xs text-navy font-bold mt-2">Individual Membership</p></Link>
          </div>
        </div>
      </section>

      {/* Contact form — AFTER Q&A */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-xl font-bold text-navy text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Question not answered above?</h2>
          <p className="text-center text-gray-500 text-sm mb-6">Send us a message and we will respond promptly.</p>
          {submitted ? (
            <div className="text-center py-10"><div className="text-4xl mb-3">✅</div><p className="text-navy font-bold">Message sent. We will respond soon.</p><Link href="/" className="text-teal text-sm font-semibold hover:underline mt-4 inline-block">← Back to Home</Link></div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Name *</label><input name="name" required className="form-field" /></div>
                <div><label className="block font-semibold text-sm mb-1.5 text-navy">Email *</label><input name="email" type="email" required className="form-field" /></div>
              </div>
              <div><label className="block font-semibold text-sm mb-1.5 text-navy">Subject *</label><input name="subject" required className="form-field" /></div>
              <div><label className="block font-semibold text-sm mb-1.5 text-navy">Message *</label><textarea name="message" rows={4} required className="form-field" /></div>
              <div className="text-center"><button type="submit" disabled={loading} className="btn-gold px-10 py-3 disabled:opacity-50">{loading ? 'Sending...' : 'Send Message →'}</button></div>
            </form>
          )}
          <div className="text-center mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-500 text-sm mb-1">Direct email: <a href="mailto:Connect@ImmigrantsAlliance.org" className="text-teal font-semibold underline">Connect@ImmigrantsAlliance.org</a></p>
            <p className="text-gray-400 text-xs">Immigrants Alliance · International Cultures Mission · a brainchild of Immigrants Foundation · UN NGO ECOSOC & DPI</p>
          </div>
        </div>
      </section>
    </>
  );
}
