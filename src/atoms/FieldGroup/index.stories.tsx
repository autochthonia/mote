/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Meta, Story } from "@storybook/react";
import FieldGroup, { FieldGroupProps } from ".";
import { Box } from "reakit";
import Dotscale from "../Dotscale";
import { Fragment } from "react";
import DotrangeInput from "../DotrangeInput";

export default {
  title: "Atoms/FieldGroup",
  component: FieldGroup,
} as Meta;

const Template = (args: FieldGroupProps) => (
  <Box style={{ maxWidth: 200 }}>
    <FieldGroup {...args} />
  </Box>
);

export const Primary: Story<FieldGroupProps> = Template.bind({});

Primary.args = {
  children: (
    <Fragment>
      <DotrangeInput label="Dexterity" value={4} onChange={() => {}} />
      <DotrangeInput label="Strength" value={2} onChange={() => {}} />
      <DotrangeInput label="Stamina" value={5} onChange={() => {}} />
    </Fragment>
  ),
  label: "Physical",
};
