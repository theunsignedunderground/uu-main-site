import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main style={{padding: "2rem", fontFamily: "system-ui, Arial, sans-serif", maxWidth: 1000, margin: "0 auto"}}>
      {/* Hero */}
      <header style={{padding: "18px 0 8px 0"}}>
        <h1 style={{fontSize: 36, margin: 0}}>The Unsigned Underground</h1>
        <p style={{margin: "8px 0 0 0", color: "#444"}}>
          Your success begins by building your community. Start local, then expand city by city with UU.
        </p>
        <div style={{marginTop: 16, display: "flex", gap: 12}}>
          <a href="/onboarding" style={btn}>Get Started</a>
          <a href="/dashboard" style={btnSecondary}>Artist Dashboard</a>
        </div>
      </header>

      {/* Value props */}
      <section style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginTop: 28}}>
        <div style={card}><strong>City Showcase Site</strong><p style={p}>A clean, fast, SEO-ready home for your music.</p></div>
        <div style={card}><strong>Press Release + Article</strong><p style={p}>Professionally written to get you seen and heard.</p></div>
        <div style={card}><strong>Texas Genre Blogs</strong><p style={p}>State-level exposure to kickstart local growth.</p></div>
        <div style={card}><strong>Artist Manager</strong><p style={p}>Clear guidance (Phase 1: static Q&A) right in your dashboard.</p></div>
      </section>

      {/* FAQ */}
      <FAQ />
    </main>
  );
}

const btn = {
  display: "inline-block",
  padding: "10px 16px",
  background: "#111",
  color: "#fff",
  textDecoration: "none",
  borderRadius: 8,
  border: "1px solid #111"
};

const btnSecondary = {
  ...btn,
  background: "#fafafa",
  color: "#111",
  border: "1px solid #ddd"
};

const card = {
  border: "1px solid #e5e5e5",
  borderRadius: 12,
  background: "#fafafa",
  padding: 14
};

const p = { margin: "6px 0 0 0", color: "#555" };
