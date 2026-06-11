import RiskCard from '@/components/RiskCard';
import { discriminationData } from '@/lib/globalSafetyData';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'Discrimination Intelligence',
    description: 'Mock anti-immigrant incident and discrimination risk intelligence for Immigrants Alliance safety monitoring.',
  },
});

export default function DiscriminationPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #7F1D1D)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Live Safety Intelligence</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Discrimination Risk Monitor</h1>
          <p className="text-lg opacity-85">Mock anti-immigrant incident signals organized by city, type, severity, and description.</p>
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {discriminationData.map((incident) => (
              <RiskCard
                key={`${incident.city}-${incident.type}-${incident.timestamp}`}
                title={incident.city}
                label={incident.risk_level}
                tone={incident.risk_level}
                description={incident.description}
                details={<span><strong>Type:</strong> {incident.type} · <strong>Source:</strong> {incident.source}</span>}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
