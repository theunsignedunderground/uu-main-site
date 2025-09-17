// components/Header.js
import React, { useState, useRef } from "react";
import { SignedIn, SignedOut, SignInButton, useClerk, useUser } from "@clerk/nextjs";
import colors from "../styles/colors";

/**
 * Header (classic layout + requested refinements)
 * - Brand colors from styles/colors
 * - Larger SVG logo
 * - Uniform nav typography (Features / Pricing / FAQ / Dashboard)
 * - Dashboard moved to right group next to profile
 * - Thin Outlaw Red border around header + vertical dividers rising from bottom ~50%
 * - Features dropdown separators (thin Outlaw Red lines)
 * - Avatar button ring uses brand colors; Sign Out matches menu item styles
 */

export default function Header() {
  const [openMenuKey, setOpenMenuKey] = useState(null); // 'features' | 'account' | null
  const timersRef = useRef({});
  const clerk = useClerk();
  const { user } = useUser();

  // --- dropdown helpers ---
  const openMenu = (key) => {
    clearTimeout(timersRef.current[key]);
    setOpenMenuKey(key);
  };
  const scheduleClose = (key, delay = 120) => {
    clearTimeout(timersRef.current[key]);
    timersRef.current[key] = setTimeout(() => {
      if (openMenuKey === key) setOpenMenuKey(null);
    }, delay);
  };

  // --- layout & style ---
  const HEADER_HEIGHT = 70; // px visible area (approx for divider height calc)

  const headerWrap = {
    position: "sticky",
    top: 0,
    zIndex: 60,
    background: colors.black,
    // full red border around header
    border: `1px solid ${colors.outlawRed}`,
    borderLeft: `1px solid ${colors.outlawRed}`,
    borderRight: `1px solid ${colors.outlawRed}`,
  };

  const container = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "12px 18px",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    columnGap: 16,
    minHeight: HEADER_HEIGHT,
    position: "relative",
  };

  // LOGO
  const logoLink = { display: "inline-block", lineHeight: 0, position: "relative" };
  const logoImg = { display: "block", width: 240, height: "auto" }; // bigger per request

  // NAV (center-left cluster: Features, Pricing, FAQ)
  const navRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // shift left
    gap: 16, // more spacing between tabs
    flexWrap: "wrap",
    position: "relative",
  };

  // NAV item wrapper
  const navItemWrap = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
  };

  // Divider: a thin vertical line rising from bottom ~50% height
  const divider = {
    position: "relative",
    paddingLeft: 16,
    marginLeft: 16,
  };
  const dividerLine = {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -1, // sit on top of header bottom border visually
    width: 1,
    height: Math.max(HEADER_HEIGHT * 0.5, 28),
    background: colors.outlawRed,
    opacity: 0.9,
  };

  // Unified nav look (anchors & buttons share this)
  const navFont = "clamp(17px, 2vw, 19px)"; // bumped slightly larger
  const navLinkBase = {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    color: colors.vintageCream,
    fontSize: navFont,
    lineHeight: 1.25,
    padding: "10px 16px",
    borderRadius: 12,
    border: "1px solid #2a2a2a",
    background: "transparent",
    cursor: "pointer",
    transition: "background 140ms ease, border-color 140ms ease, color 140ms ease",
    whiteSpace: "nowrap",
  };
  const applyHover = (el) => {
    if (!el) return;
    el.style.background = "#171717";
    el.style.borderColor = colors.outlawRed;
    el.style.color = colors.vintageCream;
  };
  const clearHover = (el) => {
    if (!el) return;
    el.style.background = "transparent";
    el.style.borderColor = "#2a2a2a";
    el.style.color = colors.vintageCream;
  };

  // Dropdown panel & items (with thin red separators)
  const dropdownPanel = {
    position: "absolute",
    top: "calc(100% + 6px)",
    left: 0,
    minWidth: 280,
    background: "#121212",
    border: "1px solid #2a2a2a",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
    padding: 8,
    zIndex: 99,
  };

  const dropdownItem = {
    ...navLinkBase,
    display: "block",
    width: "100%",
    textAlign: "left",
    border: "none",
    padding: "12px 14px",
  };
  const separatorTop = { borderTop: `1px solid ${colors.outlawRed}` }; // add to items after the first

  // RIGHT: Dashboard + Auth
  const rightWrap = { display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12 };

  const dashboardLink = { ...navLinkBase };

  const signInBtn = { ...navLinkBase, borderColor: colors.outlawRed };

  // Avatar (profile) button uses brand colors for ring
  const avatarBtn = {
    ...navLinkBase,
    padding: 4,
    borderRadius: 999,
    borderColor: colors.outlawRed, // brand ring
    gap: 8,
  };
  const avatarImg = {
    width: 36,
    height: 36,
    borderRadius: 999,
    border: `1px solid ${colors.outlawRed}`, // brand ring on the image too
    display: "block",
    background: "#0f0f0f",
  };

  // Account dropdown aligns to the right
  const accountPanel = {
    ...dropdownPanel,
    right: 0,
    left: "auto",
    minWidth: 240,
  };

  return (
    <header style={headerWrap}>
      <div style={container}>
        {/* Left: Logo (with right divider) */}
        <div style={{ ...navItemWrap, ...divider }}>
          {/* vertical divider rising from bottom */}
          <span aria-hidden="true" style={dividerLine} />
          <a href="/" style={logoLink} aria-label="Go to home">
            <img
              src="/brand/logos/TheUnsignedUnderground-OnBlack.svg"
              alt="The Unsigned Underground"
              style={logoImg}
            />
          </a>
        </div>

        {/* Center-left: Features / Pricing / FAQ (with internal dividers) */}
        <nav style={navRow}>
          {/* Features (dropdown) */}
          <div
            style={{ ...navItemWrap, ...divider }}
            onMouseEnter={() => openMenu("features")}
            onMouseLeave={() => scheduleClose("features")}
          >
            <span aria-hidden="true" style={dividerLine} />
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenuKey === "features"}
              style={navLinkBase}
              onMouseOver={(e) => applyHover(e.currentTarget)}
              onMouseOut={(e) => clearHover(e.currentTarget)}
              onClick={() => setOpenMenuKey(openMenuKey === "features" ? null : "features")}
            >
              Features
            </button>

            {openMenuKey === "features" && (
              <div
                role="menu"
                style={dropdownPanel}
                onMouseEnter={() => openMenu("features")}
                onMouseLeave={() => scheduleClose("features")}
              >
                <a
                  href="/artist-manager"
                  style={dropdownItem}
                  onMouseOver={(e) => applyHover(e.currentTarget)}
                  onMouseOut={(e) => clearHover(e.currentTarget)}
                >
                  Artist Manager (Overview)
                </a>
                <a
                  href="/city-showcase"
                  style={{ ...dropdownItem, ...separatorTop }}
                  onMouseOver={(e) => applyHover(e.currentTarget)}
                  onMouseOut={(e) => clearHover(e.currentTarget)}
                >
                  City Showcase
                </a>
                <a
                  href="/playlists"
                  style={{ ...dropdownItem, ...separatorTop }}
                  onMouseOver={(e) => applyHover(e.currentTarget)}
                  onMouseOut={(e) => clearHover(e.currentTarget)}
                >
                  Curated Playlists
                </a>
                <a
                  href="/press"
                  style={{ ...dropdownItem, ...separatorTop }}
                  onMouseOver={(e) => applyHover(e.currentTarget)}
                  onMouseOut={(e) => clearHover(e.currentTarget)}
                >
                  PR &amp; Articles
                </a>
              </div>
            )}
          </div>

          {/* Pricing */}
          <div style={{ ...navItemWrap, ...divider }}>
            <span aria-hidden="true" style={dividerLine} />
            <a
              href="/pricing"
              style={navLinkBase}
              onMouseOver={(e) => applyHover(e.currentTarget)}
              onMouseOut={(e) => clearHover(e.currentTarget)}
            >
              Pricing
            </a>
          </div>

          {/* FAQ */}
          <div style={{ ...navItemWrap, ...divider }}>
            <span aria-hidden="true" style={dividerLine} />
            <a
              href="/faq"
              style={navLinkBase}
              onMouseOver={(e) => applyHover(e.currentTarget)}
              onMouseOut={(e) => clearHover(e.currentTarget)}
            >
              FAQ
            </a>
          </div>
        </nav>

        {/* Right: Dashboard + Auth/Profile */}
        <div style={rightWrap}>
          {/* Dashboard moved to right cluster */}
          <a
            href="/dashboard"
            style={dashboardLink}
            onMouseOver={(e) => applyHover(e.currentTarget)}
            onMouseOut={(e) => clearHover(e.currentTarget)}
          >
            Dashboard
          </a>

          <SignedOut>
            <SignInButton mode="modal">
              <button
                style={signInBtn}
                onMouseOver={(e) => applyHover(e.currentTarget)}
                onMouseOut={(e) => clearHover(e.currentTarget)}
              >
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div
              style={{ position: "relative", ...divider }}
              onMouseEnter={() => openMenu("account")}
              onMouseLeave={() => scheduleClose("account")}
            >
              <span aria-hidden="true" style={dividerLine} />
              <button
                type="button"
                style={avatarBtn}
                aria-haspopup="menu"
                aria-expanded={openMenuKey === "account"}
                onMouseOver={(e) => applyHover(e.currentTarget)}
                onMouseOut={(e) => clearHover(e.currentTarget)}
                onClick={() => setOpenMenuKey(openMenuKey === "account" ? null : "account")}
              >
                <img
                  src={user?.imageUrl || "https://cdn.clerk.dev/default-avatar.png"}
                  alt="Account"
                  style={avatarImg}
                />
              </button>

              {openMenuKey === "account" && (
                <div
                  role="menu"
                  style={accountPanel}
                  onMouseEnter={() => openMenu("account")}
                  onMouseLeave={() => scheduleClose("account")}
                >
                  <a
                    href="/dashboard"
                    style={dropdownItem}
                    onMouseOver={(e) => applyHover(e.currentTarget)}
                    onMouseOut={(e) => clearHover(e.currentTarget)}
                  >
                    My Dashboard
                  </a>
                  <a
                    href="/orders"
                    style={{ ...dropdownItem, ...separatorTop }}
                    onMouseOver={(e) => applyHover(e.currentTarget)}
                    onMouseOut={(e) => clearHover(e.currentTarget)}
                  >
                    My Orders
                  </a>
                  <a
                    href="/my-website"
                    style={{ ...dropdownItem, ...separatorTop }}
                    onMouseOver={(e) => applyHover(e.currentTarget)}
                    onMouseOut={(e) => clearHover(e.currentTarget)}
                  >
                    My Website
                  </a>
                  {/* Sign Out styled identically to other items */}
                  <button
                    type="button"
                    style={{ ...dropdownItem, ...separatorTop, width: "100%" }}
                    onMouseOver={(e) => applyHover(e.currentTarget)}
                    onMouseOut={(e) => clearHover(e.currentTarget)}
                    onClick={() => clerk.signOut()}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
