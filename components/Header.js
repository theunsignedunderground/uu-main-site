// components/Header.js
import React, { useState, useRef } from "react";
import { SignedIn, SignedOut, SignInButton, useClerk, useUser } from "@clerk/nextjs";
import colors from "../styles/colors";

/**
 * Header (restored classic structure + fixes):
 * - Brand colors via styles/colors
 * - Larger logo (SVG) with wider header spacing
 * - Uniform nav styles (Features / Pricing / FAQ / Dashboard)
 * - Features dropdown (Artist Manager, City Showcase, Playlists, PR)
 * - Mouse enter/leave for dropdowns (no flicker)
 * - Custom avatar menu (Dashboard, My Orders, My Website, Sign out)
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

  // --- styles ---
  const headerWrap = {
    position: "sticky",
    top: 0,
    zIndex: 60,
    background: colors.black,
    borderBottom: "1px solid #2a2a2a",
  };

  const container = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "14px 18px", // a hair taller so the logo can breathe
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    columnGap: 16,
  };

  const logoLink = { display: "inline-block", lineHeight: 0 };
  const logoImg = { display: "block", width: 240, height: "auto" }; // larger logo visibility

  const navRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
  };

  const navItemWrap = { position: "relative", display: "inline-flex", alignItems: "center" };

  // unified nav look (anchors + buttons share this)
  const navLinkBase = {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    color: colors.vintageCream,
    fontSize: "clamp(16px, 1.8vw, 18px)",
    lineHeight: 1.25,
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid #2a2a2a",
    background: "transparent",
    cursor: "pointer",
    transition: "background 140ms ease, border-color 140ms ease, color 140ms ease",
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

  const dropdownPanel = {
    position: "absolute",
    top: "calc(100% + 6px)",
    left: 0,
    minWidth: 260,
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
    padding: "10px 12px",
  };

  const rightWrap = { display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10 };
  const signInBtn = { ...navLinkBase, borderColor: colors.outlawRed };

  // avatar button + menu
  const avatarBtn = {
    ...navLinkBase,
    padding: 4,
    borderRadius: 999,
    borderColor: "#2a2a2a",
    gap: 8,
  };
  const avatarImg = {
    width: 36,
    height: 36,
    borderRadius: 999,
    border: "1px solid #2a2a2a",
    display: "block",
  };

  return (
    <header style={headerWrap}>
      <div style={container}>
        {/* Left: Logo */}
        <a href="/" style={logoLink} aria-label="Go to home">
          <img
            src="/brand/logos/TheUnsignedUnderground-OnBlack.svg"
            alt="The Unsigned Underground"
            style={logoImg}
          />
        </a>

        {/* Center: Main Nav */}
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
                  href="/playlists"
                  style={dropdownItem}
                  onMouseOver={(e) => applyHover(e.currentTarget)}
                  onMouseOut={(e) => clearHover(e.currentTarget)}
                >
                  Curated Playlists
                </a>
                <a
                  href="/press"
                  style={dropdownItem}
                  onMouseOver={(e) => applyHover(e.currentTarget)}
                  onMouseOut={(e) => clearHover(e.currentTarget)}
                >
                  PR &amp; Articles
                </a>
                <a
                  href="/city-showcase"
                  style={dropdownItem}
                  onMouseOver={(e) => applyHover(e.currentTarget)}
                  onMouseOut={(e) => clearHover(e.currentTarget)}
                >
                  City Showcase
                </a>
              </div>
            )}
          </div>

          {/* Pricing */}
          <div style={navItemWrap}>
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
          <div style={navItemWrap}>
            <a
              href="/faq"
              style={navLinkBase}
              onMouseOver={(e) => applyHover(e.currentTarget)}
              onMouseOut={(e) => clearHover(e.currentTarget)}
            >
              FAQ
            </a>
          </div>

          {/* Dashboard (direct link keeps same look/size) */}
          <div style={navItemWrap}>
            <a
              href="/dashboard"
              style={navLinkBase}
              onMouseOver={(e) => applyHover(e.currentTarget)}
              onMouseOut={(e) => clearHover(e.currentTarget)}
            >
              Dashboard
            </a>
          </div>
        </nav>

        {/* Right: Auth / Account */}
        <div style={rightWrap}>
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
            {/* Custom avatar trigger with dropdown (restoring your older feel) */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => openMenu("account")}
              onMouseLeave={() => scheduleClose("account")}
            >
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
                  style={{ ...dropdownPanel, right: 0, left: "auto", minWidth: 220 }}
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
                    style={dropdownItem}
                    onMouseOver={(e) => applyHover(e.currentTarget)}
                    onMouseOut={(e) => clearHover(e.currentTarget)}
                  >
                    My Orders
                  </a>
                  <a
                    href="/my-website"
                    style={dropdownItem}
                    onMouseOver={(e) => applyHover(e.currentTarget)}
                    onMouseOut={(e) => clearHover(e.currentTarget)}
                  >
                    My Website
                  </a>
                  <button
                    type="button"
                    style={{ ...dropdownItem, width: "100%" }}
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
