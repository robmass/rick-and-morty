import type { CharacterStatus } from "@/types/characters";
import type { FC } from "react";
import "./index.css";

export type CharacterCardStatusProps = {
  status: CharacterStatus;
};
export const CharacterCardStatusIcon: FC<CharacterCardStatusProps> = ({
  status,
}) => {
  let statusIcon = 0x1f9df;
  switch (status) {
    case "Alive":
      statusIcon = 0x1f601;
      break;
    case "Dead":
      statusIcon = 0x1f480;
      break;
    case "Unknown":
      statusIcon = 0x1f9df;
      break;
  }

  return (
    <div className="character-card-status">
      {String.fromCodePoint(statusIcon)}&nbsp;&nbsp;{status}
    </div>
  );
};
