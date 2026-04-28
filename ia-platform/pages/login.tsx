import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({ props: { title: 'Login' } });

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault(); setLoading(true); setError('');
    const { error: authErr } = await supabase.auth.signInWithPassword({ email, password });
    if (authErr) { setError(authErr.message); } else { router.push('/dashboard'); }
    setLoading(false);
  }

  return (
    <section className="bg-warm min-h-[80vh] flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 md:p-10" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center text-navy font-extrabold text-xl mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #C5973B, #8B6914)', fontFamily: 'Playfair Display, serif' }}>IA</div>
            <h1 className="text-2xl font-bold text-navy" style={{ fontFamily: 'Playfair Display, serif' }}>Welcome Back</h1>
            <p className="text-gray-500 text-sm mt-1">Sign in to your Alliance account</p>
          </div>
          {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 mb-6 text-sm">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-5"><label className="block font-semibold text-sm mb-1.5 text-navy">Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="form-field" /></div>
            <div className="mb-6"><label className="block font-semibold text-sm mb-1.5 text-navy">Password</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="form-field" /></div>
            <button type="submit" disabled={loading} className="btn-gold w-full justify-center py-3.5 disabled:opacity-50">{loading ? 'Signing in...' : 'Sign In →'}</button>
          </form>
          <div className="text-center mt-6 text-sm text-gray-500">Don&apos;t have an account? <Link href="/signup" className="text-teal font-semibold hover:underline">Create one →</Link></div>
        </div>
      </div>
    </section>
  );
}
