export default function Royalties() {
  return (
    <main style={{padding:"2rem", maxWidth: 960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager" style={{textDecoration:"none"}}>← Back to categories</a>
      <h1 style={{marginTop:12}}>Royalties, Rights & Licensing</h1>
      <p style={{color:"#666"}}>
        Independence-first guidance on how your music earns and how to collect it globally.
      </p>

      <section style={sec}>
        <h2>Master vs. Publishing</h2>
        <ul>
          <li>What each controls, who owns them, and how they earn.</li>
          <li>Common splits and who pays whom.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Royalty Types</h2>
        <ul>
          <li>Mechanical • Public performance • Sync • Print • Neighboring rights.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Collection Map</h2>
        <ul>
          <li>PROs (ASCAP/BMI/SESAC), The MLC, SoundExchange, HFA, publishers, labels, distributors.</li>
          <li>YouTube Content ID, TikTok/Meta monetization.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Identifiers & Registrations</h2>
        <ul>
          <li>ISRC, ISWC, IPI/CAE, UPC, ISNI — what they are and where to register.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Licensing 101</h2>
        <ul>
          <li>Sync needs both master + publishing; mechanical (covers); public performance; print.</li>
          <li>Sampling/interpolation clearance; beat leases; library deals; Creative Commons basics.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Deal Structures</h2>
        <ul>
          <li>Publishing admin vs. co-pub; distribution vs. label license; work-for-hire.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Common Pitfalls</h2>
        <ul>
          <li>Unregistered works, missing IDs, no split sheet, uncleared samples, mismatched metadata.</li>
        </ul>
      </section>

      <p style={{color:"#666", fontSize:13, marginTop:24}}>
        Phase 1 is read-only. Interactive Q&A can be added later with minimal cost.
      </p>
    </main>
  );
}

const sec = { marginTop: 18 };
