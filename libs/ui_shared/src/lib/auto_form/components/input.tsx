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
  errors?: FormikErrors<{[key: string]: any}> | string;
};

export const TextInput: React.FC<TextInputProps> = ({ isRequired, label, name, type, value, handleChange, isReadOnly, touched = {}, errors = {}, ...otherProps}) => {

  const getHelperText = () => {
    if (typeof errors === "string") {
      return errors; // Directly return the string error
    }
    if (errors && typeof errors === "object") {
      const fieldError = errors[name];
      return typeof fieldError === "string" ? fieldError : undefined;
    }
    return undefined; // No error
  };
  const hasError =
  touched[name] &&
  ((typeof errors === "string" && !!errors) || // Check if errors is a non-empty string
    (errors && typeof errors === "object" && typeof errors[name] === "string"));
  
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
          InputProps={{ 
            readOnly: isReadOnly ?? false, 
          }}
          error={!!hasError} 
          helperText={hasError ? getHelperText() : ""}
          sx={{
            "& .MuiOutlinedInput-root": {
              pointerEvents: isReadOnly ? "none" : "auto", 
            },
          }}
          {...otherProps}
        />
      </Grid>
    </Grid>
  );
};
