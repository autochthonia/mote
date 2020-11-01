/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent, ComponentProps } from "react";

export type DotProps = ComponentProps<typeof Dot>;

const Dot: FunctionComponent<{ filled: boolean; children?: never }> = ({
  filled,
}) => {
  return (
    <svg height="1em" width="1em" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="8"
        fill={filled ? "black" : "transparent"}
      />
    </svg>
  );
};

export default Dot;
