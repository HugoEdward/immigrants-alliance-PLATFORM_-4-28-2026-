-- ============================================================
-- ImmigrantsAlliance.org — Supabase Schema
-- Run in: Supabase Dashboard → SQL Editor → New Query → Run
-- ============================================================

CREATE TABLE IF NOT EXISTS organizations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'nonprofit',
  country TEXT NOT NULL,
  country_represented TEXT,
  year_established INT,
  mission TEXT,
  contact_name TEXT NOT NULL,
  contact_title TEXT,
  contact_email TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  active_members INT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS memberships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  type TEXT NOT NULL DEFAULT 'organization',
  plan TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  amount_cents INT DEFAULT 0,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  payment_status TEXT DEFAULT 'unpaid',
  starts_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS parade_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
  org_name TEXT NOT NULL,
  country_represented TEXT NOT NULL,
  country_operation TEXT,
  contact_name TEXT NOT NULL,
  contact_title TEXT,
  contact_email TEXT NOT NULL,
  phone TEXT,
  membership_status TEXT NOT NULL DEFAULT 'non-member',
  showcase_description TEXT,
  participants_count INT DEFAULT 0,
  parade_year INT NOT NULL DEFAULT 2026,
  status TEXT NOT NULL DEFAULT 'submitted',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

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

CREATE TABLE IF NOT EXISTS individual_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  auth_user_id UUID,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  date_of_birth DATE,
  country_of_birth TEXT,
  nationality TEXT,
  country_of_residence TEXT,
  city TEXT,
  address TEXT,
  languages TEXT,
  profession TEXT,
  assistance_needed TEXT,
  membership_plan TEXT DEFAULT 'founding',
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE parade_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE seed_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE individual_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_insert_organizations" ON organizations FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "public_insert_parade" ON parade_registrations FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "public_insert_seed" ON seed_applications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "public_insert_individual" ON individual_members FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "public_insert_memberships" ON memberships FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "public_insert_contact" ON contact_submissions FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "auth_read_own_org" ON organizations FOR SELECT TO authenticated
  USING (contact_email = auth.jwt() ->> 'email');
CREATE POLICY "auth_read_own_memberships" ON memberships FOR SELECT TO authenticated
  USING (org_id IN (SELECT id FROM organizations WHERE contact_email = auth.jwt() ->> 'email'));
CREATE POLICY "auth_read_own_parade" ON parade_registrations FOR SELECT TO authenticated
  USING (contact_email = auth.jwt() ->> 'email');
CREATE POLICY "auth_read_own_seed" ON seed_applications FOR SELECT TO authenticated
  USING (contact_email = auth.jwt() ->> 'email');

CREATE INDEX IF NOT EXISTS idx_org_email ON organizations(contact_email);
CREATE INDEX IF NOT EXISTS idx_org_status ON organizations(status);
CREATE INDEX IF NOT EXISTS idx_membership_org ON memberships(org_id);
CREATE INDEX IF NOT EXISTS idx_parade_year ON parade_registrations(parade_year);
CREATE INDEX IF NOT EXISTS idx_seed_status ON seed_applications(status);
CREATE INDEX IF NOT EXISTS idx_individual_email ON individual_members(email);

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_org_updated BEFORE UPDATE ON organizations FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_mem_updated BEFORE UPDATE ON memberships FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_parade_updated BEFORE UPDATE ON parade_registrations FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_seed_updated BEFORE UPDATE ON seed_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_ind_updated BEFORE UPDATE ON individual_members FOR EACH ROW EXECUTE FUNCTION update_updated_at();
