/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent, ComponentProps } from "react";
import { Box } from "reakit";
import Dotscale from "../Dotscale";

export type FieldProps = ComponentProps<typeof Field>;

const Field: FunctionComponent<{
  min?: number;
  max?: number;
  value: number;
  label: string;
  children?: never;
}> = ({ min = 0, max = 5, label, value }) => {
  return (
    <Box css={{ display: "flex", justifyContent: "space-between" }}>
      <span>{label}</span>
      <span>
        <Dotscale value={value} min={min} max={max} />
      </span>
    </Box>
  );
};

export default Field;
