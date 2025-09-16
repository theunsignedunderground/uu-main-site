// pages/playlists.js
import Head from "next/head";
import React from "react";
import colors from "../styles/colors";

export default function PlaylistsPage() {
  return (
    <>
      <Head>
        <title>Playlists — The Unsigned Underground</title>
        <meta
          name="description"
          content="Guaranteed inclusion on UU’s curated, genre-specific playlists as part of your membership—no pay-to-play. Clear swap policy, state-by-state rollout, and community-first growth."
        />
      </Head>

      <main>
        {/* Hero */}
        <section className="hero">
          <h1>Curated Playlists</h1>
          <p className="lede">
            Get heard on UU’s curated, genre-specific playlists. Inclusion is part of your membership
            — <strong>no pay-to-play</strong> — with a clear swap policy that protects quality and keeps costs low.
          </p>

          <div className="actions">
            <a className="btn solid" href="/pricing">See Packages & Pricing</a>
          </div>
        </section>

        {/* What this is */}
        <section className="block">
          <h2>What You Get</h2>
          <ul className="list">
            <li><strong>Guaranteed inclusion</strong> on a UU curated playlist aligned to your genre and state.</li>
            <li><strong>Editorial curation</strong>—we sequence tracks for discovery, saves, and session length.</li>
            <li><strong>Community-first</strong> model: we start where you live, then expand city by city.</li>
          </ul>
          <div className="mock">[Screenshot placeholder: Playlist cover + track list mock]</div>
        </section>

        {/* No pay-to-play + swap policy */}
        <section className="block">
          <h2>No Pay-to-Play. Clear Swap Policy.</h2>
          <p>
            With The Unsigned Underground, playlist inclusion is part of your membership—no shady fees and no pay-to-play.
            Your <strong>first song</strong> gets placed when you join. If you want to change that song later, we do charge
            a small <strong>song-swap service</strong> fee. This prevents constant churn that would degrade quality and
            drive up costs for everyone.
          </p>
          <ul className="list">
            <li><strong>Included:</strong> initial placement of one song on your genre/state playlist.</li>
            <li><strong>Optional add-on:</strong> swap your playlist song later (service fee applies).</li>
            <li><strong>Why:</strong> keeps curation stable, protects listener trust, and sustains low platform costs.</li>
          </ul>
        </section>

        {/* Rollout model */}
        <section className="block">
          <h2>Rollout: State → Region → City</h2>
          <p>
            We launch playlists where we’re active and where artist density justifies great discovery. We start with{" "}
            <strong>state-level</strong> playlists by genre, then expand to regional and city-level lists as local
            artist counts grow. Quality first, then scale—so your placement actually gets heard.
          </p>
          <ul className="list">
            <li><strong>Phase 1:</strong> State-level genre playlists where UU is active.</li>
            <li><strong>Phase 2:</strong> Regional lists as artist numbers grow.</li>
            <li><strong>Phase 3:</strong> City-level playlists for deep local discovery.</li>
          </ul>
          <div className="note">
            Note: To keep Showcase Sites clean and fast, <strong>no playlist links or embeds</strong> appear on artist
            pages. Playlist marketing lives on UU’s main site and Talent Scout pages.
          </div>
        </section>

        {/* How it works */}
        <section className="block">
          <h2>How It Works</h2>
          <ol className="steps">
            <li><strong>Join UU:</strong> pick your plan and complete onboarding.</li>
            <li><strong>Submit your track:</strong> we place your first song on the right genre/state playlist.</li>
            <li><strong>Promote:</strong> we share the playlist; you drive fans to follow, save, and share.</li>
            <li><strong>Optional swap:</strong> want to feature a different single later? Request a swap (service fee applies).</li>
          </ol>
        </section>

        {/* Benefits */}
        <section className="block">
          <h2>Why This Helps You Grow</h2>
          <ul className="list">
            <li><strong>Real discovery:</strong> curated sequencing improves saves and repeat listens.</li>
            <li><strong>Algorithm assist:</strong> consistent engagement helps platform algos find your fans.</li>
            <li><strong>Local momentum:</strong> community-first rollout prioritizes the listeners most likely to show up.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="block">
          <h2>FAQ</h2>
          <ul className="list">
            <li>
              <strong>Is this pay-to-play?</strong> No. Your initial placement is included with membership. Only optional <em>swaps</em> have a service fee.
            </li>
            <li>
              <strong>Can I be on more than one playlist?</strong> We prioritize the best match (genre + state). As regions/cities unlock, we may surface you there too.
            </li>
            <li>
              <strong>Do you accept every track?</strong> Yes for initial placement (within genre guidelines). We maintain sequencing and order to protect quality.
            </li>
            <li>
              <strong>Why not link playlists on Showcase Sites?</strong> It clutters the fan experience on your page. We promote playlists from UU’s main site and Talent Scout pages instead.
            </li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="block cta">
          <div className="ctaWrap">
            <a className="btn solid" href="/pricing">Join & Get Playlist Placement</a>
          </div>
        </section>
      </main>

      <style jsx>{`
        main { color: ${colors.vintageCream}; background: ${colors.black}; }
        .hero {
          min-height: 70vh; display: grid; place-items: center; text-align: center;
          padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px);
          border-bottom: 2px solid ${colors.outlawRed};
        }
        .lede { max-width: 900px; margin: 0 auto; opacity: 0.95; }
        .actions { margin-top: 16px; display:flex; justify-content:center; }
        .btn {
          font-size: clamp(16px, 1.8vw, 20px);
          padding: 12px 18px; border-radius: 12px; text-decoration:none;
          border: 2px solid ${colors.outlawRed}; color: ${colors.vintageCream};
          background: ${colors.outlawRed};
          transition: all 0.15s ease;
        }
        .btn:hover { background: transparent; color: ${colors.vintageCream}; }

        .block { max-width:1100px; margin:0 auto; padding: clamp(44px, 6vw, 72px) clamp(20px, 4vw, 40px); }
        h2 { font-size: clamp(26px, 3vw, 40px); margin: 0 0 12px; }
        .list { font-size: clamp(18px, 2vw, 20px); line-height: 1.6; padding-left: 1.1em; }
        .list li + li { margin-top: 8px; }

        .note {
          margin-top: 12px; padding: 12px 14px; border: 1px dashed ${colors.outlawRed};
          border-radius: 10px; background: #121212; opacity: 0.95;
        }

        .steps { counter-reset: step; list-style: none; padding-left: 0; margin: 10px 0 0; }
        .steps li {
          position: relative; padding-left: 36px; margin: 10px 0; line-height: 1.6;
        }
        .steps li::before {
          counter-increment: step; content: counter(step);
          position: absolute; left: 0; top: 0; width: 26px; height: 26px;
          border-radius: 50%; border: 1px solid ${colors.outlawRed};
          display: grid; place-items: center; font-size: 12px;
        }

        .ctaWrap { display:flex; justify-content:center; }
        .mock {
          height: clamp(220px, 36vw, 380px);
          border: 2px dashed ${colors.outlawRed};
          border-radius:14px; display:grid; place-items:center; opacity:.9; margin-top: 12px;
        }
      `}</style>
    </>
  );
}
