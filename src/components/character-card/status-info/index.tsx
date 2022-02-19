import type { CharacterGender, CharacterStatus } from "@/types/characters";
import type { FC } from "react";
import "./index.css";

type CharacterCardInfoProps = {
  status: CharacterStatus;
  gender: CharacterGender;
  species: string;
  type: string;
};
export const CharacterCardInfo: FC<CharacterCardInfoProps> = ({
  status,
  gender,
  species,
  type,
}) => {
  const info = [status, gender, species].join(" - ");
  return (
    <div className="character-card-status">
      <span className={`character-card-status-icon ${status}`} />
      {info}
      {type && ` - ${type}`}
    </div>
  );
};
