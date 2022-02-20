import "@/components/character-card/card-back-side/index.css";
import "@/components/character-card/location/index.css";
import type { Location } from "@/types/location";
import type { FC } from "react";

type CharacterCardLocationProps = {
  title: string;
  location: Location;
};
export const CharacterCardLocation: FC<CharacterCardLocationProps> = ({
  title,
  location,
}) => {
  const { name, dimension, amountOfResidents, type } = location;
  return (
    <div className="character-card-location">
      <div className="character-card-back-info">
        <span className="character-card-back-info-title">{title} </span>
        {name} <span className="character-card-location-type">({type})</span>
      </div>
      <div className="character-card-back-info">
        <span className="character-card-back-info-title">Dimensions: </span>
        {dimension}
      </div>
      <div className="character-card-back-info">
        <span className="character-card-back-info-title"># of residents: </span>
        {amountOfResidents}
      </div>
    </div>
  );
};
