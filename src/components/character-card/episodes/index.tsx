import "@/components/character-card/card-back-side/index.css";
import "@/components/character-card/episodes/index.css";
import type { Episode } from "@/types/episode";
import type { FC, ReactElement } from "react";

export type CharacterCardEpisodesProps = {
  episodes: Episode[];
};
export const CharacterCardEpisodes: FC<CharacterCardEpisodesProps> = ({
  episodes,
}) => {
  const title =
    episodes.length > 0
      ? "Appears in: "
      : "No appearances of the character in the series";

  const episodesList =
    episodes.length > 0 ? renderEpisodesTitles(episodes) : <></>;
  return (
    <div className="character-card-back-info">
      <span className="character-card-back-info-title">{title}</span>
      {episodesList}
    </div>
  );
};

const renderEpisodesTitles: (episodes: Episode[]) => ReactElement = (
  episodes
) => {
  return (
    <>
      <ul className="character-card-episodes-list">
        {episodes.slice(0, 4).map((e) => (
          <li>
            {e.name} ({e.episode})
          </li>
        ))}
      </ul>
      {episodes.length > 4 && (
        <div>{`And many others (${episodes.length - 4})...`}</div>
      )}
    </>
  );
};
