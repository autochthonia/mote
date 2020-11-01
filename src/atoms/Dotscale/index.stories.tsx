/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Dotscale, { DotscaleProps } from ".";

export default {
  title: "Atoms/Dotscale",
  component: Dotscale,
} as Meta;

const Template = ({
  onChange = action("onChange"),
  ...args
}: DotscaleProps) => <Dotscale {...args} onChange={onChange} />;

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
