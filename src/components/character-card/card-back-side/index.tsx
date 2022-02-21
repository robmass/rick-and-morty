import type { CharacterCardProps } from '@/components/character-card';
import { CharacterCardEpisodes } from '@/components/character-card/episodes';
import { CharacterCardLocation } from '@/components/character-card/location';
import { CharacterCardStatusIcon } from '@/components/character-card/status';
import type { FC } from 'react';
import './index.css';

export const CharacterCardBackSide: FC<CharacterCardProps> = (props) => {
  const { name, gender, status, type, species, origin, location, episodes } = props;
  return (
    <div className="character-card-back-info-container">
      <div className="character-card-back-info">
        <span className="character-card-back-info-title">Name: </span>
        {name}
      </div>
      <div className="character-card-back-info">
        <span className="character-card-back-info-title">Status: </span>
        <CharacterCardStatusIcon status={status} />
      </div>
      <div className="character-card-back-info">
        <span className="character-card-back-info-title">Species: </span>
        {species}
        {type && ` (${type})`}
      </div>
      <div className="character-card-back-info">
        <span className="character-card-back-info-title">Gender: </span>
        {gender}
      </div>
      <hr className="character-card-back-info-separator" />
      <CharacterCardLocation title="Coming from" location={origin} />
      <hr className="character-card-back-info-separator" />
      <CharacterCardLocation title="Last seen on" location={location} />
      <hr className="character-card-back-info-separator" />
      <CharacterCardEpisodes episodes={episodes} />
    </div>
  );
};
