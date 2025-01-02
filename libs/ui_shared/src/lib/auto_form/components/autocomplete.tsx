import React from 'react';
import { Autocomplete, TextField, Grid, Typography, createFilterOptions, FilterOptionsState } from '@mui/material';
import { useField } from 'formik';

type AutoCompleteOption = {
  label: string;
  value: string;
};

type AutoCompleteInputProps = {
  isRequired?: boolean;
  label: string;
  name: string;
  options: AutoCompleteOption[];
  value?: AutoCompleteOption | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleBlur?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange?: (event: any, newValue: AutoCompleteOption | null) => void;
};

export const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  isRequired = false,
  label,
  name,
  options,
  handleChange,
  handleBlur,
}) => {
  const [field, meta] = useField(name);
  const filter = createFilterOptions<AutoCompleteOption>()
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="body2" component="label" htmlFor={name}>
          {isRequired && (
            <Typography variant="body2" component="span" color="error" sx={{ fontWeight: 600 }}>
              *
            </Typography>
          )}
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Autocomplete
          id={name}
          size="small"
          fullWidth
          options={options}
          getOptionLabel={(option) => option.label || ''}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          value={options.find((option) => option.value === field.value) || null}
          onChange={handleChange}
          onBlur={handleBlur}
          filterOptions={(options: AutoCompleteOption[], params:FilterOptionsState<AutoCompleteOption> ) => {
            const filtered = filter(options, params);
            if (params.inputValue !== '') {
              filtered.push({
               value: params.inputValue,
               label: `Add ${params.inputValue}`
              });
            }
            return filtered;
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              {...field}
              name={name}
              variant="outlined"
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error ? meta.error : ''}
            />
          )}
          renderOption={(props, option) => (
            <li {...props} key={option.value}>
              {option.label}
            </li>
          )}
        />
      </Grid>
    </Grid>
  );
};