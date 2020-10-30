/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Meta, Story } from "@storybook/react";
import Dot, { DotProps } from ".";

export default {
  title: "Atoms/Dot",
  component: Dot,
} as Meta;

const Template = (args: DotProps) => <Dot {...args} />;

export const Unfilled: Story<DotProps> = Template.bind({});

Unfilled.args = {
  filled: false,
};

export const Filled: Story<DotProps> = Template.bind({});

Filled.args = {
  filled: true,
};
