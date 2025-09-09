// pages/manager.js
import Head from "next/head";

export default function ArtistManager() {
  const colors = { outlawRed: "#e11d2e", vintageCream: "#fdf5e6", black: "#000" };

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
        <section className="wrap">
          <header className="hero">
            <h1>Artist Manager (Members-Only)</h1>
            <p className="lead">
              A practical playbook for independent artists. Read each section top-to-bottom once, then use it as a
              reference before every release, show, and PR push.
            </p>
          </header>

          {/* 1. Owning Your Career */}
          <article className="section">
            <h2>Owning Your Career: The Independent Advantage</h2>
            <p>
              Independence isn’t “going it alone”—it’s keeping control of your masters, your fan relationships, and your
              revenue paths while partnering with the right services at the right time. Your Showcase Site and PR tools
              exist to turn every song, video, and show into momentum you own: emails collected, socials grown, repeat
              visitors, and playlist saves. You trade advances for agility—you can release faster, test ideas, and keep
              your upside.
            </p>
            <p>
              Your north star is <em>community first</em>. Win your city, then expand regionally. Every tactic below
              ladders into that: local SEO (city Showcase), curated state playlists, targeted PR, and a cadence of
              releases that compounds.
            </p>
          </article>

          {/* 2. From Local Hero to National Act */}
          <article className="section">
            <h2>From Local Hero to National Act</h2>
            <p>
              Growth happens in rings. Ring 1: hometown fans and venues; ring 2: nearby cities and state playlists; ring
              3: regional circuits and genre media; ring 4: national looks. Each ring demands evidence—great recordings,
              a clean EPK, consistent socials, live clips, and a story. Your plan: release on a schedule, pitch locally,
              capture emails at shows, and use Song Swaps to keep your playlist slot current as you level up.
            </p>
            <p>
              Track outcomes weekly: followers, email list, saves/streams, show offers. When those trend up in one ring,
              allocate more effort to the next. Momentum is your investor.
            </p>
          </article>

          {/* 3. Marketing & Fan Growth */}
          <article className="section">
            <h2>Marketing & Fan Growth</h2>
            <p>
              Think in loops, not one-offs. Every release should fuel three loops: discovery (shorts, reels, local SEO),
              conversion (Showcase + pre-save/links + email capture), and retention (updates, behind-the-scenes, gig
              announcements). Feature your strongest 10–20 seconds in video teasers and use captions; point all roads to
              the same Showcase URL so your momentum stacks.
            </p>
            <p>
              Use one primary CTA per post (pre-save, new single, tickets). Measure saves and email signups, not just
              views. Align weekly content with your calendar: Mon teaser, Wed rehearsal/clip, Fri drop, weekend live
              clip—repeat.
            </p>
          </article>

          {/* 4. Social & Content Systems */}
          <article className="section">
            <h2>Social & Content Systems</h2>
            <p>
              Batch content once a week: 3–5 short verticals (hooks, behind-the-scenes, live moments), 1–2 image posts,
              and one longer clip. Re-cut performances into multiple angles; reuse audio hooks across different visuals.
              Pin one “start here” post on each platform that routes to your Showcase and current release.
            </p>
            <p>
              Treat captions as headlines; the first line must stop the scroll. End with a single action (“Save the
              single,” “Grab tickets,” “Join the list”) and rotate the ask so your audience doesn’t tune it out.
            </p>
          </article>

          {/* 5. Live / Gigs / Street Team */}
          <article className="section">
            <h2>Live, Gigs & Street Team</h2>
            <p>
              Your gig calendar is a conversion tool—fans plan around it, venues evaluate it, and press links to it.
              Keep it current on your Showcase. Film at least one clean 30–60s live clip each show; those become next
              week’s social pillars. Build a volunteer street team with a simple trade: early listens and guestlist for
              sharing posts and flyers.
            </p>
            <p>
              Venues and festivals want <em>proof</em>. Lead with concise stats (draw, email list size, notable press),
              a tidy EPK, and 1–2 standout live clips. Follow up politely and move on; momentum compounds with yeses.
            </p>
          </article>

          {/* 6. Distribution & Monetization */}
          <article className="section">
            <h2>Distribution & Monetization</h2>
            <p>
              Use a reputable distributor (e.g., DistroKid) and submit 2–4 weeks ahead with correct metadata. Route
              your pre-save/links to the Showcase so fans stay in your world. Monetize across streams (PRO + MLC +
              SoundExchange), Bandcamp, direct sales, shows, and merch. Keep splits clear from day one and store them in
              your project folder.
            </p>
            <p>
              Our “Music Distribution Quick Start Guide” mirrors distributor fields (titles, credits, ISRC/UPC, explicit
              flags, artwork specs) and exports a clean summary you can reuse. Use it for error-free uploads, every
              time.
            </p>
          </article>

          {/* 7. PR / Media Outreach */}
          <article className="section">
            <h2>PR & Media Outreach</h2>
            <p>
              Press exists to tell a story that matters to a specific audience. Start with a succinct press release
              (what’s new, why it matters, who it’s for) and a feature angle that adds depth (process, meaning, place).
              Target local and genre blogs first; national looks come when you’re making local noise.
            </p>
            <p>
              Send short, personalized pitches with a clear hook and links (Showcase, release, live clip). Follow up
              once a week, twice max. Publish your own press assets on your Showcase regardless—journalists often
              discover you later and need a reference.
            </p>
          </article>

          {/* 8. Legal & Contracts (independence-first) */}
          <article className="section">
            <h2>Legal & Contracts (Independence-First)</h2>
            <p>
              Paperwork protects relationships. Use simple, plain-English agreements: split sheets for songs, work-for-
              hire for paid collaborators, and a one-page show agreement when needed. Get comfortable saying “let me
              review this” when offered deals; red flags include vague royalty language, IP grabs, and long terms with
              no meaningful budget.
            </p>
            <p>
              Keep contracts and IDs in a single folder (cloud + local): PDFs for agreements, plus your ISRC/ISWC/UPC
              and PRO account details. Future you will thank present you.
            </p>
          </article>

          {/* 9. Royalties, Rights & Licensing */}
          <article className="section">
            <h2>Royalties, Rights & Licensing</h2>
            <p>
              Master vs. Publishing: masters are the recordings; publishing is the underlying composition. Streams
              generate several royalties: performance (via PROs like ASCAP/BMI/SESAC), mechanical (The MLC in the U.S.),
              and sound recording performance (SoundExchange). Register once, collect forever.
            </p>
            <p>
              IDs matter: ISRC for recordings, ISWC for compositions, IPI/CAE for writers, and UPC for releases. For
              licensing: sync needs <em>both</em> master and publishing clearance; covers require mechanical licenses;
              sampling requires master + publishing clearances. Keep a split sheet template and a simple license request
              email ready.
            </p>
          </article>

          {/* 10. Music Release & Schedules */}
          <article className="section">
            <h2>Music Release & Schedules</h2>
            <p>
              Run 6–8 week cycles: announce, tease, pre-save, drop, and post-drop content. Pair each single with at
              least 6–10 short clips and 2–3 live moments; pitch local media during week 1–2 and again after the drop.
              Use our Song Swap to keep your playlist slot aligned with your newest release so fans always hear your
              latest.
            </p>
            <p>
              After each cycle, debrief: what hooked, what converted, what drove saves and emails. Adjust and repeat—the
              compounding effect is real.
            </p>
          </article>

          {/* What's Working Now */}
          <article className="section callout">
            <h2>What’s Working Now</h2>
            <p>
              We update this area with currently effective tactics (platform trends, format shifts, outreach angles).
              As tactics fade, we archive them and keep the high-signal ones front and center.
            </p>
          </article>
        </section>
      </main>

      <style jsx>{`
        :root { --w: 1100px; }
        main { background: ${colors.black}; color: ${colors.vintageCream}; min-height: 100vh; }
        .wrap { max-width: var(--w); margin: 0 auto; padding: 48px 20px 80px; }
        .hero h1 { margin: 0 0 8px; font-size: clamp(28px, 3.4vw, 44px); line-height: 1.15; }
        .lead { color: #f5eede; margin: 0 0 14px; font-size: clamp(16px, 1.9vw, 20px); }
        .section { margin-top: 22px; border: 1px solid #2b2b2b; background: #0b0b0b; border-radius: 14px; padding: 16px; }
        .section h2 { margin: 0 0 8px; font-size: clamp(20px, 2.6vw, 28px); }
        .section p { margin: 8px 0; line-height: 1.65; }
        .callout { border-color: ${colors.outlawRed}; box-shadow: 0 10px 24px rgba(225,29,46,0.18); }
      `}</style>
    </>
  );
}
