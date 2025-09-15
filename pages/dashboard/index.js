// pages/dashboard/index.js
import Head from "next/head";
import React from "react";
import colors from "../../styles/colors";

export default function DashboardHome() {
  return (
    <>
      <Head>
        <title>Dashboard — The Unsigned Underground</title>
        <meta
          name="description"
          content="Your Unsigned Underground tools: Artist Manager, Setlists, Release Toolkit, Press Tools, and more."
        />
      </Head>

      <main>
        <header className="top">
          <div className="container">
            <h1>Your Dashboard</h1>
            <p className="lede">
              Jump into the tools. No paywall checks here while we’re building.
            </p>
          </div>
        </header>

        <section className="grid">
          <div className="container cards">
            {/* ✅ This is the key link you need working */}
            <a className="card" href="/dashboard/artist-manager">
              <h2>Artist Manager →</h2>
              <p>Playbooks for growth, releases, PR, gigs, royalties, and legal.</p>
            </a>

            {/* Stubs you can wire up later the same way */}
            <a className="card" href="/dashboard/setlists">
              <h2>Setlists (coming soon)</h2>
              <p>Plan sets, track runtime, and export printable sheets.</p>
            </a>

            <a className="card" href="/dashboard/release-toolkit">
              <h2>Release Toolkit (coming soon)</h2>
              <p>Six-week timeline, assets checklist, and rollout tasks.</p>
            </a>

            <a className="card" href="/dashboard/press-tools">
              <h2>Press Tools (coming soon)</h2>
              <p>One-pager, pitch templates, and outreach tracking.</p>
            </a>
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
        .top {
          border-bottom: 2px solid ${colors.outlawRed};
          background: #141414;
        }
        h1 {
          margin: 0;
          font-size: clamp(28px, 3.6vw, 44px);
          line-height: 1.15;
        }
        .lede {
          margin: 8px 0 0 0;
          opacity: 0.9;
          font-size: clamp(16px, 2.2vw, 18px);
          line-height: 1.5;
          max-width: 820px;
        }
        .grid .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }
        .card {
          display: block;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          padding: 18px;
          text-decoration: none;
          color: ${colors.vintageCream};
          background: #121212;
          transition: border-color 0.15s ease, background 0.15s ease, transform 0.05s ease;
        }
        .card:hover {
          border-color: ${colors.outlawRed};
          background: #171717;
          transform: translateY(-1px);
        }
        .card h2 {
          margin: 0 0 6px 0;
          font-size: clamp(18px, 2.2vw, 22px);
        }
        .card p {
          margin: 0;
          opacity: 0.9;
          font-size: 14px;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
}
