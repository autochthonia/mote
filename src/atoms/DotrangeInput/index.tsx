/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef } from "react";
import Dotscale from "../Dotscale";
import Field, { FieldProps } from "../Field";

export interface DotrangeInputProps extends Omit<FieldProps, "children"> {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
  className?: string;
  children?: never;
}

const DotrangeInput = forwardRef<HTMLDivElement, DotrangeInputProps>(
  ({ value = 0, min = 0, max = 5, onChange, children, ...props }, ref) => {
    return (
      <Field {...props}>
        <Dotscale
          css={{ marginLeft: "auto" }}
          ref={ref}
          value={value}
          num={max}
          onChange={(newValue) => {
            if (value === 1 && newValue === 1 && min < 1) {
              onChange?.(0);
            } else {
              onChange?.(
                Math.max(
                  Math.min(newValue, Math.max(min, max)),
                  Math.min(min, max)
                )
              );
            }
          }}
        />
      </Field>
    );
  }
);

export default DotrangeInput;
