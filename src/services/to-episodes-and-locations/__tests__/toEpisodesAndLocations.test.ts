import { toEpisodesAndLocations } from "@/services/to-episodes-and-locations";
import {
  character1,
  character2,
  character3,
  character4,
} from "@/services/to-episodes-and-locations/__tests__/character-api.fixture";

describe("toEpisodesAndLocations", () => {
  it("Return an object with locations and episodes given a correct character", () => {
    const { episodes, locations } = toEpisodesAndLocations([
      character1,
      character2,
      character3,
      character4,
    ]);
    const expectedEpisodes = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 24, 28,
    ];
    const expectedLocations = [1, 3, 20];
    expect(episodes).toEqual(expectedEpisodes);
    expect(locations).toEqual(expectedLocations);
  });
});
