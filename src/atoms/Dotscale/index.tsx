/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent, ComponentProps, ComponentType } from "react";
import { useToolbarState, Toolbar, ToolbarItem } from "reakit/Toolbar";
import Dot from "../Dot";

export type DotscaleProps = ComponentProps<typeof Dotscale>;

const Dotscale: FunctionComponent<{
  min?: number;
  max?: number;
  value: number;
  children?: never;
  onChange?: (newValue: number) => void;
}> = ({ min = 0, max = 5, value, onChange }) => {
  const toolbar = useToolbarState({ loop: false, orientation: "horizontal" });

  return (
    <Toolbar css={{ flexBasis: "auto" }} {...toolbar}>
      {Array(max)
        .fill(undefined)
        .map((_, i) => (
          <ToolbarItem
            {...toolbar}
            as={Dot}
            key={i}
            filled={value >= i + 1}
            onClick={() => onChange?.(i + 1)}
          />
        ))}
    </Toolbar>
  );
};

export default Dotscale;
