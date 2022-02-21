import { extractIdFromUrl } from '@/services/extract-id-from-url';
import type { LocationApi } from '@/types/server/character-api';

export const toLocation: (location: LocationApi) => number | undefined = (location) => {
  const id = extractIdFromUrl(location.url);
  if (id === -1) {
    return undefined;
  }
  return id;
};
