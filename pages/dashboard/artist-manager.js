// pages/dashboard/artist-manager.js
import Head from "next/head";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { hasEntitlement } from "../../lib/entitlements";

/* ===== Dev bypass helper (works with env OR localStorage) ===== */
const devBypassNow = () =>
  process.env.NEXT_PUBLIC_DEV_ENTITLEMENT_BYPASS === "1" ||
  (typeof window !== "undefined" && localStorage.getItem("uuDevBypass") === "1");

export default function ArtistManagerPage() {
  const { user, isLoaded } = useUser(); // isLoaded helps us know when Clerk is ready
  const [entitled, setEntitled] = useState(null); // null = computing; true/false afterwards
  const [devBypassActive, setDevBypassActive] = useState(false);

  // Compute entitlement on client after Clerk/user is ready
  useEffect(() => {
    if (!isLoaded) return; // wait for Clerk to load user/client
    const bypass = devBypassNow();
    const allowed =
      bypass ||
      hasEntitlement({ user, requireAnyOf: ["annual", "monthly", "fast_track"] });

    setDevBypassActive(bypass);
    setEntitled(allowed);

    // Debug: see values in the browser console
    // (Open DevTools → Console to verify)
    // eslint-disable-next-line no-console
    console.log("[ArtistManager] isLoaded:", isLoaded, "bypass:", bypass, "entitled:", allowed, "user:", !!user);
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
        {/* Signed-out fallback (middleware should gate already) */}
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
            {/* Show a tiny loading state until we compute entitlement on the client */}
            {entitled === null ? (
              <div style={card}><p>Loading…</p></div>
            ) : entitled ? (
              <>
                {devBypassActive && (
                  <div style={devBanner(colors)}>
                    DEV bypass active — all signed-in users can view this page. Turn off by setting{" "}
                    <code>NEXT_PUBLIC_DEV_ENTITLEMENT_BYPASS=0</code> or clearing <code>localStorage.uuDevBypass</code>.
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

                {/* ===================== SECTIONS ===================== */}
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

                <article style={section(colors)}>
                  <h2 style={h2}>Marketing & Fan Growth</h2>
                  <p>
                    Build loops, not one-offs. Every release should fuel: discovery (shorts/reels, local SEO), conversion
                    (Showcase + pre-save/links + email capture), and retention (updates, behind-the-scenes, gig
                    announcements). Use a single CTA per post and route traffic to your Showcase so momentum stacks in
                    one place.
                  </p>
                  <p>
                    Plan your weekly content around the calendar: Mon teaser, Wed rehearsal/clip, Fri drop, weekend live
                    moment—repeat. Measure saves and email signups more than views.
                  </p>
                </article>

                <article style={section(colors)}>
                  <h2 style={h2}>Social & Content Systems</h2>
                  <p>
                    Batch content once a week: 3–5 verticals (hooks, behind-the-scenes, live moments), 1–2 image posts,
                    and one longer clip. Recut performances into multiple angles; reuse audio hooks with different
                    visuals. Pin a “Start here” post per platform pointing to your Showcase + current release.
                  </p>
                  <p>
                    Treat captions as headlines; the first line stops the scroll. End with a single action (“Save the
                    single,” “Grab tickets,” “Join the list”) and rotate asks to avoid fatigue.
                  </p>
                </article>

                <article style={section(colors)}>
                  <h2 style={h2}>Live, Gigs & Street Team</h2>
                  <p>
                    Your gig calendar is a conversion tool—fans plan around it, venues evaluate it, and press links to
                    it. Keep it current on your Showcase. Film one clean 30–60s live clip each show; those become next
                    week’s social pillars. Build a volunteer street team: early listens and guestlist in exchange for
                    shares and flyers.
                  </p>
                  <p>
                    Venues and festivals want <em>proof</em>. Lead with concise stats (draw, email list size, notable
                    press), a tidy EPK, and 1–2 standout live clips. Follow up politely and move on; yeses compound.
                  </p>
                </article>

                <article style={section(colors)}>
                  <h2 style={h2}>Distribution & Monetization</h2>
                  <p>
                    Use a reputable distributor (e.g., DistroKid) and submit 2–4 weeks ahead with correct metadata.
                    Point pre-save/links to the Showcase so fans stay in your world. Monetize across streams (PRO + MLC +
                    SoundExchange), direct sales, shows, and merch. Store splits from day one.
                  </p>
                  <p>
                    Our “Music Distribution Quick Start” mirrors distributor fields (titles, credits, ISRC/UPC, artwork
                    specs) and exports a clean summary for error-free uploads—every time.
                  </p>
                </article>

                <article style={section(colors)}>
                  <h2 style={h2}>PR & Media Outreach</h2>
                  <p>
                    Press exists to tell a story that matters to a specific audience. Start with a succinct press
                    release (what’s new, why it matters, who it’s for). Add a feature angle that deepens the story
                    (process, meaning, place). Target local/genre blogs first; national looks follow local noise.
                  </p>
                  <p>
                    Send short, personalized pitches with a clear hook and links (Showcase, release, live clip).
                    Follow up weekly, twice max. Publish your press assets on your Showcase regardless—journalists often
                    discover you later and need a reference.
                  </p>
                </article>

                <article style={section(colors)}>
                  <h2 style={h2}>Legal & Contracts (Independence-First)</h2>
                  <p>
                    Paperwork protects relationships. Use plain-English agreements: split sheets for songs, work-for-hire
                    for paid collaborators, and a one-page show agreement when needed. Be comfortable saying “let me
                    review this.” Red flags: vague royalty language, IP grabs, long terms with no meaningful budget.
                  </p>
                  <p>
                    Keep contracts and IDs tidy (cloud + local): PDFs for agreements, plus ISRC/ISWC/UPC, and PRO
                    account details. Future you will thank present you.
                  </p>
                </article>

                <article style={section(colors)}>
                  <h2 style={h2}>Royalties, Rights & Licensing</h2>
                  <p>
                    Master vs. Publishing: masters are the recordings; publishing is the composition. Streams generate
                    performance (PROs like ASCAP/BMI/SESAC), mechanical (The MLC in the U.S.), and sound recording
                    performance (SoundExchange). Register once, collect forever.
                  </p>
                  <p>
                    IDs matter: ISRC (recordings), ISWC (compositions), IPI/CAE (writers), UPC (releases). For licensing:
                    sync requires <em>both</em> master + publishing clearance; covers need mechanical licenses; sampling
                    needs both master + publishing permissions. Keep templates handy (split sheets, license request).
                  </p>
                </article>

                <article style={section(colors)}>
                  <h2 style={h2}>Music Release & Schedules</h2>
                  <p>
                    Run 6–8 week cycles: announce, tease, pre-save, drop, post-drop content. Pair each single with
                    6–10 short clips and 2–3 live moments; pitch local media in week 1–2 and again after the drop.
                    Use Song Swaps to keep your playlist slot aligned with your newest release so fans always hear the
                    latest.
                  </p>
                  <p>
                    After each cycle, debrief: what hooked, what converted, what drove saves and emails. Adjust and
                    repeat—the compounding effect is real.
                  </p>
                </article>

                <article style={{ ...section(colors), borderColor: colors.outlawRed, boxShadow: "0 10px 24px rgba(135,31,26,0.25)" }}>
                  <h2 style={h2}>What’s Working Now</h2>
                  <p>
                    We update this area with tactics that are currently effective (format shifts, platform trends,
                    outreach angles). As tactics fade, we archive them and keep high-signal ones front and center.
                  </p>
                </article>
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
