"use client";
import Nav from "../../../Nav";
const TIERS = [
  {
    num: "01",
    badge: "Beginner",
    name: "Awakening",
    who: "For those taking their very first steps into sound. No experience needed — only an open heart and a willingness to explore.",
    deliverables: [
      "Understand your energy body",
      "Work with crystals and intentions",
      "Build a daily healing practice",
    ],
    duration: "4 weeks · Online & offline",
    price: "₹4,999",
  },
  {
    num: "02",
    badge: "Intermediate",
    name: "Deepening",
    who: "For those who have felt the call and want to go further. Become certified and begin holding space for others.",
    deliverables: [
      "Reiki Level I & II certification",
      "Chakra diagnosis and balancing",
      "Distance and group healing",
    ],
    duration: "6 weeks · Online & offline",
    price: "₹8,999",
  },
  {
    num: "03",
    badge: "Advanced",
    name: "Mastery",
    who: "For dedicated practitioners ready to merge modalities and step fully into professional sound healing work.",
    deliverables: [
      "Holistic practitioner certification",
      "Combine Reiki, sound and crystals",
      "Mentorship and case supervision",
    ],
    duration: "8 weeks · Online & offline",
    price: "₹14,999",
  },
];

export default function SoundHealingCourse() {
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
        .shc-body { font-family: var(--sans); background: var(--w); color: var(--b900); overflow-x: hidden; }

        .shc-hero { padding: 160px 48px 80px; text-align: center; background: var(--b900); position: relative; overflow: hidden; }
        .shc-hero::before { content: ''; position: absolute; top: -120px; right: -100px; width: 420px; height: 420px; border-radius: 50%; background: rgba(55,138,221,0.08); }
        .shc-hero::after { content: ''; position: absolute; bottom: -100px; left: -80px; width: 320px; height: 320px; border-radius: 50%; background: rgba(55,138,221,0.06); }
        .shc-eyebrow { display: inline-block; font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b200); border: 0.5px solid rgba(147,196,240,0.3); padding: 6px 16px; border-radius: 40px; background: rgba(255,255,255,0.06); margin-bottom: 24px; position: relative; z-index: 1; }
        .shc-hero h1 { font-family: var(--serif); font-size: clamp(34px,5.5vw,62px); font-weight: 300; line-height: 1.2; color: #fff; max-width: 760px; margin: 0 auto 20px; position: relative; z-index: 1; }
        .shc-hero h1 em { font-style: italic; color: var(--b200); }
        .shc-hero-sub { font-size: 14px; font-weight: 400; line-height: 1.9; color: rgba(255,255,255,0.5); max-width: 480px; margin: 0 auto; position: relative; z-index: 1; }

        .shc-timeline-section { padding: 80px 48px; }
        .shc-timeline { max-width: 760px; margin: 0 auto; position: relative; }
        .shc-timeline::before { content: ''; position: absolute; left: 39px; top: 28px; bottom: 28px; width: 1px; background: var(--b100); }

        .shc-tier { display: flex; gap: 32px; margin-bottom: 56px; position: relative; }
        .shc-tier:last-child { margin-bottom: 0; }
        .shc-tier-marker { width: 80px; height: 80px; border-radius: 50%; background: var(--ow); border: 0.5px solid var(--b100); display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative; z-index: 1; }
        .shc-tier-marker-num { font-family: var(--serif); font-size: 28px; font-weight: 300; color: var(--b600); }
        .shc-tier-card { flex: 1; background: var(--ow); border: 0.5px solid var(--b100); border-radius: 20px; padding: 32px 36px; transition: all 0.3s; }
        .shc-tier-card:hover { box-shadow: 0 12px 36px rgba(24,95,165,0.1); transform: translateY(-2px); }
        .shc-tier-top { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; }
        .shc-tier-badge { display: inline-block; font-size: 9px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--b600); background: var(--b100); padding: 4px 12px; border-radius: 40px; }
        .shc-tier-price { font-family: var(--serif); font-size: 24px; color: var(--b600); }
        .shc-tier-name { font-family: var(--serif); font-size: 28px; font-weight: 400; color: var(--b900); margin-bottom: 12px; }
        .shc-tier-who { font-size: 13px; font-weight: 400; line-height: 1.8; color: var(--tb); margin-bottom: 20px; }
        .shc-tier-deliverables { list-style: none; margin-bottom: 20px; }
        .shc-tier-deliverables li { font-size: 13px; font-weight: 400; color: var(--b900); padding: 8px 0; border-bottom: 0.5px solid var(--b100); display: flex; align-items: flex-start; gap: 10px; }
        .shc-tier-deliverables li:last-child { border-bottom: none; }
        .shc-tier-deliverables li::before { content: '→'; color: var(--b400); flex-shrink: 0; }
        .shc-tier-bottom { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .shc-tier-duration { font-size: 11px; font-weight: 500; color: var(--tb); letter-spacing: 0.02em; }
        .shc-tier-btn { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #fff; background: var(--b600); border: none; padding: 11px 24px; border-radius: 40px; cursor: pointer; transition: background 0.2s; }
        .shc-tier-btn:hover { background: var(--b900); }

        .shc-philosophy { background: var(--ow); padding: 80px 48px; text-align: center; }
        .shc-philosophy-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b600); margin-bottom: 16px; }
        .shc-philosophy-title { font-family: var(--serif); font-size: clamp(26px,3.5vw,38px); font-weight: 300; font-style: italic; color: var(--b900); max-width: 640px; margin: 0 auto 20px; line-height: 1.4; }
        .shc-philosophy-body { font-size: 14px; font-weight: 400; line-height: 1.9; color: var(--tb); max-width: 560px; margin: 0 auto; }

        .shc-cta { background: var(--b900); padding: 88px 48px; text-align: center; position: relative; overflow: hidden; }
        .shc-cta::before { content: ''; position: absolute; top: -100px; left: -100px; width: 360px; height: 360px; border-radius: 50%; background: rgba(55,138,221,0.08); }
        .shc-cta-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--b200); margin-bottom: 16px; position: relative; z-index: 1; }
        .shc-cta-title { font-family: var(--serif); font-size: clamp(32px,5vw,52px); font-weight: 300; color: #fff; line-height: 1.15; margin-bottom: 18px; position: relative; z-index: 1; }
        .shc-cta-title em { font-style: italic; color: var(--b200); }
        .shc-cta-body { font-size: 14px; color: rgba(255,255,255,0.5); max-width: 420px; margin: 0 auto 32px; line-height: 1.85; position: relative; z-index: 1; }
        .shc-cta-btn { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--b900); background: #fff; border: none; padding: 15px 40px; border-radius: 40px; cursor: pointer; position: relative; z-index: 1; }

        @media (max-width: 700px) {
          .shc-hero { padding: 130px 22px 56px; }
          .shc-timeline-section { padding: 56px 20px; }
          .shc-timeline::before { left: 27px; }
          .shc-tier { gap: 16px; }
          .shc-tier-marker { width: 56px; height: 56px; }
          .shc-tier-marker-num { font-size: 20px; }
          .shc-tier-card { padding: 22px 20px; }
          .shc-tier-name { font-size: 22px; }
          .shc-philosophy, .shc-cta { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>

      <div className="shc-body">
        <Nav dark={true} />
        <section className="shc-hero">
          <div className="shc-eyebrow">Spiritual · Sound Healing · Courses</div>
          <h1>Learn to <em>heal yourself.</em><br />And then, the world.</h1>
          <p className="shc-hero-sub">Three clear stages. Wherever you are on your journey, there is a path designed precisely for you.</p>
        </section>

        {/* TIMELINE */}
        <section className="shc-timeline-section">
          <div className="shc-timeline">
            {TIERS.map((t) => (
              <div className="shc-tier" key={t.num}>
                <div className="shc-tier-marker">
                  <span className="shc-tier-marker-num">{t.num}</span>
                </div>
                <div className="shc-tier-card">
                  <div className="shc-tier-top">
                    <span className="shc-tier-badge">{t.badge}</span>
                    <span className="shc-tier-price">{t.price}</span>
                  </div>
                  <div className="shc-tier-name">{t.name}</div>
                  <p className="shc-tier-who">{t.who}</p>
                  <ul className="shc-tier-deliverables">
                    {t.deliverables.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                  <div className="shc-tier-bottom">
                    <span className="shc-tier-duration">{t.duration}</span>
                    <button className="shc-tier-btn">Enroll in {t.name}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="shc-philosophy">
          <div className="shc-philosophy-tag">Why sound</div>
          <p className="shc-philosophy-title">"Nada Brahma — the world is sound. To learn its language is to learn the oldest medicine there is."</p>
          <p className="shc-philosophy-body">Each tier builds on the last — not just in skill, but in responsibility. By Mastery, you are not simply playing an instrument. You are holding space for another person's healing.</p>
        </section>

        {/* CTA */}
        <section className="shc-cta">
          <div className="shc-cta-tag">Begin where you are</div>
          <h2 className="shc-cta-title">Which path calls to <em>you?</em></h2>
          <p className="shc-cta-body">Not sure which tier is right for you? Write to us and we'll help you choose.</p>
          <button className="shc-cta-btn">Talk to us first</button>
        </section>
      </div>
    </>
  );
}
