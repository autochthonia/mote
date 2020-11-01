/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ComponentProps, forwardRef } from "react";
import { Toolbar, ToolbarItem, useToolbarState } from "reakit/Toolbar";
import Dot from "../Dot";

export type DotscaleProps = ComponentProps<typeof Dotscale>;

const Dotscale = forwardRef<
  HTMLDivElement,
  {
    num?: number;
    value: number;
    children?: never;
    onChange?: (newValue: number) => void;
  }
>(({ num = 5, value, onChange }, ref) => {
  const toolbar = useToolbarState({ loop: false, orientation: "horizontal" });

  return (
    <Toolbar css={{ flexBasis: "auto" }} {...toolbar} ref={ref}>
      {Array(num)
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
});

export default Dotscale;
