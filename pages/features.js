import Head from "next/head";

export default function ShowcaseFeatures() {
  return (
    <>
      <Head>
        <title>Showcase Site — The Unsigned Underground</title>
        <meta name="description" content="Your Custom Showcase Site: beautiful, search-optimized, and built to convert fans and gigs." />
      </Head>

      <main>
        {/* HERO */}
        <section className="hero">
          <h1>Your Custom Showcase Site</h1>
          <p>Beautiful, search-optimized, better than a website — your music, photos, shows, and story in one place.</p>
          <div className="actions">
            <a className="btn solid" href="/pricing#annual">See Annual Plan</a>
            <a className="btn outline" href="/pricing#monthly">See Monthly Plan</a>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="block">
          <h2>Why it matters</h2>
          <ul className="list">
            <li><strong>Built for discovery:</strong> City-focused SEO helps locals find you first.</li>
            <li><strong>Press-ready hub:</strong> Link your EPK, music, videos, photos, and shows.</li>
            <li><strong>Frictionless edits:</strong> Gig calendar and easy photo updates.</li>
          </ul>
        </section>

        {/* VISUAL */}
        <section className="block">
          <h3>What it looks like</h3>
          <div className="mock">Showcase preview image / video goes here</div>
        </section>

        {/* INCLUDED */}
        <section className="block">
          <h2>What’s included</h2>
          <ul className="list">
            <li>Custom Showcase layout (hero, bio, music embeds, photo gallery)</li>
            <li>Gig calendar + easy photo updates</li>
            <li>Press section for your article & interview</li>
            <li>Contact & social links, pre-save / pre-order blocks</li>
          </ul>
        </section>
      </main>

      <style jsx>{styles}</style>
    </>
  );
}

const colors = { outlawRed: "#e11d2e", vintageCream: "#fdf5e6", black: "#000" };

const styles = `
  :root{ --s: 1; }
  main { color: ${colors.vintageCream}; background: ${colors.black}; }

  .hero {
    min-height: 88vh;
    display: grid; place-items: center;
    text-align: center;
    padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px);
    border-bottom: 2px solid ${colors.outlawRed};
  }
  .hero h1 { font-size: clamp(34px, 4.2vw, 56px); line-height: 1.12; margin: 0 0 10px; }
  .hero p  { font-size: clamp(18px, 2vw, 22px); line-height: 1.55; max-width: 820px; margin: 0 auto 18px; color: #f5eede; }

  .actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .btn { font-size: clamp(16px, 1.8vw, 20px); padding: 12px 18px; border-radius: 12px; text-decoration: none; }
  .btn.solid { background: ${colors.outlawRed}; color: ${colors.vintageCream}; border: 2px solid ${colors.outlawRed}; }
  .btn.outline { color: ${colors.vintageCream}; border: 2px solid ${colors.outlawRed}; }

  .block { max-width: 1100px; margin: 0 auto; padding: clamp(44px, 6vw, 72px) clamp(20px, 4vw, 40px); }
  .block h2 { font-size: clamp(26px, 3vw, 40px); line-height: 1.18; margin: 0 0 12px; }
  .block h3 { font-size: clamp(22px, 2.6vw, 32px); margin: 0 0 10px; }

  .list { font-size: clamp(18px, 2vw, 20px); line-height: 1.6; padding-left: 1.1em; }
  .list li + li { margin-top: 8px; }

  .mock {
    height: clamp(220px, 40vw, 420px);
    border: 2px dashed ${colors.outlawRed};
    border-radius: 14px;
    display: grid; place-items: center; color: ${colors.vintageCream};
    opacity: 0.9;
  }
`;
