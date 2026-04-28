import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Org { id: string; name: string; country: string; status: string; created_at: string; }
interface Parade { id: string; org_name: string; country_represented: string; status: string; parade_year: number; }
interface SeedApp { id: string; org_name: string; status: string; created_at: string; }

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [orgs, setOrgs] = useState<Org[]>([]);
  const [parades, setParades] = useState<Parade[]>([]);
  const [seeds, setSeeds] = useState<SeedApp[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/login'); return; }
      setUser(user);
      const [o, p, s] = await Promise.all([
        supabase.from('organizations').select('*').eq('contact_email', user.email),
        supabase.from('parade_registrations').select('*').eq('contact_email', user.email),
        supabase.from('seed_applications').select('*').eq('contact_email', user.email),
      ]);
      setOrgs(o.data || []); setParades(p.data || []); setSeeds(s.data || []);
      setLoading(false);
    }
    load();
  }, [router]);

  async function handleLogout() { await supabase.auth.signOut(); router.push('/'); }

  const badge = (status: string) => {
    const c: Record<string, string> = { pending: 'bg-yellow-100 text-yellow-800', approved: 'bg-green-100 text-green-800', active: 'bg-green-100 text-green-800', submitted: 'bg-blue-100 text-blue-800', confirmed: 'bg-green-100 text-green-800', rejected: 'bg-red-100 text-red-800', under_review: 'bg-purple-100 text-purple-800' };
    return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${c[status] || 'bg-gray-100 text-gray-600'}`}>{status.replace('_', ' ').toUpperCase()}</span>;
  };

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center"><div className="text-center"><div className="animate-spin w-10 h-10 border-4 border-gold border-t-transparent rounded-full mx-auto mb-4" /><p className="text-gray-500">Loading dashboard...</p></div></div>;

  return (
    <section className="bg-warm min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Dashboard</h1>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>
          <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-red-600 transition-colors">Sign Out →</button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <Link href="/register-organization" className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gold transition-all group no-underline"><div className="text-2xl mb-2">🏛</div><h3 className="font-bold text-navy group-hover:text-gold-dark transition-colors">Register Organization</h3><p className="text-xs text-gray-500">Add a new organization</p></Link>
          <Link href="/join-seed" className="bg-white rounded-xl p-5 border border-gray-100 hover:border-teal transition-all group no-underline"><div className="text-2xl mb-2">🌱</div><h3 className="font-bold text-navy group-hover:text-teal transition-colors">Apply to SEED</h3><p className="text-xs text-gray-500">Financial sustainability program</p></Link>
          <Link href="/parade-registration" className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gold transition-all group no-underline"><div className="text-2xl mb-2">🎉</div><h3 className="font-bold text-navy group-hover:text-gold-dark transition-colors">Parade Registration</h3><p className="text-xs text-gray-500">June 13, 2026</p></Link>
        </div>

        {[
          { title: 'Your Organizations', data: orgs, empty: 'No organizations registered.', link: '/register-organization', render: (o: Org) => (<div key={o.id} className="flex items-center justify-between p-4 bg-cream rounded-xl"><div><h3 className="font-bold text-navy">{o.name}</h3><p className="text-xs text-gray-500">{o.country} · {new Date(o.created_at).toLocaleDateString()}</p></div>{badge(o.status)}</div>) },
          { title: 'Parade Registrations', data: parades, empty: 'No parade registrations.', link: '/parade-registration', render: (p: Parade) => (<div key={p.id} className="flex items-center justify-between p-4 bg-cream rounded-xl"><div><h3 className="font-bold text-navy">{p.org_name}</h3><p className="text-xs text-gray-500">Representing {p.country_represented} · {p.parade_year}</p></div>{badge(p.status)}</div>) },
          { title: 'SEED Applications', data: seeds, empty: 'No SEED applications.', link: '/join-seed', render: (s: SeedApp) => (<div key={s.id} className="flex items-center justify-between p-4 bg-cream rounded-xl"><div><h3 className="font-bold text-navy">{s.org_name}</h3><p className="text-xs text-gray-500">Applied {new Date(s.created_at).toLocaleDateString()}</p></div>{badge(s.status)}</div>) },
        ].map((section) => (
          <div key={section.title} className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{section.title}</h2>
            {section.data.length === 0 ? <p className="text-gray-400 text-sm">{section.empty} <Link href={section.link} className="text-teal underline">Get started →</Link></p> : <div className="space-y-3">{section.data.map(section.render as any)}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
