export function haveOpenAIKey() {
  return !!process.env.OPENAI_API_KEY;
}

// Placeholder generator; we’ll swap in real prompts later.
export async function generateDraft({ type, artist }) {
  return {
    type,
    title: `${artist.name} — ${type.toUpperCase()} (DRAFT)`,
    body: [
      `Artist: ${artist.name}`,
      `City: ${artist.city}, ${artist.state}`,
      `Genre(s): ${artist.genres?.join(", ") || "N/A"}`,
      "",
      `This is a placeholder ${type} draft.`,
      `Enable UU_GENERATION_ENABLED=true and set OPENAI_API_KEY to generate real copy.`
    ].join("\n")
  };
}
