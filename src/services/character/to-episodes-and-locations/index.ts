import { toEpisodes } from "@/services/character/to-episodes-and-locations/to-episodes";
import { toLocation } from "@/services/character/to-episodes-and-locations/to-location";
import type { CharacterApi } from "@/types/server/character-api";

export type ToEpisodesAndLocations = {
  episodes: number[];
  locations: number[];
};
export const toEpisodesAndLocations: (
  characters: CharacterApi[]
) => ToEpisodesAndLocations = (characters) => {
  const returnedEpisodes: number[] = [];
  const returnedLocations: number[] = [];

  for (const character of characters) {
    const characterOrigin = toLocation(character.origin);
    if (characterOrigin && !returnedLocations.includes(characterOrigin)) {
      returnedLocations.push(characterOrigin);
    }
    const characterLocation = toLocation(character.location);
    if (characterLocation && !returnedLocations.includes(characterLocation)) {
      returnedLocations.push(characterLocation);
    }
    const characterEpisodes = toEpisodes(character.episode);
    if (characterEpisodes.length > 0) {
      characterEpisodes.forEach((episode) => {
        if (!returnedEpisodes.includes(episode)) {
          returnedEpisodes.push(episode);
        }
      });
    }
  }

  return {
    episodes: returnedEpisodes.sort((a, b) => a - b),
    locations: returnedLocations.sort((a, b) => a - b),
  };
};
