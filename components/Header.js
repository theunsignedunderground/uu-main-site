// components/Header.js
import React, { useState, useRef } from "react";
import { SignedIn, SignedOut, SignInButton, useClerk, useUser } from "@clerk/nextjs";
import colors from "../styles/colors";

export default function Header() {
  const [openMenuKey, setOpenMenuKey] = useState(null);
  const timersRef = useRef({});
  const clerk = useClerk();
  const { user } = useUser();

  const openMenu = (key) => {
    clearTimeout(timersRef.current[key]);
    setOpenMenuKey(key);
  };
  const scheduleClose = (key, delay = 140) => {
    clearTimeout(timersRef.current[key]);
    timersRef.current[key] = setTimeout(() => {
      if (openMenuKey === key) setOpenMenuKey(null);
    }, delay);
  };

  const HEADER_HEIGHT = 78;

  const headerWrap = {
    position: "sticky",
    top: 0,
    zIndex: 60,
    background: colors.black,
    border: `1px solid ${colors.outlawRed}`,
  };

  const container = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "6px 18px 12px",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "end",
    columnGap: 16,
    minHeight: HEADER_HEIGHT,
    position: "relative",
  };

  // Logo
  const logoLink = { display: "inline-block", lineHeight: 0, position: "relative" };
  const logoImg = { display: "block", width: 260, height: "auto" };

  // Dividers
  const withDivider = { position: "relative", paddingLeft: 16, marginLeft: 16 };
  const dividerLine = {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 1,
    height: Math.max(HEADER_HEIGHT * 0.5, 36),
    background: colors.outlawRed,
    opacity: 0.95,
  };
  const logoDividerLine = {
    ...dividerLine,
    top: 0,
    bottom: 0,
    height: "100%", // full height for logo divider
  };

  const navRow = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 18,
    flexWrap: "wrap",
    position: "relative",
  };

  const navItemWrap = { position: "relative", display: "inline-flex", alignItems: "center" };

  const NAV_FS = "clamp(18px, 2.2vw, 20px)";
  const NAV_FS_PRICING = "clamp(19px, 2.3vw, 21px)";

  const navLinkBase = {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    color: colors.vintageCream,
    fontSize: NAV_FS,
    lineHeight: 1.25,
    padding: "12px 18px",
    borderRadius: 12,
    border: `2px solid ${colors.vintageCream}`,
    background: "transparent",
    cursor: "pointer",
    transition: "background 140ms ease, border-color 140ms ease, color 140ms ease",
    whiteSpace: "nowrap",
  };
  const navLinkPricing = { ...navLinkBase, fontSize: NAV_FS_PRICING };

  const applyHover = (el) => {
    if (!el) return;
    el.style.background = "#171717";
    el.style.borderColor = colors.outlawRed;
    el.style.color = colors.vintageCream;
  };
  const clearHover = (el, isPricing = false) => {
    if (!el) return;
    el.style.background = "transparent";
    el.style.borderColor = colors.vintageCream;
    el.style.color = colors.vintageCream;
    el.style.fontSize = isPricing ? NAV_FS_PRICING : NAV_FS;
  };

  const dropdownPanel = {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    minWidth: 300,
    background: "#121212",
    border: `1px solid #2a2a2a`,
    borderRadius: 12,
    boxShadow: "0 10px 26px rgba(0,0,0,0.40)",
    padding: 8,
    zIndex: 99,
    boxSizing: "border-box",
  };

  const dropdownItem = {
    display: "block",
    width: "100%",
    textAlign: "left",
    color: colors.vintageCream,
    textDecoration: "none",
    fontSize: NAV_FS,
    lineHeight: 1.25,
    borderRadius: 10,
    border: `1px solid ${colors.outlawRed}`,
    padding: "10px 12px",
    background: "transparent",
    cursor: "pointer",
    transition: "background 120ms ease, color 120ms ease, border-color 120ms ease",
    boxSizing: "border-box",
  };

  const dropdownItemHover = (el) => {
    if (!el) return;
    el.style.background = "#171717";
  };

  const rightWrap = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 14,
  };

  const avatarBtn = {
    ...navLinkBase,
    padding: 4,
    borderRadius: 999,
    borderColor: colors.outlawRed,
    background: "transparent",
    gap: 10,
  };

  const avatarImg = {
    width: 38,
    height: 38,
    borderRadius: 999,
    border: `2px solid ${colors.outlawRed}`,
    display: "block",
    background: colors.vintageCream, // cream background
    objectFit: "cover",
  };

  const accountPanel = {
    ...dropdownPanel,
    right: 0,
    left: "auto",
    minWidth: 260,
  };

  // Custom avatar fallback
  const BrandAvatar = ({ silhouette = "red" }) => {
    const fill = silhouette === "grey" ? colors.outlawGrey || "#6B7280" : colors.outlawRed;
    return (
      <svg width="38" height="38" viewBox="0 0 40 40" style={{ display: "block", background: colors.vintageCream, borderRadius: "50%" }}>
        <circle cx="20" cy="14" r="8" fill={fill} />
        <path d="M4 36c2-8 9-12 16-12s14 4 16 12" fill={fill} />
      </svg>
    );
  };

  const noRealPhoto = !user?.imageUrl || user?.imageUrl.includes("default-avatar");

  return (
    <header style={headerWrap}>
      <div style={container}>
        {/* Left: Logo with full-height divider */}
        <div style={{ position: "relative", paddingRight: 16 }}>
          <a href="/" style={logoLink} aria-label="Go to home">
            <img
              src="/brand/logos/TheUnsignedUnderground-OnBlack.svg"
              alt="The Unsigned Underground"
              style={logoImg}
            />
          </a>
          <span aria-hidden="true" style={{ ...logoDividerLine, right: -1, left: "auto" }} />
        </div>

        {/* Center-left nav */}
        <nav style={navRow}>
          <div
            style={{ ...navItemWrap, ...withDivider }}
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
                <a href="/artist-manager" style={dropdownItem}
                  onMouseOver={(e) => dropdownItemHover(e.currentTarget)}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Artist Manager (Overview)
                </a>
                <a href="/city-showcase" style={{ ...dropdownItem, marginTop: 8 }}
                  onMouseOver={(e) => dropdownItemHover(e.currentTarget)}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  City Showcase
                </a>
                <a href="/playlists" style={{ ...dropdownItem, marginTop: 8 }}
                  onMouseOver={(e) => dropdownItemHover(e.currentTarget)}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Curated Playlists
                </a>
                <a href="/press" style={{ ...dropdownItem, marginTop: 8 }}
                  onMouseOver={(e) => dropdownItemHover(e.currentTarget)}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  PR &amp; Articles
                </a>
              </div>
            )}
          </div>

          <div style={{ ...navItemWrap, ...withDivider }}>
            <span aria-hidden="true" style={dividerLine} />
            <a href="/pricing" style={navLinkPricing}
              onMouseOver={(e) => applyHover(e.currentTarget)}
              onMouseOut={(e) => clearHover(e.currentTarget, true)}
            >
              Pricing
            </a>
          </div>

          <div style={{ ...navItemWrap, ...withDivider }}>
            <span aria-hidden="true" style={dividerLine} />
            <a href="/faq" style={navLinkBase}
              onMouseOver={(e) => applyHover(e.currentTarget)}
              onMouseOut={(e) => clearHover(e.currentTarget)}
            >
              FAQ
            </a>
          </div>
        </nav>

        {/* Right cluster */}
        <div style={rightWrap}>
          <a href="/dashboard" style={navLinkBase}
            onMouseOver={(e) => applyHover(e.currentTarget)}
            onMouseOut={(e) => clearHover(e.currentTarget)}
          >
            Dashboard
          </a>

          <SignedOut>
            <SignInButton mode="modal">
              <button
                style={{ ...navLinkBase, borderColor: colors.outlawRed }}
                onMouseOver={(e) => applyHover(e.currentTarget)}
                onMouseOut={(e) => clearHover(e.currentTarget)}
              >
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div style={{ position: "relative", ...withDivider }}
              onMouseEnter={() => openMenu("account")}
              onMouseLeave={() => scheduleClose("account")}
            >
              <span aria-hidden="true" style={dividerLine} />
              <button type="button" style={avatarBtn}
                aria-haspopup="menu"
                aria-expanded={openMenuKey === "account"}
                onMouseOver={(e) => applyHover(e.currentTarget)}
                onMouseOut={(e) => clearHover(e.currentTarget)}
                onClick={() => setOpenMenuKey(openMenuKey === "account" ? null : "account")}
                title="Account"
              >
                {noRealPhoto ? <BrandAvatar /> : <img src={user.imageUrl} alt="Account" style={avatarImg} />}
              </button>

              {openMenuKey === "account" && (
                <div role="menu" style={accountPanel}
                  onMouseEnter={() => openMenu("account")}
                  onMouseLeave={() => scheduleClose("account")}
                >
                  <a href="#" style={dropdownItem}
                    onMouseOver={(e) => dropdownItemHover(e.currentTarget)}
                    onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    My Account
                  </a>
                  <a href="/dashboard" style={{ ...dropdownItem, marginTop: 8 }}
                    onMouseOver={(e) => dropdownItemHover(e.currentTarget)}
                    onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    My Dashboard
                  </a>
                  <a href="/orders" style={{ ...dropdownItem, marginTop: 8 }}
                    onMouseOver={(e) => dropdownItemHover(e.currentTarget)}
                    onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    My Orders
                  </a>
                  <a href="/my-website" style={{ ...dropdownItem, marginTop: 8 }}
                    onMouseOver={(e) => dropdownItemHover(e.currentTarget)}
                    onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    My Website
                  </a>
                  <button type="button" style={{ ...dropdownItem, marginTop: 8 }}
                    onMouseOver={(e) => dropdownItemHover(e.currentTarget)}
                    onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
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
