/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react';
import { useField } from 'formik';
import { Label } from './FormikLabel';
import { FormControl, Grid, MenuItem, Select, SelectProps, FormHelperText, SelectChangeEvent } from '@mui/material';

type SelectInputProps = SelectProps & {
  isRequired: boolean;
  label: string;
  name: string;
  value: string | number | undefined | null;
  options: Array<{ label: string | number; value: string | number }> | Array<string> | undefined;
  noOptionsMessage?: string;
  handleChange?: ((event: SelectChangeEvent<unknown>) => void) | undefined | any;
  disable? : boolean;
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

export const SelectInput: React.FC<SelectInputProps> = memo(({
  isRequired,
  label,
  name,
  value,
  options = [],
  noOptionsMessage = "No options available",
  handleChange,
  disable = false,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const menuOptions = options.every(opt => typeof opt === 'string') ? options.map(opt => ({value: opt, label: opt})) : options;
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Label
          isRequired={isRequired}
          isReadOnly={disable}
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
            MenuProps={MenuProps}
            value={value || ""}
            onChange={handleChange}
            disabled={disable}
            sx={{
              "& .MuiOutlinedInput-root": {
                pointerEvents: disable ? "none" : "auto",
              },
            }}
            {...otherProps}
          >
            {menuOptions.length > 0 ? (
              menuOptions.map((option, index) => (
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
});
