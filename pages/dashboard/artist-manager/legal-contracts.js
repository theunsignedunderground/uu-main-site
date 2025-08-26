export default function LegalContracts() {
  return (
    <main style={{padding:"2rem", maxWidth:960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager">← Back to categories</a>
      <h1>Legal & Contracts</h1>
      <p style={{color:"#666"}}>
        Understanding basic contracts protects your rights and prevents bad deals.
      </p>

      <section style={sec}>
        <h2>Common Agreements</h2>
        <ul>
          <li>Work-for-hire agreements (producers, session musicians).</li>
          <li>Band member agreements (splits, roles, ownership).</li>
          <li>Distribution and licensing contracts.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Label vs Independent</h2>
        <ul>
          <li>Label: advances and services, but long-term rights given up.</li>
          <li>Independent: keep control, but you handle the work and costs.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Red Flags</h2>
        <ul>
          <li>Perpetual terms (“in perpetuity”).</li>
          <li>Excessive recoupment clauses.</li>
          <li>Contracts without clear deliverables.</li>
        </ul>
      </section>
    </main>
  );
}
const sec = { marginTop:18 };
