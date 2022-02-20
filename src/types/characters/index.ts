import type { Episode } from "@/types/episode";
import type { Location } from "@/types/location";

export type CharacterStatus = "Alive" | "Dead" | "Unknown";
export type CharacterGender = "Female" | "Male" | "Genderless" | "Unknown";

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
