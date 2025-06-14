/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AutocompleteProps, AutocompleteValue } from '@mui/material/Autocomplete';
import { TextFieldProps } from '@mui/material/TextField';
import { AutocompleteFreeSoloValueMapping, Grid2 } from '@mui/material';
import { Label } from './label';

// Define the base type with at least an id property
interface BaseOption {
  id: string | number;
  [key: string]: any;
}

// Type for ID-only output
type IdOnlyType = { id: string | number };

// Define generic types for the component to make it flexible
interface FormikAutocompleteProps<T extends BaseOption, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false>
  extends Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput' | 'onChange'> {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  textFieldProps?: Partial<TextFieldProps>;
  customOnChange?: any;
  getOptionLabel: (option: T | AutocompleteFreeSoloValueMapping<FreeSolo>) => string;
  limitTags?: number;
  outputIdOnly?: boolean;
  isRequired?: boolean;
  selectAllOptId?: string;
}

export function MultiSelectAutocomplete<T extends BaseOption, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false>({
  name,
  label,
  placeholder,
  helperText,
  textFieldProps,
  customOnChange,
  getOptionLabel,
  limitTags = 2,
  outputIdOnly = true,
  isRequired = false,
  options,
  selectAllOptId,
  ...autocompleteProps
}: FormikAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  // Get field props from Formik
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  // Local state to handle the display value
  const [displayValue, setDisplayValue] = useState<any>(field.value);

  // Determine if there's an error to display
  const hasError = meta.touched && Boolean(meta.error);
  const errorText = meta.touched ? meta.error : '';

  // Effect to convert ID-only values to full objects on initialization and when options change
  useEffect(() => {
    if (!options || options.length === 0) return;

    // Handle initial conversion from ID-only to full objects for display
    const convertIdToFullObject = (idOnly: any): any => {
      if (!idOnly) return null;

      // Handle array of IDs (for multiple select)
      if (Array.isArray(idOnly) && options.length > 0) {
        return idOnly
          .map((item) => {
            // If already a full object or just a string (free solo), return as is
            if (typeof item !== 'object' || item === null) return item;
            if (typeof item.id === 'undefined') return item;

            // Find the matching option from options array
            const foundOption = options?.find((opt: any) => opt.id === item.id);
            return foundOption || item;
          })
          .filter(Boolean);
      }

      // Handle single ID object
      if (typeof idOnly === 'object' && idOnly !== null && typeof idOnly.id !== 'undefined') {
        const foundOption = options.find((opt: any) => opt.id === idOnly.id);
        return foundOption || idOnly;
      }

      // If it's already a string (free solo) or other format, return as is
      return idOnly;
    };

    const convertedValue = convertIdToFullObject(field.value);
    setDisplayValue(convertedValue);
  }, [field.value, options]);

  // Transform full objects to id-only objects
  const transformToIdOnly = (value: any): any => {
    if (value === null) return null;

    if (Array.isArray(value)) {
      return value.map((item) => {
        if (typeof item === 'string') return item; // Handle free solo string inputs
        return { id: item.id };
      });
    }

    if (typeof value === 'string') return value; // Handle free solo string inputs
    return value && typeof value.id !== 'undefined' ? { id: value.id } : null;
  };

  // Type-safe onChange handler using AutocompleteValue from MUI
  const handleChange = customOnChange ?  customOnChange : (_event: React.SyntheticEvent, value:  AutocompleteValue<T, true, false, false>) => {
    let finalValue: any;
    const selectAllSelected = Array.isArray(value) && value.find((v: any) => v.id === selectAllOptId);
    const allOptions = options || [];
  
    if (selectAllSelected) {
      finalValue = allOptions.filter((opt) => opt.id !== selectAllOptId);;
    } else if (Array.isArray(value)) {
      finalValue = value.filter((v: any) => v.id !== selectAllOptId);
    } else {
      finalValue = [];
    }
  
    // Cast finalValue to match AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>
    setDisplayValue(finalValue as AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>);
  
    const formikValue = outputIdOnly ? transformToIdOnly(finalValue) : finalValue;
  
    setFieldValue(name, formikValue);
    setFieldTouched(name, true, false);
  
    if (customOnChange) {
      customOnChange(formikValue);
    }
  };

  return (
    <Grid2 container direction="column">
      <Grid2 size={12}>
        <Label name={name} label={label || ''} isError={hasError} isRequired={isRequired} />
      </Grid2>
      <Grid2 size={12}>
        <Autocomplete
          {...autocompleteProps}
          fullWidth
          size="small"
          options={options || []}
          multiple={autocompleteProps.multiple}
          limitTags={limitTags}
          id={`autocomplete-${name}`}
          value={displayValue}
          onChange={handleChange}
          onBlur={() => setFieldTouched(name, true)}
          getOptionLabel={(option: any) => {
            // Handle null or undefined
            if (!option) return '';

            // Handle string inputs (from free solo)
            if (typeof option === 'string') return option;

            try {
              // Use the provided getOptionLabel function
              return getOptionLabel(option as T);
            } catch (error) {
              // Fallback in case of errors
              console.warn('Error in getOptionLabel for', option);
              return option.id?.toString() || '';
            }
          }}
          renderInput={(params) => (
            <TextField {...params} {...textFieldProps} name={name} placeholder={placeholder} error={hasError} helperText={hasError ? errorText : helperText} />
          )}
        />
      </Grid2>
    </Grid2>
  );
}
