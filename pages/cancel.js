export default function Cancel() {
  return (
    <main style={{padding:"2rem", fontFamily:"system-ui"}}>
      <h1>❌ Checkout Canceled</h1>
      <p>No charge was made. You can try again anytime.</p>
      <a href="/dashboard" style={{display:"inline-block", marginTop:12}}>Back to Dashboard</a>
    </main>
  );
}
