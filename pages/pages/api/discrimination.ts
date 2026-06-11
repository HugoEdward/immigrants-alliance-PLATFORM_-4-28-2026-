import type { NextApiRequest, NextApiResponse } from 'next';
import { discriminationData } from '@/lib/globalSafetyData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  return res.status(200).json({
    updatedAt: new Date().toISOString(),
    incidents: discriminationData,
  });
}
