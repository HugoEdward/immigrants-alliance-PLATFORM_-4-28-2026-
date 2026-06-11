import Link from 'next/link';

const modules = [
  { icon: '🏛', label: 'Organizations', desc: 'Review applications, manage directory, assign S.E.E.D. status', table: 'organizations', count: '8 registered', status: 'Data layer ready' },
  { icon: '🏪', label: 'Merchants', desc: 'Review applications, manage categories, MundusPASS integration', table: 'merchants', count: '6 registered', status: 'Data layer ready' },
  { icon: '⭐', label: 'Ambassadors', desc: 'Review applications, assign roles, manage territories', table: 'ambassadors', count: '5 registered', status: 'Data layer ready' },
  { icon: '🌍', label: 'Countries & Cities', desc: 'Manage federation hubs, update risk levels, assign coordinators', table: 'federation_countries, federation_cities', count: '13 countries, 7 cities', status: 'Data layer ready' },
  { icon: '📖', label: 'Global Voices', desc: 'Publish stories, manage categories, feature content', table: 'voices', count: '12 stories', status: 'Data layer ready' },
  { icon: '🎉', label: 'Events & Parade', desc: 'Manage parade registrations, events calendar, delegations', table: 'events, parade_registrations', count: '1 active event', status: 'Data layer ready' },
  { icon: '🌱', label: 'S.E.E.D. Applications', desc: 'Review applications, track progress, assign Development Officers', table: 'seed_applications', count: 'Launch Sep 15, 2026', status: 'Form ready' },
  { icon: '📬', label: 'Contact Submissions', desc: 'Review inquiries, route to departments, track responses', table: 'contact_submissions', count: '', status: 'Form ready' },
];

export default function AdminDashboard() {
  return (
    <section className="bg-warm min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Federation Admin</h1>
            <p className="text-gray-400 text-sm">Management dashboard for the Immigrants Alliance federation infrastructure</p>
          </div>
          <Link href="/" className="text-teal text-sm font-semibold hover:underline no-underline">← Back to Site</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-5 mb-6" style={{ boxShadow: '0 2px 8px rgba(10,22,40,.06)' }}>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full font-bold">🔒 Auth Required</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">This dashboard requires authentication. Connect Supabase Auth with role-based access control to enable full CRUD operations. Current status: <strong className="text-navy">read-only preview</strong>. Run <code className="bg-warm px-2 py-0.5 rounded text-xs">supabase/federation-schema.sql</code> to create all required tables.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {modules.map(m => (
            <div key={m.label} className="bg-white rounded-xl border border-gray-100 p-5" style={{ boxShadow: '0 2px 8px rgba(10,22,40,.06)' }}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{m.icon}</div>
                  <div>
                    <h3 className="font-bold text-navy text-sm">{m.label}</h3>
                    <p className="text-[0.65rem] text-gray-400">{m.desc}</p>
                  </div>
                </div>
                <span className="bg-teal/10 text-teal text-[0.6rem] px-2 py-0.5 rounded-full font-bold shrink-0">{m.status}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50">
                <span>Table: <code className="bg-warm px-1.5 py-0.5 rounded">{m.table}</code></span>
                {m.count && <span>{m.count}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-navy rounded-xl p-6 text-center text-white">
          <h3 className="font-bold text-gold-light mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Next Steps for Full Dashboard</h3>
          <div className="grid md:grid-cols-3 gap-4 text-xs text-white/60 mt-4">
            <div className="bg-white/[.04] rounded-lg p-4"><strong className="text-gold-light block mb-1">1. Supabase Auth</strong>Enable email/password + role-based access. Admin role for dashboard access.</div>
            <div className="bg-white/[.04] rounded-lg p-4"><strong className="text-gold-light block mb-1">2. Run Migration</strong>Execute federation-schema.sql to create all 10 tables with RLS policies.</div>
            <div className="bg-white/[.04] rounded-lg p-4"><strong className="text-gold-light block mb-1">3. CRUD Components</strong>Build table views, edit forms, and approval workflows for each module.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
