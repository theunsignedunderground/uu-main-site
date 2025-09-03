// components/Header.js
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(null); // 'features' | 'pricing' | null

  return (
    <header style={headerWrap}>
      <div style={headerInner}>
        {/* Logo → Home */}
        <a href="/" style={logo}>The Unsigned Underground</a>

        {/* Left / center nav (Features → Pricing → FAQ) */}
        <nav style={navRow}>
          {/* Features dropdown */}
          <div
            style={navItemWrap}
            onMouseEnter={() => setOpen("features")}
            onMouseLeave={() => setOpen((v) => (v === "features" ? null : v))}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open === "features"}
              style={navLinkBtn}
              onClick={() => setOpen(open === "features" ? null : "features")}
            >
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
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open === "pricing"}
              style={navLinkBtn}
              onClick={() => setOpen(open === "pricing" ? null : "pricing")}
            >
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

        {/* Spacer pushes right-side actions to the far edge */}
        <div style={flexSpacer} />

        {/* Right actions (Dashboard → Login/Account) */}
        <div style={navRight}>
          {/* Note for artists: requires plan + login, but we keep the link visible */}
          <a href="/dashboard" style={navLinkA}>Dashboard</a>
          <a href="/login" style={loginBtn}>Log in / Create account</a>
        </div>
      </div>
    </header>
  );
}

/* ---- Brand colors (unchanged) ---- */
const colors = {
  outlawRed: "#e11d2e",
  vintageCream: "#fdf5e6",
  black: "#000000"
};

/* ---- Styles (scaled ~3×) ---- */
const headerWrap = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  background: colors.black,
  borderBottom: `2px solid ${colors.outlawRed}`
};

const headerInner = {
  maxWidth: 1400,               // a bit wider to fit larger tabs
  margin: "0 auto",
  padding: "36px 28px",         // was 12px 20px → ~3× taller
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", // left-align row; spacer will push right group
  gap: 32
};

const logo = {
  textDecoration: "none",
  color: colors.vintageCream,
  fontWeight: 800,
  fontSize: 46,                 // bigger logo
  letterSpacing: 0.2
};

const navRow = {
  display: "flex",
  gap: 48,                      // was 16 → ~3×
  alignItems: "center"
};

const flexSpacer = {
  flex: 1                       // pushes right actions to the far right
};

const navRight = {
  display: "flex",
  gap: 36,                      // was 12 → ~3×
  alignItems: "center"
};

const navItemWrap = { position: "relative" };

const navLinkBtn = {
  background: "transparent",
  border: "none",
  color: colors.vintageCream,
  cursor: "pointer",
  fontSize: 45,                 // was 15 → ~3×
  padding: "18px 24px",         // larger hit target
  lineHeight: 1.2,
  borderRadius: 14
};

const navLinkA = {
  textDecoration: "none",
  color: colors.vintageCream,
  fontSize: 45,                 // was 15 → ~3×
  padding: "18px 24px",
  lineHeight: 1.2,
  borderRadius: 14
};

const dropdown = {
  position: "absolute",
  top: "100%",
  left: 0,
  minWidth: 520,                // wider to fit big type
  background: "#111",
  border: `1px solid ${colors.outlawRed}`,
  borderRadius: 14,
  boxShadow: "0 16px 36px rgba(225,29,46,0.25)",
  padding: 24,
  marginTop: 12
};

const dropLink = {
  display: "block",
  textDecoration: "none",
  color: colors.vintageCream,
  padding: "20px 18px",
  borderRadius: 12
};

const dropTitle = {
  fontWeight: 800,
  fontSize: 42,                 // was 14 → ~3×
  marginBottom: 8,
  lineHeight: 1.15
};

const dropSub = {
  fontSize: 36,                 // was 12 → ~3×
  opacity: 0.9,
  lineHeight: 1.35
};

const loginBtn = {
  textDecoration: "none",
  padding: "18px 24px",
  borderRadius: 14,
  border: `2px solid ${colors.outlawRed}`, // thicker border at larger scale
  background: colors.outlawRed,
  color: colors.vintageCream,
  fontWeight: 800,
  fontSize: 45,
  lineHeight: 1.2
};
