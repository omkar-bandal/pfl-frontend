import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FormField } from "../models";
import { Field, FieldProps } from "formik";
import React from "react";

type RadiosProp = {
  formField: FormField;
};
export const Radios: React.FC<RadiosProp> = ({formField}) => {
  return (
    <Field name={formField.name}>
      {({ field: formikField }: FieldProps) => (
        <RadioGroup {...formikField} row aria-labelledby={formField.name}>
          {formField.options?.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio size="small" />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      )}
    </Field>
  );
};
