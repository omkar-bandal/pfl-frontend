import React, { ChangeEvent, memo } from 'react';
import { useField, useFormikContext } from 'formik';
import { Grid, TextField, TextFieldProps, Typography } from '@mui/material';
import { Label } from './label';
import { toast } from '../notification/ToastProvider';
type TextInputProps = TextFieldProps & {
  isRequired?: boolean;
  label: string;
  name: string;
  value?: string | number | Date | null;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isReadOnly?: boolean;
  infoTipText?: string;
};

export const TextInput: React.FC<TextInputProps> = memo(
  ({
    isRequired = false,
    label,
    name,
    type = 'text',
    value,
    handleChange,
    isReadOnly = false,
    infoTipText,
    ...otherProps
  }) => {
    const { values, setFieldValue } = useFormikContext<Record<string, string | number | null>>();
    const [field, meta] = useField(name);

    // Determine controlled value from Formik or provided prop
    const inputValue = value ?? values[name] ?? '';

    // Handle change to avoid unnecessary rerenders
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(name, event.target.value);
      handleChange?.(event);
    };

    return (
      <Grid container direction="column">
        {/* Label Section */}
        <Grid item xs={12}>
          <Typography variant="subtitle2">
            <Label
              isRequired={isRequired}
              isReadOnly={isReadOnly}
              isError={meta.touched && Boolean(meta.error)}
              name={name}
              label={label}
              infoTipText={infoTipText}
            />
          </Typography>
        </Grid>

        {/* Input Field Section */}
        <Grid item xs={12}>
          <TextField
            {...field}
            fullWidth
            size="small"
            autoComplete="off"
            type={type}
            id={name}
            name={name}
            value={inputValue}
            onChange={onChangeHandler}
            disabled={isReadOnly}
            InputLabelProps={{ shrink: type === 'date' }}
            InputProps={{
              readOnly: isReadOnly,
            }}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error ? meta.error : ''}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                toast.error('Enter key pressed in input, but form not submitted.');
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                pointerEvents: isReadOnly ? 'none' : 'auto',
              },
              '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                display: 'none',
              },
              '& input[type=number]': {
                MozAppearance: 'textfield',
              },
            }}
            {...otherProps}
          />
        </Grid>
      </Grid>
    );
  }
);
