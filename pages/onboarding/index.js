import { useEffect, useState } from "react";

const FIELDS = [
  "name","location","genres","shortBio","longBio",
  "featureLink","links","photos","videos",
  "highlights","goal","prFocus","quotes",
  "ig","fb","tt","site"
];
const STORAGE_KEY = "uu_onboarding_v1";

export default function Onboarding() {
  const [form, setForm] = useState(() =>
    FIELDS.reduce((acc, k) => ({ ...acc, [k]: "" }), {})
  );
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Load any saved progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setForm((f) => ({ ...f, ...JSON.parse(raw) }));
    } catch {}
  }, []);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const saveLocal = () => {
    setSaving(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    } catch {}
    setSaving(false);
  };

  const submit = (e) => {
    e.preventDefault();
    // Placeholder submit — wire to API later.
    saveLocal();
    alert("Onboarding submitted (placeholder). Your info is saved locally for now.");
  };

  return (
    <main style={{ padding: "2rem", maxWidth: 920, margin: "0 auto", fontFamily: "system-ui, Arial, sans-serif" }}>
      <h1>Artist/Band Onboarding</h1>
      <p style={{ marginTop: 8 }}>
        Consider this onboarding the single most important step you’ll take to promote your music career.
        The tools we create from this info will be epic — built to get you seen and heard.
        Missing something? No problem — we can build everything with what you have now; you can add the rest later.
      </p>
      <p style={{ color: "#666", fontSize: 13, marginTop: 6 }}>
        You can skip any step and come back later — your progress is saved on this device.
      </p>

      <form onSubmit={submit} style={{ marginTop: 24, display: "grid", gap: 18 }}>
        <section>
          <h2>Basics</h2>
          <label>Artist/Band Name<br />
            <input required value={form.name} onChange={update("name")} placeholder="Band or Artist name"
                   style={iStyle} />
          </label><br />
          <label>City &amp; State<br />
            <input required value={form.location} onChange={update("location")} placeholder="Boerne, TX"
                   style={iStyle} />
          </label><br />
          <label>Genre(s)<br />
            <input value={form.genres} onChange={update("genres")} placeholder="Country; Rock; Pop" style={iStyle} />
          </label>
        </section>

        <section>
          <h2>Bio &amp; Story</h2>
          <label>Short Bio (2–3 sentences)<br />
            <textarea rows={3} value={form.shortBio} onChange={update("shortBio")} style={tStyle} />
          </label><br />
          <label>Full Story (optional)<br />
            <textarea rows={6} value={form.longBio} onChange={update("longBio")} style={tStyle} />
          </label>
        </section>

        <section>
          <h2>Music &amp; Media</h2>
          <label>Feature Track/Album (link)<br />
            <input type="url" value={form.featureLink} onChange={update("featureLink")}
                   placeholder="https://open.spotify.com/…" style={iStyle} />
          </label><br />
          <label>Streaming Links (Spotify, Apple, YouTube, etc.)<br />
            <textarea rows={3} value={form.links} onChange={update("links")} style={tStyle} />
          </label><br />
          <label>Photo links (optional)<br />
            <textarea rows={2} value={form.photos} onChange={update("photos")} style={tStyle} />
          </label><br />
          <label>Video links (optional)<br />
            <textarea rows={2} value={form.videos} onChange={update("videos")} style={tStyle} />
          </label>
        </section>

        <section>
          <h2>Highlights</h2>
          <label>Notable gigs/press (optional)<br />
            <textarea rows={3} value={form.highlights} onChange={update("highlights")} style={tStyle} />
          </label>
        </section>

        <section>
          <h2>Goals</h2>
          <label>Main goal (next 12 months)<br />
            <input value={form.goal} onChange={update("goal")}
                   placeholder="Grow local fanbase / More gigs / Increase streams / Release album" style={iStyle} />
          </label>
        </section>

        <section>
          <h2>PR Inputs</h2>
          <label>Upcoming release/tour/event (optional)<br />
            <textarea rows={3} value={form.prFocus} onChange={update("prFocus")} style={tStyle} />
          </label><br />
          <label>Quotes / Thanks (optional)<br />
            <textarea rows={2} value={form.quotes} onChange={update("quotes")} style={tStyle} />
          </label>
        </section>

        <section>
          <h2>Social Links</h2>
          <label>Instagram<br />
            <input type="url" value={form.ig} onChange={update("ig")} placeholder="https://instagram.com/…" style={iStyle} />
          </label><br />
          <label>Facebook<br />
            <input type="url" value={form.fb} onChange={update("fb")} placeholder="https://facebook.com/…" style={iStyle} />
          </label><br />
          <label>TikTok<br />
            <input type="url" value={form.tt} onChange={update("tt")} placeholder="https://tiktok.com/@…" style={iStyle} />
          </label><br />
          <label>Website (optional)<br />
            <input type="url" value={form.site} onChange={update("site")} placeholder="https://…" style={iStyle} />
          </label>
        </section>

        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <button type="button" onClick={saveLocal} disabled={saving}
                  style={bStyle}>{saved ? "Saved ✓" : saving ? "Saving…" : "Save Progress"}</button>
          <button type="submit" style={bStyle}>Submit</button>
        </div>

        <p style={{ fontSize: 12, color: "#666" }}>You can return anytime to edit or add missing items.</p>
      </form>
    </main>
  );
}

const iStyle = { width: "100%", padding: 8, border: "1px solid #ddd", borderRadius: 6 };
const tStyle = { ...iStyle, minHeight: 80 };
const bStyle = { padding: "10px 16px", cursor: "pointer", borderRadius: 8, border: "1px solid #ddd", background: "#fafafa" };
