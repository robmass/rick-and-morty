import {
  CharacterCardEpisodes,
  CharacterCardEpisodesProps,
} from "@/components/character-card/episodes";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "CharacterCard/Episodes",
  component: CharacterCardEpisodes,
} as Meta;

const Template: Story<CharacterCardEpisodesProps> = ({ episodes }) => (
  <CharacterCardEpisodes episodes={episodes} />
);

export const NoEpisodes = Template.bind({});
NoEpisodes.args = {
  episodes: [],
};

export const TwoEpisodes = Template.bind({});
TwoEpisodes.args = {
  episodes: [
    { name: "Episode name", episode: "S01E01", air_date: "September 10, 2017" },
    {
      name: "Episode name 2",
      episode: "S01E02",
      air_date: "September 10, 2017",
    },
  ],
};

export const FourEpisodes = Template.bind({});
FourEpisodes.args = {
  episodes: [
    { name: "Episode name", episode: "S01E01", air_date: "September 10, 2017" },
    {
      name: "Episode name 2",
      episode: "S01E02",
      air_date: "September 10, 2017",
    },
    {
      name: "Episode name 3",
      episode: "S01E03",
      air_date: "September 10, 2017",
    },
    {
      name: "Episode name 4",
      episode: "S01E04",
      air_date: "September 10, 2017",
    },
  ],
};

export const MoreThanFourEpisodes = Template.bind({});
MoreThanFourEpisodes.args = {
  episodes: [
    { name: "Episode name", episode: "S01E01", air_date: "September 10, 2017" },
    {
      name: "Episode name 2",
      episode: "S01E02",
      air_date: "September 10, 2017",
    },
    {
      name: "Episode name 3",
      episode: "S01E03",
      air_date: "September 10, 2017",
    },
    {
      name: "Episode name 4",
      episode: "S01E04",
      air_date: "September 10, 2017",
    },
    {
      name: "Episode name 5",
      episode: "S01E05",
      air_date: "September 10, 2017",
    },
    {
      name: "Episode name 6",
      episode: "S01E06",
      air_date: "September 10, 2017",
    },
  ],
};
