export default function Success() {
  return (
    <main style={{padding:"2rem", fontFamily:"system-ui"}}>
      <h1>✅ Payment Successful</h1>
      <p>Thanks! Your order is confirmed. You’ll also see this in your Stripe Dashboard (Test mode).</p>
      <a href="/dashboard" style={{display:"inline-block", marginTop:12}}>Back to Dashboard</a>
    </main>
  );
}
