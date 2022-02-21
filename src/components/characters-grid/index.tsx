import { CharacterCard } from '@/components/character-card';
import '@/components/characters-grid/index.css';
import type { Character } from '@/types/characters';
import type { FC } from 'react';
export type CharactersGridProps = {
  characters: Character[];
};

export const CharactersGrid: FC<CharactersGridProps> = ({ characters }) => {
  if (characters.length === 0) {
    return <div className="characters-grid-not-found">No characters found</div>;
  }

  return (
    <div className="characters-grid">
      {characters.map((character, index) => (
        <CharacterCard {...character} key={`${character.id}-${index}`} />
      ))}
    </div>
  );
};
