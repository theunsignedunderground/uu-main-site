// pages/press.js
import Head from "next/head";
import React from "react";
import colors from "../styles/colors";

export default function PRAndArticlesPage() {
  return (
    <>
      <Head>
        <title>PR & Articles — The Unsigned Underground</title>
        <meta
          name="description"
          content="Press releases, written articles, and interviews—crafted by The Unsigned Underground Team and published to genre blogs to level up your credibility and reach."
        />
      </Head>

      <main>
        {/* Hero */}
        <section className="hero">
          <h1>PR & Articles</h1>
          <p className="lede">
            Get taken seriously by fans, bookers, and media. Our team crafts your{" "}
            press release, writes your feature article, and (optionally) conducts an interview—
            then publishes to a genre-specific Music Magazine blog to amplify your reach.
          </p>

          {/* CTAs you liked (kept same style) */}
          <div className="actions">
            <a className="btn solid" href="/pricing">See Packages & Pricing</a>
            <a className="btn outline" href="/artist-manager">Learn More About Our System</a>
          </div>
        </section>

        {/* Press Release */}
        <section className="block">
          <h2>Press Release (New Single / EP / Tour)</h2>
          <p>
            A professionally written announcement that frames your release or tour with the right story
            and facts (who, what, when, where, why). Designed for media inboxes and your own channels
            (website, socials, EPK, email list).
          </p>
          <ul className="list">
            <li><strong>Why you need it:</strong> It’s the standard format media expect—and the fastest way to look pro.</li>
            <li><strong>How it levels you up:</strong> Clear narrative + quotes + links = more pickups, better first impressions.</li>
            <li><strong>Where it goes:</strong> Your City Showcase Site, social posts, email blast, and your press folder for future pitches.</li>
          </ul>

          {/* Placeholder area for screenshots (no icons per your guidance) */}
          <div className="mock">[Screenshot placeholder: Press Release sample]</div>
        </section>

        {/* Written Article */}
        <section className="block">
          <h2>Written Article (Feature on You)</h2>
          <p>
            A magazine-style piece about your artistry and current release cycle—crafted to hook fans and
            give bookers and media an easy story to run with.
          </p>
          <ul className="list">
            <li><strong>Why you need it:</strong> It’s your story—told well. Converts casual listeners into fans.</li>
            <li><strong>Level-up effect:</strong> Credibility, shareability, and longer on-page time than press releases.</li>
            <li><strong>Published on:</strong> Your genre’s Music Magazine blog (UU network), then linked from your City Showcase Site.</li>
          </ul>
          <div className="mock">[Screenshot placeholder: Article layout on genre blog]</div>
        </section>

        {/* Artist/Band Interview */}
        <section className="block">
          <h2>Artist/Band Interview</h2>
          <p>
            Our Unsigned Underground Team will conduct the interview and produce a readable, skimmable Q&A
            that surfaces your best talking points.
          </p>
          <ul className="list">
            <li><strong>Why it matters:</strong> Third-party validation and quotable soundbites you can reuse everywhere.</li>
            <li><strong>Unique to UU:</strong> Your interview can run on your genre’s Music Magazine blog for added exposure.</li>
          </ul>
          <div className="mock">[Screenshot placeholder: Interview Q&A feature]</div>
        </section>

        {/* The Genre Blog Advantage */}
        <section className="block">
          <h2>Your Genre’s Music Magazine Blog (UU Network)</h2>
          <p>
            Every PR piece (press release, article, interview) can be posted to a genre-specific UU blog. No other platform
            provides this exact combo for unsigned artists. This puts you head-and-shoulders above peers.
          </p>
          <ul className="list">
            <li><strong>Real benefits:</strong> Shareable links, SEO value, and a place to point bookers/press that isn’t just socials.</li>
            <li><strong>Cross-linking:</strong> We link from your article to your City Showcase Site (and vice versa) to boost discovery.</li>
            <li><strong>Fan growth:</strong> Blog readers discover you by genre; you capture them with your Showcase and socials.</li>
          </ul>
          <div className="mock">[Screenshot placeholder: Blog index + article page]</div>
        </section>

        {/* What’s Included / Deliverables */}
        <section className="block">
          <h2>What’s Included</h2>
          <ul className="list">
            <li>Professional writing/editing by The Unsigned Underground Team (no AI mentioned; we do the interview).</li>
            <li>Publication on your genre’s UU Music Magazine blog when applicable.</li>
            <li>Cross-linking with your City Showcase Site (press room section).</li>
            <li>Ready-to-use assets (PDF/Doc for press release, shareable blog link for article/interview).</li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="block">
          <h2>How It Works</h2>
          <ol className="steps">
            <li><strong>Kickoff:</strong> You provide your release details, photos, links, and notes.</li>
            <li><strong>Draft:</strong> We craft your piece (press release, article, or interview Q&A) and send for approval.</li>
            <li><strong>Publish:</strong> We publish to the genre blog (as applicable) and add it to your Showcase press room.</li>
            <li><strong>Promote:</strong> You share the link across socials, email, and pitches.</li>
          </ol>
        </section>

        {/* Final CTA row */}
        <section className="block cta">
          <div className="ctaWrap">
            <a className="btn solid" href="/pricing">Choose Your PR Package</a>
            <a className="btn outline" href="/artist-manager">See How It Fits Your Plan</a>
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
        .actions { margin-top: 16px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .btn {
          font-size: clamp(16px, 1.8vw, 20px);
          padding: 12px 18px; border-radius: 12px; text-decoration:none;
          border: 2px solid ${colors.outlawRed}; color: ${colors.vintageCream};
          transition: all 0.15s ease;
        }
        .btn.solid { background: ${colors.outlawRed}; }
        .btn.solid:hover { background: transparent; }
        .btn.outline { background: transparent; }
        .btn.outline:hover { background: ${colors.outlawRed}; }

        .block { max-width:1100px; margin:0 auto; padding: clamp(44px, 6vw, 72px) clamp(20px, 4vw, 40px); }
        h2 { font-size: clamp(26px, 3vw, 40px); margin: 0 0 12px; }
        .list { font-size: clamp(18px, 2vw, 20px); line-height: 1.6; padding-left: 1.1em; }
        .list li + li { margin-top: 8px; }
        .mock {
          height: clamp(220px, 36vw, 380px);
          border: 2px dashed ${colors.outlawRed};
          border-radius:14px; display:grid; place-items:center; opacity:.9;
          margin-top: 12px;
        }

        .steps {
          counter-reset: step; list-style: none; padding-left: 0; margin: 10px 0 0;
        }
        .steps li {
          position: relative; padding-left: 36px; margin: 10px 0; line-height: 1.6;
        }
        .steps li::before {
          counter-increment: step; content: counter(step);
          position: absolute; left: 0; top: 0; width: 26px; height: 26px;
          border-radius: 50%; border: 1px solid ${colors.outlawRed};
          display: grid; place-items: center; font-size: 12px;
        }

        .cta { padding-top: 0; }
        .ctaWrap { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
      `}</style>
    </>
  );
}
