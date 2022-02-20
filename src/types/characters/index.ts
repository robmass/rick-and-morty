import type { Episode } from "@/types/episode";
import type { Location } from "@/types/location";

type Origin = {
  name: string;
  url: string;
};

// type Location = {
//   name: string;
//   url: string;
// };

export type CharacterStatus = "Alive" | "Dead" | "Unknown";
export type CharacterGender = "Female" | "Male" | "Genderless" | "Unknown";

export type Character1 = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Character = {
  image: string;
  name: string;
  gender: CharacterGender;
  status: CharacterStatus;
  type: string;
  species: string;
  origin: Location;
  location: Location;
  episodes: Episode[];
};
