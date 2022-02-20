import {
  CharacterCardStatusIcon,
  CharacterCardStatusProps,
} from "@/components/character-card/status";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "CharacterCard/Status",
  component: CharacterCardStatusIcon,
} as Meta;

const Template: Story<CharacterCardStatusProps> = ({ status }) => (
  <CharacterCardStatusIcon status={status} />
);

export const StatusAlive = Template.bind({});
StatusAlive.args = { status: "Alive" };

export const StatusDead = Template.bind({});
StatusDead.args = { status: "Dead" };

export const StatusUnknown = Template.bind({});
StatusUnknown.args = { status: "Unknown" };
