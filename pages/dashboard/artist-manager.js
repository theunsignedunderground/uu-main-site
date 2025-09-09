import Head from "next/head";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { hasEntitlement } from "../../lib/entitlements";

// ✅ define this helper first
const devBypassNow = () =>
  process.env.NEXT_PUBLIC_DEV_ENTITLEMENT_BYPASS === "1" ||
  (typeof window !== "undefined" && localStorage.getItem("uuDevBypass") === "1");

export default function ArtistManagerPage() {
  const { user } = useUser();

  // ✅ now you can call it here
  const entitled =
    devBypassNow() ||
    hasEntitlement({ user, requireAnyOf: ["annual", "monthly", "fast_track"] });

  const showDevBypass = devBypassNow();

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

      <main>
        {/* Signed-out fallback (middleware should gate already, this is friendly UX) */}
        <SignedOut>
          <section className="wrap">
            <div className="card">
              <h1>Please sign in</h1>
              <p className="lead">
                This page is for members only.{" "}
                <a className="link" href="/sign-in">Sign in</a> to continue.
              </p>
            </div>
          </section>
        </SignedOut>

        <SignedIn>
          <section className="wrap">
            {showDevBypass && (
              <div className="devBanner">
                DEV bypass active — all signed-in users can view this page. Turn off by setting{" "}
                <code>NEXT_PUBLIC_DEV_ENTITLEMENT_BYPASS=0</code>.
              </div>
            )}

            {!entitled ? (
              <div className="card">
                <h1>Artist Manager</h1>
                <p className="lead">
                  This content is available with a UU plan. While building, enable the dev bypass or{" "}
                  <a className="link" href="/pricing">choose a plan</a>.
                </p>
              </div>
            ) : (
              <>
                <header className="hero">
                  <h1>Artist Manager (Members-Only)</h1>
                  <p className="lead">
                    A practical playbook for independent artists. Read each section once, then use it as a reference
                    before every release, show, and PR push.
                  </p>
                </header>

                {/* 1. Owning Your Career */}
                <article className="section">
                  <h2>Owning Your Career: The Independent Advantage</h2>
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

                {/* 2. From Local Hero to National Act */}
                <article className="section">
                  <h2>From Local Hero to National Act</h2>
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

                {/* 3. Marketing & Fan Growth */}
                <article className="section">
                  <h2>Marketing & Fan Growth</h2>
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

                {/* 4. Social & Content Systems */}
                <article className="section">
                  <h2>Social & Content Systems</h2>
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

                {/* 5. Live / Gigs / Street Team */}
                <article className="section">
                  <h2>Live, Gigs & Street Team</h2>
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

                {/* 6. Distribution & Monetization */}
                <article className="section">
                  <h2>Distribution & Monetization</h2>
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

                {/* 7. PR / Media Outreach */}
                <article className="section">
                  <h2>PR & Media Outreach</h2>
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

                {/* 8. Legal & Contracts */}
                <article className="section">
                  <h2>Legal & Contracts (Independence-First)</h2>
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

                {/* 9. Royalties, Rights & Licensing */}
                <article className="section">
                  <h2>Royalties, Rights & Licensing</h2>
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

                {/* 10. Music Release & Schedules */}
                <article className="section">
                  <h2>Music Release & Schedules</h2>
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

                {/* What's Working Now */}
                <article className="section callout">
                  <h2>What’s Working Now</h2>
                  <p>
                    We update this area with tactics that are currently effective (format shifts, platform trends,
                    outreach angles). As tactics fade, we archive them and keep high-signal ones front and center.
                  </p>
                </article>
              </>
            )}
          </section>
        </SignedIn>
      </main>

      <style jsx>{`
        :root { --w: 1100px; }
        main { background: ${colors.black}; color: ${colors.vintageCream}; min-height: 100vh; }
        .wrap { max-width: var(--w); margin: 0 auto; padding: 48px 20px 80px; }
        .hero h1 { margin: 0 0 8px; font-size: clamp(28px, 3.4vw, 44px); line-height: 1.15; }
        .lead { color: ${colors.vintageCream}; opacity: 0.92; margin: 0 0 14px; font-size: clamp(16px, 1.9vw, 20px); }
        .card { border: 1px solid #2b2b2b; background: #252525; border-radius: 14px; padding: 16px; }
        .link { color: ${colors.vintageCream}; border-bottom: 1px solid ${colors.outlawRed}; text-decoration: none; }

        .devBanner {
          border: 1px dashed ${colors.outlawRed};
          background: #252525;
          color: ${colors.vintageCream};
          border-radius: 12px;
          padding: 10px 12px;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .section {
          margin-top: 22px;
          border: 1px solid #2b2b2b;
          background: #252525;
          border-radius: 14px;
          padding: 16px;
        }
        .section h2 { margin: 0 0 8px; font-size: clamp(20px, 2.6vw, 28px); }
        .section p { margin: 8px 0; line-height: 1.65; }
        .callout { border-color: ${colors.outlawRed}; box-shadow: 0 10px 24px rgba(135,31,26,0.25); }
      `}</style>
    </>
  );
}
