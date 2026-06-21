"use client";
import { useState } from "react";

const MODES = [
  {
    key: "online",
    label: "Online Session",
    desc: "High-fidelity audio broadcast to regulate your nervous system from home.",
    price: "₹1,499",
    meta: "60 minutes · From anywhere",
    cta: "Book online session",
  },
  {
    key: "in-person",
    label: "In-Person Session",
    desc: "90 minutes of immersive sound using gongs, handpans, and Tibetan bowls.",
    price: "₹1,999",
    meta: "90 minutes · At our healing space",
    cta: "Book in-person session",
    featured: true,
  },
  {
    key: "couple",
    label: "Couple's Harmony",
    desc: "A shared 90-minute sonic journey to align relational frequencies.",
    price: "₹3,499",
    meta: "90 minutes · For two",
    cta: "Book for two",
  },
  {
    key: "group-corporate",
    label: "Corporate Reset",
    desc: "Group sound baths designed to clear workplace stress and boost focus.",
    price: "Custom Quote",
    meta: "Flexible duration · For teams",
    cta: "Request a quote",
  },
];

export default function SoundHealingTherapy() {
  const [activeMode, setActiveMode] = useState("in-person");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        :root {
          --w: #ffffff; --ow: #F7FBFF; --b100: #C8E0F8; --b200: #93C4F0;
          --b400: #378ADD; --b600: #185FA5; --b900: #042C53; --tb: #3A5A78;
          --serif: 'Cormorant Garamond', Georgia, serif;
          --sans: 'Outfit', sans-serif;
        }
        .sht-body { font-family: var(--sans); background: var(--w); color: var(--b900); overflow-x: hidden; }

        .sht-hero { position: relative; height: 92vh; min-height: 560px; display: flex; align-items: flex-end; overflow: hidden; }
        .sht-hero-bg { position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1591188824809-4e3e35b72fe1?w=1800&q=85') center 35% / cover no-repeat; }
        .sht-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(4,44,83,0.92) 8%, rgba(4,44,83,0.5) 45%, rgba(4,44,83,0.15) 75%); }
        .sht-hero-content { position: relative; z-index: 1; padding: 0 48px 64px; max-width: 760px; }
        .sht-eyebrow { display: inline-block; font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b200); border: 0.5px solid rgba(147,196,240,0.35); padding: 6px 16px; border-radius: 40px; background: rgba(255,255,255,0.07); margin-bottom: 22px; }
        .sht-hero h1 { font-family: var(--serif); font-size: clamp(38px,5.5vw,68px); font-weight: 300; line-height: 1.1; color: #fff; margin-bottom: 14px; }
        .sht-hero h1 em { font-style: italic; color: var(--b200); }
        .sht-hero-sub { font-size: 15px; font-weight: 300; line-height: 1.85; color: rgba(255,255,255,0.65); max-width: 480px; }

        .sht-vish { padding: 64px 48px; text-align: center; }
        .sht-vish-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b600); margin-bottom: 14px; }
        .sht-vish-title { font-family: var(--serif); font-size: clamp(28px,3.5vw,42px); font-weight: 300; color: var(--b900); line-height: 1.25; max-width: 680px; margin: 0 auto 18px; }
        .sht-vish-title em { font-style: italic; color: var(--b600); }
        .sht-vish-body { font-size: 14px; font-weight: 400; line-height: 1.9; color: var(--tb); max-width: 580px; margin: 0 auto; }
        .sht-instruments { display: flex; justify-content: center; gap: 28px; margin-top: 36px; flex-wrap: wrap; }
        .sht-instrument { text-align: center; }
        .sht-instrument-icon { width: 56px; height: 56px; border-radius: 50%; background: var(--ow); border: 0.5px solid var(--b100); display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-family: var(--serif); font-size: 22px; color: var(--b600); }
        .sht-instrument-name { font-size: 11px; font-weight: 500; letter-spacing: 0.04em; color: var(--tb); }

        .sht-modes-section { background: var(--ow); padding: 72px 48px; }
        .sht-section-header { text-align: center; margin-bottom: 48px; }
        .sht-section-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b600); margin-bottom: 12px; }
        .sht-section-title { font-family: var(--serif); font-size: clamp(28px,4vw,42px); font-weight: 300; color: var(--b900); }
        .sht-section-title em { font-style: italic; color: var(--b600); }

        .sht-modes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; max-width: 1180px; margin: 0 auto; }
        .sht-mode-card { background: var(--w); border: 0.5px solid var(--b100); border-radius: 18px; padding: 28px 24px; cursor: pointer; transition: all 0.25s; position: relative; display: flex; flex-direction: column; }
        .sht-mode-card.featured { border-color: var(--b600); box-shadow: 0 8px 32px rgba(24,95,165,0.1); }
        .sht-mode-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(24,95,165,0.12); }
        .sht-mode-badge { position: absolute; top: -10px; left: 24px; font-size: 9px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #fff; background: var(--b600); padding: 4px 12px; border-radius: 40px; }
        .sht-mode-name { font-family: var(--serif); font-size: 21px; font-weight: 400; color: var(--b900); margin: 8px 0 10px; }
        .sht-mode-desc { font-size: 12.5px; font-weight: 400; line-height: 1.7; color: var(--tb); margin-bottom: 20px; flex-grow: 1; }
        .sht-mode-price { font-family: var(--serif); font-size: 26px; color: var(--b600); margin-bottom: 4px; }
        .sht-mode-meta { font-size: 11px; font-weight: 400; color: var(--tb); margin-bottom: 20px; }
        .sht-mode-btn { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--b600); background: var(--ow); border: 0.5px solid var(--b100); padding: 11px 0; border-radius: 40px; cursor: pointer; transition: all 0.2s; text-align: center; }
        .sht-mode-card.featured .sht-mode-btn { color: #fff; background: var(--b600); }
        .sht-mode-btn:hover { background: var(--b600); color: #fff; }

        .sht-why { padding: 80px 48px; }
        .sht-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; max-width: 1100px; margin: 0 auto; }
        .sht-why-img { border-radius: 20px; overflow: hidden; height: 460px; }
        .sht-why-img img { width: 100%; height: 100%; object-fit: cover; }
        .sht-why-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b600); margin-bottom: 16px; }
        .sht-why-title { font-family: var(--serif); font-size: clamp(28px,3.5vw,38px); font-weight: 300; color: var(--b900); line-height: 1.25; margin-bottom: 20px; }
        .sht-why-title em { font-style: italic; color: var(--b600); }
        .sht-why-list { list-style: none; display: flex; flex-direction: column; gap: 18px; }
        .sht-why-list li { display: flex; gap: 14px; align-items: flex-start; }
        .sht-why-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--b400); margin-top: 8px; flex-shrink: 0; }
        .sht-why-item-title { font-size: 14px; font-weight: 600; color: var(--b900); margin-bottom: 4px; }
        .sht-why-item-desc { font-size: 13px; font-weight: 400; line-height: 1.75; color: var(--tb); }

        .sht-cta { background: var(--b900); padding: 88px 48px; text-align: center; position: relative; overflow: hidden; }
        .sht-cta::before { content: ''; position: absolute; top: -100px; left: -100px; width: 360px; height: 360px; border-radius: 50%; background: rgba(55,138,221,0.08); }
        .sht-cta-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b200); margin-bottom: 16px; position: relative; z-index: 1; }
        .sht-cta-title { font-family: var(--serif); font-size: clamp(34px,5vw,56px); font-weight: 300; color: #fff; line-height: 1.15; margin-bottom: 18px; position: relative; z-index: 1; }
        .sht-cta-title em { font-style: italic; color: var(--b200); }
        .sht-cta-body { font-size: 14px; color: rgba(255,255,255,0.5); max-width: 420px; margin: 0 auto 32px; line-height: 1.85; position: relative; z-index: 1; }
        .sht-cta-btn { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--b900); background: #fff; border: none; padding: 15px 40px; border-radius: 40px; cursor: pointer; position: relative; z-index: 1; }

        @media (max-width: 900px) {
          .sht-modes-grid { grid-template-columns: 1fr; }
          .sht-why-grid { grid-template-columns: 1fr; gap: 32px; }
          .sht-why-img { height: 320px; order: -1; }
        }
        @media (max-width: 600px) {
          .sht-hero-content { padding: 0 22px 48px; }
          .sht-hero h1 { font-size: 36px; }
          .sht-vish, .sht-modes-section, .sht-why, .sht-cta { padding-left: 20px; padding-right: 20px; }
          .sht-instruments { gap: 18px; }
        }
      `}</style>

      <div className="sht-body">
        {/* HERO */}
        <section className="sht-hero">
          <div className="sht-hero-bg" />
          <div className="sht-hero-overlay" />
          <div className="sht-hero-content">
            <div className="sht-eyebrow">Spiritual · Sound Healing</div>
            <h1>The <em>Vishuddhi Sound</em><br />Experience</h1>
            <p className="sht-hero-sub">Beyond the standard singing bowl session — a curated journey through handpan, gong, and Tibetan bowl frequencies, designed to regulate your nervous system and restore deep stillness.</p>
          </div>
        </section>

        {/* WHAT MAKES IT DIFFERENT */}
        <section className="sht-vish">
          <div className="sht-vish-tag">What sets it apart</div>
          <h2 className="sht-vish-title">Not just singing bowls. This is the <em>Vishuddhi Sound</em>.</h2>
          <p className="sht-vish-body">Most sound sessions rely on bowls alone. Ours layers the warm, melodic resonance of the D Minor handpan with deep gong washes and traditional Tibetan bowls — a fuller spectrum of frequency designed to reach the nervous system more completely.</p>
          <div className="sht-instruments">
            <div className="sht-instrument"><div className="sht-instrument-icon">◐</div><div className="sht-instrument-name">D Minor Handpan</div></div>
            <div className="sht-instrument"><div className="sht-instrument-icon">◉</div><div className="sht-instrument-name">Ceremonial Gongs</div></div>
            <div className="sht-instrument"><div className="sht-instrument-icon">◎</div><div className="sht-instrument-name">Tibetan Bowls</div></div>
          </div>
        </section>

        {/* MODES GRID */}
        <section className="sht-modes-section">
          <div className="sht-section-header">
            <div className="sht-section-tag">Choose your session</div>
            <h2 className="sht-section-title">Healing that fits <em>your life</em></h2>
          </div>
          <div className="sht-modes-grid">
            {MODES.map((m) => (
              <div
                key={m.key}
                className={`sht-mode-card ${m.featured ? "featured" : ""}`}
                onMouseEnter={() => setActiveMode(m.key)}
              >
                {m.featured && <div className="sht-mode-badge">Most loved</div>}
                <div className="sht-mode-name">{m.label}</div>
                <p className="sht-mode-desc">{m.desc}</p>
                <div className="sht-mode-price">{m.price}</div>
                <div className="sht-mode-meta">{m.meta}</div>
                <button className="sht-mode-btn">{m.cta}</button>
              </div>
            ))}
          </div>
        </section>

        {/* WHY IT WORKS */}
        <section className="sht-why">
          <div className="sht-why-grid">
            <div className="sht-why-img">
              <img src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=900&q=85" alt="Sound healing instruments" />
            </div>
            <div>
              <div className="sht-why-tag">The experience</div>
              <h3 className="sht-why-title">Every session is held with <em>intention</em></h3>
              <ul className="sht-why-list">
                <li><span className="sht-why-dot" /><div><div className="sht-why-item-title">A guided settling</div><div className="sht-why-item-desc">We begin with breath and grounding before a single note is played.</div></div></li>
                <li><span className="sht-why-dot" /><div><div className="sht-why-item-title">Layered frequency journey</div><div className="sht-why-item-desc">Handpan, gong and bowl tones are sequenced to gently shift your state.</div></div></li>
                <li><span className="sht-why-dot" /><div><div className="sht-why-item-title">Integration time</div><div className="sht-why-item-desc">Every session closes with quiet space to return to your body slowly.</div></div></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sht-cta">
          <div className="sht-cta-tag">Ready when you are</div>
          <h2 className="sht-cta-title">Begin your <em>sound journey</em></h2>
          <p className="sht-cta-body">Choose the mode that fits you, or write to us if you're not sure where to start.</p>
          <button className="sht-cta-btn">Book your session now</button>
        </section>
      </div>
    </>
  );
}
