import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: '41st International Cultures–Immigrants Parade — Tomorrow, Saturday — NYC',
    description: '41st International Cultures–Immigrants Parade. June 13, 2026, 11AM, Avenue of the Americas, 42nd–57th St, New York City. 41 years of celebrating every culture. UN ECOSOC since 1989.',
    schema: [{
      '@context': 'https://schema.org', '@type': 'Event',
      name: '41st International Cultures–Immigrants Parade',
      startDate: '2026-06-13T11:00:00-04:00', endDate: '2026-06-13T16:00:00-04:00',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: 'Avenue of the Americas', address: { '@type': 'PostalAddress', streetAddress: '6th Avenue, 42nd to 57th Street', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } },
      organizer: { '@type': 'Organization', name: 'Immigrants Alliance', url: 'https://immigrantsalliance.org' },
      image: 'https://immigrantsalliance.org/IMMIGRANTS_ALLIANCE_Logo.jpg',
      isAccessibleForFree: true,
    }],
  },
});

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        .hero-wrap{position:relative;display:grid;grid-template-columns:1fr 1fr;min-height:520px;background:#0A1628;overflow:hidden}
        .hero-left{position:relative;z-index:2;padding:48px 48px 32px;display:flex;flex-direction:column;justify-content:center}
        .hero-right{position:relative}
        .hero-right img{width:100%;height:100%;object-fit:cover;display:block}
        .hero-right::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#0A1628 0%,transparent 30%);z-index:1}
        .stats-bar{display:grid;grid-template-columns:repeat(4,1fr);background:rgba(10,22,40,0.92);backdrop-filter:blur(8px);border-top:1px solid rgba(201,168,76,0.3);position:relative;z-index:3}
        .stat-item{padding:16px 20px;display:flex;align-items:center;gap:10px;border-right:1px solid rgba(255,255,255,0.08)}
        .stat-item:last-child{border-right:none}
        .stat-icon{width:32px;height:32px;border-radius:50%;background:rgba(201,168,76,0.15);display:flex;align-items:center;justify-content:center;font-size:14px;color:#C9A84C;flex-shrink:0}
        .stat-text strong{display:block;font-size:0.88rem;color:#fff;font-weight:700}
        .stat-text span{font-size:0.7rem;color:rgba(255,255,255,0.5)}
        .three-col{display:grid;grid-template-columns:1fr 1.3fr 1fr;gap:0;background:#fff}
        .col-left{padding:40px 32px;border-right:1px solid #eee}
        .col-center{padding:40px 32px}
        .col-right{padding:40px 32px;border-left:1px solid #eee}
        .prog-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}
        .prog-card{border:1px solid #eee;border-radius:8px;padding:20px 14px;text-align:center;text-decoration:none;display:block}
        .prog-card:hover{border-color:#C9A84C}
        .prog-icon{width:36px;height:36px;margin:0 auto 8px;border-radius:50%;background:rgba(201,168,76,0.1);display:flex;align-items:center;justify-content:center;font-size:16px;color:#C9A84C}
        .impact-item{display:flex;align-items:center;gap:12px;margin-bottom:20px}
        .impact-icon{width:36px;height:36px;border-radius:50%;background:rgba(201,168,76,0.1);display:flex;align-items:center;justify-content:center;font-size:14px;color:#C9A84C;flex-shrink:0}
        .impact-num{font-family:'Playfair Display',Georgia,serif;font-size:1.5rem;font-weight:900;color:#C9A84C;line-height:1}
        .impact-label{font-size:0.75rem;color:#666}
        .video-card{position:relative;border-radius:10px;overflow:hidden;margin-top:20px}
        .video-card img{width:100%;height:220px;object-fit:cover;display:block}
        .video-overlay{position:absolute;inset:0;background:linear-gradient(transparent 40%,rgba(10,22,40,0.85));display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:20px}
        .play-btn{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.9);display:flex;align-items:center;justify-content:center;margin-bottom:12px;cursor:pointer}
        .gold-line{width:40px;height:3px;background:#C9A84C;margin:10px 0 16px}
        .btn-gold{display:inline-block;background:#C9A84C;color:#0A1628;padding:12px 24px;border-radius:6px;font-weight:700;font-size:0.88rem;text-decoration:none}
        .btn-dark{display:inline-block;background:#0A1628;color:#fff;padding:12px 24px;border-radius:6px;font-weight:700;font-size:0.88rem;text-decoration:none;border:2px solid #0A1628}
        .btn-outline-dark{display:inline-block;background:transparent;color:#fff;padding:12px 24px;border-radius:6px;font-weight:700;font-size:0.88rem;text-decoration:none;border:2px solid rgba(255,255,255,0.4)}
        @media(max-width:900px){.hero-wrap{grid-template-columns:1fr}.hero-right{height:280px}.hero-right::before{background:linear-gradient(180deg,#0A1628 0%,transparent 30%)}.hero-left{padding:32px 20px 24px}.stats-bar{grid-template-columns:repeat(2,1fr)}.three-col{grid-template-columns:1fr}.col-left,.col-right{border:none;border-bottom:1px solid #eee}}
        @media(max-width:600px){.stats-bar{grid-template-columns:1fr 1fr}.prog-grid{grid-template-columns:1fr}}
      `}</style>

      <div className="hero-wrap">
        <div className="hero-left">
          <p style={{color:'#C9A84C',fontSize:'0.75rem',fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'14px'}}>One City. Many Cultures. United as One.</p>
          <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'clamp(1.8rem,4vw,2.8rem)',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'18px'}}>41st International Cultures—<br/>Immigrants Parade</h1>
          <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'10px',fontSize:'0.88rem',color:'rgba(255,255,255,0.85)'}}>
            <span>📅 June 13, 2026 (Tomorrow, Saturday)</span>
            <span>📍 New York City</span>
          </div>
          <p style={{color:'rgba(255,255,255,0.6)',fontSize:'0.88rem',lineHeight:1.7,marginBottom:'24px',maxWidth:'480px'}}>Uniting cultures. Empowering immigrants. Building stronger communities through celebration, education, cooperation, and economic empowerment.</p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <Link href="/parade-registration" className="btn-gold">About the Parade</Link>
            <Link href="/programs" className="btn-outline-dark">Explore Programs</Link>
          </div>
        </div>
        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1000&q=80" alt="Cultural celebration with flags at the International Cultures Immigrants Parade"/>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat-item"><div className="stat-icon">👥</div><div className="stat-text"><strong>41 Years</strong><span>of Unity &amp; Culture</span></div></div>
        <div className="stat-item"><div className="stat-icon">🌐</div><div className="stat-text"><strong>100+</strong><span>Cultures Represented</span></div></div>
        <div className="stat-item"><div className="stat-icon">👥</div><div className="stat-text"><strong>50,000+</strong><span>Participants Each Year</span></div></div>
        <div className="stat-item"><div className="stat-icon">❤️</div><div className="stat-text"><strong>Stronger Together</strong><span>Building Community</span></div></div>
      </div>

      <section className="three-col">
        <div className="col-left">
          <h2 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'1.3rem',fontWeight:800,color:'#0A1628',marginBottom:'4px'}}>Our Programs</h2>
          <div className="gold-line"/>
          <div className="prog-grid">
            <Link href="/join-seed" className="prog-card"><div className="prog-icon">📊</div><h3 style={{fontSize:'0.82rem',fontWeight:700,color:'#0A1628',marginBottom:'4px'}}>Economic Empowerment S.E.E.D.</h3><p style={{fontSize:'0.72rem',color:'#888',lineHeight:1.5,margin:0}}>Support for small businesses and entrepreneurs.</p></Link>
            <Link href="/international-cultures-celebration" className="prog-card"><div className="prog-icon">🌍</div><h3 style={{fontSize:'0.82rem',fontWeight:700,color:'#0A1628',marginBottom:'4px'}}>International Cultures Celebration</h3><p style={{fontSize:'0.72rem',color:'#888',lineHeight:1.5,margin:0}}>Celebrating diversity through education and events.</p></Link>
            <Link href="/parade-registration" className="prog-card"><div className="prog-icon">🎉</div><h3 style={{fontSize:'0.82rem',fontWeight:700,color:'#0A1628',marginBottom:'4px'}}>Immigrants Parade</h3><p style={{fontSize:'0.72rem',color:'#888',lineHeight:1.5,margin:0}}>Uniting communities through our annual parade.</p></Link>
            <Link href="/voices" className="prog-card"><div className="prog-icon">🎤</div><h3 style={{fontSize:'0.82rem',fontWeight:700,color:'#0A1628',marginBottom:'4px'}}>Global Voices</h3><p style={{fontSize:'0.72rem',color:'#888',lineHeight:1.5,margin:0}}>Amplifying immigrant stories and leadership.</p></Link>
          </div>
          <div style={{marginTop:'20px'}}><Link href="/programs" className="btn-dark" style={{fontSize:'0.82rem',padding:'10px 20px'}}>View All Programs →</Link></div>
        </div>

        <div className="col-center" style={{textAlign:'center'}}>
          <p style={{color:'#C9A84C',fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'6px'}}>Our Mission</p>
          <h2 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'1.5rem',fontWeight:900,color:'#0A1628',marginBottom:'4px'}}>Unite. Empower. Thrive.</h2>
          <div className="gold-line" style={{margin:'10px auto 16px'}}/>
          <p style={{fontSize:'0.84rem',color:'#666',lineHeight:1.7,marginBottom:'20px',maxWidth:'400px',marginLeft:'auto',marginRight:'auto'}}>We are a secular, global, multicultural economic development organization in consultative status with the UN ECOSOC since 1989.</p>
          <div className="video-card">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" alt="Diverse community celebrating together at the International Cultures Celebration"/>
            <div className="video-overlay">
              <div className="play-btn"><span style={{fontSize:'18px',marginLeft:'3px'}}>▶</span></div>
              <p style={{color:'#fff',fontSize:'0.88rem',fontWeight:700,margin:0,textAlign:'center'}}>Celebrating Diversity. Building Community.</p>
            </div>
          </div>
        </div>

        <div className="col-right">
          <h2 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'1.3rem',fontWeight:800,color:'#0A1628',marginBottom:'4px'}}>Our Impact</h2>
          <div className="gold-line"/>
          <div style={{marginTop:'20px'}}>
            <div className="impact-item"><div className="impact-icon">👥</div><div><div className="impact-num">50,000+</div><div className="impact-label">Participants Every Year</div></div></div>
            <div className="impact-item"><div className="impact-icon">🌐</div><div><div className="impact-num">100+</div><div className="impact-label">Cultures Represented</div></div></div>
            <div className="impact-item"><div className="impact-icon">📅</div><div><div className="impact-num">41</div><div className="impact-label">Years of Service</div></div></div>
            <div className="impact-item"><div className="impact-icon">🏛</div><div><div className="impact-num" style={{fontSize:'1.2rem'}}>UN ECOSOC</div><div className="impact-label">Consultative Status since 1989</div></div></div>
          </div>
          <div style={{marginTop:'8px'}}><Link href="/register" className="btn-dark" style={{fontSize:'0.82rem',padding:'10px 20px'}}>Get Involved →</Link></div>
        </div>
      </section>
    </>
  );
}
