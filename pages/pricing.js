export default function PricingPage() {
  return (
    <main style={page}>
      <section style={section}>
        <div style={container}>
          <h1 style={h1}>Choose the plan that fits your career</h1>
          <p style={intro}>
            Built For You — Every plan includes:
          </p>
          <ul style={featureList}>
            <li>Your own Custom Showcase Site (beautifully designed, search optimized to get you seen, better than a website)</li>
            <li>Built-in Electronic Press Kit (EPK)</li>
            <li>Your full, custom PR package (press release, premium feature article, optional interview)</li>
            <li>Embedded music player for your tracks</li>
            <li>Gig calendar and easy photo updates</li>
            <li>Video embeds and social links</li>
            <li>Automation tools for ongoing content and promotion</li>
          </ul>

          <p style={compareIntro}>
            Which path fits your career best?
          </p>
          <p style={compareText}>
            Choose the Annual Plan for the best value — full Showcase Site, PR package, and hosting all included in one upfront payment.
            <br />
            Choose the Monthly Plan for the same features spread out over 12 easy payments.
            <br />
            Or, if you don’t need a website, choose the PR + Playlist Membership for professional PR, playlist placement, and dashboard tools without the Showcase Site.
          </p>

          <div style={cards}>
            {/* Annual Plan */}
            <div style={{ ...card, ...cardHighlight }}>
              <div style={badge}>Best Value</div>
              <h2 style={planTitle}>Annual Plan</h2>
              <p style={price}>$299 / year</p>
              <p>One-time payment up front</p>
              <p>Covers all features + 12 months hosting + PR package</p>
              <p>Save ≈ $180 vs monthly</p>
              <button style={primaryBtn}>Launch My Site – Best Value</button>
            </div>

            {/* Monthly Plan */}
            <div style={card}>
              <h2 style={planTitle}>Monthly Plan</h2>
              <p style={price}>$39.95 / month</p>
              <p>12-month minimum commitment</p>
              <p>Includes all deliverables: Showcase Site, PR, hosting, tools</p>
              <p>Total $479.40 for first year</p>
              <button style={secondaryBtn}>Start Monthly Access</button>
              <p style={finePrint}>12-month minimum commitment required. Total $479.40 for first year.</p>
            </div>

            {/* PR + Playlist */}
            <div style={card}>
              <h2 style={planTitle}>PR + Playlist Membership</h2>
              <p style={price}>$149.95 one-time</p>
              <p>Press release + premium feature article + optional interview</p>
              <p>Guaranteed playlist inclusion</p>
              <p>UU dashboard access + tools</p>
              <p>No Showcase Site included</p>
              <button style={neutralBtn}>Get PR + Playlist Membership</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Styles ---------- */
const colors = {
  outlawRed: "#e11d2e",
  vintageCream: "#fdf5e6",
  black: "#000"
};

const page = {
  fontFamily: "system-ui, Arial, sans-serif",
  color: colors.vintageCream,
  background: colors.black,
  minHeight: "100vh",
  paddingBottom: 60
};

const container = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 20px"
};

const section = { padding: "60px 0" };

const h1 = {
  fontSize: 36,
  fontWeight: 800,
  textAlign: "center",
  marginBottom: 20,
  color: colors.vintageCream
};

const intro = {
  textAlign: "center",
  marginBottom: 20,
  fontSize: 18,
  fontWeight: 600
};

const featureList = {
  maxWidth: 700,
  margin: "0 auto 40px",
  paddingLeft: 20,
  lineHeight: 1.6
};

const compareIntro = {
  textAlign: "center",
  fontSize: 22,
  fontWeight: 700,
  marginBottom: 10,
  color: colors.vintageCream
};

const compareText = {
  textAlign: "center",
  marginBottom: 40,
  color: colors.vintageCream,
  lineHeight: 1.5
};

const cards = {
  display: "grid",
  gap: 20,
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
};

const card = {
  border: `1px solid ${colors.outlawRed}`,
  borderRadius: 12,
  padding: 20,
  background: colors.black,
  position: "relative",
  textAlign: "center"
};

const cardHighlight = {
  border: `3px solid ${colors.outlawRed}`,
  transform: "scale(1.05)",
  zIndex: 1
};

const badge = {
  position: "absolute",
  top: -12,
  right: -12,
  background: colors.outlawRed,
  color: colors.vintageCream,
  fontSize: 12,
  fontWeight: 700,
  padding: "4px 8px",
  borderRadius: 6
};

const planTitle = { fontSize: 22, fontWeight: 700, margin: "10px 0" };

const price = { fontSize: 28, fontWeight: 800, color: colors.outlawRed };

const primaryBtn = {
  display: "inline-block",
  marginTop: 14,
  padding: "14px 18px",
  borderRadius: 16,
  background: colors.outlawRed,
  color: colors.vintageCream,
  fontWeight: 700,
  cursor: "pointer",
  border: `1px solid ${colors.outlawRed}`
};

const secondaryBtn = {
  ...primaryBtn,
  background: colors.vintageCream,
  color: colors.outlawRed
};

const neutralBtn = {
  ...primaryBtn,
  background: "#222",
  color: colors.vintageCream,
  border: `1px solid ${colors.outlawRed}`
};

const finePrint = {
  marginTop: 8,
  fontSize: 12,
  color: "#aaa"
};
