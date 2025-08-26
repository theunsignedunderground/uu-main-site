export default function SocialContent() {
  return (
    <main style={{padding:"2rem", maxWidth:960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager">← Back to categories</a>
      <h1>Social & Content Systems</h1>
      <p style={{color:"#666"}}>
        Social media can feel like a grind — systems keep it sustainable and effective.
      </p>

      <section style={sec}>
        <h2>Content Pillars</h2>
        <ul>
          <li>Behind the scenes (studio, writing, rehearsal).</li>
          <li>Live performance clips and fan interaction.</li>
          <li>Personality & lifestyle posts to humanize your brand.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Systems Approach</h2>
        <ul>
          <li>Batch create content weekly; schedule posts via tools.</li>
          <li>Reuse content in multiple formats (clip → short → story).</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Common Pitfalls</h2>
        <ul>
          <li>Posting randomly with no rhythm.</li>
          <li>Chasing trends without authenticity.</li>
        </ul>
      </section>
    </main>
  );
}
const sec = { marginTop:18 };
