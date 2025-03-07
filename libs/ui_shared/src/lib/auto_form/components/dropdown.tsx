import React, { ReactNode } from 'react';
import { FormControl, Grid, MenuItem, Select, SelectProps, FormHelperText, SelectChangeEvent } from '@mui/material';
import { useField } from 'formik';
import { Label } from './label';

type SelectInputProps = SelectProps & {
  isRequired: boolean;
  label: string;
  name: string;
  value: string | number | undefined | null;
  options: Array<{ label: string | number; value: string | number }> | undefined;
  noOptionsMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange?: ((event: SelectChangeEvent<unknown>, child: ReactNode) => void) | undefined | any
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export const SelectInput: React.FC<SelectInputProps> = ({
  isRequired,
  label,
  name,
  value,
  options = [],
  noOptionsMessage = "No options available",
  handleChange,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Label
          isRequired={isRequired}
          isError={meta.touched && Boolean(meta.error)}
          name={name}
          label={label} />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth error={meta.touched && Boolean(meta.error)} >
          <Select
            {...field}
            id={name}
            size="small"
            value={value || ""}
            onChange={handleChange}
            MenuProps={MenuProps}
            {...otherProps}
          >
            {options.length > 0 ? (
              options.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="" disabled>
                {noOptionsMessage}
              </MenuItem>
            )}
          </Select>
          {meta.touched && meta.error && (
            <FormHelperText>{meta.error}</FormHelperText>
          )}
        </FormControl>
      </Grid>
    </Grid>
  );
};
