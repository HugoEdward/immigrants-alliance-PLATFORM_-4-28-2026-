import Link from 'next/link';
import type { GetStaticProps } from 'next';
import type { CSSProperties } from 'react';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'Thank You — 41st International Cultures–Immigrants Parade — Immigrants Alliance',
    description: 'Thank you to all communities who made the 41st International Cultures–Immigrants Parade a celebration of unity and culture. Preparations begin for the International Cultures Celebration 2027 in New York City.',
    schema: [{ '@context': 'https://schema.org', '@type': 'NGO', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org', foundingDate: '1976', areaServed: 'Worldwide', memberOf: { '@type': 'Organization', name: 'United Nations ECOSOC' } }],
  },
});

const btnGold: CSSProperties = { display:'inline-block', background:'#C9A84C', color:'#0A1628', padding:'14px 28px', borderRadius:'6px', fontWeight:700, fontSize:'0.9rem', textDecoration:'none' };
const btnOutline: CSSProperties = { display:'inline-block', background:'transparent', color:'#fff', padding:'14px 28px', borderRadius:'6px', fontWeight:700, fontSize:'0.9rem', textDecoration:'none', border:'2px solid rgba(255,255,255,0.35)' };
const label: CSSProperties = { fontSize:'0.7rem', letterSpacing:'0.2em', textTransform:'uppercase', fontWeight:700, marginBottom:'10px', color:'#C9A84C' };
const h2s: CSSProperties = { fontFamily:'Playfair Display,Georgia,serif', fontWeight:900, lineHeight:1.15 };
const goldLine: CSSProperties = { width:'48px', height:'3px', background:'#C9A84C', margin:'14px auto 20px' };

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        .hero{position:relative;min-height:92vh;display:flex;align-items:center;background:#0A1628;overflow:hidden}
        .hero-bg{position:absolute;inset:0;background-image:url('https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1600&q=80');background-size:cover;background-position:center;opacity:.2}
        .hero-grad{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,22,40,.85) 0%,rgba(10,22,40,.95) 100%)}
        .hero-inner{position:relative;z-index:2;max-width:860px;margin:0 auto;text-align:center;padding:80px 24px}
        .s2{position:relative;overflow:hidden;padding:80px 24px;background:#0D2240}
        .s2-bg{position:absolute;inset:0;background-image:url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80');background-size:cover;background-position:center;opacity:.12}
        .s2-grad{position:absolute;inset:0;background:linear-gradient(135deg,rgba(13,34,64,.92),rgba(10,22,40,.88))}
        .s2-inner{position:relative;z-index:2;max-width:900px;margin:0 auto;text-align:center}
        .imp-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:2px;max-width:1140px;margin:0 auto}
        .imp-cell{padding:32px 16px;text-align:center}
        .pg{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:36px}
        .pc{background:rgba(255,255,255,.04);border:1px solid rgba(201,168,76,.18);border-radius:10px;padding:28px 20px;text-decoration:none;display:block;transition:border-color .2s,transform .2s}
        .pc:hover{border-color:#C9A84C;transform:translateY(-3px)}
        .fg{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
        .c27{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}
        .c27c{background:rgba(201,168,76,.08);border:1px solid rgba(201,168,76,.25);border-radius:10px;padding:24px;text-align:center}
        .tg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:32px}
        .tc{background:rgba(255,255,255,.03);border:1px solid rgba(201,168,76,.15);border-radius:10px;padding:28px;margin:0}
        .pr{display:flex;justify-content:center;gap:40px;flex-wrap:wrap;align-items:center;margin-top:28px}
        @media(max-width:900px){.imp-grid{grid-template-columns:repeat(2,1fr)}.pg{grid-template-columns:repeat(2,1fr)}.fg{grid-template-columns:1fr}.c27{grid-template-columns:1fr}.tg{grid-template-columns:1fr}}
        @media(max-width:600px){.imp-grid{grid-template-columns:1fr}.pg{grid-template-columns:1fr}}
      `}</style>

      {/* ═══ 1. HERO — THANK YOU ═══ */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grad" />
        <div className="hero-inner">
          <div style={label}>41st International Cultures—Immigrants Parade · June 13, 2026 · New York City</div>
          <h1 style={{...h2s,fontSize:'clamp(2rem,5vw,3.2rem)',color:'#fff',marginBottom:'24px'}}>
            Thank You to All<br />
            <span style={{color:'#C9A84C'}}>Participating Communities</span>
          </h1>
          <p style={{color:'rgba(255,255,255,.72)',fontSize:'1rem',lineHeight:1.8,maxWidth:'720px',margin:'0 auto 20px'}}>
            Immigrants Alliance extends its heartfelt thanks to all participating communities, cultural leaders, volunteers, performers, organizations, families, sponsors, and supporters who helped make the 41st International Cultures—Immigrants Parade a meaningful celebration of unity, dignity, culture, and community.
          </p>
          <p style={{color:'#C9A84C',fontSize:'1rem',lineHeight:1.7,fontWeight:600,marginBottom:'16px'}}>
            We wish everyone a joyful, peaceful, and healthy summer.
          </p>
          <p style={{color:'rgba(255,255,255,.6)',fontSize:'0.92rem',lineHeight:1.75,maxWidth:'660px',margin:'0 auto 16px'}}>
            We are proud to announce the beginning of preparations for the <strong style={{color:'#fff'}}>next International Cultures Celebration, scheduled for the second week of June 2027</strong> in New York City.
          </p>
          <p style={{color:'rgba(255,255,255,.55)',fontSize:'0.9rem',lineHeight:1.7,fontStyle:'italic',marginBottom:'32px'}}>
            Together, we continue to unite cultures, empower communities, and celebrate the people of the world.
          </p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/international-cultures-celebration" style={btnGold}>International Cultures Celebration 2027</Link>
            <Link href="/programs" style={btnOutline}>Explore Programs</Link>
          </div>
        </div>
      </section>

      {/* ═══ 2. MISSION (former hero) ═══ */}
      <section className="s2">
        <div className="s2-bg" />
        <div className="s2-grad" />
        <div className="s2-inner">
          <div style={label}>Since 1976 · UN ECOSOC Consultative Status Since 1989 · 190+ Countries</div>
          <h2 style={{...h2s,fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',marginBottom:'18px'}}>
            Uniting Cultures.<br />
            <span style={{color:'#C9A84C'}}>Empowering Communities.</span><br />
            Celebrating Humanity.
          </h2>
          <p style={{color:'rgba(255,255,255,.6)',fontSize:'0.95rem',lineHeight:1.75,maxWidth:'660px',margin:'0 auto 28px'}}>
            Immigrants Alliance brings together communities, organizations, cultural institutions, businesses, and individuals to advance intercultural understanding, economic empowerment, and global cooperation.
          </p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/programs" style={btnGold}>Explore Programs</Link>
            <Link href="/join-seed" style={btnOutline}>Economic Empowerment</Link>
            <Link href="/international-cultures-celebration" style={{...btnOutline,borderColor:'rgba(201,168,76,.4)',color:'#C9A84C'}}>Celebration 2027</Link>
          </div>
        </div>
      </section>

      {/* ═══ 3. IMPACT ═══ */}
      <div style={{background:'#0A1628',borderTop:'3px solid #C9A84C',borderBottom:'3px solid rgba(201,168,76,.2)'}}>
        <div className="imp-grid">
          {[
            {n:'41',l:'Years of Celebration'},
            {n:'100+',l:'Cultures Represented'},
            {n:'50,000+',l:'Participants'},
            {n:'🇺🇳',l:'UN ECOSOC Since 1989'},
            {n:'190+',l:'Countries'},
          ].map((s) => (
            <div className="imp-cell" key={s.l}>
              <div style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'1.8rem',fontWeight:900,color:'#C9A84C'}}>{s.n}</div>
              <div style={{fontSize:'0.7rem',color:'rgba(255,255,255,.55)',textTransform:'uppercase',letterSpacing:'0.1em',marginTop:'4px'}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ 4. PROGRAMS ═══ */}
      <section style={{padding:'80px 24px',background:'#0D2240'}}>
        <div style={{maxWidth:'1140px',margin:'0 auto'}}>
          <div style={{textAlign:'center'}}>
            <div style={label}>Programs &amp; Initiatives</div>
            <h2 style={{...h2s,fontSize:'2rem',color:'#fff'}}>Building a Stronger World Together</h2>
            <div style={goldLine} />
          </div>
          <div className="pg">
            {[
              {icon:'🌱',t:'S.E.E.D. Economic Empowerment',d:'Helping organizations, merchants, and entrepreneurs grow through cooperation and shared prosperity.',href:'/join-seed',cta:'Learn More →'},
              {icon:'🎪',t:'International Cultures Celebration',d:'A week-long celebration — conference, pavilions, cultural exchange, Passport to the World, and the Parade.',href:'/international-cultures-celebration',cta:'Learn More →'},
              {icon:'🎉',t:'International Cultures—Immigrants Parade',d:'The 41st International Cultures—Immigrants Parade concluded successfully, bringing together communities from around the world in a celebration of culture, dignity, unity, and cooperation.',href:'/parade-registration',cta:'View Highlights →'},
              {icon:'🎤',t:'Global Voices',d:'Amplifying immigrant stories, leadership, and the voices that build bridges between cultures.',href:'/voices',cta:'Learn More →'},
              {icon:'🌐',t:'Passport to the World',d:'A cultural journey through national pavilions, cuisine, art, music, and heritage from every continent.',href:'/international-cultures-celebration',cta:'Learn More →'},
              {icon:'🏙️',t:'Safe Cities',d:'Comparing cities by safety, support services, and community strength for immigrant communities.',href:'/live/safe-cities',cta:'Learn More →'},
              {icon:'📊',t:'Discrimination Monitor',d:'Community-reported incidents by city, type, and severity. Track and report hate incidents.',href:'/live/discrimination',cta:'Learn More →'},
              {icon:'🗺️',t:'Danger Map',d:'Real-time safety intelligence — risk levels by city and country. Know before you go.',href:'/live/danger-map',cta:'Learn More →'},
            ].map((c) => (
              <Link key={c.t} href={c.href} className="pc">
                <div style={{fontSize:'1.6rem',marginBottom:'10px'}}>{c.icon}</div>
                <h3 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'0.92rem',fontWeight:700,color:'#C9A84C',marginBottom:'6px'}}>{c.t}</h3>
                <p style={{fontSize:'0.78rem',color:'rgba(255,255,255,.55)',lineHeight:1.6,marginBottom:'10px'}}>{c.d}</p>
                <span style={{fontSize:'0.78rem',color:'#C9A84C',fontWeight:600}}>{c.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. FEATURED S.E.E.D. ═══ */}
      <section style={{padding:'80px 24px',background:'#0A1628'}}>
        <div style={{maxWidth:'1140px',margin:'0 auto'}}>
          <div className="fg">
            <div>
              <div style={label}>Featured Program</div>
              <h2 style={{...h2s,fontSize:'2rem',color:'#fff',marginBottom:'6px'}}>S.E.E.D.</h2>
              <p style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'1.1rem',color:'#C9A84C',marginBottom:'14px',fontStyle:'italic'}}>Sustainable Economic Empowerment &amp; Development</p>
              <div style={{width:'48px',height:'3px',background:'#C9A84C',margin:'14px 0 20px'}} />
              <p style={{color:'rgba(255,255,255,.65)',fontSize:'0.9rem',lineHeight:1.75,marginBottom:'14px'}}>Helping organizations, communities, merchants, professionals, entrepreneurs, and families grow through cooperation, activation, and shared prosperity.</p>
              <p style={{color:'rgba(255,255,255,.55)',fontSize:'0.88rem',lineHeight:1.7,marginBottom:'24px'}}>Each participating organization receives a dedicated Development Officer and a roadmap to generate $250,000+ in new sustainable annual revenue.</p>
              <Link href="/join-seed" style={btnGold}>Discover S.E.E.D. →</Link>
            </div>
            <div style={{position:'relative',borderRadius:'12px',overflow:'hidden',border:'2px solid rgba(201,168,76,.2)'}}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Team collaboration and economic empowerment" style={{width:'100%',height:'380px',objectFit:'cover',display:'block'}} />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(transparent 50%,rgba(10,22,40,.8))',display:'flex',alignItems:'flex-end',padding:'24px'}}>
                <p style={{color:'#fff',fontSize:'0.88rem',fontWeight:700,margin:0}}>Empowering Organizations. Building Sustainable Futures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. CELEBRATION 2027 — PROMINENT ═══ */}
      <section style={{padding:'90px 24px',background:'linear-gradient(135deg,#0D2240,#0A1628)'}}>
        <div style={{maxWidth:'1140px',margin:'0 auto',textAlign:'center'}}>
          <div style={{...label,fontSize:'0.8rem',letterSpacing:'0.25em'}}>The Next Major Event</div>
          <h2 style={{...h2s,fontSize:'clamp(1.8rem,4vw,2.6rem)',color:'#fff',marginBottom:'6px'}}>International Cultures Celebration 2027</h2>
          <p style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'1.15rem',color:'#C9A84C',marginBottom:'8px'}}>Second Week of June 2027 · New York City</p>
          <div style={goldLine} />
          <p style={{color:'rgba(255,255,255,.6)',fontSize:'0.95rem',lineHeight:1.75,maxWidth:'660px',margin:'0 auto 32px'}}>A week-long celebration of world cultures — bringing together communities, organizations, performers, and cultural leaders from every continent for conference, cultural exchange, and the 42nd International Cultures—Immigrants Parade.</p>
          <div className="c27">
            {[
              {icon:'🏛',t:'Conference',d:'International dialogue on culture, migration, and economic cooperation.'},
              {icon:'🤝',t:'Cultural Exchange',d:'Direct community-to-community connections across borders.'},
              {icon:'🌍',t:'Passport to the World',d:'National pavilions showcasing cuisine, art, music, and heritage.'},
              {icon:'🎤',t:'Global Voices',d:'Immigrant stories, leadership, and community narratives.'},
              {icon:'🏢',t:'International Partnerships',d:'Institutional collaboration and community development.'},
              {icon:'👥',t:'Community Participation',d:'Open to all organizations, families, and individuals worldwide.'},
            ].map((c) => (
              <div key={c.t} className="c27c">
                <div style={{fontSize:'1.4rem',marginBottom:'8px'}}>{c.icon}</div>
                <h3 style={{fontSize:'0.88rem',fontWeight:700,color:'#C9A84C',marginBottom:'4px'}}>{c.t}</h3>
                <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,.55)',lineHeight:1.5,margin:0}}>{c.d}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:'32px'}}>
            <Link href="/international-cultures-celebration" style={{...btnGold,padding:'16px 36px',fontSize:'1rem'}}>Learn More About Celebration 2027 →</Link>
          </div>
        </div>
      </section>

      {/* ═══ 7. GLOBAL COMMUNITY ═══ */}
      <section style={{position:'relative',padding:'80px 24px',background:'#0A1628',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')",backgroundSize:'cover',backgroundPosition:'center',opacity:.15}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(10,22,40,.9),rgba(13,34,64,.85))'}} />
        <div style={{maxWidth:'700px',margin:'0 auto',position:'relative',zIndex:2,textAlign:'center'}}>
          <h2 style={{...h2s,fontSize:'2rem',color:'#fff',marginBottom:'20px'}}>
            Every Culture Matters.<br />
            <span style={{color:'#C9A84C'}}>Every Community Contributes.</span><br />
            Every Voice Deserves Respect.
          </h2>
          <p style={{color:'rgba(255,255,255,.6)',fontSize:'0.92rem',lineHeight:1.75,marginBottom:'12px'}}>From New York to Nairobi, São Paulo to Seoul, London to Lagos — Immigrants Alliance connects communities that share a vision of dignity, cooperation, and mutual prosperity.</p>
          <p style={{color:'rgba(255,255,255,.55)',fontSize:'0.88rem',lineHeight:1.7}}>Immigrants from all cultural backgrounds — including Iranians, Palestinians, and communities from every nation — are welcome to participate in all programs and events.</p>
          <div style={{fontSize:'1.8rem',marginTop:'24px',lineHeight:2}}>🇺🇸 🇲🇽 🇨🇴 🇧🇷 🇭🇹 🇩🇴 🇯🇲 🇳🇬 🇬🇭 🇮🇳 🇵🇰 🇧🇩 🇨🇳 🇵🇭 🇰🇷 🇻🇳 🇮🇷 🇵🇸 🇱🇧 🇪🇬 🇲🇦 🇵🇱 🇮🇪 🇮🇹 🇵🇹 🇬🇧 🇩🇪 🇫🇷 🇹🇷 🇯🇵 🇪🇹 🇸🇳</div>
        </div>
      </section>

      {/* ═══ 8. TESTIMONIALS ═══ */}
      <section style={{padding:'80px 24px',background:'#0D2240'}}>
        <div style={{maxWidth:'1140px',margin:'0 auto'}}>
          <div style={{textAlign:'center'}}>
            <div style={label}>Community Voices</div>
            <h2 style={{...h2s,fontSize:'1.6rem',color:'#fff'}}>What Our Community Says</h2>
            <div style={goldLine} />
          </div>
          <div className="tg">
            {[
              {q:'The Alliance connected me with legal help when I had no one to turn to. Within two days, I had an attorney who understood my situation.',n:'Maria G.',r:'Community Member',l:'New York'},
              {q:'S.E.E.D. transformed our organization. We went from surviving on grants to building real, sustainable income for the first time.',n:'Dr. Akin O.',r:'Organization Leader',l:'Nairobi'},
              {q:'The Parade gave my children pride in their heritage. They finally saw their culture celebrated on the streets of Manhattan.',n:'Priya K.',r:'Cultural Leader',l:'London'},
            ].map((t) => (
              <blockquote key={t.n} className="tc">
                <p style={{fontSize:'0.85rem',color:'rgba(255,255,255,.7)',lineHeight:1.7,fontStyle:'italic',marginBottom:'18px'}}>&ldquo;{t.q}&rdquo;</p>
                <footer style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'rgba(201,168,76,.15)',display:'flex',alignItems:'center',justifyContent:'center',color:'#C9A84C',fontSize:'0.75rem',fontWeight:700,flexShrink:0}}>
                    {t.n.split(' ').map((w) => w[0]).join('')}
                  </div>
                  <div>
                    <cite style={{fontSize:'0.85rem',fontWeight:700,color:'#fff',fontStyle:'normal',display:'block'}}>{t.n}</cite>
                    <span style={{fontSize:'0.7rem',color:'#C9A84C'}}>{t.r}</span>
                    <span style={{fontSize:'0.7rem',color:'rgba(255,255,255,.4)',marginLeft:'8px'}}>{t.l}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. PARTNERS ═══ */}
      <section style={{padding:'80px 24px',background:'#0A1628'}}>
        <div style={{maxWidth:'1140px',margin:'0 auto',textAlign:'center'}}>
          <div style={label}>Affiliations &amp; Institutional Partnerships</div>
          <h2 style={{...h2s,fontSize:'1.4rem',color:'#fff'}}>Institutional Credibility</h2>
          <div style={goldLine} />
          <div className="pr">
            {[
              {icon:'🇺🇳',t:'United Nations ECOSOC',d:'Consultative Status Since 1989'},
              {icon:'🏛',t:'Immigrants Foundation',d:'Parent Organization, Est. 1976'},
              {icon:'🌍',t:'International Cultures Mission',d:'Cultural Programming Since 1986'},
              {icon:'🤝',t:'Community Partners',d:'190+ Countries Worldwide'},
            ].map((p) => (
              <div key={p.t} style={{minWidth:'160px',opacity:.8,textAlign:'center'}}>
                <div style={{fontSize:'2rem',marginBottom:'6px'}}>{p.icon}</div>
                <div style={{fontSize:'0.82rem',fontWeight:700,color:'#fff'}}>{p.t}</div>
                <div style={{fontSize:'0.7rem',color:'rgba(255,255,255,.5)',marginTop:'2px'}}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. FINAL CTA ═══ */}
      <section style={{padding:'80px 24px',background:'linear-gradient(135deg,#0A1628,#0D2240,#0A1628)',textAlign:'center'}}>
        <div style={{maxWidth:'700px',margin:'0 auto'}}>
          <h2 style={{...h2s,fontSize:'2rem',color:'#fff',marginBottom:'14px'}}>Be Part of Something Bigger</h2>
          <p style={{color:'rgba(255,255,255,.55)',fontSize:'0.92rem',lineHeight:1.7,marginBottom:'28px'}}>Join a global community advancing intercultural understanding, economic empowerment, and the dignity of every person.</p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/programs" style={btnGold}>Explore Programs</Link>
            <Link href="/international-cultures-celebration" style={btnOutline}>International Cultures Celebration 2027</Link>
            <Link href="/join-seed" style={{...btnOutline,borderColor:'rgba(201,168,76,.4)',color:'#C9A84C'}}>Economic Empowerment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
