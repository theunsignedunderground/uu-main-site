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
          content="Actionable playbooks for independent artists: release timelines, growth systems, PR outreach, distribution & royalties, gigs, legal, and templates."
        />
      </Head>

      <main>
        <section className="topbar">
          <div className="container">
            <a className="crumb" href="/dashboard">← Back to Dashboard</a>
            <h1>Artist Manager</h1>
            <p className="lede">
              Read once end-to-end, then use as a pre-release checklist and
              quick reference before shows, PR pushes, and distribution drops.
            </p>
          </div>
        </section>

        <section className="block">
          <div className="container">
            <h2>Core categories at launch</h2>
            <ul className="list">
              <li>Marketing & Fan Growth • Social & Content Systems</li>
              <li>Live/Gigs/Street Team • Music Release & Schedules</li>
              <li>Distribution & Monetization • PR/Media Outreach</li>
              <li>Legal & Contracts • Royalties, Rights & Licensing</li>
            </ul>
          </div>
        </section>

        <section className="block">
          <div className="container">
            <h3>What you’ll find inside</h3>
            <ul className="list">
              <li>Step-by-step checklists and timelines (pre-release → post-release)</li>
              <li>Templates: split sheets, metadata sheets, outreach emails</li>
              <li>“What’s Working Now” tactics, updated as trends shift</li>
            </ul>
          </div>
        </section>

        <section className="block">
          <div className="container">
            <div className="mock">Dashboard preview / sections go here</div>
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
        .block {
          border-bottom: 1px solid #2a2a2a;
        }
        .block:last-of-type {
          border-bottom: none;
          padding-bottom: clamp(56px, 8vw, 96px);
        }
        h2, h3 {
          margin: 0 0 10px 0;
        }
        .list {
          margin: 10px 0 0 0;
          padding-left: 1.1em;
          line-height: 1.6;
          font-size: clamp(16px, 2vw, 18px);
        }
        .list li + li { margin-top: 8px; }
        .mock {
          height: clamp(220px, 40vw, 420px);
          border: 2px dashed ${colors.outlawRed};
          border-radius:14px;
          display:grid;
          place-items:center;
          opacity:.9;
        }
      `}</style>
    </>
  );
}
