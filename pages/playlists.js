import Head from "next/head";

export default function Playlists() {
  return (
    <>
      <Head>
        <title>Playlists — The Unsigned Underground</title>
        <meta name="description" content="Curated playlist inclusion by genre and state as we roll out — no pay-to-play, artist-first." />
      </Head>

      <main>
        <section className="hero">
          <h1>Curated Playlists</h1>
          <p>Guaranteed inclusion on UU’s curated Spotify playlists by genre and state as we roll them out — no pay-to-play.</p>
          <div className="actions">
            <a className="btn solid" href="/pricing#annual">Included with Full Package</a>
            <a className="btn outline" href="/pricing#pr">PR + Playlists (No Site)</a>
          </div>
        </section>

        <section className="block">
          <h2>How it helps</h2>
          <ul className="list">
            <li>State-level playlists grow fast with local discovery.</li>
            <li>Genre filtering ensures your track sits beside the right artists.</li>
            <li>Placement is part of your PR rollout and Showcase presence.</li>
          </ul>
        </section>

        <section className="block">
          <h3>What we manage</h3>
          <ul className="list">
            <li>Playlist submissions & slots aligned to your city/genre rollout.</li>
            <li>No third-party “pay for placement” schemes — artist-first.</li>
            <li>Clear guidelines for what to submit and when.</li>
          </ul>
        </section>

        <section className="block">
          <div className="mock">Playlist grid / artwork preview here</div>
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
  .hero h1 { font-size: clamp(34px, 4.2vw, 56px); margin: 0 0 10px; line-height: 1.12; }
  .hero p { font-size: clamp(18px, 2vw, 22px); line-height: 1.55; max-width: 820px; margin: 0 auto 18px; color: #f5eede; }
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
`;
