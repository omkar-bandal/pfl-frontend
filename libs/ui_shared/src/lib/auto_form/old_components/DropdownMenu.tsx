import { useState } from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { FormField } from "../models";
import { Field, FieldProps } from "formik";

type DropdownMenuProp = {
  formField: FormField;
};
export const DropdownMenu: React.FC<DropdownMenuProp> = ({ formField }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Field name={formField.name}>
        {({ field: formikField, meta }: FieldProps) => (
          <>
            <FormControl sx={{width: '100%'}}>
              <Select
                {...formikField}
                id={formField.name}
                open={open}
                defaultValue=""
                onClose={handleClose}
                onOpen={handleOpen}
                size="small"
                fullWidth
              >
                {formField.options?.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {meta.touched && meta.error && (
              <Typography variant="caption" color="error">
                {meta.error}
              </Typography>
            )}
          </>
        )}
      </Field>
    </>
  );
};
