export interface OrgRecord {
  slug: string;
  name: string;
  country: string;
  city: string;
  type: string;
  description: string;
  services: string[];
  seed: boolean;
  paradeParticipant: boolean;
  website?: string;
}

export interface MerchantRecord {
  slug: string;
  name: string;
  city: string;
  country: string;
  category: string;
  ownerNationality: string;
  description: string;
  discount: string;
  website?: string;
}

export interface AmbassadorRecord {
  slug: string;
  name: string;
  country: string;
  city: string;
  role: string;
  bio: string;
}

export interface VoiceRecord {
  slug: string;
  type: 'story' | 'civic' | 'family' | 'video' | 'podcast' | 'research' | 'culture' | 'founder' | 'organization' | 'merchant';
  title: string;
  desc: string;
  tag: string;
}
