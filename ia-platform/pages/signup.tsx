import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: { title: 'Sign Up' } });

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault(); setLoading(true); setError('');
    const { error: authErr } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
    if (authErr) { setError(authErr.message); } else { setSuccess(true); }
    setLoading(false);
  }

  if (success) return (
    <section className="bg-warm min-h-[80vh] flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-auto px-6 text-center">
        <div className="bg-white rounded-2xl p-10" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
          <div className="text-5xl mb-4">📧</div>
          <h2 className="text-2xl font-bold text-navy mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Check Your Email</h2>
          <p className="text-gray-500">Confirmation link sent to <strong>{email}</strong>.</p>
          <Link href="/login" className="btn-gold mt-6 inline-flex">Go to Login →</Link>
        </div>
      </div>
    </section>
  );

  return (
    <section className="bg-warm min-h-[80vh] flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 md:p-10" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center text-navy font-extrabold text-xl mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #C5973B, #8B6914)', fontFamily: 'Playfair Display, serif' }}>IA</div>
            <h1 className="text-2xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Join Immigrants Alliance</h1>
            <p className="text-gray-500 text-sm mt-1">Create your free account</p>
          </div>
          {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 mb-6 text-sm">{error}</div>}
          <form onSubmit={handleSignup}>
            <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Full Name</label><input type="text" value={name} onChange={e => setName(e.target.value)} required className="form-field" /></div>
            <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="form-field" /></div>
            <div className="mb-6"><label className="block font-semibold text-sm mb-1.5 text-navy">Password</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} className="form-field" /><p className="text-xs text-gray-400 mt-1">Minimum 6 characters</p></div>
            <button type="submit" disabled={loading} className="btn-gold w-full justify-center py-3.5 disabled:opacity-50">{loading ? 'Creating Account...' : 'Create Account →'}</button>
          </form>
          <div className="text-center mt-6 text-sm text-gray-500">Already have an account? <Link href="/login" className="text-teal font-semibold hover:underline">Sign in →</Link></div>
        </div>
      </div>
    </section>
  );
}
