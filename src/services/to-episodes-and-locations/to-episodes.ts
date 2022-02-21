import { extractIdFromUrl } from '@/services/extract-id-from-url';

export const toEpisodes: (episodes: string[]) => number[] = (episodes) => {
  return episodes.reduce((ids: number[], episode) => {
    const id = extractIdFromUrl(episode);
    if (id !== -1) {
      ids.push(id);
    }
    return ids;
  }, []);
};
