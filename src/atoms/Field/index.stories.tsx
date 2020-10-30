/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Meta, Story } from "@storybook/react";
import Field, { FieldProps } from ".";
import { Box } from "reakit";
import Dotscale from "../Dotscale";

export default {
  title: "Atoms/Field",
  component: Field,
} as Meta;

const Template = (args: FieldProps) => (
  <Box style={{ maxWidth: 200 }}>
    <Field {...args} />
  </Box>
);

export const Empty: Story<FieldProps> = Template.bind({});

Empty.args = {
  children: <Dotscale value={0} />,
  label: "Attribute",
};

export const One: Story<FieldProps> = Template.bind({});

One.args = {
  children: <Dotscale value={1} />,
  label: "Attribute",
};

export const Five: Story<FieldProps> = Template.bind({});

Five.args = {
  children: <Dotscale value={0} />,
  label: "Attribute",
};
