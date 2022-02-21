import { parseCharacters } from '@/services/parse-character';
import { toEpisodesAndLocations } from '@/services/to-episodes-and-locations';
import type { Character } from '@/types/characters';
import type { JSONResponse } from '@/types/json-response';
import type { CharacterApiSchema } from '@/types/server/character-api';
import type { EpisodeApiSchema } from '@/types/server/episode-api';
import type { LocationApiSchema } from '@/types/server/location-api';
import { useEffect, useState } from 'react';

const CHARACTER_API_URL = 'https://rickandmortyapi.com/api/character';
const LOCATION_API_URL = 'https://rickandmortyapi.com/api/location';
const EPISODE_API_URL = 'https://rickandmortyapi.com/api/episode';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    handleGetCharacter(1);
  }, []);

  const handleGetCharacter = async (page: number) => {
    setIsLoading(true);
    const characterApiUrl = page > 1 ? `${CHARACTER_API_URL}?page=${page}` : CHARACTER_API_URL;
    const response = await fetch(characterApiUrl);

    const { results, error }: JSONResponse<CharacterApiSchema> = await response.json();
    if (!response.ok) {
      setError(error);
      return;
    }
    if (!results || results.length === 0) {
      return;
    }

    const { episodes, locations } = toEpisodesAndLocations(results);
    const [locationsReponse, episodesResponse] = await Promise.all([
      (await fetch(`${LOCATION_API_URL}/${locations.join(',')}`)).json() as Promise<LocationApiSchema[]>,
      (await fetch(`${EPISODE_API_URL}/${episodes.join(',')}`)).json() as Promise<EpisodeApiSchema[]>,
    ]);
    const characters: Character[] = parseCharacters(results, locationsReponse, episodesResponse);
    setCharacters(characters);
    setIsLoading(false);
  };

  return { isLoading, characters, error };
};
