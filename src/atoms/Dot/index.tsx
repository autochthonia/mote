/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ComponentProps, forwardRef } from "react";
import { Button } from "reakit";

export type DotProps = ComponentProps<typeof Dot>;

const Dot = forwardRef<
  HTMLButtonElement,
  { filled: boolean; children?: never } & Omit<
    ComponentProps<typeof Button>,
    "as"
  >
>(({ filled, children, ...props }, ref) => {
  return (
    <Button
      css={{
        border: "unset",
        appearance: "unset",
        outline: "unset",
        margin: "unset",
        padding: "unset",
        background: "unset",
        ":focus": {
          svg: {
            fill: "gray !important",
          },
        },
      }}
      {...props}
      ref={ref}
    >
      <svg
        height="1em"
        width="1em"
        viewBox="0 0 100 100"
        stroke="black"
        stroke-width="8"
        fill={filled ? "black" : "transparent"}
      >
        <circle cx="50" cy="50" r="40" />
      </svg>
    </Button>
  );
});

export default Dot;
