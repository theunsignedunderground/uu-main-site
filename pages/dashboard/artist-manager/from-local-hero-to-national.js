export default function LocalToNational() {
  return (
    <main style={{padding:"2rem", maxWidth:960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <a href="/dashboard/artist-manager">← Back to categories</a>
      <h1>From Local Hero to National Act</h1>
      <p style={{color:"#666"}}>
        The path to wider success starts by dominating your local scene, then expanding strategically outward.
      </p>

      <section style={sec}>
        <h2>Step 1: Own Your Backyard</h2>
        <ul>
          <li>Fill local venues consistently; build a loyal home fan base.</li>
          <li>Get local media coverage; become a “go-to” name in your area.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Step 2: Expand Regionally</h2>
        <ul>
          <li>Tour to nearby cities; focus on those within driving distance.</li>
          <li>Collaborate with bands in neighboring markets for show swaps.</li>
        </ul>
      </section>

      <section style={sec}>
        <h2>Step 3: National Recognition</h2>
        <ul>
          <li>Apply for festivals, showcases, and contests with national reach.</li>
          <li>Use streaming/social data to target growth cities intelligently.</li>
        </ul>
      </section>
    </main>
  );
}
const sec = { marginTop:18 };
