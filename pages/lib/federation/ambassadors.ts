import type { AmbassadorRecord } from './types';

export const ambassadors: AmbassadorRecord[] = [
  { slug: 'carlos-r-nyc', name: 'Carlos R.', country: 'USA', city: 'New York', role: 'City Ambassador', bio: 'Community organizer connecting Dominican, Mexican, and Ecuadorian organizations across the five boroughs.' },
  { slug: 'fatou-d-lisbon', name: 'Fatou D.', country: 'Portugal', city: 'Lisbon', role: 'Country Ambassador', bio: 'Senegalese entrepreneur building the Alliance presence in Portugal and connecting West African communities.' },
  { slug: 'priya-k-london', name: 'Priya K.', country: 'UK', city: 'London', role: 'City Ambassador', bio: 'Cultural leader bridging South Asian and British communities through food festivals and interfaith events.' },
  { slug: 'maria-l-toronto', name: 'Maria L.', country: 'Canada', city: 'Toronto', role: 'Country Ambassador', bio: 'Former refugee advocate now coordinating Alliance partnerships across Canadian provinces.' },
  { slug: 'jean-p-miami', name: 'Jean P.', country: 'USA', city: 'Miami', role: 'City Ambassador', bio: 'Haitian-American business owner connecting Caribbean merchant communities to the Alliance ecosystem.' },
];

export function getAmbassadorsByCountry(country: string) { return ambassadors.filter(a => a.country.toLowerCase() === country.toLowerCase()); }
export function getAmbassadorsByCity(city: string) { return ambassadors.filter(a => a.city.toLowerCase() === city.toLowerCase()); }
