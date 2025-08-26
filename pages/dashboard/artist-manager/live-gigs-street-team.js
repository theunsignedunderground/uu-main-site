export default function LiveGigsStreetTeam() {
  return (
    <main style={{padding:"2rem", maxWidth:960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager">← Back to categories</a>
      <h1>Live / Gigs / Street Team</h1>
      <p style={{color:"#666"}}>
        Playing live is the fastest way to build real fans. A street team multiplies your impact.
      </p>

      <section style={sec}>
        <h2>Booking Gigs</h2>
        <ul>
          <li>Start with local bars, clubs, and community events.</li>
          <li>Offer to open for other acts in your genre.</li>
          <li>Be professional: provide promo materials and show up on time.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Street Team</h2>
        <ul>
          <li>Recruit your biggest fans to hand out flyers, share posts, and bring friends.</li>
          <li>Reward them with merch, guest list spots, or shoutouts.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Common Pitfalls</h2>
        <ul>
          <li>Overplaying your market — don’t burn out local fans.</li>
          <li>Failing to capture fan contact info at shows.</li>
        </ul>
      </section>
    </main>
  );
}
const sec = { marginTop:18 };
