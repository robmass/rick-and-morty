import type { Location } from "@/types/location";
import type { LocationApiSchema } from "@/types/server/location-api";

export const parseLocation: (apiLocation: LocationApiSchema) => Location = (
  apiLocation
) => {
  const { dimension, name, residents, type } = apiLocation;
  return {
    amountOfResidents: residents.length,
    dimension,
    name,
    type,
  };
};
