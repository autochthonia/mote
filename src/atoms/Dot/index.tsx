/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, FunctionComponent, ComponentProps } from "react";

export type DotProps = ComponentProps<typeof Dot>;

const Dot: FunctionComponent<{ filled: boolean; children?: never }> = ({
  filled,
}) => {
  return <Fragment>{filled ? "x" : "o"}</Fragment>;
};

export default Dot;
