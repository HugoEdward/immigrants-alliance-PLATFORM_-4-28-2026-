import Link from 'next/link';
import type { GetStaticProps } from 'next';

const faqs = [
  { q: 'What is Immigrants Alliance?', a: 'Immigrants Alliance is a nonpartisan, secular global multicultural economic development organization founded in 1976. It connects, protects, and empowers immigrant communities in 190+ countries. The organization holds Special Consultative Status with the United Nations Economic and Social Council (ECOSOC) since 1989.' },
  { q: 'What is S.E.E.D.?', a: 'S.E.E.D. (Sustainable Economic Empowerment & Development) is a program managed by Mundus.Center and powered by MundusPASS. Through Immigrants Alliance membership, eligible Member Organizations may access S.E.E.D. benefits including a dedicated Development Officer and a path toward $250,000+ in annual sustainable revenue.' },
  { q: 'How much does organization membership cost?', a: 'Organization membership is $100 per month or $1,000 per year, processed through MundusPASS. This includes access to S.E.E.D. benefits managed by Mundus.Center, free International Cultures Celebration participation, international visibility across 190+ countries, and sustainable revenue systems. Of the membership fee, 95% goes to the collecting Member Organization and 5% is the MundusPASS/Mundus.Center service fee. Member Organizations can raise over $50,000 during their Celebration participation.' },
  { q: 'Is individual membership free?', a: 'The first 1,000,000 Founding Members receive lifetime free membership. After that threshold, individual membership is $10 per month. All members receive access to programs, services, immigration consultation, MundusPASS discounts, and events worldwide.' },
  { q: 'What is MundusPASS?', a: 'MundusPASS is the financial layer of the Alliance ecosystem. Members receive 15–25% guaranteed discounts at partner businesses worldwide. Organizations earn sustainable recurring revenue from MundusPASS transactions automatically.' },
  { q: 'What is the International Cultures–Immigrants Parade?', a: 'The International Cultures–Immigrants Parade is an annual celebration held in Midtown Manhattan, New York City. Fifteen blocks of the Avenue of the Americas transform into the world\'s largest showcase of immigrant cultures — with dance, music, floats, and pageantry from every continent. The 41st Parade takes place June 13, 2026.' },
  { q: 'How can my organization participate in the International Cultures Celebration?', a: 'S.E.E.D. Member Organizations participate free as part of their membership and can raise over $50,000 during participation. Non-member organizations may participate for a $5,000 fee. The 2026 Parade is June 13. The full week-long Celebration restarts in 2027. Register at immigrantsalliance.org/parade-registration.' },
  { q: 'What is the International Cultures Celebration?', a: 'A week-long annual celebration that includes Passport to the World (a Mini-World\'s Fair with national pavilions across Manhattan), the International Cultures Conference at the United Nations, the Star of Harmony Awards, the Presentation of Nations\' Flags Ceremony, and the International Cultures–Immigrants Parade. The full Celebration restarts in 2027, scheduled from the first Saturday of June through the second Saturday of June each year.' },
  { q: 'What is Passport to the World?', a: 'An immersive cultural experience where international pavilions represent nations through cuisine, music, art, and traditions. Digital passport holders access all pavilions during Celebration week.' },
  { q: 'What is the Star of Harmony Award?', a: 'An annual award recognizing individuals and organizations who exemplify intercultural harmony, economic empowerment, and community leadership. Recipients are honored at a black-tie dinner during Celebration week.' },
  { q: 'Can I become an ambassador?', a: 'Yes. Ambassadors are strategic federation partners who help build the Alliance in their city or country. Register at immigrantsalliance.org/register-ambassador.' },
  { q: 'How can merchants join?', a: 'Businesses and professionals can join the Alliance ecosystem to reach immigrant community members, participate in cultural events, and integrate with MundusPASS. Register at immigrantsalliance.org/register-merchant.' },
  { q: 'Can cities and governments participate?', a: 'Yes. Cities and governments can partner with the Alliance for cultural diplomacy, tourism, international cooperation, and hosting Passport to the World pavilions. Contact Connect@ImmigrantsAlliance.org.' },
  { q: 'Is Immigrants Alliance available outside the United States?', a: 'Yes. Immigrants Alliance operates as a global federation across 190+ countries. The organization serves immigrant communities everywhere — from New York to Nairobi, São Paulo to Seoul, London to Lagos.' },
  { q: 'How does the safety map work?', a: 'The Interactive Safety Map shows community-sourced risk levels for cities worldwide using a red/yellow/green system. Click any location for practical guidance on visiting, working, or settling there. It is community guidance, not official government advice.' },
  { q: 'What is the Immigrants Building?', a: 'The original Immigrants Building was located at 7 West 44th Street, corner of 5th Avenue in Manhattan. The Alliance is committed to rebuilding a permanent headquarters in central Manhattan and creating similar structures in world capitals.' },
  { q: 'How can I donate?', a: 'Donations can be directed to the General Mission Fund, the Immigrants Building Fund, or the Endowment Fund. Contact Connect@ImmigrantsAlliance.org for donation options.' },
  { q: 'How do I report a discrimination incident?', a: 'Visit the Discrimination Monitor at immigrantsalliance.org/live/discrimination to view and report incidents. You can also email Connect@ImmigrantsAlliance.org for confidential support.' },
  { q: 'What is the UN ECOSOC connection?', a: 'The Immigrants Foundation — the parent organization of Immigrants Alliance — holds Special Consultative Status with the United Nations Economic and Social Council (ECOSOC) since 1989. This status was unanimously endorsed by all member governments.' },
  { q: 'When does S.E.E.D. launch?', a: 'The global launch of S.E.E.D. is September 15, 2026. Organizations can apply now at immigrantsalliance.org/join-seed.' },
  { q: 'What is the International Cultures Celebration?', a: 'A week-long annual celebration that includes Passport to the World (a Mini-World\'s Fair with national pavilions across Manhattan), the International Cultures Conference at the United Nations, the Star of Harmony Awards, the Presentation of Nations\' Flags Ceremony, and the International Cultures–Immigrants Parade. The full Celebration restarts in 2027, scheduled from the first Saturday of June through the second Saturday of June each year.' },
  { q: 'What is Passport to the World?', a: 'Passport to the World, powered by MundusPASS, is a Mini-World\'s Fair with national pavilions throughout NYC. Attendees use a digital Passport card to enter pavilions, creating participation records used for prizes, national visitor statistics, sponsor reporting, tourism follow-up, and cultural exchange engagement. It is the main economic engine of the International Cultures Celebration.' },
  { q: 'When does the full Celebration restart?', a: 'The full week-long International Cultures Celebration restarts in 2027, annually scheduled from the first Saturday of June through the second Saturday of June. For 2027: June 5–12, 2027. The 2026 event is the 41st International Cultures–Immigrants Parade on June 13, 2026.' },
  { q: 'How do nations participate in the Celebration?', a: 'National participation is currently free, provided the nation participates throughout the full Celebration: Passport to the World pavilion, International Cultures Conference, Star of Harmony Awards, Presentation of Nations\' Flags, and national contingent in the Parade. The national ROI strategic value of participation is $100,000 or greater.' },
  { q: 'How can Member Organizations raise over $50,000?', a: 'S.E.E.D. Member Organizations earn 50% of Passport to the World digital card sales they generate, 100% of internal pavilion sales (food, souvenirs, cultural products), 50% of pavilion corporate sponsorships they help generate, plus membership engagement and visibility benefits.' },
  { q: 'What is the $5,000 non-member organization participation fee?', a: 'Non-member organizations may participate in the International Cultures Celebration for a $5,000 fee. S.E.E.D. Member Organizations participate free as part of their membership.' },
  { q: 'What is the National ROI strategic value?', a: 'The national ROI strategic value of participation is $100,000 or greater. Each participating nation benefits from collective multicultural promotion, shared attendance, sponsor visibility, digital participation records, national visitor statistics, and long-term cultural and economic engagement.' },
  { q: 'What is InternationalCulturesCelebration.com?', a: 'InternationalCulturesCelebration.com is the planned independent platform for governments, nations, cities, consulates, tourism agencies, trade agencies, cultural institutions, sponsors, and international participation. It will operate separately from ImmigrantsAlliance.org to serve national interests that extend beyond the nonprofit immigrant federation mission.' },
  { q: 'How will cities compete in the future?', a: 'InternationalCulturesCelebration.com will include a city competition system where cities — not states or provinces — compete to be named and showcased in their nation\'s production at the International Cultures Celebration in NYC. This creates a powerful incentive for cities worldwide to invest in multicultural programming.' },
  { q: 'How does the 95% / 5% membership and donation structure work?', a: 'MundusPASS / Mundus.Center applies a universal policy: donations, individual membership fees, and organization membership fees generated by a Member Organization are split 95% to that organization and 5% to MundusPASS / Mundus.Center as a service fee. This applies equally to Immigrants Alliance, churches, youth groups, cultural federations, and all participating organizations.' },
  { q: 'How do merchant registration and monthly membership revenue splits work?', a: 'Merchant registration fees and monthly membership fees are split 50% to the registering or referring Member Organization and 50% to Mundus.Center / MundusPASS. Additionally, 1% of members\' purchases within the MundusPASS network goes to that member\'s Member Organization.' },
  { q: 'How does Passport to the World card revenue work?', a: '50% of digital Passport card sales go to the seller (which may be Immigrants Alliance, a Member Organization, or any participating S.E.E.D. organization). The remaining 50% is split: 25% to Immigrants Alliance and 25% to Mundus.Center. Settlement is designed for 24 hours, subject to payment processor configuration.' },
  { q: 'What payments are ready now and what is pending?', a: 'ImmigrantsAlliance.org currently accepts registrations and applications through its forms. Full payment processing through MundusPASS / Stripe is being configured and will be activated through environment variables when ready. Until then, all payment CTAs route to registration or contact forms. No payment is collected automatically without explicit configuration.' },
];

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about Immigrants Alliance, S.E.E.D., MundusPASS, the International Cultures–Immigrants Parade, membership, ambassadors, merchants, and global participation.',
  breadcrumbs: [{ name: 'FAQ', href: '/faq' }],
  schema: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
} });

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-14">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Answers</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Frequently Asked Questions</h1>
          <p className="text-base opacity-85">Everything you need to know about the Alliance, S.E.E.D., membership, events, and global participation.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden group" style={{ boxShadow: '0 1px 4px rgba(10,22,40,.06)' }}>
              <summary className="px-6 py-4 cursor-pointer font-bold text-navy text-sm hover:bg-warm transition-colors list-none flex items-center justify-between" style={{ fontFamily: 'Playfair Display, serif' }}>
                {f.q}
                <span className="text-gold text-lg ml-2 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-warm py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-gold text-sm">Contact Us →</Link>
            <Link href="/international-cultures-celebration" className="btn-outline text-navy border-navy text-sm hover:bg-navy/5 no-underline">Explore the Celebration →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
