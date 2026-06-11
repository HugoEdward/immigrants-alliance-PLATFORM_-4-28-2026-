import type { NextApiRequest, NextApiResponse } from 'next';
import { safeCitiesData, safetyRatingFromRisk } from '@/lib/globalSafetyData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  return res.status(200).json({
    updatedAt: new Date().toISOString(),
    cities: safeCitiesData.map((city) => ({
      ...city,
      rating: safetyRatingFromRisk(city.risk_level),
    })),
  });
}
