import { toLocation } from "@/services/to-episodes-and-locations/to-location";

describe("toLocation", () => {
  it("Returns a correct location id", () => {
    const id = toLocation({
      url: "https://rickandmortyapi.com/api/location/256",
      name: "location 256",
    });
    expect(id).toEqual(256);
  });
  it("Returns undefined when location id is not correct", () => {
    const id = toLocation({
      url: "https://rickandmortyapi.com/api/location/",
      name: "location 256",
    });
    expect(id).toEqual(undefined);
    const id2 = toLocation({
      url: "https://rickandmortyapi.com/api/location",
      name: "location 256",
    });
    expect(id2).toEqual(undefined);
  });
});
