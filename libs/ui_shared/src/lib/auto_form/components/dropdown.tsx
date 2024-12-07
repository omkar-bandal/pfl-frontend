import React, { ReactNode } from 'react';
import { FormControl, Grid, MenuItem, Select, Typography, SelectProps, FormHelperText, SelectChangeEvent } from '@mui/material';
import { FormikErrors, FormikTouched, useField } from 'formik';

type SelectInputProps = SelectProps & {
  isRequired: boolean;
  label: string;
  name: string;
  value: string | number | undefined | null;
  options: Array<{ label: string | number; value: string | number }> | undefined;
  handleChange?: ((event: SelectChangeEvent<unknown>, child: ReactNode) => void) | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  touched?: FormikTouched<{ [key: string]: any }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: FormikErrors<{ [key: string]: any }>;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const SelectInput: React.FC<SelectInputProps> = ({
  isRequired,
  label,
  name,
  value,
  options,
  handleChange,
  touched = {},
  errors = {},
  ...otherProps
}) => {
  // Ensure helperText is a string or undefined
  // const getHelperText = () => {
  //   const error = errors[name];
  //   return typeof error === 'string' ? error : undefined;
  // };
  const [field, meta] = useField(name);
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        {isRequired && (
          <Typography variant="body1" component="span" color="error" sx={{ fontWeight: 600 }}>
            *{' '}
          </Typography>
        )}
        <Typography variant="body2" component="span">
          {label}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth error={meta.touched && Boolean(meta.error)} {...field}>
          <Select
            id={name}
            name={name}
            size="small"
            value={value ?? ''}
            onChange={handleChange}
            MenuProps={MenuProps}
            {...otherProps}
          >
            {options ? (options.map((option, index: number) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))) : (<MenuItem value="">
              {""}
            </MenuItem>)}
          </Select>
          {/* Display error message */}
          {meta.touched && Boolean(meta.error) && (
            <FormHelperText>{meta.error}</FormHelperText>
          )}
        </FormControl>
      </Grid>
    </Grid>
  );
};
