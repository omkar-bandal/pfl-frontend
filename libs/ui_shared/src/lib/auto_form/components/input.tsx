import { Grid, TextField, TextFieldProps, Typography } from "@mui/material";
import { useField } from "formik";
import { ChangeEvent } from "react";

// Define the type for the TextInput props
type TextInputProps = TextFieldProps & {
  isRequired: boolean;
  label: string;
  name: string;
  value: string | number | Date | undefined | null ;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isReadOnly?: boolean;
};

export const TextInput: React.FC<TextInputProps> = ({ isRequired, label, name, type, value, handleChange, isReadOnly, ...otherProps}) => {
const [field, meta] = useField(name);
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
        {...field}
          fullWidth
          size="small"
          autoComplete="off"
          autoCorrect="off"
          type={type}
          id={name}
          name={name}
          value={value ?? ""} 
          onChange={handleChange}
          InputLabelProps={{ shrink: type === "date" }}
          InputProps={{ 
            readOnly: isReadOnly ?? false, 
          }}
          error={meta.touched && Boolean(meta.error)} 
          helperText={meta.touched && meta.error? meta.error : ""} 
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
