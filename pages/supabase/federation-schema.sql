-- ============================================================
-- ImmigrantsAlliance.org — Federation Schema
-- Run in: Supabase Dashboard → SQL Editor → New Query → Run
-- ============================================================

-- ORGANIZATIONS (existing table — add columns if needed)
-- If organizations table already exists, this is safe to skip
CREATE TABLE IF NOT EXISTS organizations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE,
  name TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'nonprofit',
  country TEXT NOT NULL,
  city TEXT,
  country_represented TEXT,
  year_established INT,
  mission TEXT,
  contact_name TEXT NOT NULL,
  contact_title TEXT,
  contact_email TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  active_members INT,
  services TEXT[],
  seed_participant BOOLEAN DEFAULT false,
  parade_participant BOOLEAN DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- MERCHANTS
CREATE TABLE IF NOT EXISTS merchants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE,
  business_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  business_type TEXT NOT NULL,
  category TEXT,
  owner_nationality TEXT,
  description TEXT,
  discount_offer TEXT,
  website TEXT,
  interest_sponsorship BOOLEAN DEFAULT false,
  munduspass_active BOOLEAN DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- AMBASSADORS
CREATE TABLE IF NOT EXISTS ambassadors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  languages TEXT,
  organization TEXT,
  social_reach TEXT,
  motivation TEXT,
  role TEXT DEFAULT 'city_ambassador',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- VOICES / STORIES
CREATE TABLE IF NOT EXISTS voices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE,
  type TEXT NOT NULL, -- story, civic, family, video, podcast, etc.
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tag TEXT,
  country TEXT,
  city TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- FEDERATION COUNTRIES
CREATE TABLE IF NOT EXISTS federation_countries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  continent TEXT,
  overview TEXT,
  cultural_contributions TEXT,
  economic_contributions TEXT,
  alliance_presence TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- FEDERATION CITIES
CREATE TABLE IF NOT EXISTS federation_cities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  country_slug TEXT REFERENCES federation_countries(slug),
  safety_level TEXT DEFAULT 'caution',
  immigrant_highlight TEXT,
  cultural_note TEXT,
  opportunities TEXT,
  local_orgs TEXT,
  events TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- EVENTS
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  event_date DATE,
  city TEXT,
  country TEXT,
  type TEXT, -- parade, celebration, conference, pavilion
  status TEXT DEFAULT 'upcoming',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- EXISTING TABLES (safe to re-run — IF NOT EXISTS)
CREATE TABLE IF NOT EXISTS seed_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
  org_name TEXT NOT NULL,
  org_country TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  phone TEXT,
  annual_budget TEXT,
  current_revenue_sources TEXT,
  primary_challenge TEXT,
  goals TEXT,
  member_count INT,
  has_building BOOLEAN DEFAULT false,
  status TEXT NOT NULL DEFAULT 'submitted',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS parade_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_name TEXT NOT NULL,
  country_represented TEXT NOT NULL,
  country_operation TEXT,
  contact_name TEXT NOT NULL,
  contact_title TEXT,
  contact_email TEXT NOT NULL,
  phone TEXT,
  membership_status TEXT DEFAULT 'non-member',
  showcase_description TEXT,
  participants_count INT DEFAULT 0,
  parade_year INT DEFAULT 2026,
  status TEXT DEFAULT 'submitted',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS — public insert, authenticated read
ALTER TABLE merchants ENABLE ROW LEVEL SECURITY;
ALTER TABLE ambassadors ENABLE ROW LEVEL SECURITY;
ALTER TABLE voices ENABLE ROW LEVEL SECURITY;
ALTER TABLE federation_countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE federation_cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_insert_merchants" ON merchants FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "public_insert_ambassadors" ON ambassadors FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "public_read_voices" ON voices FOR SELECT TO anon USING (published = true);
CREATE POLICY "public_read_countries" ON federation_countries FOR SELECT TO anon USING (active = true);
CREATE POLICY "public_read_cities" ON federation_cities FOR SELECT TO anon USING (active = true);
CREATE POLICY "public_read_events" ON events FOR SELECT TO anon USING (true);

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_merchants_city ON merchants(city);
CREATE INDEX IF NOT EXISTS idx_merchants_category ON merchants(category);
CREATE INDEX IF NOT EXISTS idx_ambassadors_country ON ambassadors(country);
CREATE INDEX IF NOT EXISTS idx_orgs_country ON organizations(country);
CREATE INDEX IF NOT EXISTS idx_voices_type ON voices(type);
CREATE INDEX IF NOT EXISTS idx_cities_country ON federation_cities(country_slug);
