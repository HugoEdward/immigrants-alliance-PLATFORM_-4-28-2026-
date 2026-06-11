// pages/api/indexnow.ts — Ping Bing/Yandex instantly when pages change
// Call this after any content update: POST /api/indexnow { urls: ["/about", "/parade-registration"] }
import type { NextApiRequest, NextApiResponse } from 'next';

const INDEXNOW_KEY = 'ia2026ecosoc1976mundus'; // Must match /public/{key}.txt
const SITE_HOST = 'immigrantsalliance.org';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const { urls } = req.body as { urls?: string[] };
  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return res.status(400).json({ error: 'Provide urls array' });
  }

  const fullUrls = urls.map(u => `https://${SITE_HOST}${u.startsWith('/') ? u : '/' + u}`);

  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: fullUrls,
      }),
    });

    return res.status(200).json({
      success: true,
      status: response.status,
      submitted: fullUrls.length,
      urls: fullUrls,
    });
  } catch (error) {
    return res.status(500).json({ error: 'IndexNow ping failed', detail: String(error) });
  }
}
