/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, FunctionComponent, ComponentProps } from "react";
import Dot from "../Dot";

export type DotscaleProps = ComponentProps<typeof Dotscale>;

const Dotscale: FunctionComponent<{
  min?: number;
  max?: number;
  value: number;
  children?: never;
}> = ({ min = 0, max = 5, value }) => {
  return (
    <div css={{ flexBasis: "auto" }}>
      {Array(max)
        .fill(undefined)
        .map((_, i) => (
          <Dot key={i} filled={value >= i + 1} />
        ))}
    </div>
  );
};

export default Dotscale;
