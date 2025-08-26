export default function Marketing() {
  return (
    <main style={{padding:"2rem", maxWidth:960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager">← Back to categories</a>
      <h1>Marketing & Fan Growth</h1>
      <p style={{color:"#666"}}>
        Build your audience locally first, then expand. Focus on community building rather than chasing overnight success.
      </p>

      <section style={sec}>
        <h2>Local First Strategy</h2>
        <ul>
          <li>Play shows in your hometown and region; get known in your scene.</li>
          <li>Capture fan emails/texts at gigs — grow direct contacts, not just followers.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Digital Tactics</h2>
        <ul>
          <li>Consistent content cadence (short-form video, posts, live streams).</li>
          <li>Encourage fans to share clips, create “street team” repost culture.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Common Pitfalls</h2>
        <ul>
          <li>Buying followers or streams — they don’t convert to real fans.</li>
          <li>Neglecting in-person connection; digital is support, not replacement.</li>
        </ul>
      </section>
    </main>
  );
}
const sec = { marginTop:18 };
