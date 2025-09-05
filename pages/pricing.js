// pages/pricing.js
import Head from "next/head";
import { useState } from "react";

export default function Pricing() {
  const [loading, setLoading] = useState(null); // 'annual' | 'monthly' | 'fast_track' | null
  const [error, setError] = useState("");

  async function go(plan) {
    try {
      setError("");
      setLoading(plan);
      const res = await fetch("/api/checkout/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }), // 'annual' | 'monthly' | 'fast_track'
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data?.error?.message || "Checkout error");
      }
    } catch (e) {
      console.error(e);
      setError(e.message);
      setLoading(null);
    }
  }

  return (
    <>
      <Head>
        <title>Pricing — The Unsigned Underground</title>
        <meta
          name="description"
          content="Choose a plan: Annual, Monthly, or Fast Track (PR + Playlists). Artist-first, no pay-to-play."
        />
      </Head>

      <main>
        {/* HERO */}
        <section className="hero">
          <h1>Choose your plan</h1>
          <p>
            Launch with a full package, roll monthly, or use Fast Track for PR + Playlists without a site.
          </p>
        </section>

        {/* PLANS */}
        <section className="grid">
          {/* Annual */}
          <article className="card" id="annual">
            <header className="cardHead">
              <h2>Annual Plan</h2>
              <p className="tag">Best value</p>
            </header>

            <ul className="list">
              <li>Custom Showcase Site (beautiful, search-optimized)</li>
              <li>Press release + premium feature article</li>
              <li>Optional artist interview for the blog magazine</li>
              <li>Guaranteed placement on UU curated playlists*</li>
              <li>Members-only Artist Manager (guides, tools, templates)</li>
            </ul>

            <div className="ctaRow">
              <button
                className="btn solid"
                onClick={() => go("annual")}
                disabled={loading === "annual"}
                aria-disabled={loading === "annual"}
              >
                {loading === "annual" ? "Redirecting…" : "Choose Annual"}
              </button>
              <a className="btn ghost" href="#monthly">Prefer monthly?</a>
            </div>
          </article>

          {/* Monthly */}
          <article className="card" id="monthly">
            <header className="cardHead">
              <h2>Monthly Plan</h2>
              <p className="tag">Same features</p>
            </header>

            <ul className="list">
              <li>Everything in Annual, billed monthly</li>
              <li>Cancel any time; keep ownership of your content</li>
              <li>Easy upgrade to Annual later</li>
            </ul>

            <div className="ctaRow">
              <button
                className="btn solid"
                onClick={() => go("monthly")}
                disabled={loading === "monthly"}
                aria-disabled={loading === "monthly"}
              >
                {loading === "monthly" ? "Redirecting…" : "Choose Monthly"}
              </button>
              <a className="btn ghost" href="#annual">See Annual</a>
            </div>
          </article>

          {/* Fast Track (PR + Playlists, no site) */}
          {/* Keep the anchor id as "pr" because your header links to /pricing#pr */}
          <article className="card" id="pr">
            <header className="cardHead">
              <h2>Fast Track — PR + Playlists</h2>
              <p className="tag">No site needed</p>
            </header>

            <ul className="list">
              <li>Professional press release</li>
              <li>Premium feature article on our music blog</li>
              <li>Optional artist interview</li>
              <li>Guaranteed placement on UU curated playlists*</li>
              <li>Delivery files for your existing website & socials</li>
            </ul>

            <div className="ctaRow">
              <button
                className="btn solid"
                onClick={() => go("fast_track")}
                disabled={loading === "fast_track"}
                aria-disabled={loading === "fast_track"}
              >
                {loading === "fast_track" ? "Redirecting…" : "Choose Fast Track"}
              </button>
              <a className="btn ghost" href="/features">What’s included?</a>
            </div>
          </article>
        </section>

        {/* NOTES */}
        <section className="notes">
          <p className="fine">
            * Playlists: State-by-state rollout with genre filtering; no pay-to-play. Placement included with eligible plans.
          </p>
          <p className="fine">
            After checkout you’ll receive access instructions for your dashboard and deliverables.
          </p>
        </section>

        {/* ERROR */}
        {error ? <div className="error">⚠️ {error}</div> : null}
      </main>

      <style jsx>{`
        :root { --w: 1200px; }
        main { color: #fdf5e6; background: #000; }

        .hero {
          min-height: 60vh;
          display: grid;
          place-items: center;
          text-align: center;
          padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px);
          border-bottom: 2px solid #e11d2e;
        }
        .hero h1 {
          font-size: clamp(34px, 4.2vw, 56px);
          line-height: 1.12;
          margin: 0 0 10px;
        }
        .hero p {
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.55;
          max-width: 820px;
          margin: 0 auto;
          color: #f5eede;
        }

        .grid {
          max-width: var(--w);
          margin: 0 auto;
          padding: clamp(32px, 5vw, 60px) clamp(20px, 4vw, 40px);
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 3vw, 28px);
        }
        @media (min-width: 980px) {
          .grid { grid-template-columns: 1fr 1fr 1fr; }
        }

        .card {
          border: 1px solid #2b2b2b;
          border-radius: 16px;
          background: #0b0b0b;
          padding: clamp(20px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .cardHead { border-bottom: 1px solid #1b1b1b; padding-bottom: 10px; }
        .card h2 { font-size: clamp(22px, 2.6vw, 30px); margin: 0 0 6px; }
        .tag {
          display: inline-block;
          font-size: clamp(12px, 1.6vw, 14px);
          letter-spacing: 0.3px;
          color: #fdf5e6;
          background: #e11d2e;
          border: 1px solid #e11d2e;
          padding: 4px 8px;
          border-radius: 999px;
        }

        .list {
          font-size: clamp(16px, 1.9vw, 18px);
          line-height: 1.6;
          padding-left: 1.1em;
          margin: 0;
        }
        .list li + li { margin-top: 6px; }

        .ctaRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .btn {
          font-size: clamp(16px, 1.8vw, 20px);
          padding: 12px 18px;
          border-radius: 12px;
          text-decoration: none;
          cursor: pointer;
        }
        .btn.solid {
          background: #e11d2e;
          color: #fdf5e6;
          border: 2px solid #e11d2e;
        }
        .btn.ghost {
          background: transparent;
          color: #fdf5e6;
          border: 1px solid #e11d2e;
        }
        .btn[aria-disabled="true"] { opacity: 0.7; cursor: default; }

        .notes {
          max-width: var(--w);
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 40px) clamp(40px, 6vw, 80px);
        }
        .fine {
          font-size: clamp(12px, 1.6vw, 14px);
          color: #d9d3c7;
          margin: 6px 0;
        }

        .error {
          max-width: var(--w);
          margin: 0 auto clamp(40px, 6vw, 80px);
          color: #ffbdbd;
          background: #2a0004;
          border: 1px solid #e11d2e;
          padding: 12px 16px;
          border-radius: 12px;
        }
      `}</style>
    </>
  );
}
