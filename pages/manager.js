// pages/manager.js
import Head from "next/head";
import React from "react"; 

export default function ArtistManager() {
  import colors from "../../styles/colors";

  return (
    <>
      <Head>
        <title>Artist Manager — The Unsigned Underground</title>
        <meta
          name="description"
          content="Guides, tools, and templates across release strategy, PR, gigs, distribution, monetization, and more."
        />
      </Head>

      <main>
        <section className="hero">
          <h1>Artist Manager</h1>
          <p>
            Guides, tools, and templates covering PR, fan growth, gigs, distribution,
            monetization, legal, and more—designed to move you from local hero to national act.
          </p>
          {/* Removed pricing/paywall actions during build */}
        </section>

        <section className="block">
          <h2>Core categories at launch</h2>
          <ul className="list">
            <li>Marketing & Fan Growth • Social & Content Systems</li>
            <li>Live/Gigs/Street Team • Music Release & Schedules</li>
            <li>Distribution & Monetization • PR/Media Outreach</li>
            <li>Legal & Contracts • Royalties, Rights & Licensing</li>
          </ul>
        </section>

        <section className="block">
          <h3>What you’ll find inside</h3>
          <ul className="list">
            <li>Step-by-step checklists and timelines (pre-release → post-release)</li>
            <li>Templates: split sheets, metadata sheets, outreach emails</li>
            <li>“What’s Working Now” tactics, updated as trends shift</li>
          </ul>
        </section>

        <section className="block">
          <div className="mock">Members-only dashboard preview here</div>
        </section>
      </main>

      <style jsx>{`
        main { color: ${colors.vintageCream}; background: ${colors.black}; }
        .hero { min-height: 88vh; display: grid; place-items: center; text-align: center;
          padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px); border-bottom: 2px solid ${colors.outlawRed}; }
        .hero h1 { font-size: clamp(34px, 4.2vw, 56px); line-height: 1.12; margin: 0 0 10px; }
        .hero p { font-size: clamp(18px, 2vw, 22px); line-height: 1.55; max-width: 860px; margin: 0 auto 18px; color: #f5eede; }
        .actions { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .btn { font-size: clamp(16px, 1.8vw, 20px); padding: 12px 18px; border-radius: 12px; text-decoration:none; }
        .btn.solid { background:${colors.outlawRed}; color:${colors.vintageCream}; border:2px solid ${colors.outlawRed}; }
        .btn.outline { color:${colors.vintageCream}; border:2px solid ${colors.outlawRed}; }
        .block { max-width:1100px; margin:0 auto; padding: clamp(44px, 6vw, 72px) clamp(20px, 4vw, 40px); }
        .block h2 { font-size: clamp(26px, 3vw, 40px); margin: 0 0 12px; }
        .block h3 { font-size: clamp(22px, 2.6vw, 32px); margin: 0 0 10px; }
        .list { font-size: clamp(18px, 2vw, 20px); line-height: 1.6; padding-left: 1.1em; }
        .list li + li { margin-top: 8px; }
        .mock { height: clamp(220px, 40vw, 420px); border: 2px dashed ${colors.outlawRed}; border-radius:14px; display:grid; place-items:center; opacity:.9; }
      `}</style>
    </>
  );
}
