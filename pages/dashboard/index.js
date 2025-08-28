export default function Dashboard() {
  // ---- Stripe Checkout action ----
  async function startCheckout() {
    try {
      const res = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
        // no body needed — backend will use STRIPE_TEST_PRICE_ID
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
    <main style={{padding:"2rem", maxWidth: 960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <h1>Artist Dashboard</h1>
      <p style={{color:"#666", marginTop:6}}>
        Welcome! From here you can access your City Showcase settings, read the Artist Manager, and (soon) complete onboarding &amp; payment.
      </p>

      <nav style={{display:"grid", gap:12, marginTop:24}}>
        <a href="/dashboard/artist-manager" style={linkStyle}>Artist Manager (Q&amp;A – Static)</a>
        <a href="/onboarding" style={linkStyle}>Complete / Edit Onboarding</a>
        <a href="/dashboard/showcase" style={linkStyle}>City Showcase (coming soon)</a>
        <a href="/dashboard/billing" style={linkStyle}>Billing</a>
      </nav>

      {/* Billing / Checkout section */}
      <section style={{marginTop:24, padding:"14px 16px", border:"1px solid #eee", borderRadius:10}}>
        <h2 style={{margin:"0 0 10px 0"}}>Billing</h2>
        <p style={{color:"#666", margin:"0 0 12px 0"}}>
          Click below to start your checkout (uses Stripe Test Mode).
        </p>
        <button onClick={startCheckout} style={buttonStyle}>
          Start Checkout
        </button>
      </section>
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

const buttonStyle = {
  display:"inline-block",
  padding:"10px 14px",
  border:"1px solid #111",
  borderRadius:10,
  background:"#111",
  color:"#fff",
  cursor:"pointer"
};
