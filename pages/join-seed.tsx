import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { countries } from '@/lib/countries';
import FormSuccess from '@/components/FormSuccess';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Economic Empowerment through S.E.E.D. — Sustainable Economic Empowerment & Development',
  description: 'S.E.E.D. helps socio-cultural organizations build sustainable recurring income, gain international visibility, and achieve long-term financial independence. Apply to join the global federation.',
  breadcrumbs: [{ name: 'Programs', href: '/programs' }, { name: 'S.E.E.D.', href: '/join-seed' }],
  schema: [
    {
      '@context': 'https://schema.org', '@type': 'WebPage',
      name: 'S.E.E.D. — Sustainable Economic Empowerment & Development',
      description: 'A global program helping immigrant and multicultural organizations build financial sustainability through federation participation, member systems, and cultural enterprise.',
      isPartOf: { '@type': 'WebSite', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' },
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is S.E.E.D.?', acceptedAnswer: { '@type': 'Answer', text: 'S.E.E.D. (Sustainable Economic Empowerment & Development) is a program managed by Mundus.Center and powered by MundusPASS that helps socio-cultural, religious, professional, and community organizations build sustainable recurring income. Through Immigrants Alliance membership, eligible Member Organizations may access S.E.E.D. benefits.' } },
        { '@type': 'Question', name: 'How much does S.E.E.D. membership cost?', acceptedAnswer: { '@type': 'Answer', text: 'Organization membership is $100 per month or $1,000 per year, processed through MundusPASS. Of the fee, 95% goes to the collecting organization and 5% is the MundusPASS/Mundus.Center service fee. This includes access to S.E.E.D. benefits, free International Cultures Celebration participation, and international visibility across 190+ countries.' } },
        { '@type': 'Question', name: 'What is a Dedicated Development Officer?', acceptedAnswer: { '@type': 'Answer', text: 'A professionally trained person assigned exclusively to your organization, focused on building your income, partnerships, visibility, and sustainable revenue systems every day.' } },
        { '@type': 'Question', name: 'What revenue goal does S.E.E.D. target?', acceptedAnswer: { '@type': 'Answer', text: 'S.E.E.D. helps organizations work toward $250,000+ in annual sustainable revenue through member enrollment, merchant partnerships, event revenue, MundusPASS integration, and federation participation.' } },
        { '@type': 'Question', name: 'Is S.E.E.D. available internationally?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. S.E.E.D. is designed for organizations in 190+ countries. The global launch is September 15, 2026.' } },
      ],
    },
  ],
} });

const challenges = [
  { icon: '💸', title: 'Unstable Funding', desc: 'You spend more time chasing grants and donations than serving your community. And every year, the uncertainty starts again.' },
  { icon: '😩', title: 'Volunteer Burnout', desc: 'Your most dedicated people are exhausted. They give everything — but without sustainable support, they cannot carry the mission forever.' },
  { icon: '📉', title: 'Declining Participation', desc: 'Fewer people attend your events. Younger generations drift away. The culture you are trying to preserve feels harder to pass on each year.' },
  { icon: '👻', title: 'Invisibility', desc: 'Your organization does important work — but nobody outside your immediate circle knows it exists. No recognition. No partnerships. No growth.' },
  { icon: '🔄', title: 'No Recurring Income', desc: 'You depend on one-time fundraisers, seasonal donations, and the goodwill of a few supporters. There is no predictable income you can build on.' },
  { icon: '🏚️', title: 'No Permanent Home', desc: 'You meet in borrowed spaces, community centers, or members\u2019 homes. Without a permanent location, your programs cannot grow or be taken seriously.' },
];

const benefits = [
  { icon: '👤', title: 'Dedicated Development Officer', desc: 'A professionally trained person assigned exclusively to your organization — focused on building your income, partnerships, and visibility every single day.' },
  { icon: '🌍', title: 'International Visibility', desc: 'Your organization gains recognition across the Alliance\u2019s 190+ country federation. Participate in the International Cultures Celebration, Passport to the World pavilions, and global events.' },
  { icon: '💳', title: 'MundusPASS Revenue Stream', desc: 'When your members and community use MundusPASS, your organization earns sustainable recurring revenue from every transaction — automatically.' },
  { icon: '🎪', title: 'Passport to the World Pavilion', desc: 'Showcase your nation\u2019s culture at international pavilions during the annual Celebration week. Tourism, sponsors, and cultural pride — combined.' },
  { icon: '🤝', title: 'Federation Participation', desc: 'Join a structured global network where organizations share resources, coordinate events, and support each other across borders.' },
  { icon: '🏛', title: 'Path Toward Your Own Cultural Center', desc: 'S.E.E.D. includes infrastructure support to help your organization acquire or build a permanent home for your programs.' },
  { icon: '🎉', title: 'Free Celebration Participation', desc: 'Member Organizations participate in the full International Cultures Celebration — including Passport to the World, the Conference, and the Parade — free of charge. Members can raise over $50,000 during participation. Non-member fee: $5,000.' },
  { icon: '📊', title: 'Sustainable Revenue Systems', desc: 'Through member enrollment, merchant partnerships, event revenue, and federation dividends — S.E.E.D. builds multiple income streams, not just one.' },
];

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

  if (submitted) return <div className="bg-warm min-h-screen py-16"><FormSuccess title="S.E.E.D. Application Submitted!" message="Our team will contact you within 10 business days. Questions: SEEDthrive@gmail.com" backLink="/" backLabel="← Back to Home" /></div>;

  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,61,46,.94), rgba(14,124,107,.9))' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="section-label" style={{ color: '#E8C36A' }}>🌱 Economic Empowerment · Launching September 15, 2026</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Economic Empowerment<br />through <span className="text-gold-light">S.E.E.D.</span></h1>
          <p className="text-sm opacity-70 mb-4">Sustainable Economic Empowerment & Development</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">S.E.E.D., a Mundus.Center program powered by MundusPASS — designed specifically for socio-cultural, religious, professional, and community organizations that deserve more than survival. Through Immigrants Alliance membership, eligible Member Organizations access S.E.E.D. benefits.</p>
        </div>
      </section>

      {/* ═══ ROI Simulator ═══ */}
      <section className="bg-warm py-14 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label">Illustrative Scenario</span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>See How Your Organization Could Work Toward Sustainable Income</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">These are illustrative scenarios showing potential ecosystem participation models. Actual outcomes depend on activation, outreach, compliance, and approved program rules. No income is guaranteed.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { level: 'Emerging Organization', amount: '$275,000', drivers: ['500 individual members', '20 merchants/professionals', 'Passport to the World card sales', 'Local sponsorship activation', 'Pavilion participation', 'Organization fundraising'] },
              { level: 'Growing Federation', amount: '$550,000', drivers: ['2,000 individual members', '60 merchants/professionals', 'Passport to the World + pavilion revenue', 'Regional sponsorship activation', 'Merchant monthly memberships', 'Federation member dues'] },
              { level: 'Highly Activated National Federation', amount: '$950,000+', drivers: ['5,000+ individual members', '150+ merchants/professionals', 'National sponsorship activation', 'Multiple pavilion activations', 'Closed-loop ecosystem participation', 'Federation-wide growth'] },
            ].map(tier => (
              <div key={tier.level} className="bg-white rounded-2xl border border-gray-100 p-6 text-center" style={{ boxShadow: '0 2px 8px rgba(10,22,40,.06)' }}>
                <p className="text-xs text-teal font-bold uppercase tracking-wider mb-2">{tier.level}</p>
                <p className="text-3xl font-extrabold text-navy mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{tier.amount}</p>
                <p className="text-xs text-gray-400 mb-4">potential pathway toward yearly sustainable income</p>
                <div className="text-left space-y-1.5">
                  {tier.drivers.map(d => <p key={d} className="text-xs text-gray-500 pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-teal before:font-bold">{d}</p>)}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[0.65rem] text-gray-400 mt-6 italic max-w-lg mx-auto">These scenarios are illustrative models, not income guarantees. Organizations may work toward these levels depending on activation, participation, and ecosystem engagement. S.E.E.D. is managed by Mundus.Center and powered by MundusPASS.</p>
        </div>
      </section>

      {/* ═══ We Understand ═══ */}
      <section className="py-16" aria-labelledby="challenges-h">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">We Understand</span>
            <h2 id="challenges-h" className="text-3xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>If this sounds familiar, you are not alone</h2>
            <p className="text-gray-500 text-sm">Ninety-two percent of nonprofit organizations worldwide lack financial sustainability. These are the challenges we hear from organizational leaders every day — and the ones S.E.E.D. was built to solve.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map(c => (
              <div key={c.title} className="bg-warm rounded-xl p-6 border border-gray-100">
                <div className="text-2xl mb-2">{c.icon}</div>
                <h3 className="font-bold text-navy text-base mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ How S.E.E.D. Helps ═══ */}
      <section className="bg-navy py-16 text-white" aria-labelledby="benefits-h">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label" style={{ color: '#E8C36A' }}>What S.E.E.D. Gives Your Organization</span>
            <h2 id="benefits-h" className="text-3xl font-bold text-gold-light mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Not charity. Infrastructure.</h2>
            <p className="text-white/50 text-sm">S.E.E.D. does not give you money and walk away. It builds the systems inside your organization that generate sustainable income, visibility, and operational independence — permanently.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map(b => (
              <div key={b.title} className="bg-white/[.04] border border-white/10 rounded-xl p-5">
                <div className="text-xl mb-2">{b.icon}</div>
                <h3 className="font-bold text-gold-light text-sm mb-2">{b.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12 Pillars ═══ */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10"><span className="section-label">The Framework</span><h2 className="text-2xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>12 Pillars of Empowerment</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {['Sustainable Revenue Systems', 'Dedicated Development Officer', 'Local Ownership & Global Alliances', 'Sustainable Development Campaign', 'Financial-Mission Alignment', 'Stable Recurring Income', 'International Cultures Celebration', 'Own Your Cultural Center', 'Preserve Cultural Heritage', 'Community Engagement Infrastructure', 'Social Cohesion Programs', 'Local & Global Impact'].map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 text-sm"><span className="text-teal font-bold mr-2">{i + 1}.</span><span className="text-navy font-medium">{p}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Economic Infrastructure Bridge ═══ */}
      <section className="bg-navy-light/30 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/[.04] border border-white/10 rounded-2xl p-8 text-center">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gold/60 block mb-2">Economic Infrastructure</span>
            <h2 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Powered by the Mundus.Center Ecosystem</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto mb-4">S.E.E.D. organizations are designed to connect with the broader Mundus.Center economic infrastructure — including MundusPASS (member commerce and discounts), MundusSEED (federation revenue coordination), and city-level economic programs. As the ecosystem develops, S.E.E.D. participants will gain access to planned financial tools, merchant networks, and international economic partnerships.</p>
            <p className="text-xs text-gray-400 italic">Mundus.Center is the planned operating infrastructure for the Alliance economic ecosystem. Systems are under active development.</p>
            <div className="mt-4"><a href="/international-cultures-celebration" className="text-teal text-sm font-semibold hover:underline">Learn about the International Cultures Celebration →</a></div>
          </div>
        </div>
      </section>

      {/* ═══ Membership & ROI ═══ */}
      <section className="bg-warm py-16" aria-labelledby="roi-h">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label">Membership</span>
            <h2 id="roi-h" className="text-3xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>What your organization receives — and what it costs</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.08)' }}>
            <h3 className="text-xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Your Organization Receives</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
              {[
                'Dedicated Development Officer (full-time)',
                'Free International Cultures Celebration participation (potential $50,000+ revenue)',
                'International Cultures Celebration access',
                'Passport to the World pavilion eligibility',
                'MundusPASS revenue sharing',
                'Federation participation & resource sharing',
                'International visibility across 190+ countries',
                'Path toward permanent cultural center',
                'Member enrollment infrastructure',
                'Merchant partnership revenue',
                'Real-time dashboards & peer mentoring',
                'Star of Harmony Award nominations',
              ].map(b => <p key={b} className="text-sm text-gray-600 py-1 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-teal before:font-bold">{b}</p>)}
            </div>
            <div className="bg-navy rounded-xl p-6 text-center text-white">
              <p className="text-white/60 text-sm mb-2">Organization Membership</p>
              <div className="text-4xl font-extrabold text-gold-light mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>$100<span className="text-lg font-normal text-white/50">/month</span></div>
              <p className="text-white/40 text-xs">or $1,000/year · processed through MundusPASS (95% to your organization, 5% service fee)</p>
              <p className="text-white/60 text-sm mt-4 max-w-md mx-auto leading-relaxed">Member Organizations can raise over $50,000 during their International Cultures Celebration participation — and their participation is free as part of membership. Non-member organizations may participate for a $5,000 fee. Your $100/month is an investment in your organization&rsquo;s permanent independence.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.08)' }}>
            <h3 className="text-xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Individual Membership</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal/5 border border-teal/20 rounded-xl p-5">
                <div className="text-2xl font-extrabold text-teal" style={{ fontFamily: 'Playfair Display, serif' }}>FREE</div>
                <p className="text-sm text-gray-500 mt-1 mb-2">First 1,000,000 Founding Members — lifetime free</p>
                <p className="text-xs text-gray-400">All programs, services, legal referrals, MundusPASS discounts, events worldwide.</p>
              </div>
              <div className="bg-gold/5 border border-gold/20 rounded-xl p-5">
                <div className="text-2xl font-extrabold text-gold-dark" style={{ fontFamily: 'Playfair Display, serif' }}>$10<span className="text-sm font-normal text-gray-400">/month</span></div>
                <p className="text-sm text-gray-500 mt-1 mb-2">After 1,000,000 Founding Members</p>
                <p className="text-xs text-gray-400">Same benefits. Supporting the movement that supports you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Application Form — preserved exactly ═══ */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
            <h2 className="text-2xl font-bold text-navy text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Apply for S.E.E.D.</h2>
            <p className="text-center text-gray-500 mb-8 text-sm">Your application will be reviewed by the S.E.E.D. team. Must be an Alliance member. <Link href="/register-organization" className="text-teal underline">Register your organization first</Link> if needed.</p>
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
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Primary Challenge *</label><textarea name="primary_challenge" rows={3} required placeholder="What is the biggest obstacle to your organization's sustainability?" className="form-field" /></div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Goals for S.E.E.D. *</label><textarea name="goals" rows={3} required placeholder="What do you hope to achieve through S.E.E.D.?" className="form-field" /></div>
              <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Does your organization own or lease a building?</label><select name="has_building" className="form-field"><option value="no">No</option><option value="yes">Yes</option></select></div>
              <div className="text-center mt-8"><button type="submit" disabled={loading} className="btn-gold px-12 py-4 text-lg disabled:opacity-50">{loading ? 'Submitting...' : 'Submit S.E.E.D. Application →'}</button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
