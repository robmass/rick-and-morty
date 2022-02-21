import { toEpisodes } from "../to-episodes";

describe("toEpisodes", () => {
  it("Returns the episodes id from the list of episodes of a character", () => {
    const episodes = [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/123",
      "https://rickandmortyapi.com/api/episode/",
      "https://rickandmortyapi.com/api/episode/4",
    ];
    const ids = toEpisodes(episodes);
    const expectedIds = [1, 2, 123, 4];
    expect(ids).toEqual(expectedIds);
  });
});
