import type { Episode } from '@/types/episode';
import type { EpisodeApiSchema } from '@/types/server/episode-api';

export const parseEpisode: (apiEpisode: EpisodeApiSchema) => Episode = (apiEpisode) => {
  const { air_date, episode, name } = apiEpisode;
  return { air_date, episode, name };
};
