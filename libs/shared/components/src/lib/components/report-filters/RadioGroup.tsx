import { FC } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material';

type RadioOption = {
  value: string;
  label: string;
};

type RadioGroupProps = Omit<MuiRadioGroupProps, 'name'> & {
  name: string;
  label: string;
  options: RadioOption[];
};

export const RadioGroup: FC<RadioGroupProps> = ({ name, label, options, ...rest }) => {
  return (
    <FormControl fullWidth size="small">
      <FormLabel id={name}>{label}</FormLabel>
      <MuiRadioGroup aria-labelledby={name} name={name} {...rest}>
        {options.map((opt, index) => (
          <FormControlLabel key={index} value={opt.value} control={<Radio size="small" />} label={opt.label} />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};
