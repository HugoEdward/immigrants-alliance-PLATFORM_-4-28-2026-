import type { ReactNode } from 'react';
import type { RiskLevel, SafetyRating } from '@/lib/globalSafetyData';

type RiskTone = RiskLevel | SafetyRating;

interface RiskCardProps {
  title: string;
  label: string;
  tone: RiskTone;
  description: string;
  details?: ReactNode;
}

const toneStyles: Record<RiskTone, { badge: string; border: string; panel: string }> = {
  high: {
    badge: 'bg-red-100 text-red-800 border-red-200',
    border: 'border-red-300',
    panel: 'bg-red-50',
  },
  medium: {
    badge: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    border: 'border-yellow-300',
    panel: 'bg-yellow-50',
  },
  low: {
    badge: 'bg-green-100 text-green-800 border-green-200',
    border: 'border-green-300',
    panel: 'bg-green-50',
  },
  safe: {
    badge: 'bg-green-100 text-green-800 border-green-200',
    border: 'border-green-300',
    panel: 'bg-green-50',
  },
  moderate: {
    badge: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    border: 'border-yellow-300',
    panel: 'bg-yellow-50',
  },
  caution: {
    badge: 'bg-red-100 text-red-800 border-red-200',
    border: 'border-red-300',
    panel: 'bg-red-50',
  },
};

export default function RiskCard({ title, label, tone, description, details }: RiskCardProps) {
  const styles = toneStyles[tone];

  return (
    <article className={`bg-white rounded-2xl border ${styles.border} p-6 transition-all duration-300 hover:-translate-y-1`} style={{ boxShadow: '0 2px 8px rgba(10,22,40,.08)' }}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
        <h2 className="text-2xl font-bold text-navy">{title}</h2>
        <span className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${styles.badge}`}>
          {label}
        </span>
      </div>
      {details && <div className={`rounded-lg ${styles.panel} px-4 py-3 text-sm text-navy mb-4`}>{details}</div>}
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </article>
  );
}
