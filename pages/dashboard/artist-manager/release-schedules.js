export default function ReleaseSchedules() {
  return (
    <main style={{padding:"2rem", maxWidth:960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager">← Back to categories</a>
      <h1>Music Release & Schedules</h1>
      <p style={{color:"#666"}}>
        A smart release plan maximizes the impact of your music on fans and platforms.
      </p>

      <section style={sec}>
        <h2>Release Timing</h2>
        <ul>
          <li>Plan 6–8 weeks ahead for digital distribution.</li>
          <li>Avoid major release days from big artists if possible.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Pre-Save & Hype</h2>
        <ul>
          <li>Use pre-save links to drive early engagement.</li>
          <li>Tease singles with short clips and behind-the-scenes content.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Post-Release Strategy</h2>
        <ul>
          <li>Push for playlist submissions (Spotify for Artists, curators).</li>
          <li>Keep promoting after release — don’t move on too quickly.</li>
        </ul>
      </section>
    </main>
  );
}
const sec = { marginTop:18 };
