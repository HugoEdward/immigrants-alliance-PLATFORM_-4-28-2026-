import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const { urls } = req.body as { urls?: string[] };
  if (!urls || !Array.isArray(urls) || urls.length === 0) return res.status(400).json({ error: 'Provide urls array' });

  const host = 'immigrantsalliance.org';
  const key = 'ia2026ecosoc1976mundus';
  const fullUrls = urls.map(u => `https://${host}${u.startsWith('/') ? u : '/' + u}`);

  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: fullUrls }),
    });
    return res.status(200).json({ success: true, status: response.status, submitted: fullUrls.length });
  } catch (error) {
    return res.status(500).json({ error: 'IndexNow ping failed' });
  }
}
