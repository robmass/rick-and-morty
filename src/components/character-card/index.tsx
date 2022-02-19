import type { CharacterGender, CharacterStatus } from "@/types/characters";
import type { FC } from "react";
import "./index.css";

export type CharacterCardProps = {
  image: string;
  name: string;
  gender: CharacterGender;
  status: CharacterStatus;
  type: string;
  species: string;
  origin: string;
  // location: {};
  // chapters: string[];
};

export const CharacterCard: FC<CharacterCardProps> = () => {
  return <></>;
};
