/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AutocompleteValue } from '@mui/material/Autocomplete';
import { TextFieldProps } from '@mui/material/TextField';
import { CircularProgress, Grid2 } from '@mui/material';
import { Label, LabelProps } from './label';

// Define the base type with at least an id property
export interface OptionType {
  id: string | number;
  [key: string]: any;
}

// Define generic types for the component to make it flexible
interface FormikAutocompleteProps<T extends OptionType> extends Omit<LabelProps, 'isReadOnly' | 'isError'> {
  placeholder?: string;
  helperText?: string;
  textFieldProps?: Partial<TextFieldProps>;
  options: T[];
  getOptionLabel: (option: T) => string;
  limitTags?: number;
  isLoading?: boolean;
  selectAllId?: string;
}

export function MultiSelectAutocomplete<T extends OptionType>(props: FormikAutocompleteProps<T>) {
  const {
    name,
    options,
    getOptionLabel,
    helperText,
    isLoading,
    isRequired,
    label,
    limitTags,
    selectAllId,
    infoTipText
  } = props;
  // Get field props from Formik
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  // Local state to handle the display value
  const [selectedOptions, setSelectedOptions] = useState<T[]>([]);

  // Determine if there's an error to display
  const hasError = meta.touched && Boolean(meta.error);
  const errorText = meta.touched ? meta.error : '';

  // Effect to convert ID-only values to full objects on initialization and when options change
  useEffect(() => {
    if (!Array.isArray(field.value)) return;

    const fullOptions = field.value
      .map((id) => options.find((opt) => opt.id === id))
      .filter((opt): opt is T => Boolean(opt));

    setSelectedOptions(fullOptions);
  }, [field.value, options]);


  // Type-safe onChange handler using AutocompleteValue from MUI
  const handleChange = (_: React.SyntheticEvent, value: AutocompleteValue<T, true, false, false>) => {
    let finalOptions = value;

    // Handle "Select All" logic
    if (selectAllId && value.some((v) => v.id === selectAllId)) {
      finalOptions = options.filter((opt) => opt.id !== selectAllId);
    } else {
      finalOptions = value.filter((v) => v.id !== selectAllId);
    }

    const ids = finalOptions.map((v) => v.id);
    setSelectedOptions(finalOptions);
    setFieldValue(name, ids);
    setFieldTouched(name, true);
  };

  return (
    <Grid2 container direction="column">
      <Grid2 size={12}>
        <Label name={name} label={label || ''} isError={hasError} isRequired={isRequired} infoTipText={infoTipText} />
      </Grid2>
      <Grid2 size={12}>
        <Autocomplete
          id={name}
          fullWidth
          multiple
          limitTags={limitTags}
          size="small"
          options={options}
          value={selectedOptions}
          onChange={handleChange}
          onBlur={() => setFieldTouched(name, true)}
          getOptionLabel={(option) => getOptionLabel(option)}
          loading={isLoading}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              error={hasError}
              helperText={hasError ? errorText : helperText}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading && <CircularProgress size={18} />}
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
