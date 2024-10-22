import { TextField } from "@mui/material";
import { Field, FieldProps } from "formik";
import { FormField } from "../models";

type DateInputProp = {
  formField: FormField;
};
export const DateInput: React.FC<DateInputProp> = ({ formField }) => {
  return (
    <>
      <Field name={formField.name}>
        {({ field: formikField, meta }: FieldProps) => (
          <TextField
            {...formikField}
            id={formField.name}
            placeholder={formField.placeholder || formField.label}
            type="date"
            size="small"
            InputLabelProps={{  
              shrink: true,
            }}
            fullWidth
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
          />
        )}
      </Field>
    </>
  );
};
