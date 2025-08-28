export default function Dashboard() {
  async function startCheckout() {
    try {
      // If you've set STRIPE_TEST_PRICE_ID in Railway, you can omit the body entirely.
      const res = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Replace 'price_XXXX' later with your real test Price ID, or remove this body if you set STRIPE_TEST_PRICE_ID
        body: JSON.stringify({ line_items: [{ price: 'price_XXXX', quantity: 1 }] })
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert(data?.error || 'Checkout unavailable.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again.');
    }
  }

  return (
    <main style={{padding:"2rem", maxWidth: 960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <h1>Artist Dashboard</h1>
      <p style={{color:"#666", marginTop:6}}>
        Welcome! From here you can access your City Showcase settings, read the Artist Manager, and (soon) complete onboarding & payment.
      </p>

      <nav style={{display:"grid", gap:12, marginTop:24}}>
        <a href="/dashboard/artist-manager" style={linkStyle}>Artist Manager (Q&amp;A – Static)</a>
        <a href="/onboarding" style={linkStyle}>Complete / Edit Onboarding</a>
        <a href="/dashboard/showcase" style={linkStyle}>City Showcase (coming soon)</a>
        <a href="/dashboard/billing" style={linkStyle}>Billing (Stripe – coming soon)</a>
      </nav>

      {/* Stripe Checkout action */}
      <section style={{marginTop:24, padding:"14px 16px", border:"1px solid #eee", borderRadius:10}}>
        <h2 style={{margin:"0 0 10px 0"}}>Billing</h2>
        <p style={{color:"#666", margin:"0 0 12px 0"}}>
          Click below to start your checkout (uses Stripe Test Mode once configured).
        </p>
        <button onClick={startCheckout} style={buttonStyle}>
          Start Checkout
        </button>
        <p style={{color:"#999", fontSize:13, marginTop:10}}>
          Tip: Until Stripe is configured, this will show “Stripe is not configured yet…”.
        </p>
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
