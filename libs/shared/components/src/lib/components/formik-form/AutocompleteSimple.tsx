import React, { memo } from 'react';
import { useField, useFormikContext } from 'formik';
import { Label, LabelProps } from './FormikLabel';
import { Autocomplete, createFilterOptions, Grid2, TextField, Typography } from '@mui/material';

type AutoCompleteOption = {
  label: string;
  value: string;
};

type AutoCompleteInputProps = Omit<LabelProps, 'isReadOnly' | 'isError'> & {
  multipleSelect?: boolean;
  loading?: boolean;
  options: AutoCompleteOption[];
  value?: AutoCompleteOption | null;
  handleBlur?: any;
  handleChange?: (event: React.SyntheticEvent, newValue: AutoCompleteOption | string | null) => void;
};

export const AutoCompleteInput: React.FC<AutoCompleteInputProps> = memo(
  ({ isRequired = false, label, name, loading = false, options = [], handleChange, handleBlur, infoTipText }) => {
    const [field, meta] = useField(name);
    const { setFieldValue } = useFormikContext();
    const filter = createFilterOptions<AutoCompleteOption>();

    return (
      <Grid2 container direction="column">
        <Grid2 size={{ xs: 12 }}>
          <Label
            isRequired={isRequired}
            isReadOnly={false}
            isError={meta.touched && Boolean(meta.error)}
            name={name}
            label={label}
            infoTipText={infoTipText}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <Autocomplete
            id={name}
            size="small"
            fullWidth
            loading={loading}
            options={options}
            getOptionLabel={(option) => (typeof option !== 'string' ? option.label : option)}
            isOptionEqualToValue={(option, value) => option?.value === value?.value}
            value={options.find((option) => option.value === field.value) || null}
            onChange={(event, newValue) => {
              if (handleChange) {
                handleChange(event, newValue);
              } else {
                if (newValue !== null) {
                  if (typeof newValue === 'string') setFieldValue(name, null);
                  else {
                    setFieldValue(name, newValue.value);
                  }
                } else setFieldValue(name, null);
              }
            }}
            onBlur={handleBlur}
            filterOptions={(opts, params) => {
              const filtered = filter(opts, params);
              if (params.inputValue) {
                filtered.push({
                  value: '',
                  label: `Add other`,
                });
              }
              return filtered;
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                {...field}
                variant="outlined"
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error ? meta.error : ''}
              />
            )}
            renderOption={(props, option) => (
              <li {...props} key={option.value}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '4px 8px', cursor: 'pointer' }}>
                  <Typography
                    variant="body2"
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                  >
                    {option.label}
                  </Typography>
                </div>
              </li>
            )}
          />
        </Grid2>
      </Grid2>
    );
  }
);
