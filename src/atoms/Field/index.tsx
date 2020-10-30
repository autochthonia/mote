/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent, ComponentProps, ReactNode } from "react";
import { Box } from "reakit";

export type FieldProps = ComponentProps<typeof Field>;

const Field: FunctionComponent<{
  min?: number;
  max?: number;
  label: string;
  children: ReactNode;
  className?: string;
}> = ({ min = 0, max = 5, label, children, className }) => {
  return (
    <Box
      css={{ display: "flex", justifyContent: "space-between" }}
      className={className}
    >
      <span>{label}</span>
      {children}
    </Box>
  );
};

export default Field;
