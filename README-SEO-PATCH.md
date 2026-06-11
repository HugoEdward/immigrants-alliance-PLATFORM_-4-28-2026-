# SEO/GEO UPGRADE PATCH — ImmigrantsAlliance.org
## Drop these files into your T16 codebase, push to GitHub, Vercel deploys automatically.

---

## FILES IN THIS PATCH (9 files)

### NEW files (add these):
| File | Purpose |
|------|---------|
| `lib/seo.ts` | Centralized SEO config — per-page titles, descriptions, keywords, AI Q&A blocks, schema generators, sitemap URLs |
| `pages/sitemap.xml.tsx` | Dynamic server-rendered sitemap (replaces static /public/sitemap.xml) |
| `pages/answers.tsx` | AI-optimized Q&A page with FAQPage schema — structured for ChatGPT/Perplexity/Google AI to cite |
| `pages/api/indexnow.ts` | IndexNow API — instant Bing/Yandex notification on content changes |
| `public/ia2026ecosoc1976mundus.txt` | IndexNow verification key |
| `public/manifest.json` | PWA manifest for mobile install-ability |
| `vercel.json` | www → non-www redirect (canonical URL enforcement) |

### REPLACE files (overwrite existing):
| File | What changed |
|------|-------------|
| `components/Layout.tsx` | Added: canonical URLs per page, per-page keywords, expanded hreflang (7 languages), noindex for private pages, PWA manifest link, AI citation meta |
| `next.config.js` | Added: security headers (HSTS, X-Frame-Options, CSP-lite), static asset caching, legacy URL redirects, poweredByHeader disabled |
| `public/robots.txt` | Added: explicit allowlist for 12 AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Applebot, etc.) |

### DELETE after deploying:
| File | Why |
|------|-----|
| `public/sitemap.xml` | Replaced by dynamic `pages/sitemap.xml.tsx` — the static file would shadow the dynamic one |

---

## DEPLOYMENT (5 minutes)

### Step 1: Copy files into your repo
```bash
# From your local clone of the immigrantsalliance-org repo:
cp -r seo-patch/lib/seo.ts lib/seo.ts
cp -r seo-patch/components/Layout.tsx components/Layout.tsx
cp -r seo-patch/pages/sitemap.xml.tsx pages/sitemap.xml.tsx
cp -r seo-patch/pages/answers.tsx pages/answers.tsx
cp -r seo-patch/pages/api/indexnow.ts pages/api/indexnow.ts
cp seo-patch/next.config.js next.config.js
cp seo-patch/vercel.json vercel.json
cp seo-patch/public/robots.txt public/robots.txt
cp seo-patch/public/ia2026ecosoc1976mundus.txt public/ia2026ecosoc1976mundus.txt
cp seo-patch/public/manifest.json public/manifest.json

# DELETE the old static sitemap:
rm public/sitemap.xml
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "SEO/GEO upgrade: dynamic sitemap, AI crawler allowlist, canonical URLs, IndexNow, Q&A page, security headers"
git push origin main
```

### Step 3: Vercel deploys automatically
Vercel detects the push and deploys within 60 seconds. No manual action needed.

### Step 4: Verify
- Visit https://immigrantsalliance.org/sitemap.xml — should show dynamic sitemap
- Visit https://immigrantsalliance.org/robots.txt — should show AI crawler allowlist
- Visit https://immigrantsalliance.org/answers — should show Q&A page
- Visit https://www.immigrantsalliance.org — should redirect to https://immigrantsalliance.org

---

## WHAT YOU MUST DO (only you can do these):

### 1. Google Search Console (today — 5 minutes)
1. Go to https://search.google.com/search-console
2. Click "Add property" → enter `immigrantsalliance.org`
3. Choose "Domain" verification → Google gives you a TXT record
4. Add that TXT record in GoDaddy DNS
5. Wait for verification (minutes to hours)
6. Once verified: go to Sitemaps → submit `https://immigrantsalliance.org/sitemap.xml`
7. Use URL Inspection → paste `https://immigrantsalliance.org/` → click "Request Indexing"
8. Repeat for `/parade-registration`, `/register`, `/register-organization`, `/about`, `/programs`, `/answers`

### 2. Bing Webmaster Tools (3 minutes)
1. Go to https://www.bing.com/webmasters
2. Add site → `immigrantsalliance.org`
3. Submit sitemap URL

### 3. Fix www subdomain in Vercel (2 minutes)
1. Vercel Dashboard → your IA project → Settings → Domains
2. Add `www.immigrantsalliance.org` if not already there
3. Vercel will show "Redirect to immigrantsalliance.org" — confirm
4. In GoDaddy: ensure CNAME for `www` points to `cname.vercel-dns.com`
5. Delete any old Wix records

### 4. Trigger IndexNow ping (1 minute)
After deploying, call this once to notify Bing/Yandex of all your pages:
```bash
curl -X POST https://immigrantsalliance.org/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls":["/","/about","/programs","/parade-registration","/register","/register-organization","/join-seed","/international-cultures-celebration","/faq","/answers","/world","/organizations","/merchants","/voices","/live","/live/danger-map","/contact"]}'
```

### 5. Share on social media (today)
Every share = a backlink signal for Google. Post on:
- Facebook, Twitter/X, Instagram, LinkedIn
- Tag cultural organizations, MOIA NYC, parade participants
- Each post links to immigrantsalliance.org

---

## WHAT THIS PATCH ACHIEVES

| Before | After |
|--------|-------|
| Google shows old Wix placeholder | Google indexes 30+ real pages with rich results |
| No AI search presence | ChatGPT, Perplexity, Claude cite IA when asked about immigrant orgs |
| Generic meta tags | Unique, keyword-targeted title + description per page |
| No canonical URLs | Every page has canonical URL (prevents duplicate content) |
| AI crawlers not addressed | 12 AI crawlers explicitly allowed in robots.txt |
| Static sitemap (60 URLs) | Dynamic sitemap that grows as you add content |
| No IndexNow | Instant Bing/Yandex notification on every content update |
| No security headers | HSTS, X-Frame-Options, referrer policy, permissions policy |
| www and non-www both live | www permanently redirects to bare domain (one canonical) |
| No PWA support | Install-able on mobile home screens |

---

## TIMELINE TO VISIBILITY

- Day 1: Deploy patch + verify GSC + submit sitemap + IndexNow ping
- Days 2-3: Bing indexes (IndexNow is near-instant)
- Days 3-7: Google begins indexing new pages
- Week 2: First organic search traffic
- Weeks 3-4: AI assistants begin citing IA in responses
- Month 2+: Ranking climbs as backlinks accumulate
