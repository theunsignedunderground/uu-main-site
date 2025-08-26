export default function OwningCareer() {
  return (
    <main style={{padding:"2rem", maxWidth:960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager">← Back to categories</a>
      <h1>Owning Your Career: The Independent Advantage</h1>
      <p style={{color:"#666"}}>
        Independence means you keep control of your music, your money, and your future. The trade-off: more responsibility until a team is justified.
      </p>

      <section style={sec}>
        <h2>Benefits of Staying Independent</h2>
        <ul>
          <li>Full creative control — you decide your sound, look, and message.</li>
          <li>You keep the lion’s share of revenue (no label split).</li>
          <li>Flexibility — pivot quickly without contracts holding you back.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Challenges</h2>
        <ul>
          <li>Upfront cost of recording, distribution, and marketing is on you.</li>
          <li>You must build your own team (manager, PR, booking) over time.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Long-Term Strategy</h2>
        <ul>
          <li>Build leverage by proving you can grow fans on your own.</li>
          <li>If you choose to sign later, do it from a position of strength.</li>
        </ul>
      </section>
    </main>
  );
}
const sec = { marginTop:18 };
