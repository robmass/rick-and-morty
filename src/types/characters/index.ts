type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

export type CharacterStatus = "Alive" | "Dead" | "Unknown";
export type CharacterGender = "Female" | "Male" | "Genderless" | "Unknown";

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
