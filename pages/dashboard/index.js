export default function Dashboard() {
  return (
    <main style={{padding:"2rem", maxWidth: 960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <h1>Artist Dashboard</h1>
      <p style={{color:"#666", marginTop:6}}>
        Welcome! From here you can access your City Showcase settings, read the Artist Manager, and (soon) complete onboarding & payment.
      </p>

      <nav style={{display:"grid", gap:12, marginTop:24}}>
        <a href="/dashboard/artist-manager" style={linkStyle}>Artist Manager (Q&A – Static)</a>
        <a href="/onboarding" style={linkStyle}>Complete / Edit Onboarding</a>
        <a href="/dashboard/showcase" style={linkStyle}>City Showcase (coming soon)</a>
        <a href="/dashboard/billing" style={linkStyle}>Billing (Stripe – coming soon)</a>
      </nav>
    </main>
  );
}

const linkStyle = {
  display:"block",
  padding:"12px 14px",
  border:"1px solid #ddd",
  borderRadius:10,
  background:"#fafafa",
  textDecoration:"none",
  color:"#111"
};
