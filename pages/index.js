export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get everything you need to promote your music and career — for less than $1 per day.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Tired of all the NOISE on social media and across the web? <br />
          With <span className="font-bold">The Unsigned Underground</span>, you get a complete <span className="font-bold">ARTIST FIRST</span> platform —
          your own showcase site, professional PR, playlist placement, fan growth tools, and more.
        </p>
        <a
          href="#join"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-all"
        >
          Join The Unsigned Underground Now
        </a>
        <p className="mt-4 text-sm italic">
          Includes hosting for 12 months. No hidden fees. Artist First always.
        </p>
      </section>

      {/* Section 1 – What You Get */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
        <ul className="space-y-8">
          <li>
            <h3 className="font-bold text-xl">Your Own City Showcase Site</h3>
            <p>
              Professionally built, search-optimized to get you noticed fast (much better than just a website). This is your official online home — a
              <strong> fan-facing environment</strong> online to house your <strong>Electronic Press Kit (an EPK we build for you)</strong>, music player,
              photos, gig calendar, video embeds, links to socials, your own press room, and more.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-xl">Professional PR That Gets Published</h3>
            <p>
              We create your first <strong>press release</strong>, <strong>artist article</strong>, and <strong>exclusive interview</strong> — and publish
              them inside a <strong>Music Blog Magazine</strong> where artists, fans, and industry eyes go to discover new talent like yours.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-xl">Industry Best Fan Growth Tools You Can Really Use</h3>
            <p>
              Build your fan base where you live and perform. We give you the platform to quickly grow a loyal fan base that can propel your music to
              dominate city by city, state by state.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-xl">Artist Manager (Members-Only)</h3>
            <p>
              An always-available, industry-backed career guide covering everything from marketing and gigs to distribution, monetization, and contracts.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-xl">Curated Playlist Inclusion (For Your Genre)</h3>
            <p>
              No pay to play, and no having to pitch your song to playlists. Your song gets placement on our Underground curated{" "}
              <strong>Spotify playlists</strong>, plus blog features and shoutouts across our network.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-xl">Free Music Release Tools</h3>
            <p>
              We provide easy-to-use tools — <strong>for FREE</strong> — to help you distribute and release your music. No pay to play.
            </p>
          </li>
        </ul>
      </section>

      {/* Section 2 – Why It Works */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why It Works</h2>
        <ul className="max-w-4xl mx-auto space-y-8">
          <li>
            <h3 className="font-bold text-xl">Community First</h3>
            <p>
              Fans discover you through their city’s SEO Showcase Site and an online Music Blog Magazine with a music article written about you.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-xl">Professional Credibility</h3>
            <p>Your PR assets and showcase site instantly set you apart.</p>
          </li>
          <li>
            <h3 className="font-bold text-xl">Scalable Growth</h3>
            <p>Once you dominate locally, <strong>The Unsigned Underground</strong> helps you branch into new cities and scenes.</p>
          </li>
        </ul>
      </section>

      {/* Section 3 – The Cost Breakdown */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">The Cost Breakdown</h2>
        <p className="text-center mb-6">
          Other platforms charge monthly fees for everything, pay to play is their game, and you have to build your own website and get no PR or growth
          tools to go with it.
        </p>
        <p className="text-center text-red-600 font-bold text-xl mb-8">Enough with the nickel and dime fees!</p>
        <ul className="space-y-4 text-lg">
          <li>✔ <strong>We build for you:</strong> Site + Professional PR + Playlist Inclusion + Manager + Growth Tools</li>
          <li>✔ Ongoing promotion across our ecosystem</li>
          <li>✔ All included for <strong>less than $1/day</strong></li>
        </ul>
        <p className="text-center mt-6 font-semibold text-xl">
          That’s less than $30/month for everything to promote your music and career — and no hidden fees.
        </p>
      </section>

      {/* Call to Action */}
      <section id="join" className="text-center py-20 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Your music deserves to be seen and heard.</h2>
        <p className="text-lg mb-8">
          Don’t pay to play on other sites. With <strong>The Unsigned Underground</strong> it’s Artist First, no hidden fees.
        </p>
        <a
          href="#"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-2xl px-10 py-5 rounded-2xl shadow-xl transition-all"
        >
          Join The Unsigned Underground Now
        </a>
      </section>
    </div>
  );
}

/* ---------- Small presentational components ---------- */

function Feature({ title, text }) {
  return (
    <div style={card}>
      <h3 style={{margin:"0 0 8px 0", fontSize:20}}>{title}</h3>
      <p style={{margin:0, color:"#555"}}>{text}</p>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div style={faqItem}>
      <h4 style={{margin:"0 0 6px 0"}}>{q}</h4>
      <p style={{margin:0, color:"#555"}}>{a}</p>
    </div>
  );
}
function IncludedItem({ title, desc }) {
  return (
    <div style={includedItem}>
      <div style={bullet} aria-hidden="true">•</div>
      <div>
        <div style={includedTitle}>{title}</div>
        <p style={includedDesc}>{desc}</p>
      </div>
    </div>
  );
}

function Step({ num, title, text }) {
  return (
    <div style={stepItem}>
      <div style={stepNum}>{num}</div>
      <div>
        <div style={stepTitle}>{title}</div>
        <p style={stepText}>{text}</p>
      </div>
    </div>
  );
}
import { useState } from "react";

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={accordionItem}>
      <button
        onClick={() => setOpen(!open)}
        style={accordionBtn}
        aria-expanded={open}
        aria-controls={q.replace(/\s+/g, "-").toLowerCase()}
      >
        <span>{q}</span>
        <span style={{fontWeight:700}}>{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div id={q.replace(/\s+/g, "-").toLowerCase()} style={accordionPanel}>
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

const container = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 20px"
};

const hero = {
  background: "linear-gradient(180deg, #111 0%, #1a1a1a 100%)",
  color: "#fff",
  padding: "80px 0 64px",
  textAlign: "center",
  borderBottom: "1px solid #222"
};

const heroTitle = {
  margin: 0,
  fontSize: 44,
  lineHeight: 1.1,
  letterSpacing: "-0.5px"
};

const heroSubtitle = {
  margin: "12px auto 20px",
  maxWidth: 800,
  fontSize: 18,
  color: "rgba(255,255,255,0.85)"
};

const ctaRow = { display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" };

const primaryBtn = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: 10,
  background: "#e11d2e", // outlaw red accent
  color: "#fff",
  border: "1px solid #e11d2e",
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: 600
};

const primaryBtnWide = { ...primaryBtn, width: "100%", textAlign: "center", padding: "14px 16px", fontSize: 18 };

const secondaryBtn = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: 10,
  background: "transparent",
  color: "#fff",
  border: "1px solid #fff",
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: 600
};

const section = { padding: "64px 0" };
const altSection = { ...section, background: "#fafafa", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" };
const h2 = { margin: "0 0 20px 0", fontSize: 30, letterSpacing: "-0.3px" };

const grid = {
  display: "grid",
  gap: 16,
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
};

const card = {
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 16,
  background: "#fff",
  boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
};

const oneLinePrice = {
  marginTop: 20,
  paddingTop: 10,
  borderTop: "1px dashed #e5e5e5",
  textAlign: "center",
  fontWeight: 600
};

const steps = {
  margin: 0,
  padding: "0 18px",
  lineHeight: 1.7,
  color: "#444"
};

const priceCard = {
  ...card,
  display: "grid",
  gap: 16,
  maxWidth: 520,
  margin: "0 auto"
};

const faqGrid = {
  display: "grid",
  gap: 16,
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
};

const faqItem = {
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 16,
  background: "#fff"
};

const finalCta = {
  ...card,
  textAlign: "center",
  background: "#111",
  color: "#fff",
  border: "1px solid #111"
};
const includedRow = {
  display: "flex",
  gap: 28,
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexWrap: "wrap",
  marginBottom: 18
};

const includedItem = {
  display: "flex",
  gap: 12,
  alignItems: "flex-start",
  maxWidth: 520,
  flex: "1 1 420px",
  borderBottom: "1px solid #eee",
  paddingBottom: 10
};

const bullet = {
  fontSize: 28,
  lineHeight: "28px",
  marginTop: 2,
  color: "#e11d2e", // accent red
  minWidth: 24,
  textAlign: "center"
};

const includedTitle = {
  fontWeight: 700,
  margin: "0 0 4px 0",
  fontSize: 18
};

const includedDesc = {
  margin: 0,
  color: "#555",
  lineHeight: 1.6
};

const missionHeader = {
  ...h2,
  textAlign: "center",
  textDecoration: "underline",
  marginBottom: 24
};

const subheader = {
  textAlign: "center",
  maxWidth: 700,
  margin: "0 auto 28px",
  fontSize: 18,
  color: "#666",
  fontStyle: "italic",
  lineHeight: 1.5
};

const mediaGrid = {
  display: "grid",
  gap: 20,
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
};

const mediaBlock = {
  background: "#f0f0f0",
  border: "1px solid #ddd",
  borderRadius: 12,
  height: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#999",
  fontSize: 16,
  fontStyle: "italic"
};
const stepsGrid = {
  display: "grid",
  gap: 20,
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  marginTop: 24
};

const stepItem = {
  display: "flex",
  gap: 14,
  alignItems: "flex-start",
  padding: "16px 14px",
  border: "1px solid #eee",
  borderRadius: 12,
  background: "#fafafa"
};

const stepNum = {
  minWidth: 32,
  height: 32,
  borderRadius: "50%",
  background: "#e11d2e", // outlaw red accent
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700
};

const stepTitle = {
  fontWeight: 700,
  marginBottom: 6,
  fontSize: 17
};

const stepText = {
  margin: 0,
  color: "#555",
  lineHeight: 1.5
};
const accordionWrap = {
  maxWidth: 900,
  margin: "0 auto",
  display: "grid",
  gap: 10
};

const accordionItem = {
  border: "1px solid #eaeaea",
  borderRadius: 10,
  background: "#fff",
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

const painHeader = {
  ...h2,
  textAlign: "center",
  marginBottom: 28
};

const painGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 24,
  maxWidth: 1000,
  margin: "0 auto"
};

const painCol = {
  display: "flex",
  justifyContent: "center"
};

const painBox = {
  border: "1px solid #ddd",
  borderRadius: 10,
  padding: 20,
  maxWidth: 420,
  background: "#fff"
};

const painTitle = {
  fontWeight: 700,
  fontSize: 18,
  marginBottom: 8,
  textDecoration: "underline"
};

const painText = {
  margin: 0,
  color: "#555",
  lineHeight: 1.6,
  fontSize: 15
};
