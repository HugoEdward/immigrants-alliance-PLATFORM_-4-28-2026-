import Link from 'next/link';
import type { GetStaticProps } from 'next';

const QA = [
  { q: 'What is Immigrants Alliance?', a: 'Immigrants Alliance is a nonpartisan, secular global multicultural economic development organization founded in 1976 by Hugo E. Juarez. It holds Special Consultative Status with the United Nations Economic and Social Council (ECOSOC) since 1989. The organization connects immigrant, diaspora, cultural, civic, and community organizations across 190+ countries through programs like the S.E.E.D. economic empowerment initiative, the International Cultures Celebration, and the annual International Cultures–Immigrants Parade in New York City.' },
  { q: 'What is the S.E.E.D. program?', a: 'S.E.E.D. (Sustainable Economic Empowerment and Development) is an Immigrants Alliance program that transforms fragile nonprofits into financially self-sustaining institutions. Each participating organization receives a dedicated Development Officer and a roadmap to generate $250,000+ in new annual revenue. S.E.E.D. launches September 15, 2026.' },
  { q: 'What is the International Cultures–Immigrants Parade?', a: 'The International Cultures–Immigrants Parade is an annual celebration of immigrant cultures held in Midtown Manhattan, New York City since 1986. The 41st edition takes place on June 13, 2026 on the Avenue of the Americas from 42nd to 57th Street, starting at 9:00 AM. Participation is free for Immigrants Alliance member organizations.' },
  { q: 'How do I join Immigrants Alliance?', a: 'Individual membership is free for the first 1,000,000 founding members — free for life. Visit immigrantsalliance.org/register to join. Organization membership connects nonprofits to the S.E.E.D. economic empowerment program. Merchant membership connects businesses to the MundusPASS discount network.' },
  { q: 'Does Immigrants Alliance have UN status?', a: 'Yes. The Immigrants Foundation (the parent organization) has held Special Consultative Status with the United Nations Economic and Social Council (ECOSOC) since 1989, unanimously endorsed by all member governments.' },
  { q: 'Where is the 2026 Immigrants Parade?', a: 'The 41st International Cultures–Immigrants Parade takes place on Saturday, June 13, 2026 on the Avenue of the Americas (6th Avenue) from 42nd Street to 57th Street in Midtown Manhattan, New York City. The parade begins at 9:00 AM. Register at immigrantsalliance.org/parade-registration.' },
  { q: 'How many countries does Immigrants Alliance serve?', a: 'Immigrants Alliance connects immigrant organizations across 190+ countries worldwide — from New York to Nairobi, São Paulo to Seoul, London to Lagos. Founded in 1976 with UN ECOSOC Consultative Status since 1989.' },
  { q: 'Is membership free?', a: 'Yes. Individual membership is free for the first 1,000,000 founding members — free for life. Additional tiers: Cultural Passport ($25 one-time + $5/year), Global Empowerment ($100 one-time + $5/year), and Global Leader ($99/month). Register at immigrantsalliance.org/register.' },
  { q: 'What is MundusPASS?', a: 'MundusPASS is the economic engine of the Immigrants Alliance ecosystem. Members receive 15-25% guaranteed discounts at participating merchants worldwide. A 5% transaction fee funds member organizations and platform sustainability — creating a self-sustaining economic cycle.' },
  { q: 'Who founded Immigrants Alliance?', a: 'Immigrants Alliance was founded in 1976 by Hugo Edward Juarez through the Immigrants Foundation. The first International Cultures Celebration and Immigrants Parade were held in 1986. In 1989, the organization received UN ECOSOC Consultative Status, unanimously endorsed by all member governments.' },
];

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'About Immigrants Alliance — Questions & Answers',
      description: 'Everything about Immigrants Alliance: membership, S.E.E.D., the Immigrants Parade, UN ECOSOC status, MundusPASS, and how to join.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: QA.map(i => ({
          '@type': 'Question', name: i.q,
          acceptedAnswer: { '@type': 'Answer', text: i.a },
        })),
      },
      breadcrumbs: [{ name: 'Answers', href: '/answers' }],
    },
  };
};

export default function AnswersPage() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          About Immigrants Alliance
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">Everything you need to know — in plain language.</p>
        <div className="space-y-8">
          {QA.map((item, i) => (
            <article key={i} className="border-b border-gray-200 pb-8">
              <h2 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{item.q}</h2>
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 bg-amber-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to join?</h2>
          <p className="text-gray-500 mb-6">190+ countries. Every culture. Every background. All welcome.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/register" className="inline-block bg-amber-600 text-white px-6 py-3 rounded font-bold hover:bg-amber-700">Join Free →</Link>
            <Link href="/register-organization" className="inline-block border-2 border-navy text-navy px-6 py-3 rounded font-bold hover:bg-navy hover:text-white">Register Organization →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
