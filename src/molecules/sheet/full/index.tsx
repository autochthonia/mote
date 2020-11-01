/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, FunctionComponent } from "react";
import { Box } from "reakit";
import DotrangeInput from "../../../atoms/DotrangeInput";
import FieldGroup from "../../../atoms/FieldGroup";
import { ABILITIES, ATTRIBUTES } from "../../../const";

export interface FullSheetProps {}

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

const FullCharacter: FunctionComponent<FullSheetProps> = () => {
  const handleAttributeChange = () => {};
  const handleAbilityChange = () => {};
  return (
    <Box as="article">
      <FieldGroup
        label="Attributes"
        css={{ "> main": { flexDirection: "row" } }}
      >
        {createGroup(ATTRIBUTES, handleAttributeChange)}
      </FieldGroup>
      <FieldGroup label="Abilities" css={{ "> main": {} }}>
        {createGroup(ABILITIES, handleAbilityChange)}
      </FieldGroup>
    </Box>
  );
};

export default FullCharacter;
