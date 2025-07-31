import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'

type DateInputPros = Omit<TextFieldProps, 'name' | 'type' | 'id'> & {
  name: string;
}
export const DateInput: React.FC<DateInputPros> = ({ name, ...rest }) => {
  return (
    <TextField
      size="small"
      autoComplete="off"
      type='date'
      id={name}
      name={name}
      InputLabelProps={{ shrink: true }}
      {...rest}
    />
  )
}
