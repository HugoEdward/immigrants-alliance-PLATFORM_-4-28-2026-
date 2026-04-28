import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center text-navy font-bold text-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg, #C5973B, #8B6914)', fontFamily: 'Playfair Display, serif' }}>IA</div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Immigrants Alliance</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">Nonpartisan, secular global multicultural economic development organization. UN ECOSOC Consultative Status since 1989.</p>
            <div className="inline-flex items-center gap-2 bg-white/[.08] border border-white/15 px-3.5 py-2 rounded-lg text-xs mt-3 text-white/90">🇺🇳 UN ECOSOC NGO</div>
          </div>
          <div>
            <h4 className="text-gold-light text-sm mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Programs</h4>
            <Link href="/join-seed" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">SEED Initiative</Link>
            <Link href="/parade-registration" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">Immigrants Parade</Link>
            <Link href="/register-organization" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">Register Organization</Link>
          </div>
          <div>
            <h4 className="text-gold-light text-sm mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Membership</h4>
            <Link href="/signup" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">Individual & Family</Link>
            <Link href="/register-organization" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">Organization</Link>
            <Link href="/login" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">Member Login</Link>
          </div>
          <div>
            <h4 className="text-gold-light text-sm mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Contact</h4>
            <a href="mailto:Connect@ImmigrantsAlliance.org" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">Connect@ImmigrantsAlliance.org</a>
            <a href="mailto:SEEDthrive@gmail.com" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">SEEDthrive@gmail.com</a>
            <Link href="/about" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">About Us</Link>
            <Link href="/contact" className="block text-white/70 text-sm py-1 hover:text-gold-light transition-colors no-underline">Contact Page</Link>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-xs opacity-70">
          <span>© 2026 Immigrants Alliance. All rights reserved.</span>
          <span>Advancing positive intercultural relations since 1976</span>
        </div>
      </div>
    </footer>
  );
}
