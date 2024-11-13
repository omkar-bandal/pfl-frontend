import React from "react";
import { FieldArray, Field, ErrorMessage, FieldProps } from "formik";
import { Button, TextField, Grid, IconButton, Typography } from "@mui/material";
import { FormField } from "./models";
import { CloseOutlined } from "@mui/icons-material";

interface ArrayInputProps {
  field: FormField;
}

export const ArrayInput: React.FC<ArrayInputProps> = ({ field }) => {
  return (
    <FieldArray name={field.name}>
      {({ push, remove, form }) => (
        <div>
          {form.values[field?.name].map((_: string, index: number) => (
            <Grid container direction="row" xs={12} border='1px solid #BDBDBD' borderRadius={3} marginY={1}>
              <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: 1}}>
                  <Typography variant="body1" component="div">
                    Product {index + 1}
                  </Typography>
                  <IconButton
                    color="error"
                    onClick={() => remove(index)}
                  >
                    <CloseOutlined />
                  </IconButton>
              </Grid>
              {field.subFields?.map((subField) => (
                <Grid item xs={12} sm={subField.length} padding={1}>
                  <Typography variant="caption" component="div">
                    {subField.label}
                  </Typography>
                  <Field
                    key={subField.name}
                    name={`${field.name}.${index}.${subField.name}`}
                  >
                    {({ field: formikField, meta }: FieldProps) => (
                      <TextField
                        {...formikField}
                        id={subField.name}
                        placeholder={subField.placeholder || subField.label}
                        type={subField.type}
                        size="small"
                        fullWidth
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                </Grid>
              ))}
            </Grid>
          ))}
          <Button
            type="button"
            onClick={() => push({})}
            variant="text"
            color="primary"
          >
            Add More
          </Button>
          <ErrorMessage name={field.name} component="div" />
        </div>
      )}
    </FieldArray>
  );
};

