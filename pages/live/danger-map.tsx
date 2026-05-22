'use client';
import { useState, useMemo } from 'react';
import RiskCard from '@/components/RiskCard';
import { dangerMapData } from '@/lib/globalSafetyData';
import dynamic from 'next/dynamic';

const InteractiveDangerMap = dynamic(() => import('@/components/InteractiveDangerMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[520px] min-h-[420px] items-center justify-center rounded-2xl border border-gray-100 bg-white text-sm font-semibold text-navy" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
      Loading global safety map...
    </div>
  ),
});

export default function DangerMapPage() {
  const [search, setSearch] = useState('');
  const [riskFilter, setRiskFilter] = useState<string>('');

  const filtered = useMemo(() => {
    return dangerMapData.filter(zone => {
      if (riskFilter && zone.risk_level !== riskFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return zone.city.toLowerCase().includes(q) || zone.country.toLowerCase().includes(q);
      }
      return true;
    });
  }, [search, riskFilter]);

  return (
    <>
      <section className="relative overflow-hidden text-white text-center py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628, #1B3A5C)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="section-label" style={{ color: '#E8C36A' }}>Before You Travel · Before You Move · Before You Decide</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Know Before You Go</h1>
          <p className="text-lg opacity-85">Thinking of visiting, working, or starting a new life somewhere? Search the city or country below. See reported community conditions — <strong style={{ color: '#E8C36A' }}>🔴&nbsp;red</strong> means higher risk, <strong style={{ color: '#E8C36A' }}>🟡&nbsp;yellow</strong> means use caution, <strong style={{ color: '#E8C36A' }}>🟢&nbsp;green</strong> means conditions are generally safer. Click any marker for practical guidance your family can use.</p>
          <p className="text-sm opacity-60 mt-3">This is community-sourced guidance — not official government advice. Always verify with local authorities and legal counsel.</p>
        </div>
      </section>

      <section className="bg-warm py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Search a city or country..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="form-field flex-1 text-sm"
              aria-label="Search cities or countries"
            />
            <div className="flex gap-2">
              {[
                { val: '', label: 'All' },
                { val: 'high', label: '🔴 Risk' },
                { val: 'medium', label: '🟡 Caution' },
                { val: 'low', label: '🟢 Safer' },
              ].map(f => (
                <button
                  key={f.val}
                  onClick={() => setRiskFilter(f.val === riskFilter ? '' : f.val)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${riskFilter === f.val ? 'bg-navy text-white border-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-navy'}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Map + Sidebar — same layout as original */}
          <div className="grid lg:grid-cols-[1.35fr_.65fr] gap-8 items-start">
            <InteractiveDangerMap zones={filtered} />
            <aside className="grid gap-5 max-h-[580px] overflow-y-auto" aria-label="Location risk cards">
              {filtered.length === 0 ? (
                <div className="text-center py-10 text-gray-400 text-sm">No locations match your search.</div>
              ) : (
                filtered.map((zone) => (
                  <RiskCard
                    key={`${zone.city}-${zone.country}`}
                    title={zone.city}
                    label={zone.risk_level}
                    tone={zone.risk_level}
                    description={zone.description}
                    details={<span><strong>{zone.country}</strong> · {zone.type} · {zone.source}</span>}
                  />
                ))
              )}
            </aside>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-5 text-xs text-gray-500 leading-relaxed">
            <strong className="text-navy">Important:</strong> Risk levels reflect reported community conditions and publicly available information. They are guidance, not guarantees. Always verify with official government travel advisories and local legal counsel before making decisions. Immigrants Alliance updates this information regularly but cannot guarantee real-time accuracy.
          </div>
        </div>
      </section>
    </>
  );
}
