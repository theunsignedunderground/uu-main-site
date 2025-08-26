import { generationEnabled } from "../../../lib/featureFlags";
import { haveOpenAIKey, generateDraft } from "../../../lib/openai";
import { getArtistById } from "../../../lib/artists";

export default async function runJob(req, res, type) {
  const { artistId } = req.query;
  if (!artistId) return res.status(400).json({ error: "artistId required" });

  const artist = getArtistById(artistId);
  if (!artist) return res.status(404).json({ error: "artist not found" });

  if (!generationEnabled()) {
    return res.status(202).json({
      status: "queued",
      enabled: false,
      message: "Generation disabled. Set UU_GENERATION_ENABLED=true to enable.",
      preview: { type, artist: artist.name }
    });
  }

  if (!haveOpenAIKey()) {
    return res.status(503).json({
      status: "blocked",
      enabled: true,
      message: "OPENAI_API_KEY missing in environment."
    });
  }

  const draft = await generateDraft({ type, artist });
  return res.status(200).json({ status: "ok", draft });
}
