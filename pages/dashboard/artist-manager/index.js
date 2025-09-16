// pages/dashboard/artist-manager/index.js
import Head from "next/head";
import React from "react";
import colors from "../../../styles/colors";

export default function ArtistManagerPage() {
  return (
    <>
      <Head>
        <title>Artist Manager — The Unsigned Underground</title>
        <meta
          name="description"
          content="Actionable playbooks for independent artists: growth systems, release timelines, PR outreach, distribution & royalties, gigs, legal, and templates."
        />
      </Head>

      <main>
        {/* Top header / breadcrumb */}
        <section className="topbar">
          <div className="container">
            <a className="crumb" href="/dashboard">← Back to Dashboard</a>
            <h1>Artist Manager</h1>
            <p className="lede">
              Read once end-to-end, then use as a pre-release checklist and quick reference
              before shows, PR pushes, and distribution drops.
            </p>
          </div>
        </section>

        {/* Quick in-page nav */}
        <nav className="quicknav">
          <div className="container">
            <a href="#growth-system">Growth System</a>
            <a href="#release-timeline">Release Timeline</a>
            <a href="#pr-outreach">PR & Outreach</a>
            <a href="#distribution-royalties">Distribution & Royalties</a>
            <a href="#gigs-live">Gigs & Live</a>
            <a href="#legal">Legal & Contracts</a>
            <a href="#templates">Templates</a>
          </div>
        </nav>

        {/* Sections */}
        <section id="growth-system" className="block">
          <div className="container">
            <h2>Growth System</h2>
            <p>
              Build a weekly cadence that compounds. Anchor everything to a clear narrative
              (who you are, who you’re for, why now) and keep a tight loop:
              capture → connect → convert.
            </p>
            <ul className="list">
              <li><strong>Weekly cadence:</strong> 1 flagship (video/blog) → 3 cut-downs → daily micro posts.</li>
              <li><strong>Audience loop:</strong> capture (content) → connect (DMs/email) → convert (tickets/merch).</li>
              <li><strong>Community:</strong> name your fans; reward top 1% with early listens/roles.</li>
            </ul>
          </div>
        </section>

        <section id="release-timeline" className="block">
          <div className="container">
            <h2>Release Timeline (6-Week Sprint)</h2>
            <ol className="steps">
              <li><strong>T-6w:</strong> assets locked (mix/master, art, canvas, credits/metadata).</li>
              <li><strong>T-5w:</strong> distributor upload, pre-save live, press list draft, teaser 1.</li>
              <li><strong>T-4w:</strong> EPK one-pager, teaser 2, pitch niche blogs/curators, seed UGC clips.</li>
              <li><strong>T-3w:</strong> behind-the-scenes drop, live set tease, local press outreach.</li>
              <li><strong>T-2w:</strong> pre-orders/merch bundle, street team tasks, teaser 3.</li>
              <li><strong>T-1w:</strong> countdown daily, short-clip challenge, email #2.</li>
              <li><strong>Launch week:</strong> premiere, pinned links, live AMA, repost fans, thank-yous.</li>
              <li><strong>Post:</strong> acoustic/alt mix, lyric video, remix call, showcase reel.</li>
            </ol>
          </div>
        </section>

        <section id="pr-outreach" className="block">
          <div className="container">
            <h2>PR & Outreach</h2>
            <p>
              Target niche outlets first; send short, skimmable pitches with a one-pager EPK
              and a story hook (why this track matters now).
            </p>
            <ul className="list">
              <li><strong>EPK one-pager:</strong> logline, 3-line bio, RIYL, best links, press photo.</li>
              <li><strong>Pitches:</strong> 5–7 sentences, one CTA, private link + download, no attachments.</li>
              <li><strong>Follow-ups:</strong> 4–5 days later; add a new angle (premiere date, tour tie-in).</li>
            </ul>
          </div>
        </section>

        <section id="distribution-royalties" className="block">
          <div className="container">
            <h2>Distribution & Royalties</h2>
            <ul className="list">
              <li><strong>Metadata:</strong> ISRC/ISWC, writers, splits, contributors, producer, featured.</li>
              <li><strong>PRO/MLC:</strong> register for performance + mechanicals; verify after release.</li>
              <li><strong>Splits:</strong> agree in writing (split sheet) before release; store consistently.</li>
            </ul>
          </div>
        </section>

        <section id="gigs-live" className="block">
          <div className="container">
            <h2>Gigs & Live</h2>
            <ul className="list">
              <li><strong>Routing:</strong> anchor city → 2–3 spokes; prioritize small rooms you can pack.</li>
              <li><strong>Offer sheet:</strong> door-deal min + merch %; request content rights in advance.</li>
              <li><strong>Street team:</strong> assign flyering & post-show content roles; reward with guest list.</li>
            </ul>
          </div>
        </section>

        <section id="legal" className="block">
          <div className="container">
            <h2>Legal & Contracts</h2>
            <ul className="list">
              <li><strong>Split sheets:</strong> one per song; writer %, pub %, producer points.</li>
              <li><strong>Work-for-hire:</strong> for art/video/session players unless credited as writers.</li>
              <li><strong>Licensing:</strong> keep stems ready; have a cue sheet template for sync pitches.</li>
            </ul>
          </div>
        </section>

        <section id="templates" className="block">
          <div className="container">
            <h2>Templates</h2>
            <div className="cards">
              <a className="card" href="/downloads/split-sheet.pdf" target="_blank" rel="noreferrer">
                <h3>Split Sheet</h3>
                <p>Lock percentages and roles before release.</p>
              </a>
              <a className="card" href="/downloads/press-outreach.docx" target="_blank" rel="noreferrer">
                <h3>Press Outreach Email</h3>
                <p>Short, skimmable, with a strong hook.</p>
              </a>
              <a className="card" href="/downloads/release-checklist.pdf" target="_blank" rel="noreferrer">
                <h3>Release Checklist</h3>
                <p>Six-week sprint from assets to post-launch.</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        main {
          color: ${colors.vintageCream};
          background: ${colors.black};
          min-height: 100vh;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(28px, 4vw, 40px) clamp(16px, 3vw, 28px);
        }
        .topbar {
          border-bottom: 2px solid ${colors.outlawRed};
          background: #141414;
        }
        .crumb {
          display: inline-block;
          margin-bottom: 10px;
          color: ${colors.vintageCream};
          opacity: 0.85;
          text-decoration: none;
        }
        .crumb:hover { opacity: 1; }
        h1 {
          margin: 0 0 6px 0;
          font-size: clamp(28px, 3.6vw, 44px);
          line-height: 1.15;
        }
        .lede {
          margin: 0;
          font-size: clamp(16px, 2.2vw, 18px);
          line-height: 1.5;
          opacity: 0.9;
          max-width: 820px;
        }
        .quicknav {
          position: sticky;
          top: 0;
          z-index: 10;
          background: #151515cc;
          backdrop-filter: blur(6px);
          border-bottom: 1px solid #2a2a2a;
        }
        .quicknav .container {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }
        .quicknav a {
          padding: 8px 12px;
          border: 1px solid ${colors.outlawRed};
          border-radius: 999px;
          text-decoration: none;
          color: ${colors.vintageCream};
          font-size: 14px;
          line-height: 1;
        }
        .quicknav a:hover {
          background: ${colors.outlawRed};
        }
        .block {
          border-bottom: 1px solid #2a2a2a;
        }
        .block:last-of-type {
          border-bottom: none;
          padding-bottom: clamp(56px, 8vw, 96px);
        }
        h2 {
          margin: 0 0 10px 0;
          font-size: clamp(22px, 2.8vw, 32px);
        }
        .list {
          margin: 10px 0 0 0;
          padding-left: 1.1em;
          line-height: 1.6;
          font-size: clamp(16px, 2vw, 18px);
        }
        .steps {
          counter-reset: step;
          list-style: none;
          padding-left: 0;
          margin: 12px 0 0 0;
        }
        .steps li {
          position: relative;
          padding-left: 36px;
          margin: 10px 0;
          line-height: 1.6;
        }
        .steps li::before {
          counter-increment: step;
          content: counter(step);
          position: absolute;
          left: 0;
          top: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid ${colors.outlawRed};
          display: grid;
          place-items: center;
          font-size: 12px;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
          margin-top: 12px;
        }
        .card {
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          padding: 16px;
          text-decoration: none;
          color: ${colors.vintageCream};
          background: #121212;
        }
        .card:hover {
          border-color: ${colors.outlawRed};
          background: #171717;
        }
        .card h3 {
          margin: 0 0 6px 0;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          font-size: 14px;
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
