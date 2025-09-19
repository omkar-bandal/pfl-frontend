/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  SelectChangeEvent,
  SelectProps as MuiSelectProps,
  Typography,
  Box,
} from '@mui/material';

interface Option {
  label: string;
  value: string | number;
}

// CustomSelectProps now extends SelectProps without generics
interface SelectProps extends Omit<MuiSelectProps, 'onChange'> {
  name: string;
  label: string;
  value: string | number;
  options?: Option[] | null;
  onChange: (event: SelectChangeEvent<any>) => void;
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  value,
  options = [],
  onChange,
  disabled,
  ...rest
}) => {
  const safeOptions = Array.isArray(options) ? options : [];

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth disabled={disabled}>
      <InputLabel id={`${name}-label`} sx={{ fontSize: '14px' }}>
        {label}
      </InputLabel>
      <MuiSelect
        variant='outlined'
        labelId={`${name}-label`}
        id={`${name}-select`}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        size="small"
        sx={{
          height: '40px',
          fontSize: '14px',
          '& .MuiSelect-select': { padding: '6px 10px' },
        }}
        disabled={disabled}
        {...rest}
      >
        {safeOptions.length > 0 ? (
          safeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value} sx={{ fontSize: '14px' }}>
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="" disabled>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <Typography variant="body2" color="textSecondary">
                No options found
              </Typography>
            </Box>
          </MenuItem>
        )}
      </MuiSelect>
    </FormControl>
  );
};

