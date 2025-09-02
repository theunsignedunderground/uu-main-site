export default function Home() {
  // ---- Stripe Checkout action ----
  async function startCheckout() {
    try {
      const res = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
        // no body needed — backend will use STRIPE_TEST_PRICE_ID if present
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert(data?.error || 'Checkout unavailable.');
      }
    } catch (err) {
      console.error('startCheckout error:', err);
      alert('Network error. Please try again.');
    }
  }

  return (
    <div style={page}>
      {/* Hero Section */}
      <section style={hero}>
        <div style={container}>
          <h1 style={heroTitle}>
            Get everything you need to promote your music and career — for less than $1 per day.
          </h1>
          <p style={heroSubtitle}>
            Tired of all the NOISE on social media and across the web? <br />
            With <strong>The Unsigned Underground</strong>, you get a complete <strong>ARTIST FIRST</strong> platform — your own showcase site, professional PR, playlist placement, fan growth tools, and more.
          </p>
          <div style={ctaRow}>
            <button onClick={startCheckout} style={primaryBtn}>
              Join The Unsigned Underground Now
            </button>
          </div>
          <p style={heroNote}>
            Includes hosting for 12 months. No hidden fees. Artist First always.
          </p>
        </div>
      </section>

      {/* Section 1 – What You Get */}
      <section style={section}>
        <div style={{ ...container, maxWidth: 900 }}>
          <h2 style={h2}>What You Get</h2>
          <ul style={listStack}>
            <li style={liBlock}>
              <h3 style={liTitle}>Your Own City Showcase Site</h3>
              <p style={liText}>
                Professionally built, search-optimized to get you noticed fast (much better than just a website). This is your official online home — a <strong>fan-facing environment</strong> online to house your <strong>Electronic Press Kit (an EPK we build for you)</strong>, music player, photos, gig calendar, video embeds, links to socials, your own press room, and more.
              </p>
            </li>
            <li style={liBlock}>
              <h3 style={liTitle}>Professional PR That Gets Published</h3>
              <p style={liText}>
                We create your first <strong>press release</strong>, <strong>artist article</strong>, and <strong>exclusive interview</strong> — and publish them inside a <strong>Music Blog Magazine</strong> where artists, fans, and industry eyes go to discover new talent like yours.
              </p>
            </li>
            <li style={liBlock}>
              <h3 style={liTitle}>Industry Best Fan Growth Tools You Can Really Use</h3>
              <p style={liText}>
                Build your fan base where you live and perform. We give you the platform to quickly grow a loyal fan base that can propel your music to dominate city by city, state by state.
              </p>
            </li>
            <li style={liBlock}>
              <h3 style={liTitle}>Artist Manager (Members-Only)</h3>
              <p style={liText}>
                An always-available, industry-backed career guide covering everything from marketing and gigs to distribution, monetization, and contracts.
              </p>
            </li>
            <li style={liBlock}>
              <h3 style={liTitle}>Curated Playlist Inclusion (For Your Genre)</h3>
              <p style={liText}>
                No pay to play, and no having to pitch your song to playlists. Your song gets placement on our Underground curated <strong>Spotify playlists</strong>, plus blog features and shoutouts across our network.
              </p>
            </li>
            <li style={liBlock}>
              <h3 style={liTitle}>Free Music Release Tools</h3>
              <p style={liText}>
                We provide easy-to-use tools — <strong>for FREE</strong> — to help you distribute and release your music. No pay to play.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2 – Why It Works */}
      <section style={altSection}>
        <div style={{ ...container, maxWidth: 820 }}>
          <h2 style={h2}>Why It Works</h2>
          <ul style={listStack}>
            <li style={liBlockAlt}>
              <h3 style={liTitleUnderline}>Community First</h3>
              <p style={liText}>
                Fans discover you through their city’s SEO Showcase Site and an online Music Blog Magazine with a music article written about you.
              </p>
            </li>
            <li style={liBlockAlt}>
              <h3 style={liTitleUnderline}>Professional Credibility</h3>
              <p style={liText}>
                Your PR assets and showcase site instantly set you apart.
              </p>
            </li>
            <li style={liBlockAlt}>
              <h3 style={liTitleUnderline}>Scalable Growth</h3>
              <p style={liText}>
                Once you dominate locally, <strong>The Unsigned Underground</strong> helps you branch into new cities and scenes.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3 – The Cost Breakdown */}
      <section style={section}>
        <div style={{ ...container, maxWidth: 900 }}>
          <h2 style={h2}>The Cost Breakdown</h2>
          <p style={{ ...centerText, marginBottom: 8 }}>
            Other platforms charge monthly fees for everything, pay to play is their game, and you have to build your own website and get no PR or growth tools to go with it.
          </p>
          <p style={costPunch}>Enough with the nickel and dime fees!</p>
          <ul style={checkList}>
            <li>✔ <strong>We build for you:</strong> Site + Professional PR + Playlist Inclusion + Manager + Growth Tools</li>
            <li>✔ Ongoing promotion across our ecosystem</li>
            <li>✔ All included for <strong>less than $1/day</strong></li>
          </ul>
          <p style={costCloser}>
            That’s less than $30/month for everything to promote your music and career — and no hidden fees.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" style={ctaSection}>
        <div style={container}>
          <h2 style={ctaTitle}>Your music deserves to be seen and heard.</h2>
          <p style={ctaSub}>
            Don’t pay to play on other sites. With <strong>The Unsigned Underground</strong> it’s Artist First, no hidden fees.
          </p>
          <button onClick={startCheckout} style={ctaButton}>
            Join The Unsigned Underground Now
          </button>
        </div>
      </section>
    </div>
  );
}

/* ---------- Brand Colors ---------- */
const colors = {
  outlawRed: "#e11d2e",    // outlaw red accent
  vintageCream: "#fdf5e6", // vintage cream text
  black: "#000000"         // black background
};

/* ---------- Styles ---------- */

const page = {
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  color: colors.vintageCream,
  background: colors.black
};

const container = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 20px"
};

/* Hero */
const hero = {
  textAlign: "center",
  padding: "80px 0 64px",
  color: colors.vintageCream,
  background: colors.black,
  borderBottom: `2px solid ${colors.outlawRed}`
};
const heroTitle = {
  fontSize: 42,
  lineHeight: 1.15,
  fontWeight: 800,
  margin: "0 0 16px 0",
  letterSpacing: "-0.3px"
};
const heroSubtitle = {
  fontSize: 18,
  maxWidth: 760,
  margin: "0 auto 20px",
  color: colors.vintageCream,
  lineHeight: 1.7
};
const ctaRow = { display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" };
const primaryBtn = {
  display: "inline-block",
  padding: "14px 18px",
  borderRadius: 16,
  background: colors.outlawRed,
  color: colors.vintageCream,
  border: `1px solid ${colors.outlawRed}`,
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: `0 6px 18px rgba(225,29,46,0.35)`
};
const heroNote = {
  marginTop: 12,
  fontStyle: "italic",
  opacity: 0.9,
  fontSize: 14,
  color: colors.vintageCream
};

/* Sections */
const section = {
  padding: "64px 0",
  background: colors.black,
  borderBottom: `1px solid ${colors.outlawRed}`
};
const altSection = {
  ...section,
  background: "#111", // slightly lighter than black for contrast
  borderTop: `1px solid ${colors.outlawRed}`,
  borderBottom: `1px solid ${colors.outlawRed}`
};
const h2 = {
  margin: "0 0 20px 0",
  fontSize: 30,
  textAlign: "center",
  fontWeight: 800,
  color: colors.vintageCream,
  borderBottom: `2px solid ${colors.outlawRed}`,
  display: "inline-block",
  paddingBottom: 4
};

/* Lists */
const listStack = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gap: 18
};
const liBlock = {
  border: `1px solid ${colors.outlawRed}`,
  borderRadius: 12,
  padding: 16,
  background: colors.black
};
const liBlockAlt = {
  borderBottom: `1px solid ${colors.outlawRed}`,
  padding: "10px 2px"
};
const liTitle = {
  margin: "0 0 6px 0",
  fontSize: 20,
  fontWeight: 800,
  color: colors.vintageCream
};
const liTitleUnderline = {
  ...liTitle,
  textDecoration: "underline",
  borderBottom: `1px solid ${colors.outlawRed}`,
  paddingBottom: 2
};
const liText = { margin: 0, color: colors.vintageCream, lineHeight: 1.7 };

/* Cost section */
const centerText = {
  textAlign: "center",
  color: colors.vintageCream,
  lineHeight: 1.7
};
const costPunch = {
  textAlign: "center",
  color: colors.outlawRed,
  fontWeight: 800,
  fontSize: 20,
  margin: "0 0 18px 0"
};
const checkList = {
  margin: "0 auto",
  paddingLeft: 0,
  listStyle: "none",
  lineHeight: 1.9,
  maxWidth: 780,
  fontSize: 18,
  color: colors.vintageCream
};
const costCloser = {
  textAlign: "center",
  marginTop: 16,
  fontWeight: 700,
  fontSize: 18,
  color: colors.vintageCream
};

/* CTA footer */
const ctaSection = {
  textAlign: "center",
  padding: "80px 0",
  background: colors.black,
  color: colors.vintageCream,
  borderTop: `2px solid ${colors.outlawRed}`
};
const ctaTitle = {
  margin: "0 0 12px 0",
  fontSize: 34,
  fontWeight: 800,
  color: colors.vintageCream
};
const ctaSub = {
  color: colors.vintageCream,
  fontSize: 18,
  margin: "0 0 20px 0"
};
const ctaButton = {
  ...primaryBtn,
  fontSize: 20,
  padding: "16px 22px",
  borderRadius: 18,
  background: colors.outlawRed,
  color: colors.vintageCream,
  border: `1px solid ${colors.outlawRed}`
};
