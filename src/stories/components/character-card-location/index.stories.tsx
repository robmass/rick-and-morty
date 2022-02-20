import {
  CharacterCardLocation,
  CharacterCardLocationProps,
} from "@/components/character-card/location";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Components/CharacterCard/Location",
  component: CharacterCardLocation,
} as Meta;

export const LocationStory: Story<CharacterCardLocationProps> = ({
  location,
  title,
}) => <CharacterCardLocation title={title} location={location} />;

LocationStory.args = {
  title: "This is the title",
  location: {
    name: "location name",
    dimension: "location dimension",
    type: "location type",
    amountOfResidents: 1000000,
  },
};
