import { parseEpisode } from '@/services/parse-episode';
import { parseLocation } from '@/services/parse-location';
import { toEpisodes } from '@/services/to-episodes-and-locations/to-episodes';
import { toLocation } from '@/services/to-episodes-and-locations/to-location';
import type { Character } from '@/types/characters';
import type { Episode } from '@/types/episode';
import type { Location } from '@/types/location';
import type { CharacterApiSchema, LocationApi } from '@/types/server/character-api';
import type { EpisodeApiSchema } from '@/types/server/episode-api';
import type { LocationApiSchema } from '@/types/server/location-api';

export const parseCharacters: (
  apiCharacters: CharacterApiSchema[],
  apiLocations: LocationApiSchema[],
  apiEpisodes: EpisodeApiSchema[]
) => Character[] = (apiCharacters, apiLocations, apiEpisodes) => {
  const parsedCharacters: Character[] = [];
  apiCharacters.forEach((apiCharacter) => {
    const character = parseCharacter(apiCharacter, apiLocations, apiEpisodes);
    parsedCharacters.push(character);
  });

  return parsedCharacters;
};

export const parseCharacter: (
  apiCharacter: CharacterApiSchema,
  apiLocations: LocationApiSchema[],
  apiEpisodes: EpisodeApiSchema[]
) => Character = (apiCharacter, apiLocations, apiEpisodes) => {
  const { id, name, species, episode, gender, image, location, origin, status, type } = apiCharacter;
  const parsedOrigin = parseCharacterLocation(origin, apiLocations);
  const parsedLocation = parseCharacterLocation(location, apiLocations);
  const parsedEpisodes = parseCharacterEpisodes(episode, apiEpisodes);

  return {
    id,
    name,
    species,
    gender,
    image,
    status,
    type,
    origin: parsedOrigin,
    location: parsedLocation,
    episodes: parsedEpisodes,
  };
};

const parseCharacterLocation: (location: LocationApi, apiLocations: LocationApiSchema[]) => Location | undefined = (
  location,
  apiLocations
) => {
  const locationId = toLocation(location);
  if (!locationId) {
    return undefined;
  }
  const apiLocation = apiLocations.find((location) => location.id === locationId);
  if (!apiLocation) {
    return undefined;
  }
  return parseLocation(apiLocation);
};

const parseCharacterEpisodes: (episodes: string[], apiEpisodes: EpisodeApiSchema[]) => Episode[] = (episodes, apiEpisodes) => {
  const returnEpisodes: Episode[] = [];
  const episodeIds = toEpisodes(episodes);
  if (episodeIds.length === 0) {
    return [];
  }
  episodeIds.forEach((episodeId) => {
    const apiEpisode = apiEpisodes.find((episode) => episode.id === episodeId);
    if (apiEpisode) {
      const parsedEpisode = parseEpisode(apiEpisode);
      returnEpisodes.push(parsedEpisode);
    }
  });
  return returnEpisodes;
};
