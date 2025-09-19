import React, { memo } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, RadioGroupProps, Grid } from '@mui/material';
import { useField } from 'formik';
import { Label } from './label';

type RadioGroupInputProps = RadioGroupProps & {
  isRequired: boolean;
  label: string;
  name: string;
  value: string | boolean | undefined | null;
  alignment?: 'horizontal' | 'vertical';
  optionAlignment?: 'horizontal' | 'vertical';
  options: Array<{ label: string; value: string | number | boolean }>;
  handleChange?: any;
};

export const RadioGroupInput: React.FC<RadioGroupInputProps> = memo(
  ({
    isRequired,
    label,
    name,
    value,
    options,
    alignment,
    optionAlignment = 'horizontal',
    handleChange,
    ...otherProps
  }) => {
    const [field, meta] = useField(name);
    return (
      <Grid
        container
        direction={alignment === 'vertical' ? 'column' : 'row'}
        sx={{ flex: 1, alignItems: alignment === 'vertical' ? 'flex-start' : 'center', justifyContent: 'center' }}
      >
        <Grid item xs={12} md={alignment === 'vertical' ? 12 : 2}>
          <Label isRequired={isRequired} isError={meta.touched && Boolean(meta.error)} name={name} label={label} />
        </Grid>
        <Grid item xs={12} md={alignment === 'vertical' ? 12 : 10}>
          <FormControl component="fieldset">
            <RadioGroup
              row={optionAlignment === 'horizontal' ? true : false}
              name={name}
              value={value}
              onChange={handleChange}
              {...otherProps}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 15,
                },
              }}
            >
              {options.map((option) => (
                <FormControlLabel
                  {...field}
                  key={option.label}
                  control={<Radio />}
                  label={option.label}
                  value={option.value}
                  sx={{ fontSize: 10 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {meta.touched && Boolean(meta.error) && (
            <Typography variant="caption" component="div" color="error">
              {meta.error}
            </Typography>
          )}
        </Grid>
      </Grid>
    );
  }
);
