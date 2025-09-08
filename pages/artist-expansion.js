// pages/artist-expansion.js
import Head from "next/head";

export default function ArtistExpansion() {
  const extras = [
    {
      key: "press_addon",
      title: "New Press Release",
      tagline: "One-time purchase",
      why: "Announce a new single, tour, or milestone with a fresh, news-ready release.",
      cta: "Coming Soon",
    },
    {
      key: "article_addon",
      title: "New Feature Article",
      tagline: "One-time purchase",
      why: "Get an additional magazine-style write-up for momentum or a new campaign.",
      cta: "Coming Soon",
    },
    {
      key: "interview_addon",
      title: "Artist Interview",
      tagline: "One-time purchase",
      why: "Deep-dive Q&A to showcase your story and creative process.",
      cta: "Coming Soon",
    },
    {
      key: "song_swap",
      title: "Playlist Song Swap",
      tagline: "One-time purchase",
      why: "Swap your current playlist track for your newest release to keep it fresh.",
      cta: "Coming Soon",
    },
    {
      key: "extra_showcase",
      title: "Additional Showcase Site",
      tagline: "One-time setup",
      why: "Expand into another city/market with an extra Showcase (great for bands).",
      cta: "Coming Soon",
    },
  ];

  return (
    <>
      <Head>
        <title>Artist Expansion Services — The Unsigned Underground</title>
        <meta
          name="description"
          content="Explore additional one-time services to expand your reach: press, articles, interviews, song swaps, and more."
        />
      </Head>

      <main>
        <section className="wrap">
          <h1>Artist Expansion Services</h1>
          <p className="lead">
            One-time add-ons designed to help you expand your reach, boost your PR, and keep your profile fresh.
          </p>

          <div className="grid">
            {extras.map((x) => (
              <div key={x.key} className="card" aria-disabled="true">
                <div className="cardTop">
                  <h2>{x.title}</h2>
                  <span className="tag">{x.tagline}</span>
                </div>
                <p className="why">{x.why}</p>
                <div className="ctaRow">
                  <span className="btn disabled">{x.cta}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="fine">
            These services will soon be available for one-time purchase. Pricing and checkout coming shortly.
          </p>
        </section>
      </main>

      <style jsx>{`
        :root { --w: 1100px; }
        main { background: #000; color: #fdf5e6; min-height: 100vh; }
        .wrap { max-width: var(--w); margin: 0 auto; padding: 48px 20px 80px; }
        h1 { margin: 0 0 8px; font-size: clamp(26px, 3.2vw, 40px); line-height: 1.15; }
        .lead { color: #f5eede; margin: 0 0 16px; font-size: clamp(16px, 1.9vw, 20px); }
        .grid {
          display: grid; gap: 16px; grid-template-columns: 1fr;
          margin-top: 12px;
        }
        @media (min-width: 900px) {
          .grid { grid-template-columns: 1fr 1fr; }
        }
        .card {
          border: 1px solid #2b2b2b; background: #0b0b0b; border-radius: 14px;
          padding: 16px; text-align: left;
          transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
          opacity: 0.8;
        }
        .cardTop {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          margin-bottom: 6px;
        }
        h2 { margin: 0; font-size: clamp(20px, 2.6vw, 28px); }
        .tag {
          display: inline-block; font-size: 12px; letter-spacing: .3px;
          color: #fdf5e6; background: #e11d2e; border: 1px solid #e11d2e;
          padding: 4px 8px; border-radius: 999px; white-space: nowrap;
        }
        .why { margin: 8px 0 12px; color: #eae3d7; line-height: 1.55; font-size: 16px; }
        .ctaRow { display: flex; }
        .btn {
          display: inline-block; font-size: 16px; padding: 10px 14px;
          border-radius: 12px; border: 2px solid #e11d2e; color: #fdf5e6;
          background: transparent; opacity: 0.6;
        }
        .btn.disabled { cursor: not-allowed; }
        .fine { margin-top: 16px; color: #d9d3c7; font-size: 12px; }
      `}</style>
    </>
  );
}
