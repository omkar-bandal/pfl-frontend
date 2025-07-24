/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useField } from 'formik';
import { Autocomplete, TextField, CircularProgress, Grid2 } from '@mui/material';
import { Label } from './label';

export interface GenericAutocompleteProps<T> {
  isRequired: boolean;
  name: string;
  label: string;
  options: T[];
  isLoading?: boolean;
  noOptionsText?: string;
  onInputChange: (value: string) => void;
  getOptionLabel: (option: T) => string;
  onOptionSelected?: (option: T) => void;
  optionValueKey?: keyof T;
}

export function FormikAutocomplete<T extends { [key: string]: any }>(props: GenericAutocompleteProps<T>) {
  const {
    isRequired,
    name,
    label,
    options,
    isLoading,
    noOptionsText,
    onInputChange,
    getOptionLabel,
    onOptionSelected,
    optionValueKey = 'id'
  } = props;
  // We now store only the id (string) in the form state.
  const [field, meta, helpers] = useField<string | null>(name);
  const { setValue } = helpers;

  // Determine the selected option from the options list using the stored id.
  const selectedOption = options.find(opt => opt[optionValueKey] === field.value) || null;

  const handleInputChange = (_: React.SyntheticEvent, newInputValue: string) => {
    onInputChange(newInputValue);
  };

  const handleChange = (_: React.SyntheticEvent, value: T | null) => {
    if (value && optionValueKey) {
      // Store only the id (not the full object)
      setValue(value[optionValueKey]);
      if (onOptionSelected) {
        onOptionSelected(value);
      }
    } else {
      setValue(null);
    }
  };

  return (
    <Grid2 container direction="column">
      <Grid2 size="auto">
        <Label
          isRequired={isRequired}
          isReadOnly={false}
          isError={meta.touched && Boolean(meta.error)}
          name={name}
          label={label} />
      </Grid2>
      <Grid2 size="auto">
        <Autocomplete
          size='small'
          value={selectedOption}
          onChange={handleChange}
          onInputChange={handleInputChange}
          options={options}
          getOptionLabel={getOptionLabel}
          isOptionEqualToValue={(option, value) => option[optionValueKey] === value[optionValueKey]}
          noOptionsText={noOptionsText}
          loading={isLoading}
          renderInput={(params) => (
            <TextField
              {...params}
              error={(meta.touched && Boolean(meta.error))}
              helperText={(meta.touched && meta.error)}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </Grid2>
    </Grid2>
  );
}
