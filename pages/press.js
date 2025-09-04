import Head from "next/head";

export default function PRArticles() {
  return (
    <>
      <Head>
        <title>PR & Articles — The Unsigned Underground</title>
        <meta name="description" content="Professional press release, premium feature article, and optional interview—delivered to help you get seen and heard." />
      </Head>

      <main>
        <section className="hero">
          <h1>PR & Articles</h1>
          <p>Professional press release, premium feature article, and optional interview — written to showcase your story and music.</p>
          <div className="actions">
            <a className="btn solid" href="/pricing#annual">Get the Full Package</a>
            <a className="btn outline" href="/pricing#pr">PR + Playlists (No Site)</a>
          </div>
        </section>

        <section className="block">
          <h2>What you get</h2>
          <ul className="list">
            <li><strong>Press Release:</strong> news-ready copy with quotes, credits, and links.</li>
            <li><strong>Feature Article:</strong> magazine-style writeup on our music blog.</li>
            <li><strong>Optional Interview:</strong> Q&A that dives into your process and story.</li>
            <li><strong>Delivery Files:</strong> copy in shareable formats so you can post on your own site.</li>
          </ul>
        </section>

        <section className="block">
          <h3>How delivery works</h3>
          <ul className="list">
            <li>We draft and publish on the UU music blog (magazine coverage).</li>
            <li>We provide the final text and assets for your website & socials.</li>
            <li>Your Showcase Site (if included) features these pieces automatically.</li>
          </ul>
        </section>

        <section className="block">
          <div className="mock">Article / press layout preview here</div>
        </section>
      </main>

      <style jsx>{styles}</style>
    </>
  );
}

const colors = { outlawRed: "#e11d2e", vintageCream: "#fdf5e6", black: "#000" };
const styles = `
  main { color: ${colors.vintageCream}; background: ${colors.black}; }
  .hero { min-height: 88vh; display: grid; place-items: center; text-align: center;
    padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px); border-bottom: 2px solid ${colors.outlawRed}; }
  .hero h1 { font-size: clamp(34px, 4.2vw, 56px); line-height: 1.12; margin: 0 0 10px; }
  .hero p { font-size: clamp(18px, 2vw, 22px); line-height: 1.55; max-width: 820px; margin: 0 auto 18px; color: #f5eede; }
  .actions { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
  .btn { font-size: clamp(16px, 1.8vw, 20px); padding: 12px 18px; border-radius: 12px; text-decoration:none; }
  .btn.solid { background:${colors.outlawRed}; color:${colors.vintageCream}; border:2px solid ${colors.outlawRed}; }
  .btn.outline { color:${colors.vintageCream}; border:2px solid ${colors.outlawRed}; }
  .block { max-width:1100px; margin:0 auto; padding: clamp(44px, 6vw, 72px) clamp(20px, 4vw, 40px); }
  .block h2 { font-size: clamp(26px, 3vw, 40px); margin: 0 0 12px; }
  .block h3 { font-size: clamp(22px, 2.6vw, 32px); margin: 0 0 10px; }
  .list { font-size: clamp(18px, 2vw, 20px); line-height: 1.6; padding-left:1.1em; }
  .list li + li { margin-top: 8px; }
  .mock { height: clamp(220px, 40vw, 420px); border: 2px dashed ${colors.outlawRed}; border-radius:14px; display:grid; place-items:center; opacity:.9; }
`;
