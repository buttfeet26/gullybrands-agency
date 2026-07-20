/* eslint-disable */
// Gully Brands — marketing site components
// Each component uses CSS classes from site.css (which imports the root design system).

const { useState } = React;

// ---------- Header ----------
function Header({ active = "work", onNav }) {
  const navItems = [
    { key: "work", label: "Work" },
    { key: "approach", label: "Approach" },
    { key: "pricing", label: "Pricing" },
    { key: "about", label: "About" }
  ];
  return (
    <header className="gb-header">
      <div className="wrap">
        <a href="#" className="gb-logo" onClick={(e) => { e.preventDefault(); onNav && onNav("home"); }}>
          <div className="mark">
            <img src={window.__resources.logoYellow} alt="Gully Brands" />
          </div>
          <span className="name">Gully Brands</span>
        </a>
        <nav className="gb-nav">
          {navItems.map((item) => (
            <a key={item.key} href={`#${item.key}`} className={active === item.key ? "active" : ""} onClick={() => onNav && onNav(item.key)}>{item.label}</a>
          ))}
          <a href="#contact" onClick={() => onNav && onNav("contact")}>
            <button className="btn" style={{ padding: "9px 16px", fontSize: 14 }}>
              Say Hello <i className="ph-bold ph-arrow-up-right"></i>
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section className="gb-hero">
      <div className="wrap">
        <div className="eye">
          <span className="dot"></span>
          ULHASNAGAR · MUMBAI · EST. 2026
        </div>
        <h1>Small brands.<br />Made loud.</h1>
        <p className="tag">Marketing for the corner shops of Ulhasnagar.</p>
        <p className="sub">
          A one-person agency for the dukaan, the tapri, the home kitchen, and the salon. I do the work the big agencies won't touch — and the work they couldn't if they tried.
        </p>
        <div className="cta-row">
          <a href="#work" onClick={(e) => { e.preventDefault(); const el = document.getElementById("work"); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: "smooth" }); } }} style={{ display: "inline-block" }}>
            <button className="btn lg">see the work <i className="ph-bold ph-arrow-down"></i></button>
          </a>
          <a href="book.html" style={{ display: "inline-block" }}>
            <button className="btn lg ink">book a 20-min call</button>
          </a>
        </div>
      </div>
      <div className="hero-stamp">
        currently working with<br />
        <span className="num">12</span>
        small businesses
      </div>
    </section>
  );
}

// ---------- What I do ----------
function WhatIDo() {
  const items = [
    { 
      icn: "ph-storefront", 
      title: "Brand kits & signage", 
      body: "New signage, menus, packaging — designed once, looking right from the street. Print files included.", 
      price: "from ₹2,999", 
      className: "has-video",
      video: "assets/shop-board.mp4"
    },
    { 
      icn: "ph-instagram-logo", 
      title: "Instagram that doesn't suck", 
      body: "Reels, posts, replies. Customized edit, trending audio, and hyper-local hashtags.", 
      price: "from ₹2,999/month", 
      className: "has-video yel",
      video: "assets/instagram-suck.mp4"
    },
    { 
      icn: "ph-fire", 
      title: "Festival campaigns", 
      body: "Diwali, Eid, Ganesh, the school re-open. Quick, loud, sold out by day three.", 
      price: "project-based", 
      className: "has-video ink",
      video: "assets/festival-campaigns.mp4"
    },
  ];
  return (
    <section className="section sand" id="approach">
      <div className="wrap">
        <div className="s-eyebrow"><span className="bar"></span>WHAT I DO</div>
        <h2 className="s-title">Three things, done well.</h2>
        <p className="s-lede">No retainers I can't explain on a phone call. No "strategy decks". Just the work, shipped fast, in a voice that sounds like you on a good day.</p>
        <div className="do-grid">
          {items.map((it, i) => (
            <article key={i} className={`do-card ${it.className}`}>
              {it.video && (
                <React.Fragment>
                  <video src={it.video} autoPlay loop muted playsInline className="card-video" />
                  <div className="card-overlay" />
                </React.Fragment>
              )}
              <div className="icn"><i className={`ph-bold ${it.icn}`}></i></div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
              <div className="px">{it.price}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Work / case studies ----------
function Work() {
  const cases = [
    { 
      video: "assets/himalayan-squad.mp4",
      label: "EXPEDITION",
      stamp: "2.4× bookings",
      cat: "CASE STUDY №01 · TOUR OPERATOR",
      title: "The Himalayan Squad",
      body: "Built a high-converting single-page booking engine, compiled an elite 12-page proposal, and launched high-impact cinematic video Reels. We took their adventure presence from invisible to premium.",
      stats: [["2.4×","bookings"],["12","pages"],["₹20k","scope"]],
      link: "https://himalayan-squad.surge.sh"
    },
    { 
      video: "assets/luna-hooks.mp4",
      label: "WHIMSY",
      stamp: "sold out · 3 days",
      cat: "CASE STUDY №02 · CROCHET MAKER",
      title: "Luna Hooks",
      body: "Rebuilt their visual brand kit with a vibrant, nature-inspired 'Maker's Palette', launched their custom looping-video 'Whimsy Lookbook', and optimized their bio funnel for friction-free WhatsApp ordering.",
      stats: [["100%","sold out"],["1","brand kit"],["₹9k","scope"]],
      link: "https://luna-hooks.surge.sh"
    },
    { 
      video: "assets/nakoda-gold.mp4",
      label: "VIRASAT",
      stamp: "gold standard",
      cat: "CASE STUDY №03 · JEWELLER",
      title: "Nakoda Gold, Ambernath",
      body: "Designed 4:5 editorial social posts with direct brand borders and custom-padded shield monograms. We built a 12-day social calendar that preserves their physical storefront's legacy.",
      stats: [["12d","calendar"],["5","posts"],["₹6k","scope"]],
      link: "https://www.instagram.com/nakoda_gold/"
    },
    { 
      video: "assets/the-nut-atelier.mp4",
      label: "CRUNCH",
      stamp: "luxe identity",
      cat: "CASE STUDY №04 · GOURMET WALNUTS",
      title: "The Nut Atelier",
      body: "Engineered a premium identity showcase, launched a full-bleed luxury website with cinematic flavor loops, and drafted high-converting social copy focusing on tannin-neutral health benefits.",
      stats: [["3.5×","clicks"],["1","luxe site"],["₹15k","scope"]],
      link: "https://the-nut-atelier.surge.sh"
    }
  ];
  return (
    <section className="section cream" id="work">
      <div className="wrap">
        <div className="s-eyebrow"><span className="bar"></span>RECENT WORK</div>
        <h2 className="s-title">A few rooms made loud.</h2>
        <p className="s-lede">Small budgets, big results. Each one done in two-to-six weeks. Every photo is the actual shop, not a stock library.</p>
        <div className="work-grid">
          {cases.map((c, i) => (
            <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="case">
              <div className="thumb has-media">
                {c.video && (
                  <React.Fragment>
                    <video src={c.video} autoPlay loop muted playsInline className="case-video" />
                    <div className="case-overlay" />
                  </React.Fragment>
                )}
                {c.img && (
                  <React.Fragment>
                    <img src={c.img} className="case-img" alt={c.title} />
                    <div className="case-overlay" />
                  </React.Fragment>
                )}
                <div className="label">{c.label}</div>
                <div className="stamp">{c.stamp}</div>
              </div>
              <div className="meta">
                <div className="cat">{c.cat}</div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
                <div className="stats">
                  {c.stats.map((s, j) => (
                    <div key={j} className="stat">
                      <div className="n">{s[0]}</div>
                      <div className="l">{s[1]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Pricing ----------
function Pricing() {
  const tiers = [
    { name: "starter plan", amt: "₹2,999", per: "/ month", featured: false, items: ["8 reels or posts / month", "1 kickoff shoot (45 mins)", "Hindi & English copywriting", "Google Maps setup & basic SEO", "Cancel any month, no lock-ins"], cta: "book starter" },
    { name: "growth plan", amt: "₹5,999", per: "/ month", featured: true, items: ["12 reels or posts / month", "1 structured monthly shoot", "Google Maps takeover (weekly updates)", "Custom bio-link page (Surge.sh)", "Review-boosting QR counter stand"], cta: "book growth" },
    { name: "premium plan", amt: "₹9,999", per: "/ month", featured: false, items: ["16 reels or posts / month", "Bi-weekly shoots (2x / month)", "Meta / Google Ads setup & creatives", "WhatsApp automation & catalog flow", "Deep monthly growth analytics"], cta: "book premium" },
  ];
  const oneTimeServices = [
    { name: "Logo & Brand Board", amt: "₹2,999", items: ["Full logo design made for your target audience", "Locked brand color palette and typography rules", "Handover of high-res formats for prints, signboards"] },
    { name: "Complete Brand Website", amt: "₹9,999", items: ["GSAP scroll-triggered, premium multi-section site", "Custom copywriting, catalogs, and booking engine", "Completely mobile-friendly, custom domain support"] },
    { name: "WhatsApp Booking Mini-Site", amt: "₹4,999", items: ["High-speed landing page hosted on Surge.sh", "Frictionless form launching pre-filled WhatsApp chat", "Aesthetic mobile design styled to match your shop"] },
    { name: "Google Maps Optimization", amt: "₹1,999", items: ["Full profile setup, SEO, & map verification", "Staging organic reviews & custom tabletop QR stand", "Actionable guide on ranking in local 'near me' searches"] }
  ];
  return (
    <section className="section ink" id="pricing">
      <div className="wrap">
        <div className="s-eyebrow"><span className="bar"></span>WHAT I CHARGE</div>
        <h2 className="s-title">No asterisks. Rupees up front.</h2>
        <p className="s-lede">I'm one person. I take twelve clients at a time. If we're a fit, we'll know in twenty minutes.</p>
        <div className="price-grid">
          {tiers.map((t, i) => (
            <article key={i} className={`price ${t.featured ? "featured" : ""}`}>
              {t.featured && <span className="featured-tag">MOST PICKED</span>}
              <div className="name">{t.name}</div>
              <div className="amt">{t.amt}<span className="per">{t.per}</span></div>
              <ul>{t.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              <a href={
                t.name.includes("starter") ? "https://wa.me/918668715250?text=Hi%20Gully%20Brands!%20I'd%20love%20to%20book%20the%20Starter%20Plan%20(₹2,999/mo)%20for%20my%20business." :
                t.name.includes("growth") ? "https://wa.me/918668715250?text=Hi%20Gully%20Brands!%20I'd%20love%20to%20book%20the%20Growth%20Plan%20(₹5,999/mo)%20for%20my%20business." :
                "https://wa.me/918668715250?text=Hi%20Gully%20Brands!%20I'd%20love%20to%20book%20the%20Premium%20Plan%20(₹9,999/mo)%20for%20my%20business."
              } target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%" }}>
                <button className={`btn ${t.featured ? "ink" : ""}`} style={{ width: "100%", justifyContent: "center" }}>{t.cta} <i className="ph-bold ph-arrow-right"></i></button>
              </a>
            </article>
          ))}
        </div>

        <h3 style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 800,
          fontStyle: "italic",
          fontSize: 32,
          marginTop: 64,
          marginBottom: 12,
          color: "var(--brand-yellow)",
          textAlign: "center",
          letterSpacing: 0
        }}>One-Time Setups</h3>
        <p className="s-lede" style={{ textAlign: "center", marginBottom: 36, color: "var(--brand-cream)", opacity: 0.85 }}>For clients who want to build trust first before moving to a monthly retainer.</p>

        <div className="one-time-grid">
          {oneTimeServices.map((s, i) => (
            <article key={i} className="price">
              <div className="name" style={{ color: "var(--brand-yellow)" }}>{s.name}</div>
              <div className="amt">{s.amt}<span className="per"> once</span></div>
              <ul>{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              <a href={`https://wa.me/918668715250?text=Hi%20Gully%20Brands!%20I'd%20love%20to%20book%20the%20${encodeURIComponent(s.name)}%20(${s.amt})%20setup.`} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%" }}>
                <button className="btn" style={{ width: "100%", justifyContent: "center" }}>book setup <i className="ph-bold ph-arrow-right"></i></button>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- About ----------
function About() {
  const values = [
    {
      icn: "ph-video-camera",
      num: "01",
      title: "Customized Street Hooks",
      desc: "No lazy stock layouts or generic templates that make you look like everyone else. Every design, video cut, and page is tailor-made to capture the unique pride and energy of your shop."
    },
    {
      icn: "ph-chat-centered-text",
      num: "02",
      title: "Zero Corporate Fluff",
      desc: "No 'brand synergy' or 'funnel optimization' jargon. We talk in plain Hindi and English. Our only focus is how many new clients are walking through your door."
    },
    {
      icn: "ph-user",
      num: "03",
      title: "One-Man Army",
      desc: "I limit myself to only 12 active clients at any time. When you call, you talk directly to me—the person holding the camera, editing the cuts, and writing your code."
    }
  ];

  return (
    <section className="section sand" id="about" style={{ background: "#FAF6F0" }}>
      <div className="wrap">
        <div className="s-eyebrow"><span className="bar"></span>THE STORY</div>
        <h2 className="s-title">Bedroom to the bazaar.</h2>
        <p className="s-lede">No glass offices, no boardrooms. Just street-level marketing designed to make your local brand look completely elite.</p>
        
        <div className="about-grid">
          <div className="about-text">
            <h3>I'm Nick.</h3>
            <p>
              I don't operate out of a high-end agency office in Bandra or a fancy co-working space in Dubai. Gully Brands was born right inside my bedroom in <strong>Ulhasnagar</strong>.
            </p>
            <p>
              I started this because I saw local business owners—the real backbone of our neighborhoods—getting ripped off by bloated agency retainers. They pay lakhs of rupees for 'strategic audits' only to receive stock templates that look completely soulless.
            </p>
            <p>
              Your shop has real flavor. The way the gold solitaire shines at the showroom, the steam rising from the hot kadhai at the tapri, the scissor-snaps at the salon. That's what people love. I capture that authentic, street-level energy on my phone camera, wrap it in elite typography, and build direct WhatsApp-powered systems that make booking and buying completely effortless.
            </p>
          </div>
          
          <div className="about-identity">
            <div className="identity-card">
              <div className="identity-header">
                <div className="avatar">
                  <i className="ph-bold ph-user-circle"></i>
                </div>
                <div>
                  <div className="name" style={{ letterSpacing: 0 }}>Nick Sakharkar</div>
                  <div className="role">FOUNDER, GULLY BRANDS</div>
                </div>
              </div>
              <div className="identity-stats">
                <div className="stat-box">
                  <div className="num">100%</div>
                  <div className="lbl">LOCAL FOCUS</div>
                </div>
                <div className="stat-box">
                  <div className="num">12</div>
                  <div className="lbl">MAX CLIENTS</div>
                </div>
              </div>
              <div className="identity-quote">
                "I make sure your digital presence matches the physical sweat you've put into your business."
              </div>
            </div>
          </div>
        </div>

        <div className="about-pillars" style={{ marginTop: 52 }}>
          <h4 style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 800,
            fontStyle: "italic",
            fontSize: 28,
            marginBottom: 24,
            color: "var(--brand-ink)",
            letterSpacing: 0
          }}>Our Street Rules:</h4>
          <div className="pillars-grid">
            {values.map((v, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-num">{v.num}</div>
                <div className="icn" style={{
                  width: 36, height: 36,
                  border: "1.5px solid var(--brand-ink)",
                  borderRadius: "var(--r-2)",
                  display: "grid", placeItems: "center",
                  background: "var(--brand-yellow)",
                  marginBottom: 16,
                  fontSize: 16
                }}>
                  <i className={`ph-bold ${v.icn}`}></i>
                </div>
                <h5>{v.title}</h5>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="section yellow" id="contact">
      <div className="wrap">
        <div className="s-eyebrow"><span className="bar"></span>SAY HELLO</div>
        <h2 className="s-title">Tell me about your shop.</h2>
        <p className="s-lede">I read every message. I usually reply same day, sometimes the next morning if I'm on a shoot.</p>
        <div className="contact-grid">
          <form onSubmit={(e) => { 
            e.preventDefault(); 
            const name = e.target.elements[0].value;
            const shop = e.target.elements[1].value;
            const phone = e.target.elements[2].value;
            const budget = e.target.elements[3].value;
            const needs = e.target.elements[4].value;
            setSubmitted(true); 
            
            const message = `Hi Gully Brands! I'd love to chat.
• Name: ${name}
• Shop: ${shop}
• Phone: ${phone}
• Budget: ${budget}
• What I need: ${needs}`;
            
            const waUrl = `https://wa.me/918668715250?text=${encodeURIComponent(message)}`;
            setTimeout(() => { window.open(waUrl, '_blank'); }, 1000);
          }}>
            <div className="row2">
              <div className="field">
                <label>YOUR NAME</label>
                <input type="text" placeholder="Sneha, Imran, Iqbal…" defaultValue="" />
              </div>
              <div className="field">
                <label>SHOP / BUSINESS</label>
                <input type="text" placeholder="e.g. home bakery, tapri, salon" />
              </div>
            </div>
            <div className="row2">
              <div className="field">
                <label>PHONE / WHATSAPP</label>
                <input type="tel" placeholder="+91" />
              </div>
              <div className="field">
                <label>BUDGET</label>
                <select defaultValue="">
                  <option value="" disabled>pick one</option>
                  <option>Starter Plan (₹2,999/mo)</option>
                  <option>Growth Plan (₹5,999/mo)</option>
                  <option>Premium Plan (₹9,999/mo)</option>
                  <option>Logo & Brand Board (₹2,999 once)</option>
                  <option>Complete Brand Website (₹9,999 once)</option>
                  <option>WhatsApp Booking Mini-Site (₹4,999 once)</option>
                  <option>Google Maps Optimization (₹1,999 once)</option>
                  <option>One-off Project / Custom scope</option>
                  <option>Let's chat</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>WHAT DO YOU NEED?</label>
              <textarea rows="4" placeholder="logo, reels, a menu redesign, a sign repainted…"></textarea>
            </div>
            <button type="submit" className="btn lg ink" style={{ marginTop: 8 }}>
              send it <i className="ph-bold ph-paper-plane-tilt"></i>
            </button>
            {submitted && (
              <div className="success-note">
                <i className="ph-bold ph-check-circle" style={{ fontSize: 20 }}></i>
                got it. I'll text you on WhatsApp by tonight.
              </div>
            )}
          </form>

          <aside className="contact-aside">
            <h3>Or just call.</h3>
            <div className="li">
              <i className="ph-bold ph-phone icn"></i>
              <div>
                <b>+91 86687 15250</b>
                <span className="sub">10am – 8pm IST</span>
              </div>
            </div>
            <div className="li">
              <i className="ph-bold ph-instagram-logo icn"></i>
              <div>
                <b>@gullybrands.in</b>
                <span className="sub">DMs open</span>
              </div>
            </div>
            <div className="li">
              <i className="ph-bold ph-map-pin icn"></i>
              <div>
                <b>Ulhasnagar 421005</b>
                <span className="sub">visits by appointment</span>
              </div>
            </div>
            <div className="li" style={{ borderBottom: "1.5px solid var(--ink)" }}>
              <i className="ph-bold ph-coffee icn"></i>
              <div>
                <b>Chai's on me</b>
                <span className="sub">first meeting</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="gb-footer">
      <div className="wrap">
        <h2>Make your shop impossible to miss.</h2>
        <div className="foot-grid">
          <div className="foot-mark">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div className="mark"><img src={window.__resources.logoYellow} alt="Gully Brands" /></div>
                <span className="name">Gully Brands</span>
              </div>
              <p>A one-person marketing agency for small neighbourhood businesses. Based in Ulhasnagar, working across Bombay.</p>
            </div>
          </div>
          <div>
            <h5>WORK</h5>
            <a href="#work">recent</a>
            <a href="#work">archive</a>
            <a href="#work">testimonials</a>
          </div>
          <div>
            <h5>OFFICE</h5>
            <div className="li">+91 86687 15250</div>
            <div className="li">@gullybrands.in</div>
            <div className="li">hi@gullybrands.in</div>
          </div>
          <div>
            <h5>ELSEWHERE</h5>
            <a href="https://www.instagram.com/gullybrands.in/" target="_blank" rel="noopener noreferrer">instagram</a>
            <a href="https://wa.me/918668715250" target="_blank" rel="noopener noreferrer">whatsapp</a>
            <a href="book.html">book a call</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 · GULLY BRANDS</span>
          <span>SMALL BRANDS · MADE LOUD</span>
          <span>ULHASNAGAR → BOMBAY</span>
        </div>
      </div>
    </footer>
  );
}

// Expose to window so index.html can compose
Object.assign(window, { Header, Hero, WhatIDo, Work, About, Pricing, Contact, Footer });
