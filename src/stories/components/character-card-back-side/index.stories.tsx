import type { CharacterCardProps } from "@/components/character-card";
import { CharacterCardBackSide } from "@/components/character-card/card-back-side";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "CharacterCard/CardBackSide",
  component: CharacterCardBackSide,
} as Meta;

export const CardBackSideStory: Story<CharacterCardProps> = (props) => (
  <CharacterCardBackSide {...props} />
);
CardBackSideStory.args = {
  name: "Rick Sanchez",
  gender: "Male",
  status: "Alive",
  species: "Human",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  type: "",
  origin: {
    name: "Earth",
    type: "Planet",
    dimension: "Dimension C-137",
    amountOfResidents: 50000,
  },
  location: {
    name: "Earth",
    type: "Planet",
    dimension: "Dimension C-137",
    amountOfResidents: 50000,
  },
  episodes: [
    {
      name: "Close Rick-counters of the Rick Kind",
      air_date: "April 7, 2014",
      episode: "S01E10",
    },
    {
      name: "The Ricklantis Mixup",
      air_date: "September 10, 2017",
      episode: "S03E07",
    },
    {
      name: "The Ricklantis Mixup",
      air_date: "September 10, 2017",
      episode: "S03E07",
    },
    {
      name: "The Ricklantis Mixup",
      air_date: "September 10, 2017",
      episode: "S03E07",
    },
    {
      name: "The Ricklantis Mixup",
      air_date: "September 10, 2017",
      episode: "S03E07",
    },
  ],
};
