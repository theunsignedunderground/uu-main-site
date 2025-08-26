export default function PROutreach() {
  return (
    <main style={{padding:"2rem", maxWidth:960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager">← Back to categories</a>
      <h1>PR & Media Outreach</h1>
      <p style={{color:"#666"}}>
        Learn how to pitch your story and music to blogs, local press, and radio. Independence means doing it yourself until a team is justified.
      </p>

      <section style={sec}>
        <h2>Press Release Basics</h2>
        <ul>
          <li>Who, what, when, where, why — simple, clear, and newsworthy.</li>
          <li>Include high-quality photos, streaming links, and a short bio.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Outreach Strategy</h2>
        <ul>
          <li>Start with local press & genre blogs — they’re easier to land.</li>
          <li>Build relationships: thank journalists, share their work.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Tools & Templates</h2>
        <ul>
          <li>Press release template, media pitch email samples.</li>
          <li>EPK (Electronic Press Kit) — central hub for media assets.</li>
        </ul>
      </section>
    </main>
  );
}
const sec = { marginTop:18 };
