"use client";
import { useState, useEffect } from "react";

const NAV_TREE = {
  Spiritual: {
    color: "var(--b600)",
    items: [
      { label: "Sound Healing", therapy: "/spiritual/sound-healing/therapy", course: "/spiritual/sound-healing/course" },
      { label: "Kundalini Energy", therapy: "/spiritual/kundalini/therapy", course: "/spiritual/kundalini/course" },
    ],
  },
  Occult: {
    color: "var(--c600)",
    items: [
      { label: "Tarot & Numerology", therapy: "/occult/tarot-numerology/reading", course: "/occult/tarot-numerology/course" },
    ],
  },
};

export default function Nav({ dark = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePillar, setActivePillar] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lightText = dark && !scrolled;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
        :root {
          --w: #ffffff; --ow: #F7FBFF; --b100: #C8E0F8; --b200: #93C4F0;
          --b400: #378ADD; --b600: #185FA5; --b900: #042C53; --tb: #3A5A78;
          --c100: #F5C4B3; --c200: #F0997B; --c400: #D85A30; --c600: #993C1D; --c900: #4A1B0C;
          --serif: 'Cormorant Garamond', Georgia, serif;
          --sans: 'Outfit', sans-serif;
        }
        .vh-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 200; padding: 0 48px; height: 68px; display: flex; align-items: center; justify-content: space-between; transition: background 0.35s, box-shadow 0.35s; font-family: var(--sans); }
        .vh-nav.scrolled { background: rgba(255,255,255,0.95); backdrop-filter: blur(16px); box-shadow: 0 1px 0 rgba(24,95,165,0.12); }
        .vh-logo { font-family: var(--sans); font-size: 19px; font-weight: 600; letter-spacing: 0.02em; text-decoration: none; transition: color 0.35s; }
        .vh-links { display: flex; gap: 8px; list-style: none; align-items: center; }
        .vh-pillar { position: relative; }
        .vh-pillar > button { font-family: var(--sans); font-size: 12px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; background: none; border: none; padding: 10px 16px; cursor: pointer; display: flex; align-items: center; gap: 5px; transition: color 0.2s; }
        .vh-pillar > button svg { width: 10px; height: 10px; transition: transform 0.2s; }
        .vh-pillar.open > button svg { transform: rotate(180deg); }
        .vh-dropdown { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); margin-top: 8px; background: var(--w); border: 0.5px solid var(--b100); border-radius: 16px; box-shadow: 0 16px 48px rgba(24,95,165,0.14); padding: 10px; min-width: 320px; display: flex; flex-direction: column; gap: 4px; }
        .vh-dropdown-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; border-radius: 10px; transition: background 0.15s; }
        .vh-dropdown-row:hover { background: var(--ow); }
        .vh-dropdown-label { font-family: var(--serif); font-size: 17px; font-weight: 400; color: var(--b900); }
        .vh-dropdown-actions { display: flex; gap: 8px; }
        .vh-dropdown-actions a { font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; padding: 6px 12px; border-radius: 40px; transition: all 0.15s; }
        .vh-link-direct { font-family: var(--sans); font-size: 12px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; padding: 10px 16px; transition: color 0.2s; }
        .vh-book { font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--w); background: var(--b600); border: none; padding: 10px 24px; border-radius: 40px; cursor: pointer; text-decoration: none; transition: background 0.2s; }
        .vh-book:hover { background: var(--b900); }
        .vh-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .vh-hamburger span { display: block; width: 22px; height: 1.5px; transition: all 0.3s; }
        .vh-mobile-menu { position: fixed; top: 68px; left: 0; right: 0; bottom: 0; background: var(--w); z-index: 199; overflow-y: auto; padding: 24px; }
        .vh-mobile-pillar-title { font-family: var(--serif); font-size: 13px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; margin: 24px 0 12px; }
        .vh-mobile-item { display: flex; align-items: center; justify-content: space-between; padding: 16px 4px; border-bottom: 0.5px solid var(--b100); }
        .vh-mobile-item-name { font-family: var(--serif); font-size: 20px; color: var(--b900); }
        .vh-mobile-actions a { font-size: 10px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none; padding: 6px 12px; border-radius: 40px; margin-left: 6px; }
        @media (max-width: 900px) {
          .vh-nav { padding: 0 20px; }
          .vh-links, .vh-book.desktop-only { display: none; }
          .vh-hamburger { display: flex; }
        }
      `}</style>

      <nav className={`vh-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="/" className="vh-logo" style={{ color: scrolled ? "var(--b900)" : (dark ? "#ffffff" : "var(--b900)") }}>
          Vishudhii Healings
        </a>

        <ul className="vh-links">
          {Object.entries(NAV_TREE).map(([pillar, data]) => (
            <li
              key={pillar}
              className={`vh-pillar ${activePillar === pillar ? "open" : ""}`}
              onMouseEnter={() => setActivePillar(pillar)}
              onMouseLeave={() => setActivePillar(null)}
            >
              <button style={{ color: scrolled ? "var(--tb)" : (dark ? "rgba(255,255,255,0.88)" : "var(--tb)") }}>
                {pillar}
                <svg viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
              {activePillar === pillar && (
                <div className="vh-dropdown">
                  {data.items.map((item) => (
                    <div className="vh-dropdown-row" key={item.label}>
                      <span className="vh-dropdown-label">{item.label}</span>
                      <div className="vh-dropdown-actions">
                        <a href={item.therapy} style={{ color: data.color, border: `0.5px solid ${data.color}` }}>
                          {item.therapy.includes("reading") ? "Reading" : "Therapy"}
                        </a>
                        <a href={item.course} style={{ color: "#fff", background: data.color }}>Course</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li><a href="/#testimonials" className="vh-link-direct" style={{ color: scrolled ? "var(--tb)" : (dark ? "rgba(255,255,255,0.88)" : "var(--tb)") }}>Testimonials</a></li>
          <li><a href="/#contact" className="vh-link-direct" style={{ color: scrolled ? "var(--tb)" : (dark ? "rgba(255,255,255,0.88)" : "var(--tb)") }}>Contact</a></li>
        </ul>

        <a href="/#book" className="vh-book desktop-only">Book a session</a>

        <button className="vh-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span style={{ background: scrolled ? "var(--b900)" : (dark ? "#fff" : "var(--b900)") }} />
          <span style={{ background: scrolled ? "var(--b900)" : (dark ? "#fff" : "var(--b900)") }} />
          <span style={{ background: scrolled ? "var(--b900)" : (dark ? "#fff" : "var(--b900)") }} />
        </button>
      </nav>

      {menuOpen && (
        <div className="vh-mobile-menu">
          {Object.entries(NAV_TREE).map(([pillar, data]) => (
            <div key={pillar}>
              <div className="vh-mobile-pillar-title" style={{ color: data.color }}>{pillar}</div>
              {data.items.map((item) => (
                <div className="vh-mobile-item" key={item.label}>
                  <span className="vh-mobile-item-name">{item.label}</span>
                  <div className="vh-mobile-actions">
                    <a href={item.therapy} style={{ color: data.color, border: `0.5px solid ${data.color}` }} onClick={() => setMenuOpen(false)}>
                      {item.therapy.includes("reading") ? "Reading" : "Therapy"}
                    </a>
                    <a href={item.course} style={{ color: "#fff", background: data.color }} onClick={() => setMenuOpen(false)}>Course</a>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div style={{ marginTop: 32 }}>
            <a href="/#book" className="vh-book" style={{ display: "block", textAlign: "center" }} onClick={() => setMenuOpen(false)}>Book a session</a>
          </div>
        </div>
      )}
    </>
  );
}
