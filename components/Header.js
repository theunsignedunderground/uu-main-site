// components/Header.js
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(null); // 'features' | 'pricing' | null

  return (
    <header style={headerWrap}>
      <div style={headerInner}>
        {/* Logo → Home */}
        <a href="/" style={logo}>The Unsigned Underground</a>

        {/* Left / center nav */}
        <nav style={navRow}>
          {/* Features dropdown */}
          <div
            style={navItemWrap}
            onMouseEnter={() => setOpen("features")}
            onMouseLeave={() => setOpen((v) => (v === "features" ? null : v))}
          >
            <button type="button" style={navLinkBtn}>
              Features <span aria-hidden>▾</span>
            </button>
            {open === "features" && (
              <div style={dropdown}>
                <a href="/features" style={dropLink}>
                  <div style={dropTitle}>Showcase Site</div>
                  <div style={dropSub}>Your EPK, music, photos, shows — all in one place.</div>
                </a>
                <a href="/press" style={dropLink}>
                  <div style={dropTitle}>PR & Articles</div>
                  <div style={dropSub}>Press release + premium feature coverage.</div>
                </a>
                <a href="/playlists" style={dropLink}>
                  <div style={dropTitle}>Playlists</div>
                  <div style={dropSub}>Curated inclusion — no pay-to-play.</div>
                </a>
                <a href="/manager" style={dropLink}>
                  <div style={dropTitle}>Artist Manager</div>
                  <div style={dropSub}>Guides, tools, and templates.</div>
                </a>
              </div>
            )}
          </div>

          {/* Pricing dropdown */}
          <div
            style={navItemWrap}
            onMouseEnter={() => setOpen("pricing")}
            onMouseLeave={() => setOpen((v) => (v === "pricing" ? null : v))}
          >
            <button type="button" style={navLinkBtn}>
              Pricing <span aria-hidden>▾</span>
            </button>
            {open === "pricing" && (
              <div style={dropdown}>
                <a href="/pricing#annual" style={dropLink}>
                  <div style={dropTitle}>Annual Plan</div>
                  <div style={dropSub}>Best value — one upfront payment.</div>
                </a>
                <a href="/pricing#monthly" style={dropLink}>
                  <div style={dropTitle}>Monthly Plan</div>
                  <div style={dropSub}>Same features, 12 easy payments.</div>
                </a>
                <a href="/pricing#pr" style={dropLink}>
                  <div style={dropTitle}>PR + Playlist</div>
                  <div style={dropSub}>PR + playlists, no website needed.</div>
                </a>
              </div>
            )}
          </div>

          <a href="/faq" style={navLinkA}>FAQ</a>
        </nav>

        {/* Right actions */}
        <div style={navRight}>
          <a href="/dashboard" style={navLinkA}>Dashboard</a>
          <a href="/login" style={loginBtn}>Log in / Create account</a>
        </div>
      </div>
    </header>
  );
}

/* ---- Brand colors ---- */
const colors = {
  outlawRed: "#e11d2e",
  vintageCream: "#fdf5e6",
  black: "#000000"
};

/* ---- Styles ---- */
const headerWrap = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  background: colors.black,
  borderBottom: `2px solid ${colors.outlawRed}`
};

const headerInner = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "12px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const logo = {
  textDecoration: "none",
  color: colors.vintageCream,
  fontWeight: 800
};

const navRow = {
  display: "flex",
  gap: 16,
  alignItems: "center"
};

const navRight = {
  display: "flex",
  gap: 12,
  alignItems: "center"
};

const navItemWrap = { position: "relative" };

const navLinkBtn = {
  background: "transparent",
  border: "none",
  color: colors.vintageCream,
  cursor: "pointer",
  fontSize: 15,
  padding: 6
};

const navLinkA = {
  textDecoration: "none",
  color: colors.vintageCream,
  fontSize: 15,
  padding: 6
};

const dropdown = {
  position: "absolute",
  top: "100%",
  left: 0,
  minWidth: 260,
  background: "#111",
  border: `1px solid ${colors.outlawRed}`,
  borderRadius: 10,
  boxShadow: "0 10px 24px rgba(225,29,46,0.25)",
  padding: 8
};

const dropLink = {
  display: "block",
  textDecoration: "none",
  color: colors.vintageCream,
  padding: "10px 10px",
  borderRadius: 8
};

const dropTitle = { fontWeight: 800, fontSize: 14, marginBottom: 2 };
const dropSub = { fontSize: 12, opacity: 0.9 };

const loginBtn = {
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: 10,
  border: `1px solid ${colors.outlawRed}`,
  background: colors.outlawRed,
  color: colors.vintageCream,
  fontWeight: 700
};
