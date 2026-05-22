export type RiskLevel = 'low' | 'medium' | 'high';
export type IncidentType = 'racism' | 'police risk' | 'police' | 'policy hostility' | 'social hostility' | 'workplace exploitation' | string;
export type SafetyRating = 'safe' | 'moderate' | 'caution';

export interface GlobalSafetyRecord {
  country: string;
  city: string;
  latitude: number;
  longitude: number;
  risk_level: RiskLevel;
  type: IncidentType;
  description: string;
  source: string;
  timestamp: string;
  guidance?: {
    visit?: string;
    work?: string;
    live?: string;
    family?: string;
  };
}

export const globalSafetyData: GlobalSafetyRecord[] = [
  {
city: "Florida",
country: "USA",
latitude: 27.6648,
longitude: -81.5158,
risk_level: "medium",
type: "policy hostility",
description: "Policy environment and public discourse contribute to increased uncertainty for immigrant communities.",
source: "policy hostility",
timestamp: "2026-05-04T00:00:00Z",
guidance: { visit: 'Generally safe for short visits. Carry valid documentation.', work: 'Employment verification enforcement is active. Ensure proper authorization.', live: 'Some counties have cooperative enforcement policies. Research your specific area.', family: 'School enrollment is protected regardless of status. Access to emergency healthcare is available.' },
  },
  {
    country: 'USA',
    city: 'Texas border',
    latitude: 31.7619,
    longitude: -106.485,
    risk_level: 'high',
    type: 'police',
    description: 'Heightened enforcement activity reported around border-adjacent transport routes.',
    source: 'police',
    timestamp: '2026-05-04T00:00:00.000Z',
    guidance: { visit: 'Exercise extreme caution. Carry all documentation at all times.', work: 'Workplace raids have been reported in agricultural and construction sectors.', live: 'Avoid border-adjacent areas without legal status. Contact Alliance legal helpline.', family: 'Keep emergency legal contacts accessible. Know your rights if stopped.' },
  },
  {
    country: 'Mexico',
    city: 'Mexico City',
    latitude: 19.4326,
    longitude: -99.1332,
    risk_level: 'medium',
    type: 'social hostility',
    description: 'Transit migrants report inconsistent access to shelters and localized hostility near terminals.',
    source: 'community reports',
    timestamp: '2026-05-04T00:00:00.000Z',
    guidance: { visit: 'Generally welcoming for visitors. Use verified accommodation.', work: 'Informal economy is large but protections are limited. Seek formal contracts.', live: 'Some neighborhoods have strong immigrant support networks. Research before relocating.', family: 'Schools accept children regardless of migration status. Healthcare access varies by area.' },
  },
  {
    country: 'Brazil',
    city: 'Rio de Janeiro',
    latitude: -22.9068,
    longitude: -43.1729,
    risk_level: 'medium',
    type: 'social hostility',
    description: 'Newcomers face housing vulnerability and occasional harassment around informal work corridors.',
    source: 'community reports',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
  {
    country: 'Brazil',
    city: 'São Paulo',
    latitude: -23.5505,
    longitude: -46.6333,
    risk_level: 'low',
    type: 'workplace exploitation',
    description: 'Strong migrant service ecosystem, with lower reported direct enforcement pressure in central areas.',
    source: 'policy hostility',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
  {
    country: 'France',
    city: 'Paris',
    latitude: 48.8566,
    longitude: 2.3522,
    risk_level: 'medium',
    type: 'policy hostility',
    description: 'Policy tension and social hostility reports rise around asylum processing and public spaces.',
    source: 'policy',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
  {
    country: 'UK',
    city: 'London',
    latitude: 51.5074,
    longitude: -0.1278,
    risk_level: 'medium',
    type: 'social hostility',
    description: 'Immigrant communities report social hostility incidents and workplace vulnerability.',
    source: 'community reports',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    latitude: 52.52,
    longitude: 13.405,
    risk_level: 'low',
    type: 'social hostility',
    description: 'Support infrastructure is comparatively strong, with localized far-right hostility reports.',
    source: 'community reports',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
  {
    country: 'South Africa',
    city: 'Johannesburg',
    latitude: -26.2041,
    longitude: 28.0473,
    risk_level: 'high',
    type: 'police risk',
    description: 'Xenophobic violence risk and police vulnerability reported in several migrant communities.',
    source: 'police',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
  {
    country: 'India',
    city: 'New Delhi',
    latitude: 28.6139,
    longitude: 77.209,
    risk_level: 'medium',
    type: 'policy hostility',
    description: 'Documentation and service access challenges reported for vulnerable migrant groups.',
    source: 'policy',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
  {
    country: 'Canada',
    city: 'Toronto',
    latitude: 43.6532,
    longitude: -79.3832,
    risk_level: 'low',
    type: 'racism',
    description: 'Isolated harassment reports near commuter hubs, with strong community support and reporting channels available.',
    source: 'community reports',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
  {
    country: 'USA',
    city: 'Miami',
    latitude: 25.7617,
    longitude: -80.1918,
    risk_level: 'medium',
    type: 'policy hostility',
    description: 'Community partners report elevated uncertainty around workplace protections and state-level rhetoric.',
    source: 'policy',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
  {
    country: 'USA',
    city: 'Chicago',
    latitude: 41.8781,
    longitude: -87.6298,
    risk_level: 'medium',
    type: 'social hostility',
    description: 'Active immigrant advocacy network and city services, balanced against neighborhood-level safety variation.',
    source: 'community reports',
    timestamp: '2026-05-04T00:00:00.000Z',
  },
];

export const dangerMapData = globalSafetyData.slice(0, 10);
export const discriminationData = globalSafetyData.filter((record) =>
  ['racism', 'police risk', 'policy hostility', 'social hostility'].includes(record.type)
);
export const safeCitiesData = globalSafetyData.filter((record) =>
  ['low', 'medium', 'high'].includes(record.risk_level)
);

export function safetyRatingFromRisk(riskLevel: RiskLevel): SafetyRating {
  if (riskLevel === 'low') return 'safe';
  if (riskLevel === 'medium') return 'moderate';
  return 'caution';
}
