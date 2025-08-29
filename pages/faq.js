import Head from "next/head";
import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      q: "How does this work?",
      a: "You complete a single onboarding form with your music, images, links, and story. We build your City Showcase Site (EPK website) and prepare your press assets (feature article + press release). We publish, then amplify through our ecosystem so the right audience discovers you. You’ll be able to update your Showcase easily going forward."
    },
    {
      q: "What’s included in the Artist Package?",
      a: "City Showcase Site (EPK website), premium feature article, press release, Artist Manager access (members-only guidance/tools), and amplification across our ecosystem. See the landing page section “What’s Included…” for a concise list."
    },
    {
      q: "How fast can my page go live?",
      a: "First draft in a few business days after you complete onboarding and provide assets. Press items usually follow shortly after. Timelines depend on the quality/completeness of your materials and any revision cycles."
    },
    {
      q: "Do I keep ownership of my music and content?",
      a: "Yes. You retain full ownership. You grant us permission to display and promote your materials on your City Showcase Site and across our channels."
    },
    {
      q: "Can I update my site after it’s live?",
      a: "Yes. Your Showcase is designed to be easy to edit and maintain so fans and industry always see your latest music, shows, and news."
    },
    {
      q: "Is this the same as my existing website?",
      a: "No. A City Showcase Site is an SEO-targeted EPK website built to attract fans and industry. It complements whatever site you already have and can link both ways or use a custom domain."
    },
    {
      q: "Can I use a custom domain?",
      a: "Yes. We can map a custom domain (e.g., yourname.com) to your Showcase, or you can link to it from your current site and socials. We’ll provide simple DNS instructions."
    },
    {
      q: "Are there ongoing costs?",
      a: "There is a one-time build/startup fee for your Showcase + PR package. Optional membership plans (monthly/annual) cover ongoing hosting, updates, and promotion. You will always see current options clearly at checkout."
    },
    {
      q: "What is SEO and how does it help?",
      a: "We structure your Showcase content, metadata, and internal linking so you’re discoverable in your city and genre. That means more of the right fans—and the industry—can find you."
    },
    {
      q: "Can The Unsigned Underground help me release my music?",
      a: "Yes. We provide a Music Distribution Quick Start guide (pre-release checklist aligned to DistroKid) so you can fill everything once and paste where needed. It includes best-practice tips and copy-ready metadata."
    },
    {
      q: "Do you pitch to playlists?",
      a: "We don’t offer paid playlisting. We do amplify through our ecosystem and curated playlists as they launch region-by-region. You should still submit via Spotify for Artists and reputable curators as part of your release plan."
    },
    {
      q: "Can I get support if I’m stuck?",
      a: "Yes. We offer email support for onboarding, updates, domain mapping, and basic content questions. We’ll point you to best-practice guides and templates when it saves you time."
    },
    {
      q: "Refunds and cancellations?",
      a: "Build/startup fees cover production work that begins after onboarding, so they’re generally non-refundable once work starts. Membership can be canceled going forward via the billing portal; your current cycle remains active through its end date."
    },
    {
      q: "What about PR/press quality—who writes the article and release?",
      a: "Our team prepares your feature article and press release using your onboarding details, references, and links. You can request reasonable edits for accuracy and tone before publishing."
    },
    {
      q: "Is my data private?",
      a: "Yes. We only use your materials to build, host, and promote your Showcase and related features. We do not sell your data. See our Privacy Policy for details."
    },
    {
      q: "What happens if I lapse on membership?",
      a: "If you pause or cancel membership, hosting and ongoing promotion may pause. You can re-activate later; we’ll restore service per the reactivation policy shown during checkout."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };

  return (
    <>
      <Head>
        <title>FAQ — The Unsigned Underground</title>
        <meta
          name="description"
          content="Answers to the most common questions about The Unsigned Underground — City Showcase Sites, PR package, timelines, ownership, domains, SEO, and more."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <main style={page}>
        {/* Simple top nav tab — mirror this in your site header later */}
        <nav style={topNav}>
          <a href="/" style={navLink}>Home</a>
          <span style={{opacity:.35, padding:"0 10px"}}>•</span>
          <a href="/faq" style={{...navLink, fontWeight:700, textDecoration:"underline"}}>FAQ</a>
        </nav>

        <section style={wrap}>
          <h1 style={{marginTop:0}}>Frequently Asked Questions</h1>
          <p style={{color:"#666", maxWidth:860}}>
            Browse answers to common questions about your City Showcase Site, PR package, timelines, ownership, domains, SEO, and more.
          </p>

          <div style={accordionWrap}>
            {faqs.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} />
            ))}
          </div>

          <div style={{marginTop:24}}>
            <a href="/" style={{textDecoration:"none", color:"#111"}}>← Back to Home</a>
          </div>
        </section>
      </main>
    </>
  );
}

/* ---------- Small presentational components ---------- */

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const id = q.replace(/\s+/g, "-").toLowerCase();
  return (
    <div style={accordionItem}>
      <button
        onClick={() => setOpen(!open)}
        style={accordionBtn}
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{q}</span>
        <span style={{fontWeight:700}}>{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div id={id} style={accordionPanel}>
          {a}
        </div>
      )}
    </div>
  );
}

/* ---------- Styles ---------- */

const page = {
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  color: "#111",
  background: "#fff"
};

const topNav = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "16px 20px",
  display: "flex",
  alignItems: "center"
};

const navLink = {
  color: "#111",
  textDecoration: "none"
};

const wrap = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 20px 40px"
};

const accordionWrap = {
  maxWidth: 900,
  margin: "20px auto 0",
  display: "grid",
  gap: 10
};

const accordionItem = {
  border: "1px solid #eaeaea",
  borderRadius: 10,
  background: "#fff"
};

const accordionBtn = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "14px 16px",
  background: "transparent",
  border: "none",
  fontSize: 16,
  textAlign: "left",
  cursor: "pointer"
};

const accordionPanel = {
  padding: "0 16px 14px 16px",
  color: "#555",
  lineHeight: 1.6
};
