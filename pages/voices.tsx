import { useState } from 'react';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

const voices = [
  { type: 'founder', title: 'Why I Gave My Life to This', desc: 'The founder of the Immigrants Foundation reflects on nearly five decades of building bridges, the rainy day of the first parade in 1986, and why the next fifty years matter even more than the last.', tag: 'Hugo Edward Juarez · New York, 1976–present' },
  { type: 'success', title: 'From a Suitcase to a Business That Employs 40 People', desc: 'Amara arrived in Toronto from Lagos with two bags and a phone number. Today she runs a catering company celebrating the food of three continents.', tag: 'Entrepreneur · Lagos → Toronto' },
  { type: 'civic', title: '"This City Would Not Function Without Immigrants"', desc: 'A German mayor explains how immigrant workers, entrepreneurs, and families revitalized neighborhoods that were emptying — and why his administration actively recruits newcomers.', tag: 'Mayor · Duisburg, Germany' },
  { type: 'family', title: 'Our Daughter Speaks Three Languages. We Speak Hope.', desc: 'A family from Damascus, now in Berlin, shares how their daughter became the bridge between two worlds — translating understanding between cultures.', tag: 'Family · Damascus → Berlin' },
  { type: 'video', title: 'The Nurse Who Saved a Ward', desc: 'A short documentary about Maria, who left Manila to work in a London hospital. When the ward was understaffed, she trained six colleagues. The hospital credits her with saving the department.', tag: '🎬 Video · Manila → London' },
  { type: 'research', title: 'Why Every Country Needs More Immigrants', desc: 'Declining birth rates in Japan, Italy, South Korea. Aging populations everywhere. Nations that welcome immigrants grow stronger. The demographic data is unambiguous.', tag: 'Global Research · Demographic Analysis' },
  { type: 'culture', title: 'The Festival That Changed a City\u2019s Mind', desc: 'When a small town in Yorkshire hosted its first multicultural festival, 200 people came. The next year, 3,000. By the third year, the town council made it permanent.', tag: 'Cultural Leader · Yorkshire, UK' },
  { type: 'podcast', title: 'Voices Without Borders', desc: 'An Ethiopian poet in Nairobi, a Colombian architect in Madrid, and a Vietnamese chef in Melbourne discuss what home means when you carry it inside you.', tag: '🎙 Podcast · Nairobi · Madrid · Melbourne' },
  { type: 'success', title: 'I Was Undocumented at Nine. I Became a Doctor at Twenty-Three.', desc: 'Dr. Reyes shares the 14-year journey from crossing a border to completing medical residency — and why she chose to practice in the community that raised her.', tag: 'Dr. Reyes · Southwest USA' },
  { type: 'civic', title: 'A Brazilian Mayor Built an Immigrant Welcome Center', desc: 'Venezuelan and Haitian families were sleeping in bus stations. The mayor built a center. Within a year, 80% had jobs, housing, and their children in school.', tag: 'Mayor · Curitiba, Brazil' },
  { type: 'organization', title: 'How a Tiny Dominican Association Became a Beacon', desc: 'Four volunteers and a borrowed room. Today they serve 2,000 families and have their own building. S.E.E.D. helped them get there.', tag: 'Organization Spotlight · Bronx, NYC' },
  { type: 'merchant', title: 'The Halal Butcher Who Became His Block\u2019s Most Trusted Neighbor', desc: 'When a Senegalese butcher opened on a changing Brooklyn street, some neighbors were skeptical. Within two years, his shop became the block\u2019s gathering place.', tag: 'Merchant Spotlight · Brooklyn, NYC' },
];

const categories: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'success', label: 'Success Stories' },
  { key: 'civic', label: 'Civic Leaders' },
  { key: 'family', label: 'Families' },
  { key: 'culture', label: 'Culture' },
  { key: 'video', label: '🎬 Video' },
  { key: 'podcast', label: '🎙 Podcast' },
  { key: 'research', label: 'Research' },
  { key: 'founder', label: 'Founder' },
  { key: 'organization', label: 'Organizations' },
  { key: 'merchant', label: 'Merchants' },
];

export const getStaticProps: GetStaticProps = async () => ({ props: {
  title: 'Global Voices & Immigrant Angels',
  description: 'Stories, interviews, videos, and podcasts from immigrants, mayors, cultural leaders, and advocates across every continent.',
  breadcrumbs: [{ name: 'Global Voices', href: '/voices' }],
  schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Global Voices & Immigrant Angels', description: 'Stories, interviews, and media from immigrant communities worldwide.' },
} });

export default function VoicesPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? voices : voices.filter(v => v.type === filter);

  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C, #0E7C6B)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Global Voices · Immigrant Angels</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>The stories that change minds</h1>
          <p className="text-base opacity-85 max-w-2xl mx-auto">Articles. Videos. Podcasts. Interviews with mayors, cultural leaders, advocates, and families from every continent. Every immigrant carries a story the world needs to hear.</p>
        </div>
      </section>

      <section className="bg-warm py-4 sticky top-0 z-30 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c.key} onClick={() => setFilter(c.key)} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${filter === c.key ? 'bg-navy text-white border-navy' : 'bg-white text-gray-500 border-gray-200 hover:border-navy'}`}>{c.label}</button>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-10">No stories in this category yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((v, i) => (
                <article key={i} className="card flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gold/15 text-gold-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{v.type}</span>
                  </div>
                  <h2 className="text-lg font-bold text-navy mb-2 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{v.desc}</p>
                  <p className="text-xs text-gray-400 italic">{v.tag}</p>
                </article>
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-4">Have a story to share? Know a leader who deserves recognition?</p>
            <Link href="/contact" className="btn-gold text-sm">Submit a Story →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
