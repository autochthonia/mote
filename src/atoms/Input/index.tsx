/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef, MutableRefObject, useRef, useState } from "react";
import { Box } from "reakit";
import { useEditable } from "use-editable";

export interface InputProps {
  value: string;
  onChange: Parameters<typeof useEditable>[1];
  children?: never;
  className?: string;
}

const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ value, onChange, ...props }, outerRef) => {
    const ref = (outerRef as MutableRefObject<HTMLDivElement>) ?? useRef(null);
    useEditable(ref, onChange);

    return (
      <Box ref={ref} css={{ borderBottom: "1px solid gold" }} {...props}>
        {value}
      </Box>
    );
  }
);

export default Input;
