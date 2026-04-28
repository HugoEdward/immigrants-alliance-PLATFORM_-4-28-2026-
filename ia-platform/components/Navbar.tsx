import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/parade-registration', label: '🎉 2026 Parade', highlight: true },
  { href: '/register-organization', label: 'Register Org' },
  { href: '/join-seed', label: 'SEED Program' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Urgent Banner */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white text-center py-3 px-6 font-semibold text-sm tracking-wide relative z-50">
        🌐 41st International Cultures — Immigrants Parade | June 13, 2026 | NYC —{' '}
        <Link href="/parade-registration" className="text-yellow-300 font-bold underline hover:text-yellow-200">
          Register Now →
        </Link>{' '}
        | Deadline: May 30, 2026
      </div>

      {/* Nav */}
      <nav className="bg-navy sticky top-0 z-40" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 py-2 no-underline">
            <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center text-navy font-bold text-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg, #C5973B, #8B6914)', fontFamily: 'Playfair Display, serif' }}>
              IA
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Immigrants Alliance
              </div>
              <div className="text-gold text-[0.65rem] font-normal tracking-[0.15em] uppercase">
                Unite · Empower · Thrive
              </div>
            </div>
          </Link>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Links */}
          <ul className={`md:flex items-center gap-0 list-none m-0 p-0 ${open ? 'flex flex-col absolute top-full left-0 right-0 bg-navy p-4 z-50' : 'hidden'}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3.5 py-5 text-sm font-medium transition-all no-underline ${
                    router.pathname === link.href ? 'text-gold border-b-[3px] border-gold' : 'border-b-[3px] border-transparent'
                  } ${link.highlight ? 'text-gold-light' : 'text-white/85'} hover:text-gold hover:border-gold`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/login" className="block px-3.5 py-5 text-sm font-medium text-white/85 hover:text-gold no-underline transition-all" onClick={() => setOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm ml-2 hover:bg-gold-light no-underline transition-all inline-block" onClick={() => setOpen(false)}>
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
