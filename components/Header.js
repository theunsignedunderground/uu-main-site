import { useState } from "react";

export default function Header() {
  // One simple knob to tweak overall size if needed (1.0 = default)
  const SCALE = 1.0;

  const [open, setOpen] = useState(null); // 'pricing' | 'features' | null

  return (
    <>
      <header className="header">
        <div className="inner">
          <a className="logo" href="/">The Unsigned Underground</a>

          <nav className="nav">
            <a className="navItem" href="#how-it-works">How it works</a>

            <div
              className="dropdown"
              onMouseEnter={() => setOpen("pricing")}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="navItem btnLike" onClick={() => setOpen(open ? null : "pricing")}>
                Pricing ▾
              </button>
              {open === "pricing" && (
                <div className="panel">
                  <a className="dropLink" href="#annual">Annual Plan</a>
                  <a className="dropLink" href="#monthly">Monthly Plan</a>
                  <a className="dropLink" href="#pr-only">PR + Playlists</a>
                </div>
              )}
            </div>

            <a className="navItem" href="#features">Features</a>
            <a className="cta" href="#get-started">Get Started</a>
          </nav>
        </div>
      </header>

      <style jsx>{`
        /* sizing tokens (component-scoped) */
        :root {
          --scale: ${SCALE};
          --h: calc(76px * var(--scale));             /* header height */
          --fs-nav: calc(18px * var(--scale));        /* nav font size */
          --fs-logo: calc(22px * var(--scale));       /* logo font size */
          --pad-x: calc(18px * var(--scale));         /* horizontal padding */
          --pad-y: calc(10px * var(--scale));         /* vertical padding */
          --gap: calc(22px * var(--scale));           /* gap between nav items */
          --radius: calc(12px * var(--scale));
          --panel-w: calc(300px * var(--scale));      /* dropdown width */
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #fff;
          border-bottom: 1px solid #eee;
          height: var(--h);
          display: flex;
          align-items: center;
        }

        .inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 calc(20px * var(--scale));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: calc(16px * var(--scale));
        }

        .logo {
          font-size: var(--fs-logo);
          font-weight: 800;
          text-decoration: none;
          color: #111;
          letter-spacing: 0.2px;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: var(--gap);
        }

        .navItem {
          font-size: var(--fs-nav);
          color: #111;
          text-decoration: none;
          padding: var(--pad-y) var(--pad-x);
          border-radius: var(--radius);
          line-height: 1.2;
        }

        .navItem:hover { background: #f7f7f7; }

        .btnLike {
          background: transparent;
          border: none;
          cursor: pointer;
          font: inherit;
          color: inherit;
          padding: var(--pad-y) var(--pad-x);
          border-radius: var(--radius);
        }
        .btnLike:hover { background: #f7f7f7; }

        .cta {
          font-size: var(--fs-nav);
          padding: calc(var(--pad-y) + 2px) calc(var(--pad-x) + 2px);
          background: #111;
          color: #fff;
          border-radius: var(--radius);
          text-decoration: none;
        }
        .cta:hover { opacity: 0.9; }

        .dropdown { position: relative; }

        .panel {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          width: var(--panel-w);
          background: #fff;
          border: 1px solid #eee;
          border-radius: var(--radius);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          padding: calc(8px * var(--scale));
        }

        .dropLink {
          display: block;
          font-size: var(--fs-nav);
          padding: calc(12px * var(--scale)) calc(14px * var(--scale));
          color: #111;
          text-decoration: none;
          border-radius: calc(10px * var(--scale));
        }
        .dropLink:hover { background: #f7f7f7; }

        /* simple responsiveness */
        @media (max-width: 960px) {
          :root {
            --fs-logo: calc(20px * var(--scale));
            --fs-nav: calc(17px * var(--scale));
            --h: calc(68px * var(--scale));
          }
          .nav { gap: calc(14px * var(--scale)); }
          .panel { width: calc(260px * var(--scale)); }
        }
      `}</style>
    </>
  );
}
