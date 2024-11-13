import { Grid, TextField, TextFieldProps, Typography } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";

// Define the type for the TextInput props
type TextInputProps = TextFieldProps & {
  isRequired: boolean;
  label: string;
  name: string;
  value: string | number | Date | undefined | null;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isReadOnly?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  touched?: FormikTouched<{ [key: string]: any }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: FormikErrors<{ [key: string]: any }>;
};

export const TextInput: React.FC<TextInputProps> = ({
  isRequired,
  label,
  name,
  type,
  value,
  handleChange,
  isReadOnly,
  touched = {},
  errors = {},
  ...otherProps
}) => {
  // Ensure helperText is a string or undefined
  const getHelperText = () => {
    const error = errors[name];
    return typeof error === "string" ? error : undefined;
  };

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        {isRequired && (
          <Typography variant="body1" component="span" color="error" sx={{ fontWeight: 600 }}>
            *{" "}
          </Typography>
        )}
        <Typography variant="body2" component="span">
          {label}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          size="small"
          type={type}
          id={name}
          name={name}
          value={value ?? ""} 
          onChange={handleChange}
          InputLabelProps={{ shrink: type === "date" }}
          InputProps={{ readOnly: isReadOnly ?? false }}
          error={Boolean(touched[name] && errors[name])} 
          helperText={touched[name] && getHelperText()} 
          {...otherProps}
        />
      </Grid>
    </Grid>
  );
};
