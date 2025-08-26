export default function Distribution() {
  return (
    <main style={{padding:"2rem", maxWidth:960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager">← Back to categories</a>
      <h1>Distribution & Monetization</h1>
      <p style={{color:"#666"}}>
        Understand how to get your music onto streaming platforms and how money flows back to you.
      </p>

      <section style={sec}>
        <h2>Distribution Platforms</h2>
        <ul>
          <li>DistroKid, CD Baby, TuneCore — handle licensing, delivery, and payouts.</li>
          <li>Our quick-start guide helps you prepare your release before uploading.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Revenue Streams</h2>
        <ul>
          <li>Streaming royalties, merch, live gigs, licensing/sync.</li>
          <li>Direct-to-fan sales (Bandcamp, Patreon, UU add-ons in future phases).</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Common Pitfalls</h2>
        <ul>
          <li>Releasing music without a plan — poor launch wastes effort.</li>
          <li>Forgetting to register songs with PROs (no performance royalties).</li>
        </ul>
      </section>
    </main>
  );
}
const sec = { marginTop:18 };
