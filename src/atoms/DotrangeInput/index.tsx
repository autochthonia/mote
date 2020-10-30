/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef } from "react";
import Dotscale from "../Dotscale";
import Field from "../Field";

export interface DotrangeInputProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (newValue: string) => void;
  className?: string;
}

const DotrangeInput = forwardRef<HTMLDivElement, DotrangeInputProps>(
  ({ label, value, min, max, onChange, className, ...props }, ref) => {
    return (
      <Field label={label} className={className}>
        <Dotscale value={value} min={min} max={max} />
      </Field>
    );
  }
);

export default DotrangeInput;
