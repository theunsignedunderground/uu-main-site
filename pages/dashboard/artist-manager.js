// pages/dashboard/artist-manager.js
import Head from "next/head";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { hasEntitlement } from "../../lib/entitlements";

/* Dev bypass helper: env OR localStorage */
const devBypassNow = () =>
  process.env.NEXT_PUBLIC_DEV_ENTITLEMENT_BYPASS === "1" ||
  (typeof window !== "undefined" && localStorage.getItem("uuDevBypass") === "1");

export default function ArtistManagerPage() {
  const { user, isLoaded } = useUser();
  const [entitled, setEntitled] = useState(null); // null = computing
  const [devBypassActive, setDevBypassActive] = useState(false);

  useEffect(() => {
    if (!isLoaded) return; // wait for Clerk to load
    const bypass = devBypassNow();
    const allowed =
      bypass ||
      hasEntitlement({ user, requireAnyOf: ["annual", "monthly", "fast_track"] });

    setDevBypassActive(bypass);
    setEntitled(allowed);
  }, [isLoaded, user]);

  const colors = {
    outlawRed: "#871F1A",
    vintageCream: "#F4E6D0",
    black: "#1C1C1C",
  };

  return (
    <>
      <Head>
        <title>Artist Manager — The Unsigned Underground</title>
        <meta
          name="description"
          content="In-depth guidance for independent artists: growth systems, release schedules, PR, distribution, royalties, legal, gigs, and more."
        />
      </Head>

      <main style={{ background: colors.black, color: colors.vintageCream, minHeight: "100vh" }}>
        {/* Signed-out (middleware also gates) */}
        <SignedOut>
          <section style={wrap}>
            <div style={card}>
              <h1>Please sign in</h1>
              <p style={lead}>
                This page is for members only.{" "}
                <a style={link(colors)} href="/sign-in">Sign in</a> to continue.
              </p>
            </div>
          </section>
        </SignedOut>

        <SignedIn>
          <section style={wrap}>
            {/* Small loading state until entitlement computed */}
            {entitled === null ? (
              <div style={card}><p>Loading…</p></div>
            ) : entitled ? (
              <>
                {devBypassActive && (
                  <div style={devBanner(colors)}>
                    DEV bypass active — all signed-in users can view this page. Turn off by setting{" "}
                    <code>NEXT_PUBLIC_DEV_ENTITLEMENT_BYPASS=0</code> or clearing{" "}
                    <code>localStorage.uuDevBypass</code>.
                  </div>
                )}

                <header style={{ marginBottom: 16 }}>
                  <h1 style={{ margin: "0 0 6px", fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.15 }}>
                    Artist Manager (Members-Only)
                  </h1>
                  <p style={lead}>
                    A practical playbook for independent artists. Read each section once, then use it as a reference
                    before every release, show, and PR push.
                  </p>
                </header>

                {/* ===== Sections (sample — keep expanding with your full content) ===== */}
                <article style={section(colors)}>
                  <h2 style={h2}>Owning Your Career: The Independent Advantage</h2>
                  <p>
                    Independence isn’t “going it alone”—it’s keeping control of your masters, your fan relationships,
                    and your revenue paths while partnering with the right services at the right time. Your Showcase,
                    PR, and playlists exist to turn every song, video, and show into momentum you own: email list growth,
                    repeat visitors, and playlist saves that compound.
                  </p>
                  <p>
                    Your north star is <em>community first</em>. Win your city, then expand to nearby cities and
                    state-level playlists. The systems below are built around that sequence.
                  </p>
                </article>

                <article style={section(colors)}>
                  <h2 style={h2}>From Local Hero to National Act</h2>
                  <p>
                    Think in rings: hometown → nearby cities → regional circuit → national looks. Each ring demands
                    evidence—great recordings, a clean EPK, consistent socials, live clips, and a story. Release on a
                    schedule, pitch locally, capture emails at shows, and use Song Swaps to keep your playlist slot
                    current as you level up.
                  </p>
                  <p>
                    Track outcomes weekly: email list, followers, saves/streams, show offers. When metrics trend up in
                    one ring, allocate more effort to the next. Momentum is your investor.
                  </p>
                </article>

                {/* (Continue with the rest of the in-depth sections you approved) */}
              </>
            ) : (
              <div style={card}>
                <h1>Artist Manager</h1>
                <p style={lead}>
                  This content is available with a UU plan. While building, enable the dev bypass or{" "}
                  <a style={link(colors)} href="/pricing">choose a plan</a>.
                </p>
              </div>
            )}
          </section>
        </SignedIn>
      </main>
    </>
  );
}

/* ===== tiny style helpers to match your site ===== */
const wrap = { maxWidth: 1100, margin: "0 auto", padding: "48px 20px 80px" };
const card = { border: "1px solid #2b2b2b", background: "#252525", borderRadius: 14, padding: 16 };
const lead = { color: "#F4E6D0", opacity: 0.92, margin: 0, fontSize: "clamp(16px, 1.9vw, 20px)" };
const h2 = { margin: "0 0 8px", fontSize: "clamp(20px, 2.6vw, 28px)" };

const link = (colors) => ({
  color: colors.vintageCream,
  borderBottom: `1px solid ${colors.outlawRed}`,
  textDecoration: "none",
});

const section = (colors) => ({
  marginTop: 22,
  border: "1px solid #2b2b2b",
  background: "#252525",
  borderRadius: 14,
  padding: 16,
});

const devBanner = (colors) => ({
  border: `1px dashed ${colors.outlawRed}`,
  background: "#252525",
  color: colors.vintageCream,
  borderRadius: 12,
  padding: "10px 12px",
  marginBottom: 12,
  fontSize: 14,
});
