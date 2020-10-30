import { Fragment, FunctionComponent, ComponentProps } from "react";

export type DotProps = ComponentProps<typeof Dot>;

const Dot: FunctionComponent<{ filled: boolean; children?: never }> = ({
  filled,
}) => {
  return <>{filled ? "x" : "o"}</>;
};

export default Dot;
