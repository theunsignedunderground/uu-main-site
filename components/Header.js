// components/Header.js
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(null); // 'features' | 'pricing' | null
  const scale = 0.85; // baked-in scale you liked
  const scaleVar = { ["--s"]: scale };

  return (
    <header style={{ ...headerWrap, ...scaleVar }}>
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

/* ---- Responsive sizes via clamp(...) × var(--s) ---- */
const headerWrap = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  background: colors.black,
  borderBottom: `2px solid ${colors.outlawRed}`
};

const headerInner = {
  maxWidth: 1400,
  margin: "0 auto",
  padding: "calc(var(--s) * clamp(16px, 3vw, 28px)) calc(var(--s) * clamp(20px, 3.5vw, 36px))",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "clamp(16px, 2.5vw, 32px)"
};

const logo = {
  textDecoration: "none",
  color: colors.vintageCream,
  fontWeight: 800,
  fontSize: "calc(var(--s) * clamp(20px, 2.4vw, 30px))",
  letterSpacing: "0.2px"
};

const navRow = {
  display: "flex",
  gap: "clamp(16px, 3vw, 36px)",
  alignItems: "center"
};

const flexSpacer = { flex: 1 };

const navRight = {
  display: "flex",
  gap: "clamp(12px, 2.5vw, 28px)",
  alignItems: "center"
};

const navItemWrap = { position: "relative" };

const navLinkBtn = {
  background: "transparent",
  border: "none",
  color: colors.vintageCream,
  cursor: "pointer",
  fontSize: "calc(var(--s) * clamp(16px, 1.8vw, 22px))",
  padding: "calc(var(--s) * clamp(8px, 1.3vw, 14px)) calc(var(--s) * clamp(10px, 2vw, 18px))",
  lineHeight: 1.25,
  borderRadius: "calc(var(--s) * 12px)"
};

const navLinkA = {
  textDecoration: "none",
  color: colors.vintageCream,
  fontSize: "calc(var(--s) * clamp(16px, 1.8vw, 22px))",
  padding: "calc(var(--s) * clamp(8px, 1.3vw, 14px)) calc(var(--s) * clamp(10px, 2vw, 18px))",
  lineHeight: 1.25,
  borderRadius: "calc(var(--s) * 12px)"
};

const dropdown = {
  position: "absolute",
  top: "100%",
  left: 0,
  minWidth: "clamp(260px, 28vw, 420px)",
  background: "#111",
  border: `1px solid ${colors.outlawRed}`,
  borderRadius: "calc(var(--s) * 12px)",
  boxShadow: "0 10px 24px rgba(225,29,46,0.25)",
  padding: "calc(var(--s) * clamp(10px, 1.6vw, 18px))",
  marginTop: "clamp(8px, 1vw, 12px)"
};

const dropLink = {
  display: "block",
  textDecoration: "none",
  color: colors.vintageCream,
  padding: "calc(var(--s) * clamp(12px, 1.6vw, 18px)) calc(var(--s) * clamp(12px, 1.8vw, 20px))",
  borderRadius: "calc(var(--s) * 10px)"
};

const dropTitle = {
  fontWeight: 800,
  fontSize: "calc(var(--s) * clamp(14px, 1.8vw, 22px))",
  marginBottom: "calc(var(--s) * 6px)",
  lineHeight: 1.15
};

const dropSub = {
  fontSize: "calc(var(--s) * clamp(12px, 1.6vw, 18px))",
  opacity: 0.9,
  lineHeight: 1.35
};

const loginBtn = {
  textDecoration: "none",
  padding: "calc(var(--s) * clamp(10px, 1.4vw, 16px)) calc(var(--s) * clamp(12px, 2vw, 20px))",
  borderRadius: "calc(var(--s) * 12px)",
  border: `2px solid ${colors.outlawRed}`,
  background: colors.outlawRed,
  color: colors.vintageCream,
  fontWeight: 800,
  fontSize: "calc(var(--s) * clamp(16px, 1.8vw, 22px))",
  lineHeight: 1.2
};
