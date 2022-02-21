import { parseCharacters } from "@/services/parse-character";
import { toEpisodesAndLocations } from "@/services/to-episodes-and-locations";
import type { Character } from "@/types/characters";
import type { JSONResponse } from "@/types/json-response";
import type { CharacterApiSchema } from "@/types/server/character-api";
import type { EpisodeApiSchema } from "@/types/server/episode-api";
import type { LocationApiSchema } from "@/types/server/location-api";
import { useEffect, useState } from "react";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    handleGetCharacter();
  }, []);

  const handleGetCharacter = async () => {
    setIsLoading(true);
    const response = await fetch("https://rickandmortyapi.com/api/character");

    const { results, error }: JSONResponse<CharacterApiSchema> =
      await response.json();
    if (!response.ok) {
      setError(error);
      return;
    }
    if (!results || results.length === 0) {
      return;
    }

    const { episodes, locations } = toEpisodesAndLocations(results);
    const [locationsReponse, episodesResponse] = await Promise.all([
      (
        await fetch(
          `https://rickandmortyapi.com/api/location/${locations.join(",")}`
        )
      ).json() as Promise<LocationApiSchema[]>,
      (
        await fetch(
          `https://rickandmortyapi.com/api/episode/${episodes.join(",")}`
        )
      ).json() as Promise<EpisodeApiSchema[]>,
    ]);
    const characters: Character[] = parseCharacters(
      results,
      locationsReponse,
      episodesResponse
    );
    setCharacters(characters);
    setIsLoading(false);
  };

  return { isLoading, characters, error };
};
