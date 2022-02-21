import { extractIdFromUrl } from '../index';

describe('extractIdFromUrl', () => {
  it('Extracts the id given a correct url', () => {
    const id = extractIdFromUrl('https://rickandmortyapi.com/api/location/256');
    expect(id).toEqual(256);
  });

  it('Returns -1 when the id is not a number', () => {
    const id = extractIdFromUrl('https://rickandmortyapi.com/api/location');
    expect(id).toEqual(-1);
  });
});
