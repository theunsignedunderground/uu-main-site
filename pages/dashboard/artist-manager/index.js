const CATS = [
  { slug:"owning-your-career", title:"Owning Your Career: The Independent Advantage" },
  { slug:"from-local-hero-to-national", title:"From Local Hero to National Act" },
  { slug:"marketing-fan-growth", title:"Marketing & Fan Growth" },
  { slug:"social-content-systems", title:"Social & Content Systems" },
  { slug:"live-gigs-street-team", title:"Live / Gigs / Street Team" },
  { slug:"distribution-monetization", title:"Distribution & Monetization" },
  { slug:"pr-media-outreach", title:"PR / Media Outreach" },
  { slug:"legal-contracts", title:"Legal & Contracts" },
  { slug:"royalties-rights-licensing", title:"Royalties, Rights & Licensing" }, // you asked to include this
  { slug:"release-schedules", title:"Music Release & Schedules" }
];

export default function ArtistManager() {
  return (
    <main style={{padding:"2rem", maxWidth: 960, margin:"0 auto", fontFamily:"system-ui, Arial, sans-serif"}}>
      <h1>Artist Manager (Static)</h1>
      <p style={{color:"#666", marginTop:6}}>
        Browse categories to read guidance. In Phase 1 this is read-only; interactive Q&A can be added later.
      </p>

      <ul style={{display:"grid", gap:12, listStyle:"none", padding:0, marginTop:24}}>
        {CATS.map(c => (
          <li key={c.slug}>
            <a href={`/dashboard/artist-manager/${c.slug}`} style={card}>
              <strong>{c.title}</strong>
              <span style={{color:"#777", fontSize:13}}>View topics →</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

const card = {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  padding:"12px 14px",
  border:"1px solid #ddd",
  borderRadius:10,
  background:"#fafafa",
  textDecoration:"none",
  color:"#111"
};
