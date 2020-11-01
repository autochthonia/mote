/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, FunctionComponent } from "react";
import { Box } from "reakit";
import DotrangeInput from "../../../atoms/DotrangeInput";
import FieldGroup from "../../../atoms/FieldGroup";
import { ABILITIES, ATTRIBUTES } from "../../../const";

export interface FullSheetProps {
  className?: string;
  children?: never;
}

const createGroup = (
  groupDescription: Record<
    string,
    {
      label: string;
      order: number;
      fields: Record<string, { label: string; order: number }>;
    }
  >,
  handleChange: (newValue: number, fieldKey: string) => void
) => {
  return (
    <Fragment>
      {Object.keys(groupDescription).map((key) => {
        const group = groupDescription[key];
        return (
          <FieldGroup key={key} label={group.label}>
            {Object.keys(group.fields).map((fieldKey) => {
              const field = group.fields[fieldKey];
              return (
                <DotrangeInput
                  key={fieldKey}
                  label={field.label}
                  value={1}
                  onChange={(newValue) => handleChange(newValue, fieldKey)}
                />
              );
            })}
          </FieldGroup>
        );
      })}
    </Fragment>
  );
};

const FullCharacter: FunctionComponent<FullSheetProps> = ({
  className,
  ...props
}) => {
  const handleAttributeChange = () => {};
  const handleAbilityChange = () => {};
  return (
    <Box as="article" className={className}>
      <FieldGroup
        label="Attributes"
        css={{
          "> main": {
            flexDirection: "row",
            justifyContent: "space-between",
            "> *": {
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: "33%",
              "&:not(:first-child)": {
                marginLeft: 8,
              },
            },
          },
        }}
      >
        {createGroup(ATTRIBUTES, handleAttributeChange)}
      </FieldGroup>
      <Box
        css={{
          display: "flex",
          flexDirection: "row",
          "> *": {
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: "33%",
            "&:not(:first-child)": {
              marginLeft: 8,
            },
          },
        }}
      >
        {createGroup(ABILITIES, handleAbilityChange)}
        <Box>Col 2</Box>
        <Box>Col 3</Box>
      </Box>
    </Box>
  );
};

export default FullCharacter;
