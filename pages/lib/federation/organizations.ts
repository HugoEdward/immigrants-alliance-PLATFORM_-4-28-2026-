import type { OrgRecord } from './types';

// Replace this array with: supabase.from('organizations').select('*') when ready
export const organizations: OrgRecord[] = [
  { slug: 'dominican-cultural-association-bronx', name: 'Dominican Cultural Association of the Bronx', country: 'USA', city: 'New York', type: 'Cultural', description: 'Preserving Dominican heritage through dance, music, and community programs. Parade participant since 1992.', services: ['Cultural Programs', 'Youth Development', 'Language Classes'], seed: true, paradeParticipant: true },
  { slug: 'haitian-community-alliance-miami', name: 'Haitian Community Alliance', country: 'USA', city: 'Miami', type: 'Community', description: 'Supporting Haitian families with legal services, language programs, and cultural preservation.', services: ['Legal Aid', 'Language Programs', 'Emergency Support'], seed: false, paradeParticipant: true },
  { slug: 'korean-cultural-center-toronto', name: 'Korean Cultural Center of Toronto', country: 'Canada', city: 'Toronto', type: 'Cultural', description: 'Bridging Korean and Canadian cultures through education, food festivals, and community exchange.', services: ['Cultural Exchange', 'Education', 'Business Networking'], seed: true, paradeParticipant: false },
  { slug: 'senegalese-entrepreneurs-lisbon', name: 'Senegalese Entrepreneurs Association', country: 'Portugal', city: 'Lisbon', type: 'Professional', description: 'Supporting Senegalese business owners in Portugal with training, networking, and market access.', services: ['Business Training', 'Market Access', 'Mentorship'], seed: false, paradeParticipant: false },
  { slug: 'indian-cultural-society-london', name: 'Indian Cultural Society UK', country: 'UK', city: 'London', type: 'Cultural', description: 'Celebrating Indian heritage through Diwali festivals, Bollywood events, and interfaith dialogues.', services: ['Cultural Events', 'Interfaith Dialogue', 'Youth Programs'], seed: true, paradeParticipant: true },
  { slug: 'venezuelan-aid-bogota', name: 'Venezuelan Aid Foundation', country: 'Colombia', city: 'Bogotá', type: 'Humanitarian', description: 'Providing emergency housing, legal support, and employment assistance to displaced Venezuelan families.', services: ['Emergency Housing', 'Legal Support', 'Employment'], seed: false, paradeParticipant: false },
  { slug: 'ecuadorian-civic-newark', name: 'Ecuadorian Civic Association of Newark', country: 'USA', city: 'Newark', type: 'Civic', description: 'Representing Ecuadorian interests in local government and building economic opportunity for families.', services: ['Civic Engagement', 'Legal Referrals', 'Community Events'], seed: true, paradeParticipant: true },
  { slug: 'chinese-family-services-sf', name: 'Chinese Family Services', country: 'USA', city: 'San Francisco', type: 'Service Provider', description: 'Multilingual social services for Chinese immigrant families including healthcare navigation and housing.', services: ['Healthcare Navigation', 'Housing', 'Translation'], seed: false, paradeParticipant: false },
];

export function getOrgBySlug(slug: string) { return organizations.find(o => o.slug === slug); }
export function getOrgsByCountry(country: string) { return organizations.filter(o => o.country.toLowerCase() === country.toLowerCase()); }
export function getOrgsByCity(city: string) { return organizations.filter(o => o.city.toLowerCase() === city.toLowerCase()); }
export function getAllOrgSlugs() { return organizations.map(o => o.slug); }
