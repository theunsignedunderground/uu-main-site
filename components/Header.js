// components/Header.js
import { useState } from "react";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs";
import Logo from "./Logo";
import colors from "../styles/colors";

export default function Header() {
  const [open, setOpen] = useState(null); // 'features' | 'pricing' | 'profile' | null
  const [hoverTimer, setHoverTimer] = useState(null);
  const scale = 0.85; // baked-in scale
  const scaleVar = { ["--s"]: scale };
  const { user } = useUser();

  // Display name pref: username → email handle → "Artist"
  const displayName =
    user?.username ||
    user?.primaryEmailAddress?.emailAddress?.split("@")[0] ||
    "Artist";

  // Smooth open/close helpers to remove flicker at hover seam
  function openMenu(key) {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    setOpen(key);
  }
  function scheduleClose(key) {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
    const t = setTimeout(() => {
      setOpen((v) => (v === key ? null : v));
      setHoverTimer(null);
    }, 140); // 120–160ms is a sweet spot
    setHoverTimer(t);
  }

  return (
    <header style={{ ...headerWrap, ...scaleVar }}>
      <div style={headerInner}>
        {/* Logo → Home */}
        <a href="/" style={logo}>
  <Logo
    variant="light"
    type="logo"
    width={200}
    height={48}
    alt="The Unsigned Underground"
  />
</a>

        {/* Left / center nav (Features → Pricing → FAQ) */}
        <nav style={navRow}>
          {/* Features dropdown */}
          <div
            style={navItemWrap}
            onMouseEnter={() => openMenu("features")}
            onMouseLeave={() => scheduleClose("features")}
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
              <div
                style={dropdown}
                onMouseEnter={() => openMenu("features")}
              >
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
            onMouseEnter={() => openMenu("pricing")}
            onMouseLeave={() => scheduleClose("pricing")}
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
              <div
                style={dropdown}
                onMouseEnter={() => openMenu("pricing")}
              >
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

        {/* Right actions */}
        <div style={navRight}>
          {/* Dashboard (route is protected; you can wrap with <SignedIn> later if you want it hidden while signed out) */}
          <a href="/dashboard" style={navLinkA}>Dashboard</a>

          {/* Auth buttons: Sign In always until signed in; Sign Up only when signed out */}
          <SignedOut>
            <a href="/sign-in" style={signInBtn}>Sign In</a>
            <a href="/sign-up" style={signUpBtn}>Sign Up</a>
          </SignedOut>

          {/* Profile menu (signed in only) */}
          <SignedIn>
            <div
              style={profileWrap}
              onMouseEnter={() => openMenu("profile")}
              onMouseLeave={() => scheduleClose("profile")}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open === "profile"}
                style={profileBtn}
                onClick={() => setOpen(open === "profile" ? null : "profile")}
              >
                {/* Silhouette avatar in shaded circle */}
                <span style={avatar}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                    <circle cx="12" cy="12" r="12" fill="#1b1b1b" />
                    <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-3.1 0-6 1.6-6 3.6V20h12v-2.4c0-2-2.9-3.6-6-3.6z" fill="#fdf5e6"/>
                  </svg>
                </span>
                <span style={userName}>{displayName}</span>
                <span aria-hidden style={{ opacity: 0.8, marginLeft: 6 }}>▾</span>
              </button>

              {open === "profile" && (
                <div
                  style={profileMenu}
                  onMouseEnter={() => openMenu("profile")}
                >
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

/* ---- Styles (responsive via clamp(...) × var(--s)) ---- */
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
  gap: "clamp(10px, 2vw, 20px)",
  alignItems: "center"
};

const navItemWrap = {
  position: "relative",
  paddingBottom: 16 // increased to bridge the hover seam
};

const navLinkBase = {
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  color: colors.vintageCream,
  fontSize: "calc(var(--s) * clamp(16px, 1.8vw, 22px))",
  lineHeight: 1.25,
  padding: "calc(var(--s) * clamp(8px, 1.3vw, 14px)) calc(var(--s) * clamp(10px, 2vw, 18px))",
  borderRadius: "calc(var(--s) * 12px)",
};

const navLinkA  = { ...navLinkBase };                           // for <a>
const navLinkBtn = { ...navLinkBase, background: "transparent", border: "none", cursor: "pointer" }; // for <button>

const dropdown = {
  position: "absolute",
  top: "calc(100% - 1px)", // overlap the seam to avoid 1px gaps
  left: 0,
  minWidth: "clamp(260px, 28vw, 420px)",
  background: "#111",
  border: `1px solid ${colors.outlawRed}`,
  borderRadius: "calc(var(--s) * 12px)",
  boxShadow: "0 10px 24px rgba(225,29,46,0.25)",
  paddingTop: 12, // visual spacing instead of marginTop
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
const profileWrap = {
  position: "relative",
  paddingBottom: 16 // bridge seam like other dropdowns
};

const profileBtn = {
  background: "transparent",
  border: `1px solid #1b1b1b`,
  borderRadius: "calc(var(--s) * 12px)",
  color: colors.vintageCream,
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "calc(var(--s) * 6px) calc(var(--s) * 10px)",
  cursor: "pointer"
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
  top: "calc(100% - 1px)", // overlap seam to avoid flicker
  right: 0,
  minWidth: 240,
  background: "#111",
  border: `1px solid ${colors.outlawRed}`,
  borderRadius: 12,
  padding: 8,
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
