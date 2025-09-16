// pages/dashboard/index.js
import Head from "next/head";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import colors from "../../styles/colors";

export default function Dashboard() {

  const tiles = [
    {
      href: "/artist-expansion",
      title: "Artist Expansion Services",
      desc: "One-time add-ons: new press release, feature article, interview, song swap, and more.",
      highlight: true, // draws extra attention
    },
    {
      href: "/features",
      title: "Showcase Site",
      desc: "Manage the core elements of your public-facing Showcase.",
    },
    {
      href: "/press",
      title: "PR & Articles",
      desc: "Review your press assets and plan your next announcement.",
    },
    {
      href: "/playlists",
      title: "Playlists",
      desc: "Learn how placements work and best practices to grow saves.",
    },
    {
     href: "/dashboard/artist-manager",
      title: "Artist Manager",
      desc: "Guides, tools, and templates to level up your release cycle.",
    },
  ];

  return (
    <>
      <Head>
        <title>Artist Dashboard — The Unsigned Underground</title>
        <meta name="description" content="Your Unsigned Underground dashboard." />
      </Head>

      <main>
        {/* Signed-out safety (middleware should gate already, but this is friendly) */}
        <SignedOut>
          <section className="wrap">
            <div className="card">
              <h1>Please sign in</h1>
              <p className="lead">
                This page is for members only. <a href="/sign-in">Sign in</a> to continue.
              </p>
            </div>
          </section>
        </SignedOut>

        <SignedIn>
          <section className="wrap">
            <header className="hero">
              <h1>Artist Dashboard</h1>
              <p className="lead">
                Manage your presence, plan PR, and access members-only tools. Need more firepower?
                Head to <a href="/artist-expansion">Artist Expansion Services</a>.
              </p>
            </header>

            <div className="grid">
              {tiles.map((t) => (
                <a key={t.title} href={t.href} className={`tile ${t.highlight ? "hl" : ""}`}>
                  <div className="tileHead">
                    <h2>{t.title}</h2>
                    {t.highlight && <span className="tag">Members-only</span>}
                  </div>
                  <p className="desc">{t.desc}</p>
                </a>
              ))}
            </div>
          </section>
        </SignedIn>
      </main>

      <style jsx>{`
        :root { --w: 1100px; }
        main { background: #000; color: #fdf5e6; min-height: 100vh; }
        .wrap { max-width: var(--w); margin: 0 auto; padding: 48px 20px 80px; }

        .hero { margin-bottom: 16px; }
        .hero h1 { margin: 0 0 6px; font-size: clamp(26px, 3.2vw, 40px); line-height: 1.15; }
        .lead { color: #f5eede; margin: 0; font-size: clamp(16px, 1.9vw, 20px); }
        .lead a { color: ${colors.vintageCream}; border-bottom: 1px solid ${colors.outlawRed}; text-decoration: none; }

        .grid {
          margin-top: 18px;
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .grid { grid-template-columns: 1fr 1fr; }
        }

        .tile {
          border: 1px solid #2b2b2b;
          background: #0b0b0b;
          border-radius: 14px;
          padding: 16px;
          text-decoration: none;
          color: ${colors.vintageCream};
          transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
        }
        .tile:hover {
          transform: translateY(-2px);
          border-color: ${colors.outlawRed};
          box-shadow: 0 10px 24px rgba(225, 29, 46, 0.18);
        }
        .tile.hl {
          border: 2px solid ${colors.outlawRed};
          box-shadow: 0 12px 28px rgba(225, 29, 46, 0.22);
        }

        .tileHead {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 6px;
        }
        h2 { margin: 0; font-size: clamp(20px, 2.6vw, 28px); }
        .tag {
          display: inline-block;
          font-size: 12px;
          letter-spacing: .3px;
          color: ${colors.vintageCream};
          background: ${colors.outlawRed};
          border: 1px solid ${colors.outlawRed};
          padding: 4px 8px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .desc { margin: 8px 0 0; color: #eae3d7; line-height: 1.55; font-size: 16px; }

        /* generic card used for signed-out message */
        .card {
          border: 1px solid #2b2b2b;
          background: #0b0b0b;
          border-radius: 14px;
          padding: 16px;
        }
      `}</style>
    </>
  );
}
