import type { CharacterStatus } from "@/types/characters";
import type { FC } from "react";
import "./index.css";

export type CharacterCardStatusProps = {
  status: CharacterStatus;
};
export const CharacterCardStatusIcon: FC<CharacterCardStatusProps> = ({
  status,
}) => {
  return (
    <div className={`character-card-status`}>
      <span className={`character-card-status-icon ${status}`} />
      {status}
    </div>
  );
};
