export default function Home() {
  return (
    <div style={page}>
      {/* Minimal Hero */}
      <section style={miniHero}>
        <div style={container}>
          <h1 style={miniHeroTitle}>Music marketing made easy</h1>
          <p style={miniHeroSub}>
            Your one-stop shop to build your brand, grow your community, and get discovered — all in one place.
          </p>
        </div>
      </section>

      {/* VALUE SLICES (Riverside-style) */}
      <section style={valueSection}>
        <div style={container}>
          {/* Slice 1 — Showcase Site */}
          <ValueSlice
            eyebrow="Showcase Site"
            title="The best way to market yourself — all in one place"
            blurb="We build your SEO-targeted City Showcase Site with your EPK, music player, shows, photos, videos, and links."
            ctaLabel="Learn more"
            ctaHref="/features"
            media={{ src: "/media/showcase-placeholder.jpg", alt: "City Showcase Site preview", align: "right" }}
          />

          {/* Slice 2 — PR Package */}
          <ValueSlice
            eyebrow="PR & Articles"
            title="The ultimate music PR package — done for you"
            blurb="Press release, premium feature article, and playlist inclusion — real credibility that social can’t replace."
            ctaLabel="Learn more"
            ctaHref="/press"
            media={{ src: "/media/pr-placeholder.jpg", alt: "PR & Articles example", align: "left" }}
          />

          {/* Slice 3 — Curated Playlists */}
<ValueSlice
  eyebrow="Playlists"
  title="Get heard on our own curated playlists"
  blurb="Guaranteed inclusion on UU’s curated Spotify playlists by genre and state, no pay-to-play. Keep your spot fresh with Song Swaps when you release new music."
  ctaLabel="Learn more"
  ctaHref="/playlists"
  media={{ src: "/media/playlists-placeholder.jpg", alt: "UU curated playlists preview", align: "right" }}
/>


          {/* Slice 4 — Artist Manager */}
          <ValueSlice
            eyebrow="Artist Manager"
            title="Always-on guidance, tools, and templates"
            blurb="From distribution and monetization to gigs and contracts — the answers you need, when you need them."
            ctaLabel="Learn more"
            ctaHref="/manager"
            media={{ src: "/media/manager-placeholder.jpg", alt: "Artist Manager tools", align: "left" }}
          />
        </div>
      </section>

      {/* Optional: footer spacer */}
      <footer style={{ padding: "28px 0" }} />
    </div>
  );
}

/* =========================
   Value Slice component
   ========================= */
function ValueSlice({ eyebrow, title, blurb, ctaLabel, ctaHref, media }) {
  const isRight = media?.align !== "left"; // default right
  return (
    <div style={valueRow}>
      {/* Media */}
      <div style={isRight ? mediaBox : { ...mediaBox, order: 2 }}>
        <div
          style={{
            ...mediaPanel,
            backgroundImage: `url(${media?.src || ""})`
          }}
          aria-label={media?.alt || ""}
        />
      </div>

      {/* Copy */}
      <div style={isRight ? copyBox : { ...copyBox, order: 1 }}>
        <div style={eyebrowStyle}>{eyebrow}</div>
        <h3 style={valueTitle}>{title}</h3>
        <p style={valueBlurb}>{blurb}</p>
        <a href={ctaHref} style={valueLink}>{ctaLabel} →</a>
      </div>
    </div>
  );
}

/* =========================
   Styles (brand palette)
   ========================= */
const colors = {
  outlawRed: "#e11d2e",
  vintageCream: "#fdf5e6",
  black: "#000000"
};

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

/* ---------- Minimal Hero ---------- */
const miniHero = {
  textAlign: "center",
  padding: "48px 0 36px",
  background: colors.black,
  color: colors.vintageCream,
  borderBottom: `1px solid ${colors.outlawRed}`
};

const miniHeroTitle = {
  margin: 0,
  fontSize: 36,
  fontWeight: 800,
  letterSpacing: "-0.3px",
  color: colors.vintageCream
};

const miniHeroSub = {
  margin: "10px auto 0",
  maxWidth: 820,
  fontSize: 18,
  lineHeight: 1.7,
  color: colors.vintageCream,
  opacity: 0.92
};

/* ---------- Value Slices ---------- */
const valueSection = {
  padding: "48px 0",
  background: "#111",
  borderTop: `1px solid ${colors.outlawRed}`,
  borderBottom: `1px solid ${colors.outlawRed}`
};

const valueRow = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 24,
  alignItems: "center",
  marginBottom: 40
};

const mediaBox = { minHeight: 260 };
const copyBox = { padding: "8px 6px" };

const mediaPanel = {
  width: "100%",
  height: 0,
  paddingBottom: "56%", // 16:9
  borderRadius: 14,
  border: `1px solid ${colors.outlawRed}`,
  backgroundColor: "#000",
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "0 6px 22px rgba(225,29,46,0.25)"
};

const eyebrowStyle = {
  color: colors.outlawRed,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  fontSize: 12,
  marginBottom: 8
};

const valueTitle = {
  margin: "0 0 8px 0",
  fontSize: 26,
  fontWeight: 800,
  color: colors.vintageCream
};

const valueBlurb = {
  margin: "0 0 12px 0",
  color: colors.vintageCream,
  opacity: 0.92,
  lineHeight: 1.7
};

const valueLink = {
  display: "inline-block",
  textDecoration: "none",
  color: colors.vintageCream,
  borderBottom: `2px solid ${colors.outlawRed}`,
  paddingBottom: 2,
  fontWeight: 700
};
