import React from 'react';
import { Autocomplete, CircularProgress, TextField, Popper } from '@mui/material';

export type Option = {
  label: string;
  value: string;
};

export interface SrollableAutocompleteProps {
  label: string;
  value: Option | null;
  options: Option[];
  loading?: boolean;
  onChange: (event: React.SyntheticEvent, newValue: Option | null) => void;
  onScrollEnd?: () => void; // Optional callback when the list scrolls to the end
}

export const SrollableAutocomplete: React.FC<SrollableAutocompleteProps> = ({
  label,
  value,
  options,
  loading = false,
  onChange,
  onScrollEnd,
}) => {
  // Create a ref callback to detect when the last option is rendered.
  const lastOptionRef = React.useCallback(
    (node: HTMLLIElement | null) => {
      if (loading) return; // Don't trigger if still loading
      if (node && onScrollEnd) {
        onScrollEnd();
      }
    },
    [loading, onScrollEnd]
  );

  return (
    <Autocomplete
      openOnFocus
      fullWidth
      size="small"
      options={options || []}
      getOptionLabel={(option) => option.label}
      value={value}
      onChange={onChange}
      // Disable built-in filtering to let the server control filtering
      filterOptions={(opts) => opts}
      noOptionsText="No options available"
      PopperComponent={(props) => <Popper {...props} style={{ zIndex: 1300 }} />}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      renderOption={(props, option, { index }) => {
        // If this is the last option in the list, attach the ref to trigger onScrollEnd
        const refProps = index === options.length - 1 && onScrollEnd ? { ref: lastOptionRef } : {};
        return (
          <li {...props} {...refProps} key={option.value}>
            {option.label}
          </li>
        );
      }}
    />
  );
};

