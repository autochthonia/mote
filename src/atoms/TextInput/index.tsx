/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef } from "react";
import Field from "../Field";
import Input from "../Input";

export interface TextInputProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
}

const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  ({ label, value, onChange, className, ...props }, ref) => {
    return (
      <Field label={label} className={className}>
        <Input ref={ref} value={value} onChange={onChange} />
      </Field>
    );
  }
);

export default TextInput;
