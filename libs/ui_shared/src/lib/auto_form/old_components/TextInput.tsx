import { TextField } from "@mui/material";
import { Field, FieldProps } from "formik";
import { FormField } from "./models";

type TextInputProp = {
  formField: FormField;
};
export const TexteInput: React.FC<TextInputProp> = ({ formField }) => {
  return (
      <Field name={formField.name}>
        {({ field: formikField, meta }: FieldProps) => (
          <TextField
            {...formikField}
            id={formField.name}
            placeholder={formField.placeholder || formField.label}
            type={formField.type}
            size="small"
            fullWidth
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
          />
        )}
      </Field>
  );
};
