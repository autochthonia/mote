/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Meta, Story } from "@storybook/react";
import DotrangeInput, { DotrangeInputProps } from ".";
import useStoryState from "../../../.storybook/hooks/useStoryState";

export default {
  title: "Atoms/DotrangeInput",
  component: DotrangeInput,
} as Meta;

const Template = (args: DotrangeInputProps) => {
  const [value, onChange] = useStoryState(args.value);
  return (
    <DotrangeInput
      css={{ maxWidth: 250 }}
      {...args}
      value={value}
      onChange={onChange}
    />
  );
};

export const Empty: Story<DotrangeInputProps> = Template.bind({});

Empty.args = {
  label: "Dexterity",
  value: 3,
};
