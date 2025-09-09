// pages/faq.js
import Head from "next/head";

export default function FAQ() {
  const colors = { outlawRed: "#e11d2e", vintageCream: "#fdf5e6", black: "#000" };

  const faqs = [
    {
      q: "What is The Unsigned Underground in a nutshell?",
      a: (
        <>
          <p>
            We’re an artist-first platform focused on helping independent artists win locally first, then expand. Your
            package centers on a Custom Showcase Site (your public hub/EPK), a professional PR package (press release +
            feature article, optional interview), and guaranteed inclusion on curated playlists as we roll them out—no
            pay-to-play.
          </p>
        </>
      ),
    },
    {
      q: "What’s included with membership?",
      a: (
        <>
          <p>
            Custom Showcase Site, built-in EPK, embedded music player, gig calendar, photo updates, video embeds,
            socials, and automation tools. Your PR package (press release + feature article, optional interview) and
            curated playlist placement are included. Members also get access to the Artist Manager (guides, tools,
            templates).
          </p>
        </>
      ),
    },
    {
      q: "How do the curated playlists work?",
      a: (
        <>
          <p>
            We operate state-level playlists by genre as we roll them out. Placement is included with eligible plans and
            is never pay-to-play. You have one active track; when you release new music, use a Song Swap to replace the
            old track so fans always hear your latest.
          </p>
        </>
      ),
    },
    {
      q: "Can I change things on my Showcase Site?",
      a: (
        <>
          <p>
            Yes. <strong>Changes handled by The Unsigned Underground are included in your membership.</strong> This
            includes updating text/photos, schedules, and <em>adding or changing a song in your player</em>.
          </p>
        </>
      ),
    },
    {
      q: "Do you offer custom dev/design work?",
      a: (
        <>
          <p>
            <strong>Currently, The Unsigned Underground does not offer custom developer or designer services.</strong>{" "}
            We focus on fast, high-quality updates within your Showcase and PR deliverables.
          </p>
        </>
      ),
    },
    {
      q: "What is a Song Swap and how much does it cost?",
      a: (
        <>
          <p>
            A Song Swap replaces your current playlist track with a new release so your slot stays current. It’s a small
            one-time fee to cover labor/automation. We regret the need to charge, but it ensures we can process swaps
            quickly and fairly. See the Song Swap page for price and turnaround.
          </p>
        </>
      ),
    },
    {
      q: "I don’t want a Showcase Site—can I just buy PR + Playlists?",
      a: (
        <>
          <p>
            Yes. Choose <strong>Underground Fast Track</strong>: professional press release, feature article, optional
            interview, and curated playlist inclusion—without a Showcase Site. You’ll still get dashboard tools and your
            coverage on our music blog.
          </p>
        </>
      ),
    },
    {
      q: "What’s your renewal and archive policy?",
      a: (
        <>
          <p>
            If your annual term expires unpaid, all features pause and content is archived for 30 days. Within that
            window, you can reactivate by paying the annual renewal plus a $29.95 reactivation fee. After 30 days,
            content is deleted and you’d re-onboard with a new annual package.
          </p>
        </>
      ),
    },
    {
      q: "Who owns my music and rights? Do you take a cut?",
      a: (
        <>
          <p>
            You keep your rights. We don’t take a percentage of royalties. We encourage proper registrations (PRO, The
            MLC, SoundExchange) and provide guidance and templates in the Artist Manager.
          </p>
        </>
      ),
    },
    {
      q: "How do I release music through UU tools?",
      a: (
        <>
          <p>
            Use our <strong>Music Distribution Quick Start</strong> checklist (mirrors distributor fields, adds tips for
            artwork/metadata, and provides a copy-all summary). We also include an affiliate link for DistroKid if you
            need a distributor.
          </p>
        </>
      ),
    },
    {
      q: "Where will my article/interview appear?",
      a: (
        <>
          <p>
            On our genre music blog (magazine coverage) and on your Showcase Site’s press section. You’ll also receive
            delivery files so you can publish on your own website and socials.
          </p>
        </>
      ),
    },
    {
      q: "Are playlists available in my state today?",
      a: (
        <>
          <p>
            We’re rolling out by state and genre. If your state’s list isn’t live yet, you’ll be queued and placed as
            soon as it opens. Your Showcase and PR work the same either way, so you can build momentum now.
          </p>
        </>
      ),
    },
    {
      q: "How fast are updates and PR turnarounds?",
      a: (
        <>
          <p>
            Standard Showcase changes are quick. PR timelines depend on scope (press release vs. feature + interview).
            We’ll confirm timing before we begin and keep you posted.
          </p>
        </>
      ),
    },
    {
      q: "Refunds, pauses, or cancellations?",
      a: (
        <>
          <p>
            Memberships are annual or monthly per your plan. If you need help with billing or special circumstances,
            reach us at <a href="mailto:support@unsignedunderground.com">support@unsignedunderground.com</a> and we’ll
            assist.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>FAQ — The Unsigned Underground</title>
        <meta name="description" content="Answers to common questions about membership, playlists, PR, Showcase changes, renewals, and more." />
      </Head>

      <main>
        <section className="wrap">
          <header className="hero">
            <h1>Frequently Asked Questions</h1>
            <p className="lead">
              Start with the big picture, then dive into specifics. If you don’t see your answer here, reach us anytime.
            </p>
          </header>

          <div className="faqs">
            {faqs.map((item, i) => (
              <details key={i} className="faq">
                <summary>{item.q}</summary>
                <div className="answer">{item.a}</div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        :root { --w: 1100px; }
        main { background: ${colors.black}; color: ${colors.vintageCream}; min-height: 100vh; }
        .wrap { max-width: var(--w); margin: 0 auto; padding: 48px 20px 80px; }
        .hero h1 { margin: 0 0 8px; font-size: clamp(28px, 3.4vw, 44px); line-height: 1.15; }
        .lead { color: #f5eede; margin: 0 0 16px; font-size: clamp(16px, 1.9vw, 20px); }
        .faqs { display: grid; gap: 12px; }
        .faq {
          border: 1px solid #2b2b2b; background: #0b0b0b; border-radius: 14px; padding: 12px 14px;
        }
        summary {
          cursor: pointer; list-style: none; font-weight: 800; font-size: clamp(16px, 1.9vw, 20px);
        }
        summary::-webkit-details-marker { display: none; }
        .answer { margin-top: 10px; line-height: 1.65; }
        a { color: ${colors.vintageCream}; border-bottom: 1px solid ${colors.outlawRed}; text-decoration: none; }
      `}</style>
    </>
  );
}
