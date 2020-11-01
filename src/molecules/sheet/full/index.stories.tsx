/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Meta, Story } from "@storybook/react";
import FullSheet, { FullSheetProps } from ".";

export default {
  title: "Molecules/FullSheet",
  component: FullSheet,
} as Meta;

const Template = (args: FullSheetProps) => (
  <FullSheet css={{ maxWidth: 480 }} {...args} />
);

export const Primary: Story<FullSheetProps> = Template.bind({});

Primary.args = {};
