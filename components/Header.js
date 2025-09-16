// components/Header.js
import React, { useState, useRef } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import colors from "../styles/colors";

/**
 * Header – cleaned:
 * - Imports brand colors from ../styles/colors
 * - Uses direct <img> for the logo: /public/brand/logos/TheUnsignedUnderground-OnBlack.svg
 * - Unifies nav link styles so FAQ matches Pricing/Features
 * - Properly closes <nav>
 */

export default function Header() {
  const [open, setOpen] = useState(null); // "features" | null
  const closeTimers = useRef({});

  const openMenu = (key) => setOpen(key);
  const scheduleClose = (key) => {
    clearTimeout(closeTimers.current[key]);
    closeTimers.current[key] = setTimeout(() => {
      if (open === key) setOpen(null);
    }, 120); // tiny delay to allow mouse to reach the menu
  };

  // ---------- Styles ----------
  const headerWrap = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: colors.black,
    borderBottom: "1px solid #2a2a2a",
  };

  const container = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "10px 16px",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gap: 12,
    alignItems: "center",
  };

  // logo anchor – keep minimal since we now render an <img>
  const logo = { display: "inline-block", lineHeight: 0 };

  // center nav row
  const navRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  };

  // each nav item wraps either a button or an anchor
  const navItemWrap = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
  };

  // unify link/button look so FAQ matches others
  const navLinkBase = {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    color: colors.vintageCream,
    fontSize: "clamp(16px, 1.8vw, 18px)",
    lineHeight: 1.25,
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid transparent",
    background: "transparent",
    cursor: "pointer",
    transition: "background 120ms ease, border-color 120ms ease, color 120ms ease",
  };

  const navLinkBtn = { ...navLinkBase, border: "1px solid #2a2a2a" }; // for dropdown triggers or link-styled-buttons
  const navLinkA = { ...navLinkBase, border: "1px solid #2a2a2a" };   // for <a> so it matches the buttons

  const navLinkHover = { background: "#171717", borderColor: colors.outlawRed, color: colors.vintageCream };

  const rightWrap = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  };

  const signInBtn = {
    ...navLinkBtn,
    borderColor: colors.outlawRed,
    color: colors.vintageCream,
  };

  const dashboardLink = {
    ...navLinkA,
  };

  // Dropdown panel
  const menuPanel = {
    position: "absolute",
    top: "calc(100% + 6px)",
    left: 0,
    minWidth: 240,
    background: "#121212",
    border: "1px solid #2a2a2a",
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
    padding: 8,
    zIndex: 99,
  };

  const menuItem = {
    ...navLinkA,
    display: "block",
    width: "100%",
    textAlign: "left",
    border: "none",
    padding: "10px 12px",
  };

  // simple utility: merges hover styles inline
  const hoverable = (base) => ({
    ...base,
    // fallback hover for non-CSS-in-JS: we simulate by relying on browser default :hover on <a>/<button>
  });

  return (
    <header style={headerWrap}>
      <div style={container}>
        {/* Left: Logo */}
        <div>
          <a href="/" style={logo}>
            <img
              src="/brand/logos/TheUnsignedUnderground-OnBlack.svg"
              width="200"
              height="48"
              alt="The Unsigned Underground"
              style={{ display: "block" }}
            />
          </a>
        </div>

        {/* Center: Nav */}
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
              onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHover)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkBtn)}
              onClick={() => setOpen(open === "features" ? null : "features")}
            >
              Features
            </button>

            {open === "features" && (
              <div
                role="menu"
                style={menuPanel}
                onMouseEnter={() => openMenu("features")}
                onMouseLeave={() => scheduleClose("features")}
              >
                <a
                  href="/artist-manager"
                  style={menuItem}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#171717")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Artist Manager (Overview)
                </a>
                <a
                  href="/playlists"
                  style={menuItem}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#171717")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Curated Playlists
                </a>
                <a
                  href="/press"
                  style={menuItem}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#171717")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  PR & Articles
                </a>
              </div>
            )}
          </div>

          {/* Pricing (public) */}
          <div style={navItemWrap}>
            <a
              href="/pricing"
              style={navLinkA}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHover)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkA)}
            >
              Pricing
            </a>
          </div>

          {/* FAQ – now identical look/behavior to Pricing */}
          <div style={navItemWrap}>
            <a
              href="/faq"
              style={navLinkA}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHover)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkA)}
            >
              FAQ
            </a>
          </div>
        </nav>

        {/* Right: Auth / Dashboard */}
        <div style={rightWrap}>
          <SignedOut>
            <SignInButton mode="modal">
              <button
                style={signInBtn}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHover)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, signInBtn)}
              >
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <a
              href="/dashboard"
              style={dashboardLink}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHover)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, dashboardLink)}
            >
              Dashboard
            </a>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    border: "1px solid #2a2a2a",
                  },
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
