export default function Home() {
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
    <main style={page}>
      {/* Hero */}
      <section style={hero}>
        <div style={container}>
          <h1 style={heroTitle}>The Unsigned Underground</h1>
          <p style={heroSubtitle}>
            Real PR. Real Exposure. Real Fans. Your success all begins by <strong>building your community</strong> — we’ll help you grow from local hero to national act.
          </p>
          <div style={ctaRow}>
            <a href="#features" style={primaryBtn}>See What You Get</a>
            <button onClick={startCheckout} style={secondaryBtn}>Get Started</button>
          </div>
        </div>
      </section>
 
  {/* Mission Statement */}
<section style={altSection}>
  <div style={container}>
    <h2 style={missionHeader}>The Underground Mission</h2>
    <p style={{maxWidth:800, margin:"0 auto", lineHeight:1.7, color:"#444", fontSize:17}}>
      The Unsigned Underground gives independent artists the tools, exposure, and credibility they deserve—without waiting for a label or overspending on PR. We help you build your community first, starting locally and growing city by city. With proven strategies, industry-level presentation, and a platform built for independents, we make it affordable to stand out, grow your fanbase, and get discovered on your own terms.
    </p>
  </div>
</section>

{/* What Unsigned Underground Does Section */}
<section style={section}>
  <div style={container}>
    <h2 style={h2}>The Underground Advantage</h2>
    <p style={subheader}>
      Marketing yourself and your music can feel overwhelming — but it doesn’t have to be.
    </p>
    <div style={{maxWidth:800, margin:"0 auto", lineHeight:1.7, color:"#444", fontSize:17}}>
      <p style={{marginBottom:16}}>
        The Unsigned Underground builds your professional artist site and PR package for you, 
        at a low one-time cost — so you can focus on creating music instead of wrestling with marketing.
      </p>
      <p style={{marginBottom:16}}>
        This isn’t just another website. Your City Showcase Site is designed from the ground up 
        to be SEO-friendly and targeted, helping the right audience find you — fans in your 
        community and industry contacts who matter most.
      </p>
      <p style={{marginBottom:16}}>
        Once it’s live, you have full control — it’s easy to edit, update, and maintain on your own, 
        so your music and story always stay current.
      </p>
      <p style={{marginBottom:24}}>
        Other platforms lock important features behind expensive paywalls or operate on 
        pay-to-play models that drain your budget. The Unsigned Underground is different: 
        simple, affordable, and focused on building your community and sharpening your brand.
      </p>
      <p style={{fontWeight:600, color:"#222", fontSize:18, textAlign:"center"}}>
        When you join The Underground, we can help launch you forward in ways the industry will never see coming — 
        the smartest way to take control of your career and get discovered.
      </p>
    </div>
  </div>
</section>

      {/* Features / Deliverables */}
     <section id="features" style={section}>
  <div style={container}>
    <h2 style={h2}>What’s Included in The Unsigned Underground Artist Package</h2>

    {/* Row 1 (2 items) */}
    <div style={includedRow}>
      <IncludedItem
        title="City Showcase Site"
        desc="A custom-built hub website with your full EPK and more — press assets, music, videos, calendar, and links — all in one place."
      />
      <IncludedItem
        title="Feature Article"
        desc="A premium write-up about your story and sound, professionally written and published in a genre-specific music magazine."
      />
    </div>

    {/* Row 2 (2 items) */}
    <div style={includedRow}>
      <IncludedItem
        title="Press Release"
        desc="Crafted and distributed to industry and media — a credible, professional announcement that helps you break through."
      />
      <IncludedItem
        title="Artist Manager (Members-Only)"
        desc="Actionable guidance, tools, and trend insights — from local growth to national momentum, independence-first."
      />
    </div>

    {/* Row 3 (1 centered item) */}
    <div style={{ ...includedRow, justifyContent: "center" }}>
      <IncludedItem
        title="Social & Discovery Boost"
        desc="Amplification across our ecosystem and channels — placements that help new fans find you faster."
      />
    </div>

    {/* Low one-time price line (standalone) */}
    <p style={oneLinePrice}>All this included in one low, one-time price.</p>
  </div>
</section>

      {/* Media Showcase Section */}
<section style={altSection}>
  <div style={container}>
    <h2 style={h2}>See The Underground In Action</h2>
    <p style={{maxWidth:800, margin:"0 auto 32px", textAlign:"center", color:"#555", fontSize:16}}>
      Your City Showcase Site, press features, and online magazine posts are designed to look professional, 
      stand out, and grab attention. Here’s a glimpse of what your presence in The Underground could look like.
    </p>
    <div style={mediaGrid}>
      <div style={mediaBlock}>[ Showcase Site Image ]</div>
      <div style={mediaBlock}>[ EPK / Feature Article ]</div>
      <div style={mediaBlock}>[ Online Magazine Post ]</div>
    </div>
  </div>
</section>

    <section id="roadmap" style={section}>
  <div style={container}>
    <h2 style={h2}>The Roadmap</h2>
    <p style={subheader}>From zero to hero — your journey in five simple steps.</p>
    <div style={stepsGrid}>
      <Step num="1" title="Sign Up & Onboard" text="Provide your info, music, and materials in one simple form — it only takes minutes." />
      <Step num="2" title="We Build" text="Our team creates your City Showcase Site and PR package — all done for you." />
      <Step num="3" title="We Publish" text="Your feature article and press release go live, giving you instant credibility." />
      <Step num="4" title="We Amplify" text="We promote you across The Underground ecosystem so the right people discover you." />
      <Step num="5" title="You Grow" text="Build your fanbase locally, then expand city by city with a proven path forward." />
    </div>
  </div>
</section>

      {/* Pricing */}
      <section id="pricing" style={section}>
        <div style={container}>
          <h2 style={h2}>Pricing</h2>
          <div style={priceCard}>
            <div>
              <h3 style={{margin:0, fontSize:24}}>Annual UU Package</h3>
              <p style={{margin:"8px 0 16px 0", color:"#666"}}>City Showcase Site, press package, and Artist Manager access.</p>
              <div style={{fontSize:36, fontWeight:700}}>$349.99</div>
            </div>
            <button onClick={startCheckout} style={primaryBtnWide}>Start Checkout</button>
          </div>
        </div>
      </section>

      {/* FAQ (public, concise) */}
      <section id="faq" style={altSection}>
        <div style={container}>
          <h2 style={h2}>FAQ</h2>
          <div style={faqGrid}>
            <FAQ q="How does this work?"
                 a="You onboard once, we build your City Showcase Site and publish your press package, then we amplify. You focus on your music; we drive discovery and help you grow locally first." />
            <FAQ q="What’s included?"
                 a="City Showcase Site (EPK website), premium feature article, press release, interview, Artist Manager access, and amplification across our ecosystem." />
            <FAQ q="What is SEO and how does it help?"
                 a="We structure your Showcase content and metadata so fans and industry can find you when they search — especially in your city and genre." />
            <FAQ q="Can The Unsigned Underground help me release my music?"
                 a="Yes. We provide a Music Distribution Quick Start guide and tools that make pre-release setup faster and cleaner." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={section}>
        <div style={container}>
          <div style={finalCta}>
            <h2 style={{margin:"0 0 8px 0"}}>Ready to take the next step?</h2>
            <p style={{margin:"0 0 16px 0", color:"#666"}}>Join The Underground and start building your community today.</p>
            <button onClick={startCheckout} style={primaryBtn}>Join The Underground</button>
          </div>
        </div>
      </section>
    </main>
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
