/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Meta, Story } from "@storybook/react";
import Input, { InputProps } from ".";
import useStoryState from "../../../.storybook/hooks/useStoryState";

export default {
  title: "Atoms/Input",
  component: Input,
} as Meta;

const Template = (args: InputProps) => {
  const [value, onChange] = useStoryState(args.value);
  return (
    <Input
      css={{ maxWidth: 250 }}
      {...args}
      value={value}
      onChange={onChange}
    />
  );
};

export const Empty: Story<InputProps> = Template.bind({});

Empty.args = {
  value: "Solar",
};
