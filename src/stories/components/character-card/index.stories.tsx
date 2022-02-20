import { CharacterFixture } from "@/stories/fixture/character";
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
CharacterCardStory.args = CharacterFixture;
