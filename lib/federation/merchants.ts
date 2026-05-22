import type { MerchantRecord } from './types';

export const merchants: MerchantRecord[] = [
  { slug: 'casa-dominicana-restaurant', name: 'Casa Dominicana', city: 'New York', country: 'USA', category: 'Restaurant', ownerNationality: 'Dominican Republic', description: 'Authentic Dominican cuisine in the heart of Washington Heights. Family-owned since 1998.', discount: '15% for Alliance members', website: 'https://example.com' },
  { slug: 'mumbai-spice-kitchen', name: 'Mumbai Spice Kitchen', city: 'London', country: 'UK', category: 'Restaurant', ownerNationality: 'India', description: 'Fine Indian dining bringing the flavors of Mumbai to East London.', discount: '20% for Alliance members' },
  { slug: 'garcia-law-group', name: 'Garcia Immigration Law Group', city: 'Miami', country: 'USA', category: 'Legal Services', ownerNationality: 'Colombia', description: 'Immigration law specialists serving the Latin American community. Free initial consultations for Alliance members.', discount: 'Free initial consultation' },
  { slug: 'african-textiles-lisbon', name: 'Teranga Textiles', city: 'Lisbon', country: 'Portugal', category: 'Retail', ownerNationality: 'Senegal', description: 'Handcrafted West African textiles, clothing, and accessories. Direct trade with artisans.', discount: '15% for Alliance members' },
  { slug: 'kim-dental-toronto', name: 'Dr. Kim Dental Care', city: 'Toronto', country: 'Canada', category: 'Healthcare', ownerNationality: 'South Korea', description: 'Multilingual dental practice serving diverse communities in downtown Toronto.', discount: '10% for Alliance members' },
  { slug: 'la-arepa-bar', name: 'La Arepa Bar', city: 'Newark', country: 'USA', category: 'Restaurant', ownerNationality: 'Venezuela', description: 'Venezuelan street food celebrating the arepa tradition. Catering available.', discount: '15% for Alliance members' },
];

export const merchantCategories = ['Restaurant', 'Legal Services', 'Healthcare', 'Retail', 'Professional Services', 'Education', 'Construction', 'Technology'];
export function getMerchantsByCategory(cat: string) { return merchants.filter(m => m.category === cat); }
export function getMerchantsByCity(city: string) { return merchants.filter(m => m.city.toLowerCase() === city.toLowerCase()); }
export function getAllMerchantCategories() { return Array.from(new Set(merchants.map(m => m.category))); }
