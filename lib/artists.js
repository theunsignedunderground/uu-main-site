import artists from "../data/artists.json";

export function getArtistById(id) {
  return artists.find((a) => a.id === id);
}
