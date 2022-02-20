import type { CharacterGender, CharacterStatus } from "@/types/characters";

export type CharacterApi = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: LocationApi;
  location: LocationApi;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type LocationApi = {
  name: string;
  url: string;
};
