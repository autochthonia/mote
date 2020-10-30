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
    <>
      {Array(max)
        .fill(undefined)
        .map((_, i) => (
          <Dot key={i} filled={value >= i + 1} />
        ))}
    </>
  );
};

export default Dotscale;
