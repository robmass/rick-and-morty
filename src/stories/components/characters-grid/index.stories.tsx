import {
  CharactersGrid,
  CharactersGridProps,
} from "@/components/characters-grid";
import { CharacterFixture } from "@/stories/fixture/character";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "CharactersGrid",
  component: CharactersGrid,
} as Meta;

const Template: Story<CharactersGridProps> = ({ characters }) => (
  <CharactersGrid characters={characters} />
);

export const NoCharacter = Template.bind({});
NoCharacter.args = {
  characters: [],
};

export const OneCharacter = Template.bind({});
OneCharacter.args = {
  characters: [CharacterFixture],
};

export const TwoCharacters = Template.bind({});
TwoCharacters.args = {
  characters: [CharacterFixture, CharacterFixture],
};

export const ThreeCharacters = Template.bind({});
ThreeCharacters.args = {
  characters: [CharacterFixture, CharacterFixture, CharacterFixture],
};

export const FourCharacters = Template.bind({});
FourCharacters.args = {
  characters: [
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
  ],
};

export const TwelveCharacters = Template.bind({});
TwelveCharacters.args = {
  characters: [
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
    CharacterFixture,
  ],
};
