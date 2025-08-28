export default function FAQ() {
  const faqs = [
    {
      q: "How does this work?",
      a: `You join UU, complete a short onboarding after checkout, and we build your City Showcase Site + core PR assets (press release & feature article). We focus on “build your community first” — local visibility, then expand to nearby cities and statewide via our Texas genre blogs.`
    },
    {
      q: "What do I get with UU?",
      a: `Phase 1 includes: your City Showcase Site, a written press release, a written feature article, posting to a state-level Texas genre blog, and access to the Artist Manager (static Q&A).`
    },
    {
      q: "Do I pay first or onboard first?",
      a: `Pay first. After checkout you’re redirected into onboarding. This raises completion rates and keeps your build queue clean. You can save progress and return anytime.`
    },
    {
      q: "How long until my deliverables are live?",
      a: `Quickly. Once you finish onboarding, the site scaffolding goes up and PR drafts are generated for review. You can add missing items later — we’ll build with what you have now.`
    },
    {
      q: "What is SEO and how does this benefit me?",
      a: `Search Engine Optimization helps fans, venues, and media find you. UU bakes in GEO + AIO best practices so your Showcase Site and Texas blog features rank for local intent searches (e.g., “live music in Boerne”).`
    },
    {
      q: "How do I get my song on an Underground playlist?",
      a: `Every UU artist will be considered for our curated Underground playlists. Requirement: you must have a song already released on Spotify. (Playlists expand state-by-state as we roll out.)`
    },
    {
      q: "Can The Unsigned Underground help me release my music?",
      a: `Yes. Use our Music Distribution Quick Start Guide (DistroKid-style pre-release checklist) to gather everything once, then paste into your distributor.`
    },
    {
      q: "Do I keep ownership of my music and rights?",
      a: `Yes. UU is independence-first. You keep your master and publishing rights. See “Royalties, Rights & Licensing” inside the Artist Manager for details.`
    },
    {
      q: "What’s included in the price?",
      a: `Launch package: $199 for the PR/Promotion setup + $19.95/month hosting & maintenance for your City Showcase Site and updates.`
    },
    {
      q: "Can I edit or add content later?",
      a: `Absolutely. You can update photos, links, bio, and new releases anytime; PR copy can be revised before publishing.`
    },
    {
      q: "What if I’m missing assets (photos, links, etc.)?",
      a: `No problem. We can publish with what you’ve got and you can add the rest later from your dashboard.`
    },
    {
      q: "How do I get started?",
      a: `Click “Get Started,” complete checkout, and you’ll be dropped into onboarding. It takes about 5–10 minutes.`
    }
  ];

  return (
    <section style={{marginTop: 40}}>
      <h2>Frequently Asked Questions</h2>
      <div style={{marginTop: 16, display: "grid", gap: 10}}>
        {faqs.map((item, i) => (
          <details key={i} style={detailsStyle}>
            <summary style={summaryStyle}>{item.q}</summary>
            <div style={{padding: "10px 14px 14px 14px", lineHeight: 1.5}}>{item.a}</div>
          </details>
        ))}
      </div>
      <p style={{marginTop: 16, fontSize: 13, color: "#666"}}>
        Have another question? Visit your <a href="/dashboard">Artist Dashboard</a> for more guidance.
      </p>
    </section>
  );
}

const detailsStyle = {
  border: "1px solid #e5e5e5",
  borderRadius: 10,
  background: "#fafafa",
  overflow: "hidden"
};

const summaryStyle = {
  cursor: "pointer",
  padding: "12px 14px",
  fontWeight: 600,
  listStyle: "none"
};
