import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'Live Safety',
    description: 'Live Immigrants Alliance safety intelligence tools for discrimination, danger zones, and safe cities.',
  },
});

const liveTools = [
  {
    title: 'Discrimination Monitor',
    description: 'Review anti-immigrant incidents by city, type, and severity.',
    href: '/live/discrimination',
    cta: 'View Incidents',
  },
  {
    title: 'Danger Map',
    description: 'Explore simulated regional risk zones and city-level warnings.',
    href: '/live/danger-map',
    cta: 'Open Danger Map',
  },
  {
    title: 'Safe Cities',
    description: 'Compare safer locations by rating, country, and reason.',
    href: '/live/safe-cities',
    cta: 'Find Safe Cities',
  },
];

export default function LiveSafetyPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #0E7C6B)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Live Intelligence</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Safety & Risk Intelligence</h1>
          <p className="text-lg opacity-85">A central hub for the live protective intelligence tools.</p>
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-7">
            {liveTools.map((tool) => (
              <div key={tool.href} className="card flex flex-col">
                <h2 className="text-2xl font-bold text-navy mb-3">{tool.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-7 flex-1">{tool.description}</p>
                <Link href={tool.href} className="btn-gold justify-center">{tool.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
