export interface CityNode {
  slug: string;
  name: string;
  countrySlug: string;
  population?: string;
  immigrantHighlight: string;
  safetyLevel: 'safer' | 'caution' | 'danger';
  culturalNote: string;
  opportunities: string;
  localOrgs: string;
  events: string;
}

export interface CountryNode {
  slug: string;
  name: string;
  continent: string;
  immigrantPopulation?: string;
  overview: string;
  culturalContributions: string;
  economicContributions: string;
  alliancePresence: string;
  cities: CityNode[];
}

export const countries: CountryNode[] = [
  {
    slug: 'brazil', name: 'Brazil', continent: 'South America',
    immigrantPopulation: '1.3 million immigrants',
    overview: 'Brazil is both a major source of emigration and a growing destination for immigrants from Venezuela, Haiti, Senegal, and other nations. Its multicultural identity — shaped by Indigenous, African, European, and Asian heritage — creates a foundation of cultural openness unique in the Americas.',
    culturalContributions: 'Brazilian immigrants bring samba, capoeira, culinary traditions, and entrepreneurial energy to every city they reach. Brazilian communities in the USA, Portugal, Japan, and across Europe are vibrant cultural ambassadors.',
    economicContributions: 'Brazilian immigrants contribute billions annually to host economies through small businesses, construction, hospitality, technology, and remittances that support families across Brazil.',
    alliancePresence: 'Immigrants Alliance maintains active partnerships in São Paulo, Rio de Janeiro, and Curitiba. S.E.E.D. expansion to Brazil is planned for 2027.',
    cities: [
      { slug: 'rio-de-janeiro', name: 'Rio de Janeiro', countrySlug: 'brazil', immigrantHighlight: 'Growing Venezuelan and Haitian immigrant communities. Active NGO support networks.', safetyLevel: 'caution', culturalNote: 'A city defined by cultural fusion — from Carnival to community-driven integration programs.', opportunities: 'Tourism, hospitality, cultural enterprises, and creative industries offer paths for immigrant entrepreneurs.', localOrgs: 'Caritas Arquidiocesana, Casa do Migrante, Alliance Brazil partners.', events: 'International Cultures Celebration satellite event planned for 2027.' },
    ],
  },
  {
    slug: 'mexico', name: 'Mexico', continent: 'North America',
    immigrantPopulation: '1.2 million immigrants, major transit nation',
    overview: 'Mexico is simultaneously a country of emigration, immigration, transit, and return. Millions of Central American, Caribbean, and South American migrants pass through or settle in Mexican cities each year.',
    culturalContributions: 'Mexican culture — art, cuisine, music, language, and family values — has shaped every nation where Mexican immigrants have settled. From Los Angeles to London, Mexican communities are cultural cornerstones.',
    economicContributions: 'Mexican immigrants are among the largest contributors to the US economy, with over $60 billion in annual remittances flowing back to support families and local economies.',
    alliancePresence: 'Alliance monitoring network active in border regions and Mexico City. Safety intelligence updated regularly.',
    cities: [],
  },
  {
    slug: 'colombia', name: 'Colombia', continent: 'South America',
    overview: 'Colombia has experienced decades of emigration due to conflict, but is now also a destination for Venezuelan refugees. Colombian immigrants worldwide are known for resilience, entrepreneurship, and cultural pride.',
    culturalContributions: 'Colombian music (cumbia, vallenato, reggaeton), dance, literature, and cuisine have enriched cities from Miami to Madrid to Melbourne.',
    economicContributions: 'Colombian entrepreneurs have built thriving businesses in construction, food service, healthcare, and technology across North America and Europe.',
    alliancePresence: 'Alliance community partners active in Bogotá and Medellín. S.E.E.D. outreach planned.',
    cities: [],
  },
  {
    slug: 'dominican-republic', name: 'Dominican Republic', continent: 'Caribbean',
    overview: 'Dominicans are one of the largest immigrant groups in the northeastern United States, with deep roots in New York City, New Jersey, and Boston. The Dominican diaspora maintains powerful cultural and economic ties to the island.',
    culturalContributions: 'Dominican music (merengue, bachata), cuisine, baseball tradition, and community leadership have transformed neighborhoods across the US East Coast.',
    economicContributions: 'Dominican-owned businesses — from bodegas to law firms — are economic anchors in Washington Heights, the Bronx, Paterson, and Lawrence.',
    alliancePresence: 'Strong Alliance presence in NYC and Newark. Active parade participation. S.E.E.D. partnership discussions underway.',
    cities: [],
  },
  {
    slug: 'haiti', name: 'Haiti', continent: 'Caribbean',
    overview: 'Haitian immigrants carry the legacy of the first successful slave revolution and the first independent Black republic. Despite extraordinary challenges, Haitian communities worldwide are defined by resilience, faith, and cultural pride.',
    culturalContributions: 'Haitian art, Creole language, vodou traditions, literature, and music (kompa, rara) enrich every community where Haitians settle.',
    economicContributions: 'Haitian immigrants contribute to healthcare, education, construction, and service industries across the US, Canada, Brazil, and France.',
    alliancePresence: 'Alliance partners in Miami, Boston, Montreal, and Curitiba serve Haitian immigrant communities.',
    cities: [],
  },
  {
    slug: 'venezuela', name: 'Venezuela', continent: 'South America',
    overview: 'Over 7 million Venezuelans have left their country since 2014 — one of the largest displacement crises in modern history. Venezuelan immigrants are rebuilding their lives across Latin America, Europe, and North America.',
    culturalContributions: 'Venezuelan culture — arepa traditions, music, visual arts, and strong family networks — travels with every immigrant and enriches every host community.',
    economicContributions: 'Many Venezuelan immigrants are highly educated professionals — doctors, engineers, teachers — contributing immediately to host economies despite often starting over from zero.',
    alliancePresence: 'Alliance advocacy active in Colombia, Brazil, and the US for Venezuelan immigrant support.',
    cities: [],
  },
  {
    slug: 'ecuador', name: 'Ecuador', continent: 'South America',
    overview: 'Ecuadorian immigrants have built vibrant communities across the US (especially New York and New Jersey), Spain, and Italy. They are known for work ethic, family dedication, and cultural preservation.',
    culturalContributions: 'Ecuadorian festivals, cuisine, and indigenous Kichwa traditions contribute to the multicultural fabric of every city where Ecuadorians settle.',
    economicContributions: 'Ecuadorian immigrants are pillars of the construction, restaurant, and domestic service industries in the US Northeast.',
    alliancePresence: 'Active Alliance community in the NYC metropolitan area. Parade participation since early years.',
    cities: [],
  },
  {
    slug: 'senegal', name: 'Senegal', continent: 'Africa',
    overview: 'Senegalese immigrants carry the tradition of Teranga — radical hospitality — wherever they go. Senegalese communities in France, Italy, Spain, and the US are known for entrepreneurship, cultural dignity, and community solidarity.',
    culturalContributions: 'Senegalese music (mbalax), cuisine (thieboudienne), fashion, and Islamic cultural traditions enrich every host nation.',
    economicContributions: 'Senegalese entrepreneurs operate successful businesses in trade, fashion, food, and services — often while supporting extended families through remittances.',
    alliancePresence: 'Alliance West Africa outreach active. S.E.E.D. expansion to Senegal planned.',
    cities: [],
  },
  {
    slug: 'india', name: 'India', continent: 'Asia',
    overview: 'The Indian diaspora — over 18 million people — is one of the largest and most economically influential in the world. Indian immigrants lead in technology, medicine, academia, and entrepreneurship across dozens of nations.',
    culturalContributions: 'Indian culture — from Bollywood to yoga, from Diwali celebrations to culinary traditions — has become part of the global cultural vocabulary.',
    economicContributions: 'Indian immigrants are among the highest-earning immigrant groups globally, leading Fortune 500 companies, founding startups, and contributing trillions to host economies.',
    alliancePresence: 'Alliance partnerships with Indian cultural organizations in the US, UK, and Canada.',
    cities: [],
  },
  {
    slug: 'china', name: 'China', continent: 'Asia',
    overview: 'Chinese immigrants and their descendants have shaped economies and cultures worldwide for centuries. From Chinatowns to tech companies, Chinese communities are woven into the fabric of virtually every major city.',
    culturalContributions: 'Chinese cuisine, festivals (Lunar New Year), martial arts, calligraphy, and philosophical traditions have become integral to global culture.',
    economicContributions: 'Chinese immigrants have built businesses, funded universities, and created economic corridors that connect continents.',
    alliancePresence: 'Alliance community partners in NYC, San Francisco, Toronto, and London serve Chinese immigrant populations.',
    cities: [],
  },
  {
    slug: 'usa', name: 'United States', continent: 'North America',
    immigrantPopulation: '47 million immigrants',
    overview: 'The United States is the world\'s largest immigrant destination. From the first settlers to today\'s arrivals, every generation of immigrants has built the institutions, businesses, and culture that define the nation.',
    culturalContributions: 'American culture IS immigrant culture — jazz, hip-hop, pizza, tacos, Silicon Valley, Hollywood, and the democratic ideal itself were all shaped by people who came from somewhere else.',
    economicContributions: 'Immigrants founded 45% of Fortune 500 companies. They start businesses at twice the rate of native-born Americans. They are essential to healthcare, agriculture, technology, and construction.',
    alliancePresence: 'Immigrants Alliance headquarters in New York City. Annual International Cultures–Immigrants Parade since 1986. S.E.E.D. national rollout 2026.',
    cities: [],
  },
  {
    slug: 'canada', name: 'Canada', continent: 'North America',
    immigrantPopulation: '8.3 million immigrants',
    overview: 'Canada\'s official policy of multiculturalism makes it one of the most welcoming nations for immigrants. Nearly one in four Canadians was born in another country.',
    culturalContributions: 'Canadian multiculturalism — from Toronto\'s neighborhoods to Vancouver\'s Chinatown to Montreal\'s cultural festivals — is the result of intentional immigrant inclusion.',
    economicContributions: 'Immigrants account for nearly 100% of Canada\'s labor force growth and are essential to the country\'s economic future.',
    alliancePresence: 'Alliance Canada partners active in Toronto, Montreal, and Vancouver.',
    cities: [],
  },
  {
    slug: 'portugal', name: 'Portugal', continent: 'Europe',
    immigrantPopulation: '1 million immigrants',
    overview: 'Portugal has transformed from a country of emigration into a growing destination, attracting immigrants from Brazil, Angola, Cape Verde, India, Nepal, and across Europe.',
    culturalContributions: 'Portugal\'s maritime history created deep cultural connections with Africa, Asia, and South America — visible today in Lisbon\'s diverse neighborhoods and national cuisine.',
    economicContributions: 'Immigrants are revitalizing Portuguese towns facing population decline, filling critical roles in construction, tourism, agriculture, and technology.',
    alliancePresence: 'Alliance European expansion active. Lisbon identified as key federation hub.',
    cities: [],
  },
];

// City data for pages/world/[country]/[city].tsx
export const allCities: CityNode[] = [
  { slug: 'new-york', name: 'New York City', countrySlug: 'usa', immigrantHighlight: 'Home to over 3 million immigrants from virtually every nation on earth. The most linguistically diverse city in human history.', safetyLevel: 'safer', culturalNote: 'NYC is the spiritual home of the Immigrants Alliance and the annual International Cultures–Immigrants Parade.', opportunities: 'Vast opportunities across every industry. Strong legal protections. Extensive support network.', localOrgs: 'Immigrants Alliance HQ, ILRC, Catholic Charities, IRC, hundreds of community organizations.', events: '41st International Cultures–Immigrants Parade — June 13, 2026. Annual International Cultures Celebration.' },
  { slug: 'newark', name: 'Newark', countrySlug: 'usa', immigrantHighlight: 'Large Portuguese, Brazilian, Dominican, and Ecuadorian communities. A city defined by immigrant enterprise.', safetyLevel: 'caution', culturalNote: 'Newark\'s Ironbound district is one of the most vibrant immigrant neighborhoods in the US — built by Portuguese, Spanish, and Latin American families.', opportunities: 'Growing tech and logistics sectors. Affordable compared to NYC. Strong small business environment.', localOrgs: 'Alliance community partners, La Casa de Don Pedro, Ironbound Community Corporation.', events: 'Cultural festival participation through NYC Alliance events.' },
  { slug: 'miami', name: 'Miami', countrySlug: 'usa', immigrantHighlight: 'Over 50% foreign-born population. A bilingual city where Latin American, Caribbean, and global cultures converge.', safetyLevel: 'safer', culturalNote: 'Miami is a living example of what happens when immigrant cultures are not just tolerated but celebrated — the city\'s identity IS immigrant identity.', opportunities: 'International trade, tourism, real estate, creative industries, tech, and healthcare.', localOrgs: 'Alliance Florida partners, Americans for Immigrant Justice, Florida Immigrant Coalition.', events: 'International Cultures Celebration satellite event under discussion.' },
  { slug: 'los-angeles', name: 'Los Angeles', countrySlug: 'usa', immigrantHighlight: 'Home to one of the largest Mexican, Salvadoran, Korean, Filipino, and Armenian communities outside their home countries.', safetyLevel: 'caution', culturalNote: 'LA\'s immigrant neighborhoods — from Koreatown to Little Ethiopia to Thai Town — are the cultural engine of the city.', opportunities: 'Entertainment, tech, fashion, food, construction, healthcare, and entrepreneurship.', localOrgs: 'CHIRLA, Alliance West Coast partners, KIWA, CARECEN.', events: 'Potential future Celebration satellite city.' },
  { slug: 'toronto', name: 'Toronto', countrySlug: 'canada', immigrantHighlight: 'Nearly half of Toronto\'s population was born outside Canada. One of the most successfully multicultural cities in the world.', safetyLevel: 'safer', culturalNote: 'Toronto proves that immigration and national identity can strengthen each other. The city\'s motto is "Diversity Our Strength."', opportunities: 'Finance, tech, healthcare, education, and creative industries. Strong settlement services.', localOrgs: 'Alliance Canada partners, COSTI Immigrant Services, settlement agencies.', events: 'Future International Cultures Celebration partner city candidate.' },
  { slug: 'lisbon', name: 'Lisbon', countrySlug: 'portugal', immigrantHighlight: 'Growing Brazilian, Cape Verdean, Angolan, Indian, and Nepalese communities. Portugal\'s golden visa and digital nomad programs attract global talent.', safetyLevel: 'safer', culturalNote: 'Lisbon\'s history of maritime exploration created lasting cultural connections with Africa, Asia, and South America — visible today in the city\'s immigrant neighborhoods.', opportunities: 'Tech startups, tourism, construction, and creative industries. Growing international community.', localOrgs: 'Alliance European partners, Jesuit Refugee Service, local immigrant associations.', events: 'European Alliance expansion target.' },
  { slug: 'rio-de-janeiro', name: 'Rio de Janeiro', countrySlug: 'brazil', immigrantHighlight: 'Growing Venezuelan and Haitian immigrant communities alongside established Angolan, Bolivian, and Senegalese populations.', safetyLevel: 'caution', culturalNote: 'Rio\'s cultural fusion — Carnival, samba, capoeira — is itself the product of centuries of immigration and cultural mixing.', opportunities: 'Tourism, hospitality, cultural enterprises, and creative industries.', localOrgs: 'Caritas Arquidiocesana, Casa do Migrante, Alliance Brazil partners.', events: 'International Cultures Celebration satellite event planned for 2027.' },
];

export function getCountryBySlug(slug: string): CountryNode | undefined {
  return countries.find(c => c.slug === slug);
}

export function getCitiesByCountry(countrySlug: string): CityNode[] {
  return allCities.filter(c => c.countrySlug === countrySlug);
}

export function getCityBySlug(countrySlug: string, citySlug: string): CityNode | undefined {
  return allCities.find(c => c.countrySlug === countrySlug && c.slug === citySlug);
}

export function getAllCountrySlugs(): string[] {
  return countries.map(c => c.slug);
}

export function getAllCityPaths(): { country: string; city: string }[] {
  return allCities.map(c => ({ country: c.countrySlug, city: c.slug }));
}
