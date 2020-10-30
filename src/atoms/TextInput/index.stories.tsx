/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Meta, Story } from "@storybook/react";
import TextInput, { TextInputProps } from ".";
import useStoryState from "../../../.storybook/hooks/useStoryState";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
} as Meta;

const Template = (args: TextInputProps) => {
  const [value, onChange] = useStoryState(args.value);
  return (
    <TextInput
      css={{ maxWidth: 250 }}
      {...args}
      value={value}
      onChange={onChange}
    />
  );
};

export const Empty: Story<TextInputProps> = Template.bind({});

Empty.args = {
  label: "Splat",
  value: "Solar",
};
