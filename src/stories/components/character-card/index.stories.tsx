import type { Meta, Story } from "@storybook/react";
import {
  CharacterCard,
  CharacterCardProps,
} from "src/components/character-card";
export default {
  title: "CharacterCard",
  component: CharacterCard,
} as Meta;

const Template: Story<CharacterCardProps> = (props) => {
  return <CharacterCard {...props} />;
};

export const CharacterCardStory = Template.bind({});
CharacterCardStory.args = {
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
