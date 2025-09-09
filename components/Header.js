// components/Header.js
import { useState } from "react";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs";

export default function Header() {
  const [open, setOpen] = useState(null); // 'features' | 'pricing' | 'profile' | null
  const scale = 0.85;
  const scaleVar = { ["--s"]: scale };
  const { user } = useUser();

  // Prefer username → else email handle → else "Artist"
  const displayName =
    user?.username ||
    user?.primaryEmailAddress?.emailAddress?.split("@")[0] ||
    "Artist";

  return (
    <header style={{ ...headerWrap, ...scaleVar }}>
      <div style={headerInner}>
        {/* Logo */}
        <a href="/" style={logo}>The Unsigned Underground</a>

        {/* Left nav */}
        <nav style={navRow}>
          {/* Features */}
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
              <div style={dropdown} onMouseEnter={() => setOpen("features")}>
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

          {/* Pricing */}
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
              <div style={dropdown} onMouseEnter={() => setOpen("pricing")}>
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

        <div style={flexSpacer} />

        {/* Right section */}
        <div style={navRight}>
          {/* Dashboard (kept visible; route is protected) */}
          <a href="/dashboard" style={navLinkA}>Dashboard</a>

          {/* Sign In (visible until actually signed in) */}
          <SignedOut>
            <a href="/sign-in" style={signInBtn}>Sign In</a>
            <a href="/sign-up" style={signUpBtn}>Sign Up</a>
          </SignedOut>

          {/* Profile icon + username + dropdown (only when signed in) */}
          <SignedIn>
            <div
              style={profileWrap}
              onMouseEnter={() => setOpen("profile")}
              onMouseLeave={() => setOpen((v) => (v === "profile" ? null : v))}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open === "profile"}
                style={profileBtn}
                onClick={() => setOpen(open === "profile" ? null : "profile")}
              >
                {/* Silhouette icon in shaded circle */}
                <span style={avatar}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                    <circle cx="12" cy="12" r="12" fill="#1b1b1b" />
                    <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-3.1 0-6 1.6-6 3.6V20h12v-2.4c0-2-2.9-3.6-6-3.6z" fill="#fdf5e6"/>
                  </svg>
                </span>
                <span style={userName}>{displayName}</span>
                <span aria-hidden style={{opacity:.8, marginLeft:6}}>▾</span>
              </button>

              {open === "profile" && (
                <div style={profileMenu} onMouseEnter={() => setOpen("profile")}>
                  <a href="/orders" style={menuLink}>My Orders</a>
                  <a href="/my-website" style={menuLink}>My Website</a>
                  <div style={menuSep} />
                  <SignOutButton signOutOptions={{ redirectUrl: "/" }}>
                    <button style={{ ...menuLinkBtn }}>Sign out</button>
                  </SignOutButton>
                </div>
              )}
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

/* ---- Brand colors ---- */
const colors = { outlawRed: "#e11d2e", vintageCream: "#fdf5e6", black: "#000" };

/* ---- Styles ---- */
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

const navRow = { display: "flex", gap: "clamp(16px, 3vw, 36px)", alignItems: "center" };
const flexSpacer = { flex: 1 };
const navRight = { display: "flex", gap: "clamp(10px, 2vw, 20px)", alignItems: "center" };

const navItemWrap = { position: "relative", paddingBottom: 12 };

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
  paddingTop: 12,
  padding: "calc(var(--s) * clamp(10px, 1.6vw, 18px))",
  zIndex: 200
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

/* Auth buttons */
const signInBtn = {
  textDecoration: "none",
  padding: "calc(var(--s) * 8px) calc(var(--s) * 14px)",
  borderRadius: "calc(var(--s) * 12px)",
  border: `1px solid ${colors.outlawRed}`,
  background: "transparent",
  color: colors.vintageCream,
  fontWeight: 700,
  fontSize: "calc(var(--s) * clamp(14px, 1.6vw, 18px))",
  lineHeight: 1.2
};

const signUpBtn = {
  textDecoration: "none",
  padding: "calc(var(--s) * 8px) calc(var(--s) * 12px)",
  borderRadius: "calc(var(--s) * 12px)",
  border: `2px solid ${colors.outlawRed}`,
  background: colors.outlawRed,
  color: colors.vintageCream,
  fontWeight: 800,
  fontSize: "calc(var(--s) * clamp(13px, 1.5vw, 16px))",
  lineHeight: 1.2
};

/* Profile button & menu */
const profileWrap = { position: "relative" };

const profileBtn = {
  background: "transparent",
  border: `1px solid #1b1b1b`,
  borderRadius: "calc(var(--s) * 12px)",
  color: colors.vintageCream,
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "calc(var(--s) * 6px) calc(var(--s) * 10px)",
  cursor: "pointer",
};

const avatar = {
  display: "inline-grid",
  placeItems: "center",
  width: 28,
  height: 28,
  borderRadius: "50%",
  background: "#1b1b1b",
  overflow: "hidden"
};

const userName = {
  fontSize: "calc(var(--s) * clamp(13px, 1.5vw, 16px))",
  fontWeight: 700
};

const profileMenu = {
  position: "absolute",
  top: "100%",
  right: 0,
  minWidth: 240,
  background: "#111",
  border: `1px solid ${colors.outlawRed}`,
  borderRadius: 12,
  padding: 8,
  marginTop: 10,
  boxShadow: "0 12px 28px rgba(225,29,46,.18)",
  zIndex: 250
};

const menuLink = {
  display: "block",
  padding: "10px 12px",
  color: colors.vintageCream,
  textDecoration: "none",
  borderRadius: 10
};

const menuLinkBtn = {
  padding: "10px 12px",
  width: "100%",
  textAlign: "left",
  background: "transparent",
  border: "none",
  color: colors.vintageCream,
  borderRadius: 10,
  cursor: "pointer"
};

const menuSep = {
  height: 1,
  background: "#2b2b2b",
  margin: "6px 4px"
};
