/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent, ReactNode } from "react";
import { Box } from "reakit";

export interface FieldGroupProps {
  label: string;
  children: ReactNode;
  className?: string;
}

const FieldGroup: FunctionComponent<FieldGroupProps> = ({
  label,
  children,
  className,
}) => {
  return (
    <Box className={className}>
      <Box as="header">{label}</Box>
      <Box as="main" css={{ display: "flex", flexDirection: "column" }}>
        {children}
      </Box>
    </Box>
  );
};

export default FieldGroup;
