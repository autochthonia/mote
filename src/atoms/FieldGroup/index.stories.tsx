/** @jsx jsx */
import { jsx } from "@emotion/core";
import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import { Fragment } from "react";
import { Box } from "reakit";
import FieldGroup, { FieldGroupProps } from ".";
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
      <DotrangeInput
        label="Dexterity"
        value={4}
        onChange={action("onChange")}
      />
      <DotrangeInput label="Strength" value={2} onChange={action("onChange")} />
      <DotrangeInput label="Stamina" value={5} onChange={action("onChange")} />
    </Fragment>
  ),
  label: "Physical",
};
