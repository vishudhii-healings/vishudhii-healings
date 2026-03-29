"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --white: #FFFFFF;
          --off-white: #F7FBFF;
          --blue-50: #EBF4FD;
          --blue-100: #C8E0F8;
          --blue-200: #93C4F0;
          --blue-400: #378ADD;
          --blue-600: #185FA5;
          --blue-900: #042C53;
          --text-body: #3A5A78;
          --serif: 'Cormorant Garamond', Georgia, serif;
          --sans: 'Jost', sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: var(--sans);
          background: var(--white);
          color: var(--blue-900);
          overflow-x: hidden;
        }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 48px;
          height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        nav.scrolled {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(55,138,221,0.15);
        }
        .nav-logo {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 400;
          color: var(--blue-900);
          letter-spacing: 0.02em;
          text-decoration: none;
        }
        .nav-logo span { color: var(--blue-600); font-style: italic; }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a {
          font-family: var(--sans);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-body);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--blue-600); }
        .nav-book {
          font-family: var(--sans);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--white);
          background: var(--blue-600);
          border: none;
          padding: 10px 24px;
          border-radius: 40px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
        }
        .nav-book:hover { background: var(--blue-900); transform: translateY(-1px); }

        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { display: block; width: 22px; height: 1.5px; background: var(--blue-900); transition: all 0.3s; }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 100px 48px 60px;
          background: var(--white);
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: var(--blue-50);
          z-index: 0;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: 30%;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: var(--blue-50);
          opacity: 0.6;
          z-index: 0;
        }
        .hero-left { position: relative; z-index: 1; }
        .hero-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue-600);
          border: 0.5px solid var(--blue-200);
          padding: 6px 16px;
          border-radius: 40px;
          margin-bottom: 28px;
          background: var(--blue-50);
        }
        .hero h1 {
          font-family: var(--serif);
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 300;
          line-height: 1.1;
          color: var(--blue-900);
          margin-bottom: 8px;
        }
        .hero h1 em {
          font-style: italic;
          color: var(--blue-600);
        }
        .hero-sub {
          font-family: var(--serif);
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 300;
          color: var(--text-body);
          margin-bottom: 28px;
          font-style: italic;
        }
        .hero-body {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.9;
          color: var(--text-body);
          max-width: 420px;
          margin-bottom: 40px;
          letter-spacing: 0.02em;
        }
        .hero-actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
        .btn-primary {
          font-family: var(--sans);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--white);
          background: var(--blue-600);
          border: none;
          padding: 14px 32px;
          border-radius: 40px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
        }
        .btn-primary:hover { background: var(--blue-900); transform: translateY(-2px); }
        .btn-ghost {
          font-family: var(--sans);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--blue-600);
          background: transparent;
          border: 0.5px solid var(--blue-200);
          padding: 14px 32px;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-ghost:hover { border-color: var(--blue-600); background: var(--blue-50); }

        .hero-right {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; gap: 16px;
          padding-left: 48px;
        }
        .hero-card {
          background: var(--white);
          border: 0.5px solid var(--blue-100);
          border-radius: 20px;
          padding: 24px 28px;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .hero-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(24,95,165,0.08); }
        .hero-card-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--blue-400);
          margin-bottom: 8px;
        }
        .hero-card-title {
          font-family: var(--serif);
          font-size: 20px;
          font-weight: 400;
          color: var(--blue-900);
          margin-bottom: 6px;
        }
        .hero-card-meta {
          font-size: 12px;
          font-weight: 300;
          color: var(--text-body);
          letter-spacing: 0.04em;
        }
        .hero-card-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--blue-400);
          margin-right: 6px;
          vertical-align: middle;
        }

        /* DIVIDER */
        .divider {
          display: flex; align-items: center; gap: 24px;
          padding: 0 48px;
          margin: 0 0 80px;
        }
        .divider-line { flex: 1; height: 0.5px; background: var(--blue-100); }
        .divider-text {
          font-family: var(--serif);
          font-size: 13px;
          font-style: italic;
          color: var(--blue-400);
          white-space: nowrap;
          letter-spacing: 0.04em;
        }

        /* STATS */
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          padding: 0 48px;
          margin-bottom: 100px;
          border: 0.5px solid var(--blue-100);
          border-radius: 20px;
          overflow: hidden;
          max-width: 800px;
          margin-left: auto; margin-right: auto;
          margin-bottom: 100px;
        }
        .stat {
          padding: 36px 32px;
          text-align: center;
          border-right: 0.5px solid var(--blue-100);
        }
        .stat:last-child { border-right: none; }
        .stat-number {
          font-family: var(--serif);
          font-size: 44px;
          font-weight: 300;
          color: var(--blue-600);
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-body);
        }

        /* SERVICES */
        .section { padding: 80px 48px; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .section-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue-600);
          margin-bottom: 16px;
        }
        .section-title {
          font-family: var(--serif);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 300;
          color: var(--blue-900);
          line-height: 1.2;
        }
        .section-title em { font-style: italic; color: var(--blue-600); }
        .section-body {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.9;
          color: var(--text-body);
          max-width: 500px;
          margin: 16px auto 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          background: var(--off-white);
          border: 0.5px solid var(--blue-100);
          border-radius: 20px;
          padding: 36px 32px;
          transition: all 0.3s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--blue-200);
          transform: scaleX(0);
          transition: transform 0.3s;
          transform-origin: left;
        }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card:hover {
          background: var(--white);
          box-shadow: 0 16px 48px rgba(24,95,165,0.08);
          transform: translateY(-4px);
        }
        .service-icon {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: var(--blue-50);
          border: 0.5px solid var(--blue-100);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          font-size: 22px;
        }
        .service-name {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 400;
          color: var(--blue-900);
          margin-bottom: 12px;
        }
        .service-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--text-body);
          margin-bottom: 24px;
        }
        .service-meta {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 20px;
          border-top: 0.5px solid var(--blue-100);
        }
        .service-price {
          font-family: var(--serif);
          font-size: 20px;
          color: var(--blue-600);
        }
        .service-duration {
          font-size: 11px;
          font-weight: 300;
          color: var(--text-body);
          letter-spacing: 0.06em;
        }

        /* COURSES */
        .courses-section { background: var(--off-white); padding: 80px 48px; }
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 60px;
        }
        .course-card {
          background: var(--white);
          border: 0.5px solid var(--blue-100);
          border-radius: 20px;
          padding: 32px;
          display: flex; gap: 24px;
          align-items: flex-start;
          transition: all 0.3s;
          cursor: pointer;
        }
        .course-card:hover {
          box-shadow: 0 12px 40px rgba(24,95,165,0.08);
          transform: translateY(-3px);
        }
        .course-num {
          font-family: var(--serif);
          font-size: 40px;
          font-weight: 300;
          color: var(--blue-100);
          line-height: 1;
          min-width: 48px;
        }
        .course-info { flex: 1; }
        .course-tag {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--blue-400);
          margin-bottom: 8px;
        }
        .course-name {
          font-family: var(--serif);
          font-size: 20px;
          font-weight: 400;
          color: var(--blue-900);
          margin-bottom: 8px;
        }
        .course-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-body);
          margin-bottom: 16px;
        }
        .course-footer {
          display: flex; gap: 16px; align-items: center;
        }
        .course-price {
          font-family: var(--serif);
          font-size: 18px;
          color: var(--blue-600);
        }
        .course-weeks {
          font-size: 11px;
          font-weight: 300;
          color: var(--text-body);
          letter-spacing: 0.04em;
        }

        /* TESTIMONIALS */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 60px;
        }
        .testimonial-card {
          background: var(--off-white);
          border: 0.5px solid var(--blue-100);
          border-radius: 20px;
          padding: 32px;
        }
        .testimonial-quote {
          font-family: var(--serif);
          font-size: 40px;
          color: var(--blue-200);
          line-height: 1;
          margin-bottom: 16px;
        }
        .testimonial-text {
          font-family: var(--serif);
          font-size: 16px;
          font-weight: 300;
          font-style: italic;
          line-height: 1.7;
          color: var(--blue-900);
          margin-bottom: 24px;
        }
        .testimonial-author {
          display: flex; align-items: center; gap: 12px;
        }
        .author-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: var(--blue-100);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--serif);
          font-size: 14px;
          color: var(--blue-600);
        }
        .author-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--blue-900);
        }
        .author-loc {
          font-size: 11px;
          font-weight: 300;
          color: var(--text-body);
        }

        /* BOOKING CTA */
        .booking-cta {
          background: var(--blue-900);
          padding: 100px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .booking-cta::before {
          content: '';
          position: absolute;
          top: -100px; left: -100px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(55,138,221,0.1);
        }
        .booking-cta::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(55,138,221,0.08);
        }
        .booking-cta-tag {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue-200);
          margin-bottom: 20px;
          position: relative; z-index: 1;
        }
        .booking-cta h2 {
          font-family: var(--serif);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 300;
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 20px;
          position: relative; z-index: 1;
        }
        .booking-cta h2 em { font-style: italic; color: var(--blue-200); }
        .booking-cta p {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 440px;
          margin: 0 auto 40px;
          line-height: 1.9;
          position: relative; z-index: 1;
        }
        .btn-white {
          font-family: var(--sans);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--blue-900);
          background: var(--white);
          border: none;
          padding: 16px 40px;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          position: relative; z-index: 1;
          display: inline-block;
        }
        .btn-white:hover { background: var(--blue-50); transform: translateY(-2px); }

        /* FOOTER */
        footer {
          background: var(--white);
          border-top: 0.5px solid var(--blue-100);
          padding: 60px 48px 40px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-brand-name {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 400;
          color: var(--blue-900);
          margin-bottom: 12px;
        }
        .footer-brand-name span { color: var(--blue-600); font-style: italic; }
        .footer-brand-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--text-body);
          max-width: 260px;
        }
        .footer-col-title {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--blue-600);
          margin-bottom: 16px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a {
          font-size: 13px;
          font-weight: 300;
          color: var(--text-body);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--blue-600); }
        .footer-bottom {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 32px;
          border-top: 0.5px solid var(--blue-100);
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-size: 12px;
          font-weight: 300;
          color: var(--text-body);
          letter-spacing: 0.04em;
        }

        /* WHATSAPP */
        .whatsapp-btn {
          position: fixed;
          bottom: 28px; right: 28px;
          width: 52px; height: 52px;
          border-radius: 50%;
          background: #25D366;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(37,211,102,0.35);
          cursor: pointer;
          z-index: 200;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .whatsapp-btn:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(37,211,102,0.45); }
        .whatsapp-btn svg { width: 26px; height: 26px; fill: white; }

        /* MOBILE */
        @media (max-width: 900px) {
          nav { padding: 0 24px; }
          .nav-links, .nav-book { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            position: fixed; top: 72px; left: 0; right: 0; bottom: 0;
            background: var(--white);
            display: flex; flex-direction: column;
            align-items: center; justify-content: center; gap: 32px;
            z-index: 99;
          }
          .mobile-menu a {
            font-family: var(--serif);
            font-size: 28px;
            font-weight: 300;
            color: var(--blue-900);
            text-decoration: none;
          }
          .hero { grid-template-columns: 1fr; padding: 100px 24px 60px; }
          .hero::before { width: 300px; height: 300px; top: -60px; right: -60px; }
          .hero-right { padding-left: 0; margin-top: 40px; }
          .stats { grid-template-columns: 1fr; border-radius: 16px; margin: 0 24px 60px; }
          .stat { border-right: none; border-bottom: 0.5px solid var(--blue-100); }
          .stat:last-child { border-bottom: none; }
          .section, .courses-section { padding: 60px 24px; }
          .services-grid, .testimonials-grid { grid-template-columns: 1fr; }
          .courses-grid { grid-template-columns: 1fr; }
          .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
          .booking-cta { padding: 60px 24px; }
          footer { padding: 48px 24px 32px; }
          .divider { padding: 0 24px; }
        }
      `}</style>

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">Vishudhii <span>Healings</span></a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
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
          {["Services","Courses","Testimonials","Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a href="#book" className="btn-primary" onClick={() => setMenuOpen(false)}>Book a session</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">Heal · Rest · Transform</div>
          <h1>Rediscover<br /><em>stillness.</em></h1>
          <p className="hero-sub">Return to yourself.</p>
          <p className="hero-body">
            Holistic therapies and spiritual courses thoughtfully crafted to bring balance, clarity, and deep healing to your body, mind, and soul.
          </p>
          <div className="hero-actions">
            <a href="#book" className="btn-primary">Book a session</a>
            <a href="#services" className="btn-ghost">Explore services</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-label">Featured therapy</div>
            <div className="hero-card-title">Reiki Energy Healing</div>
            <div className="hero-card-meta">
              <span className="hero-card-dot" />
              60 min &nbsp;·&nbsp; ₹1,499 &nbsp;·&nbsp; 3 slots left today
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-label">Upcoming course</div>
            <div className="hero-card-title">Crystal Healing Foundations</div>
            <div className="hero-card-meta">
              <span className="hero-card-dot" />
              4-week programme &nbsp;·&nbsp; Starts 15 Apr
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-label">New offering</div>
            <div className="hero-card-title">Sound Bath Meditation</div>
            <div className="hero-card-meta">
              <span className="hero-card-dot" />
              90 min &nbsp;·&nbsp; ₹1,999 &nbsp;·&nbsp; Group &amp; private
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider">
        <div className="divider-line" />
        <div className="divider-text">Where healing begins with intention</div>
        <div className="divider-line" />
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <div className="stat-number">500+</div>
          <div className="stat-label">Lives touched</div>
        </div>
        <div className="stat">
          <div className="stat-number">12+</div>
          <div className="stat-label">Healing modalities</div>
        </div>
        <div className="stat">
          <div className="stat-number">8+</div>
          <div className="stat-label">Years of practice</div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-header">
          <div className="section-tag">Our therapies</div>
          <h2 className="section-title">Healing that goes <em>deeper</em></h2>
          <p className="section-body">Each therapy is a sacred offering — designed to meet you exactly where you are on your healing journey.</p>
        </div>
        <div className="services-grid">
          {[
            { icon: "✦", name: "Reiki Energy Healing", desc: "A gentle yet powerful technique that channels universal life force energy to restore balance and promote deep relaxation.", price: "₹1,499", duration: "60 minutes" },
            { icon: "◈", name: "Crystal Therapy", desc: "Harnessing the vibrational energy of healing crystals to clear blockages, restore harmony and align your energy centres.", price: "₹1,799", duration: "75 minutes" },
            { icon: "◎", name: "Sound Bath", desc: "Immersive healing through Tibetan singing bowls and sacred instruments that wash away stress and restore inner calm.", price: "₹1,999", duration: "90 minutes" },
            { icon: "✿", name: "Chakra Balancing", desc: "A comprehensive session to identify, clear and realign all seven energy centres for holistic physical and emotional wellbeing.", price: "₹2,199", duration: "90 minutes" },
            { icon: "⟡", name: "Pranic Healing", desc: "A no-touch energy healing system that accelerates the body's natural ability to heal itself on all levels.", price: "₹1,499", duration: "60 minutes" },
            { icon: "❋", name: "Spiritual Counselling", desc: "A compassionate space to explore your inner world, find clarity, and realign with your highest self and life purpose.", price: "₹1,299", duration: "50 minutes" },
          ].map((s) => (
            <div className="service-card" key={s.name}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-meta">
                <span className="service-price">{s.price}</span>
                <span className="service-duration">{s.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="courses-section" id="courses">
        <div className="section-header">
          <div className="section-tag">Courses &amp; programmes</div>
          <h2 className="section-title">Learn to <em>heal</em> yourself</h2>
          <p className="section-body">Structured programmes to deepen your practice, build knowledge, and awaken your own healing potential.</p>
        </div>
        <div className="courses-grid">
          {[
            { num: "01", tag: "Beginner · 4 weeks", name: "Crystal Healing Foundations", desc: "Discover the world of healing crystals — their properties, how to cleanse them and weave their energy into daily life.", price: "₹4,999", weeks: "4 live sessions" },
            { num: "02", tag: "Intermediate · 6 weeks", name: "Reiki Level I & II Certification", desc: "Become a certified Reiki practitioner. Learn hand positions, distance healing and how to hold space for others.", price: "₹8,999", weeks: "6 live sessions" },
            { num: "03", tag: "All levels · 3 weeks", name: "Chakra Healing Masterclass", desc: "A deep dive into the seven chakras — understanding their functions, imbalances, and powerful techniques to restore flow.", price: "₹3,999", weeks: "3 live sessions" },
            { num: "04", tag: "Advanced · 8 weeks", name: "Holistic Healing Practitioner", desc: "A comprehensive certification programme combining multiple healing modalities for those called to serve others.", price: "₹14,999", weeks: "8 live sessions" },
          ].map((c) => (
            <div className="course-card" key={c.name}>
              <div className="course-num">{c.num}</div>
              <div className="course-info">
                <div className="course-tag">{c.tag}</div>
                <div className="course-name">{c.name}</div>
                <div className="course-desc">{c.desc}</div>
                <div className="course-footer">
                  <span className="course-price">{c.price}</span>
                  <span className="course-weeks">{c.weeks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" id="testimonials">
        <div className="section-header">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">Words from our <em>community</em></h2>
        </div>
        <div className="testimonials-grid">
          {[
            { text: "My first Reiki session was a revelation. I walked in anxious and left feeling like I had returned home to myself. The space is sacred and the healing is real.", name: "Priya S.", loc: "Delhi" },
            { text: "The Crystal Healing Foundations course changed how I see the world. I now carry that calm and awareness into every single day.", name: "Amit K.", loc: "Mumbai" },
            { text: "I was sceptical at first, but after three chakra balancing sessions my chronic back pain has significantly reduced. I am deeply grateful.", name: "Sunita R.", loc: "Bangalore" },
          ].map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-quote">"</div>
              <div className="testimonial-text">{t.text}</div>
              <div className="testimonial-author">
                <div className="author-avatar">{t.name[0]}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-loc">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="booking-cta" id="book">
        <div className="booking-cta-tag">Begin your journey</div>
        <h2>Ready to <em>heal?</em></h2>
        <p>Take the first step. Book a session today and experience the gentle power of holistic healing.</p>
        <a href="#" className="btn-white">Book a session now</a>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Vishudhii <span>Healings</span></div>
            <div className="footer-brand-desc">A sacred space for healing, wellness and spiritual growth. We are here to walk alongside you on your journey back to wholeness.</div>
          </div>
          <div>
            <div className="footer-col-title">Pages</div>
            <ul className="footer-links">
              {["Home","About Us","Services","Courses","Book a Session","Testimonials"].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Therapies</div>
            <ul className="footer-links">
              {["Reiki Healing","Crystal Therapy","Sound Bath","Chakra Balancing","Pranic Healing","Spiritual Counselling"].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="#">hello@vishudhiihealings.com</a></li>
              <li><a href="#">+91 98765 43210</a></li>
              <li><a href="#">Gurugram, Haryana</a></li>
              <li style={{marginTop:"8px"}}><a href="#">Instagram</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 Vishudhii Healings. All rights reserved.</div>
          <div className="footer-copy">Made with intention &amp; care.</div>
        </div>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a href="https://wa.me/919876543210" className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
