import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type DateInputPros = Omit<TextFieldProps, 'name' | 'type' | 'id' | 'value'> & {
  name: string;
  value: string;
};
export const DateInput: React.FC<DateInputPros> = ({ name, value, ...rest }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      type="date"
      id={name}
      name={name}
      value={value}
      InputLabelProps={{ shrink: true }}
      {...rest}
    />
  );
};
