"use client";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroBgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.22}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const therapies = [
    { label: "Most loved · Group & private", name: "Sound Bath", nameEm: "Healing", desc: "Immerse in the resonant frequencies of Tibetan singing bowls and sacred instruments. Let sound dissolve tension, reset your nervous system, and carry you into profound stillness.", price: "₹1,999 · 90 minutes", img: "https://images.unsplash.com/photo-1591188824809-4e3e35b72fe1?w=1400&q=85", pos: "center 40%", right: false },
    { label: "Ancient wisdom", name: "Crystal", nameEm: "Therapy", desc: "Each stone carries a precise vibrational frequency. Placed with intention on and around your body, they gently dissolve blockages and restore your energy to its natural radiant flow.", price: "₹1,799 · 75 minutes", img: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=1400&q=85", pos: "center 50%", right: true },
    { label: "Universal life force", name: "Reiki", nameEm: "Healing", desc: "A gentle channelling of universal energy through the practitioner's hands. It dissolves deep-seated blockages, restores balance, and activates your body's own innate healing intelligence.", price: "₹1,499 · 60 minutes", img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1400&q=85", pos: "center 35%", right: false },
    { label: "Full-body alignment", name: "Chakra", nameEm: "Balancing", desc: "A comprehensive session to identify, clear, and realign all seven energy centres. Using sound, crystals, and breath — this is holistic healing at its most complete.", price: "₹2,199 · 90 minutes", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1400&q=85", pos: "center 20%", right: true },
  ];

  const levels = [
    { num: "01", badge: "Beginner", name: "Awakening", who: "For those taking their very first steps. No experience needed — only an open heart and a willingness to explore.", outcomes: ["Understand your energy body", "Work with crystals and intentions", "Build a daily healing practice", "Release stress and emotional blocks"] },
    { num: "02", badge: "Intermediate", name: "Deepening", who: "For those who have felt the call and want to go further. Become certified and begin holding space for others.", outcomes: ["Reiki Level I & II certification", "Chakra diagnosis and balancing", "Distance and group healing", "Hold space for others safely"] },
    { num: "03", badge: "Advanced", name: "Mastery", who: "For dedicated practitioners ready to merge modalities and step fully into professional healing work.", outcomes: ["Holistic practitioner certification", "Combine Reiki, sound and crystals", "Build your own healing practice", "Mentorship and case supervision"] },
  ];

  const testimonials = [
    { text: "My first Reiki session was a revelation. I walked in anxious and left feeling like I had returned home to myself.", name: "Priya S.", loc: "Delhi" },
    { text: "The Awakening course changed how I see the world. I carry that calm and awareness into every single day now.", name: "Amit K.", loc: "Mumbai" },
    { text: "After three chakra balancing sessions my chronic back pain has significantly reduced. I am deeply grateful.", name: "Sunita R.", loc: "Bangalore" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --w: #ffffff; --ow: #F7FBFF; --b100: #C8E0F8; --b200: #93C4F0;
          --b400: #378ADD; --b600: #185FA5; --b900: #042C53; --tb: #3A5A78;
          --serif: 'Cormorant Garamond', Georgia, serif;
          --sans: 'Maven Pro', sans-serif;
        }
        html { scroll-behavior: smooth; }
        body { font-family: var(--sans); background: var(--w); color: var(--b900); overflow-x: hidden; }

        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 0 48px; height: 68px; display: flex; align-items: center; justify-content: space-between; transition: background 0.4s, box-shadow 0.4s; }
        nav.scrolled { background: rgba(255,255,255,0.93); backdrop-filter: blur(16px); box-shadow: 0 1px 0 rgba(24,95,165,0.12); }
        .nav-logo { font-family: var(--serif); font-size: 22px; color: var(--b900); text-decoration: none; }
        .nav-logo.light { color: #fff; }
        nav.scrolled .nav-logo { color: var(--b900); }
        .nav-logo span { color: var(--b600); font-style: italic; }
        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links a { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s; }
        nav.scrolled .nav-links a { color: var(--tb); }
        .nav-links a:hover { color: var(--b400); }
        .nav-book { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--w); background: var(--b600); border: none; padding: 10px 24px; border-radius: 40px; cursor: pointer; transition: background 0.2s; text-decoration: none; }
        .nav-book:hover { background: var(--b900); }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { display: block; width: 22px; height: 1.5px; background: #fff; transition: all 0.3s; }
        nav.scrolled .hamburger span { background: var(--b900); }

        .mobile-menu { position: fixed; top: 68px; left: 0; right: 0; bottom: 0; background: var(--w); z-index: 99; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 36px; }
        .mobile-menu a { font-family: var(--serif); font-size: 32px; font-weight: 300; color: var(--b900); text-decoration: none; }
        .mob-book { font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--w); background: var(--b600); border: none; padding: 14px 36px; border-radius: 40px; cursor: pointer; }

        .hero { position: relative; height: 100vh; min-height: 600px; display: flex; align-items: center; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; background: url('/hero-bowls.jpg') center 30% / cover no-repeat; transform: scale(1.08); will-change: transform; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(105deg, rgba(4,44,83,0.88) 38%, rgba(4,44,83,0.28) 100%); }
        .hero-content { position: relative; z-index: 1; padding: 0 60px; max-width: 620px; }
        .hero-tag { display: inline-block; font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b200); border: 0.5px solid rgba(147,196,240,0.35); padding: 5px 14px; border-radius: 40px; background: rgba(255,255,255,0.07); margin-bottom: 24px; }
        .hero h1 { font-family: var(--serif); font-size: clamp(44px,7vw,80px); font-weight: 300; line-height: 1.06; color: #fff; margin-bottom: 10px; }
        .hero h1 em { font-style: italic; color: var(--b200); }
        .hero-sub { font-family: var(--serif); font-size: clamp(18px,2.5vw,24px); font-weight: 300; font-style: italic; color: rgba(255,255,255,0.65); margin-bottom: 18px; }
        .hero-body { font-size: 14px; font-weight: 400; line-height: 1.85; color: rgba(255,255,255,0.55); margin-bottom: 36px; max-width: 420px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #fff; background: var(--b600); border: none; padding: 14px 30px; border-radius: 40px; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.2s; }
        .btn-primary:hover { background: var(--b900); }
        .btn-ghost { font-family: var(--sans); font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #fff; background: transparent; border: 0.5px solid rgba(255,255,255,0.38); padding: 14px 30px; border-radius: 40px; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.2s; }
        .btn-ghost:hover { background: rgba(255,255,255,0.1); }

        .trust { display: grid; grid-template-columns: repeat(3,1fr); border: 0.5px solid var(--b100); border-radius: 16px; margin: 48px 48px 0; }
        .tstat { padding: 28px; text-align: center; border-right: 0.5px solid var(--b100); }
        .tstat:last-child { border-right: none; }
        .tnum { font-family: var(--serif); font-size: 40px; font-weight: 300; color: var(--b600); line-height: 1; margin-bottom: 6px; }
        .tlbl { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tb); }

        .section { padding: 72px 48px; }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b600); margin-bottom: 12px; }
        .section-title { font-family: var(--serif); font-size: clamp(32px,4vw,48px); font-weight: 300; color: var(--b900); line-height: 1.15; }
        .section-title em { font-style: italic; color: var(--b600); }
        .section-body { font-size: 14px; font-weight: 400; line-height: 1.85; color: var(--tb); max-width: 480px; margin: 14px auto 0; }

        .therapy-row { position: relative; height: 460px; display: flex; align-items: center; overflow: hidden; }
        .therapy-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.7s ease; }
        .therapy-row:hover .therapy-bg { transform: scale(1.05); }
        .therapy-overlay-left { position: absolute; inset: 0; background: linear-gradient(to right, rgba(4,44,83,0.9) 40%, rgba(4,44,83,0.1) 100%); }
        .therapy-overlay-right { position: absolute; inset: 0; background: linear-gradient(to left, rgba(4,44,83,0.9) 40%, rgba(4,44,83,0.1) 100%); }
        .therapy-content { position: relative; z-index: 1; padding: 0 60px; max-width: 500px; }
        .therapy-content.right { margin-left: auto; text-align: right; }
        .therapy-label { font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b200); margin-bottom: 12px; }
        .therapy-name { font-family: var(--serif); font-size: clamp(30px,4vw,44px); font-weight: 300; color: #fff; line-height: 1.08; margin-bottom: 14px; }
        .therapy-name em { font-style: italic; color: var(--b200); }
        .therapy-desc { font-size: 13px; font-weight: 400; line-height: 1.85; color: rgba(255,255,255,0.6); margin-bottom: 20px; }
        .therapy-price { font-family: var(--serif); font-size: 26px; color: var(--b200); margin-bottom: 22px; }
        .btn-therapy { font-family: var(--sans); font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #fff; background: var(--b600); border: none; padding: 11px 24px; border-radius: 40px; cursor: pointer; transition: background 0.2s; }
        .btn-therapy:hover { background: var(--b900); }

        .divider { display: flex; align-items: center; gap: 20px; padding: 48px; }
        .divider-line { flex: 1; height: 0.5px; background: var(--b100); }
        .divider-text { font-family: var(--serif); font-size: 14px; font-style: italic; color: var(--b400); white-space: nowrap; }

        .courses-section { background: var(--b900); padding: 80px 48px; }
        .courses-section .section-tag { color: var(--b200); }
        .courses-section .section-title { color: #fff; }
        .courses-section .section-title em { color: var(--b200); }
        .courses-section .section-body { color: rgba(255,255,255,0.48); }
        .levels-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .level-card { background: rgba(255,255,255,0.05); border: 0.5px solid rgba(147,196,240,0.18); border-radius: 20px; padding: 32px 28px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }
        .level-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--b400); transform: scaleX(0); transition: transform 0.3s; transform-origin: left; }
        .level-card:hover::before { transform: scaleX(1); }
        .level-card:hover { background: rgba(255,255,255,0.09); transform: translateY(-4px); }
        .level-num { font-family: var(--serif); font-size: 56px; font-weight: 300; color: rgba(147,196,240,0.15); line-height: 1; margin-bottom: 14px; }
        .level-badge { display: inline-block; font-size: 9px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--b200); background: rgba(147,196,240,0.08); border: 0.5px solid rgba(147,196,240,0.2); padding: 4px 12px; border-radius: 40px; margin-bottom: 12px; }
        .level-name { font-family: var(--serif); font-size: 24px; font-weight: 300; color: #fff; margin-bottom: 10px; }
        .level-who { font-size: 12px; font-weight: 400; color: rgba(255,255,255,0.48); line-height: 1.75; margin-bottom: 18px; }
        .level-outcomes { list-style: none; margin-bottom: 24px; }
        .level-outcomes li { font-size: 12px; font-weight: 400; color: rgba(255,255,255,0.62); padding: 6px 0; border-bottom: 0.5px solid rgba(255,255,255,0.06); display: flex; align-items: flex-start; gap: 8px; }
        .level-outcomes li::before { content: '→'; color: var(--b400); flex-shrink: 0; }
        .level-cta { font-family: var(--sans); font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--b200); background: transparent; border: 0.5px solid rgba(147,196,240,0.28); padding: 11px 20px; border-radius: 40px; cursor: pointer; width: 100%; transition: all 0.2s; }
        .level-cta:hover { background: rgba(147,196,240,0.08); }

        .testimonials-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 56px; }
        .t-card { background: var(--ow); border: 0.5px solid var(--b100); border-radius: 18px; padding: 30px; }
        .t-quote { font-family: var(--serif); font-size: 40px; color: var(--b200); line-height: 1; margin-bottom: 12px; }
        .t-text { font-family: var(--serif); font-size: 15px; font-weight: 300; font-style: italic; line-height: 1.7; color: var(--b900); margin-bottom: 22px; }
        .t-author { display: flex; align-items: center; gap: 10px; }
        .t-avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--b100); display: flex; align-items: center; justify-content: center; font-family: var(--serif); font-size: 14px; color: var(--b600); flex-shrink: 0; }
        .t-name { font-size: 13px; font-weight: 500; color: var(--b900); }
        .t-loc { font-size: 11px; color: var(--tb); }

        .cta-section { position: relative; min-height: 520px; display: flex; align-items: center; justify-content: center; overflow: hidden; text-align: center; }
        .cta-bg { position: absolute; inset: 0; background: url('/cta-mala.jpg') center 40% / cover no-repeat; }
        .cta-overlay { position: absolute; inset: 0; background: rgba(4,44,83,0.82); }
        .cta-content { position: relative; z-index: 1; padding: 80px 48px; max-width: 600px; }
        .cta-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b200); margin-bottom: 16px; }
        .cta-title { font-family: var(--serif); font-size: clamp(38px,6vw,64px); font-weight: 300; color: #fff; line-height: 1.1; margin-bottom: 18px; }
        .cta-title em { font-style: italic; color: var(--b200); }
        .cta-body { font-size: 14px; color: rgba(255,255,255,0.55); max-width: 400px; margin: 0 auto 36px; line-height: 1.9; }
        .btn-white { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--b900); background: #fff; border: none; padding: 15px 40px; border-radius: 40px; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.2s; }
        .btn-white:hover { background: #EBF4FD; }

        footer { background: var(--w); border-top: 0.5px solid var(--b100); padding: 56px 48px 36px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 40px; }
        .footer-brand { font-family: var(--serif); font-size: 22px; color: var(--b900); margin-bottom: 12px; }
        .footer-brand span { color: var(--b600); font-style: italic; }
        .footer-desc { font-size: 13px; line-height: 1.8; color: var(--tb); max-width: 240px; }
        .footer-col-title { font-size: 9px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--b600); margin-bottom: 16px; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a { font-size: 13px; color: var(--tb); text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: var(--b600); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 32px; border-top: 0.5px solid var(--b100); flex-wrap: wrap; gap: 10px; }
        .footer-copy { font-size: 12px; color: var(--tb); }

        .wa { position: fixed; bottom: 24px; right: 24px; width: 52px; height: 52px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,0.35); cursor: pointer; z-index: 200; transition: transform 0.2s; text-decoration: none; }
        .wa:hover { transform: scale(1.08); }
        .wa svg { width: 26px; height: 26px; fill: white; }

        /* MOBILE */
        @media (max-width: 768px) {
          nav { padding: 0 20px; }
          .nav-links, .nav-book { display: none; }
          .hamburger { display: flex; }

          .hero-content { padding: 0 24px; max-width: 100%; }
          .hero h1 { font-size: 40px; }
          .hero-sub { font-size: 18px; }
          .hero-body { font-size: 13px; max-width: 100%; }
          .hero-actions { flex-direction: column; gap: 10px; }
          .btn-primary, .btn-ghost { text-align: center; width: 100%; padding: 14px 20px; }

          .trust { grid-template-columns: 1fr; margin: 28px 20px 0; border-radius: 12px; }
          .tstat { border-right: none; border-bottom: 0.5px solid var(--b100); padding: 20px; }
          .tstat:last-child { border-bottom: none; }
          .tnum { font-size: 34px; }

          .section { padding: 48px 20px; }
          .section-title { font-size: 30px; }

          .therapy-row { height: auto; min-height: 400px; flex-direction: column; justify-content: flex-end; }
          .therapy-overlay-left, .therapy-overlay-right { background: linear-gradient(to top, rgba(4,44,83,0.96) 55%, rgba(4,44,83,0.15) 100%); }
          .therapy-content, .therapy-content.right { margin-left: 0; text-align: left; padding: 28px 22px; max-width: 100%; }
          .therapy-name { font-size: 30px; }
          .therapy-desc { font-size: 12px; line-height: 1.75; }
          .therapy-price { font-size: 22px; }

          .divider { padding: 32px 20px; }
          .divider-text { font-size: 12px; white-space: normal; text-align: center; }

          .courses-section { padding: 52px 20px; }
          .levels-grid { grid-template-columns: 1fr; gap: 16px; }
          .level-card { padding: 24px 20px; }

          .testimonials-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 40px; }

          .cta-content { padding: 56px 24px; }
          .cta-title { font-size: 36px; }
          .cta-body { font-size: 13px; }
          .btn-white { width: 100%; text-align: center; padding: 14px 20px; }

          footer { padding: 40px 20px 28px; }
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer-desc { max-width: 100%; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 6px; }
        }

        @media (max-width: 480px) {
          .hero h1 { font-size: 34px; }
          .cta-title { font-size: 30px; }
          .section-title { font-size: 26px; }
        }
      `}</style>

      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo"><span style={{color: scrolled ? undefined : "#fff", fontFamily:"var(--serif)", fontSize:"22px"}}>Vishudhii </span><span style={{color:"var(--b600)", fontStyle:"italic", fontFamily:"var(--serif)", fontSize:"22px"}}>Healings</span></a>
        <ul className="nav-links">
          <li><a href="#therapies">Therapies</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#book" className="nav-book">Book a session</a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {[["Therapies","#therapies"],["Courses","#courses"],["Testimonials","#testimonials"],["Contact","#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <button className="mob-book" onClick={() => setMenuOpen(false)}>Book a session</button>
        </div>
      )}

      <section className="hero">
        <div className="hero-bg" ref={heroBgRef} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-tag">Heal · Rest · Transform</div>
          <h1>Rediscover<br /><em>stillness.</em></h1>
          <p className="hero-sub">Return to yourself.</p>
          <p className="hero-body">Holistic therapies and sacred learning programmes — crafted to bring deep healing, inner clarity, and lasting transformation.</p>
          <div className="hero-actions">
            <a href="#therapies" className="btn-primary">Book a therapy session</a>
            <a href="#courses" className="btn-ghost">Explore our courses</a>
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="tstat"><div className="tnum">500+</div><div className="tlbl">Lives touched</div></div>
        <div className="tstat"><div className="tnum">12+</div><div className="tlbl">Healing modalities</div></div>
        <div className="tstat"><div className="tnum">8+</div><div className="tlbl">Years of practice</div></div>
      </div>

      <section id="therapies">
        <div className="section" style={{paddingBottom:"32px"}}>
          <div className="section-header">
            <div className="section-tag">Our therapies</div>
            <h2 className="section-title">Healing that goes <em>deeper</em></h2>
            <p className="section-body">Each therapy is a sacred offering. Come exactly as you are — we will meet you there.</p>
          </div>
        </div>
        {therapies.map((t) => (
          <div className="therapy-row" key={t.name}>
            <div className="therapy-bg" style={{backgroundImage:`url('${t.img}')`, backgroundPosition:t.pos}} />
            <div className={t.right ? "therapy-overlay-right" : "therapy-overlay-left"} />
            <div className={`therapy-content${t.right ? " right" : ""}`}>
              <div className="therapy-label">{t.label}</div>
              <h3 className="therapy-name">{t.name}<br /><em>{t.nameEm}</em></h3>
              <p className="therapy-desc">{t.desc}</p>
              <div className="therapy-price">{t.price}</div>
              <button className="btn-therapy">Book this session</button>
            </div>
          </div>
        ))}
      </section>

      <div className="divider">
        <div className="divider-line" />
        <div className="divider-text">And so the journey inward begins</div>
        <div className="divider-line" />
      </div>

      <section className="courses-section" id="courses">
        <div className="section-header">
          <div className="section-tag">Courses &amp; programmes</div>
          <h2 className="section-title">Learn to <em>heal</em> yourself</h2>
          <p className="section-body">Three clear paths. Wherever you are on your journey, there is a programme designed precisely for you.</p>
        </div>
        <div className="levels-grid">
          {levels.map((l) => (
            <div className="level-card" key={l.name}>
              <div className="level-num">{l.num}</div>
              <div className="level-badge">{l.badge}</div>
              <div className="level-name">{l.name}</div>
              <p className="level-who">{l.who}</p>
              <ul className="level-outcomes">{l.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
              <button className="level-cta">Explore this path →</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="section-header">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">Words from our <em>community</em></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="t-card" key={t.name}>
              <div className="t-quote">"</div>
              <p className="t-text">{t.text}</p>
              <div className="t-author">
                <div className="t-avatar">{t.name[0]}</div>
                <div><div className="t-name">{t.name}</div><div className="t-loc">{t.loc}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="book">
        <div className="cta-bg" />
        <div className="cta-overlay" />
        <div className="cta-content">
          <div className="cta-tag">Begin your journey</div>
          <h2 className="cta-title">Ready to <em>heal?</em></h2>
          <p className="cta-body">Take the first step. Book a session today and experience the gentle power of holistic healing.</p>
          <a href="mailto:hello@vishudhiihealings.com" className="btn-white">Book a session now</a>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Vishudhii <span>Healings</span></div>
            <p className="footer-desc">A sacred space for healing, wellness and spiritual growth. Walking alongside you on your journey back to wholeness.</p>
          </div>
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              {[["Home","#"],["About Us","#about"],["Therapies","#therapies"],["Courses","#courses"],["Book a Session","#book"],["Testimonials","#testimonials"]].map(([l,h]) => <li key={l}><a href={h}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:hello@vishudhiihealings.com">hello@vishudhiihealings.com</a></li>
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><a href="#">Gurugram, Haryana</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="https://wa.me/919876543210">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 Vishudhii Healings. All rights reserved.</div>
          <div className="footer-copy">Made with intention &amp; care.</div>
        </div>
      </footer>

      <a href="https://wa.me/919876543210" className="wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}
