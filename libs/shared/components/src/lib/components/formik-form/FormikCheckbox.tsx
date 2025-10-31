import { memo } from 'react';
import { useField, FieldConfig } from 'formik';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Typography,
} from '@mui/material';

export interface CheckboxInputProps {
  name: string;
  label?: string;
  isRequired?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  fieldConfig?: Omit<FieldConfig, 'name'>;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = memo(
  ({
    name,
    label,
    isRequired = false,
    disabled = false,
    checked: controlledChecked,
    onChange: controlledOnChange,
  }) => {
    // bind to Formik
    const [field, meta, helpers] = useField<boolean>({
      name,
      type: 'checkbox',
    });

    const formikChecked = !!field.value;
    // Are we in “controlled” mode?
    const isControlled =
      controlledChecked !== undefined && controlledOnChange !== undefined;
    // decide final checked state
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const finalChecked = isControlled ? controlledChecked! : formikChecked;

    // unified change handler
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      newChecked: boolean
    ) => {
      if (!isControlled) {
        // update Formik
        helpers.setValue(newChecked);
      }
      // always call your handler if provided
      controlledOnChange?.(e, newChecked);
    };

    const showError = Boolean(meta.touched && meta.error);

    return (
      <FormControl error={showError} component="fieldset" variant="standard">
        <FormControlLabel
          control={
            <Checkbox
              name={name}
              disabled={disabled}
              checked={finalChecked}
              onChange={handleChange}
              onBlur={field.onBlur}
              sx={{ml: 3}}
            />
          }
          label={ label ? 
            (<Typography variant="body2" component="span">
              {isRequired && (
                <Typography
                  component="span"
                  variant="body2"
                  color="error"
                  sx={{ fontWeight: 600, mr: 0.5}}
                >
                  *
                </Typography>
              )}
              {label}
            </Typography>) : null
          }
          sx={{height: 25}}
        />
        {showError && <FormHelperText>{meta.error}</FormHelperText>}
      </FormControl>
    );
  }
);
