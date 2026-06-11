import RiskCard from '@/components/RiskCard';
import { safeCitiesData, safetyRatingFromRisk } from '@/lib/globalSafetyData';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'Safe Cities',
    description: 'Mock city safety ratings to help immigrants compare safer locations and local support conditions.',
  },
});

export default function SafeCitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0B3D2E, #0E7C6B)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Protection Planning</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Safe Cities Index</h1>
          <p className="text-lg opacity-85">Mock location intelligence for identifying safer places, moderate-risk cities, and caution zones.</p>
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {safeCitiesData.map((city) => {
              const rating = safetyRatingFromRisk(city.risk_level);

              return (
              <RiskCard
                key={`${city.city}-${city.country}`}
                title={city.city}
                label={rating}
                tone={rating}
                description={city.description}
                details={<span><strong>Country:</strong> {city.country} · <strong>Source:</strong> {city.source}</span>}
              />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
