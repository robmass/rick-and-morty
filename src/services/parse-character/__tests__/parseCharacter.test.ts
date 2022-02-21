import { parseCharacter } from '@/services/parse-character';
import { character1 } from '@/services/parse-character/__tests__/character-api.fixture';
import { episodesApiFixture } from '@/services/parse-character/__tests__/episode-api.fixture';
import { locationsApiFixture } from '@/services/parse-character/__tests__/locations-api.fixture';
import type { Character } from '@/types/characters';

describe('parseCharacter', () => {
  it('Returns a character', () => {
    const parsedCharacter = parseCharacter(character1, locationsApiFixture, episodesApiFixture);
    const expectedCharacter: Character = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        type: 'Planet',
        dimension: 'Dimension C-137',
        amountOfResidents: 4,
      },
      location: {
        name: 'Citadel of Ricks',
        type: 'Space station',
        dimension: 'unknown',
        amountOfResidents: 1,
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episodes: [
        { name: 'Pilot', air_date: 'December 2, 2013', episode: 'S01E01' },
        { name: 'Lawnmower Dog', air_date: 'December 9, 2013', episode: 'S01E02' },
        { name: 'Anatomy Park', air_date: 'December 16, 2013', episode: 'S01E03' },
        { name: 'M. Night Shaym-Aliens!', air_date: 'January 13, 2014', episode: 'S01E04' },
        { name: 'Meeseeks and Destroy', air_date: 'January 20, 2014', episode: 'S01E05' },
        { name: 'Rick Potion #9', air_date: 'January 27, 2014', episode: 'S01E06' },
        { name: 'Raising Gazorpazorp', air_date: 'March 10, 2014', episode: 'S01E07' },
        { name: 'Rixty Minutes', air_date: 'March 17, 2014', episode: 'S01E08' },
        { name: 'Something Ricked This Way Comes', air_date: 'March 24, 2014', episode: 'S01E09' },
        {
          name: 'Close Rick-counters of the Rick Kind',
          air_date: 'April 7, 2014',
          episode: 'S01E10',
        },
        { name: 'Ricksy Business', air_date: 'April 14, 2014', episode: 'S01E11' },
      ],
    };
    expect(parsedCharacter).toEqual(expectedCharacter);
  });
});
