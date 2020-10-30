import React from "react";
import { Meta, Story } from "@storybook/react";
import Dotscale, { DotscaleProps } from ".";

export default {
  title: "Atoms/Dotscale",
  component: Dotscale,
} as Meta;

const Template = (args: DotscaleProps) => <Dotscale {...args} />;

export const Empty: Story<DotscaleProps> = Template.bind({});

Empty.args = {
  value: 0,
};

export const One: Story<DotscaleProps> = Template.bind({});

One.args = {
  value: 1,
};

export const Five: Story<DotscaleProps> = Template.bind({});

Five.args = {
  value: 5,
};
