import { CharacterCardBackSide } from '@/components/character-card/card-back-side';
import { CharacterCardStatusIcon } from '@/components/character-card/status';
import type { CharacterGender, CharacterStatus } from '@/types/characters';
import type { Episode } from '@/types/episode';
import type { Location } from '@/types/location';
import type { FC } from 'react';
import styled from 'styled-components';
import './index.css';

export type CharacterCardProps = {
  image: string;
  name: string;
  gender: CharacterGender;
  status: CharacterStatus;
  type: string;
  species: string;
  origin: Location | undefined;
  location: Location | undefined;
  episodes: Episode[];
};

export const CharacterCard: FC<CharacterCardProps> = (props) => {
  const { image, name, gender, status, species, type } = props;
  const stringa = `font-size: 1.5em;
  text-align: center;
  color: red;`;
  const Name = styled.div`
    ${stringa}
  `;
  const info = [gender, species].join(' - ');
  return (
    <article className="character-card">
      <div className="character-card-side character-card-side-front">
        <img className="character-card-image" src={image} alt={name} />
        <div className="character-card-front-info">
          <Name>{name}</Name>
          <div className="character-card-status-info">
            <CharacterCardStatusIcon status={status} />
            {` - ${info}`}
            {type && ` - ${type}`}
          </div>
        </div>
      </div>
      <div className="character-card-side character-card-side-back character-card-back-info">
        <CharacterCardBackSide {...props} />
      </div>
    </article>
  );
};
