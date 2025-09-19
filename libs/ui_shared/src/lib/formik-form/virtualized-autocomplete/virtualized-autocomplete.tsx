import React from 'react';
import { Autocomplete, TextField, Grid2, CircularProgress } from '@mui/material';
import { useField } from 'formik';
import { debounce } from '@prime-fresh/shared/modules';
import { VirtualizedAutocompleteProps } from './virtualized-autocomplete.type';
import { VirtualListbox } from './virtualized-listbox';
import { Label } from '../label';

export function VirtualizedAutocomplete<T extends { [key: string]: any }>(props: VirtualizedAutocompleteProps<T>) {
  const {
    isRequired = false,
    isReadOnly = false,
    name,
    label,
    options,
    noOptionsText = 'No options available',
    isFetching,
    isLoading,
    page = 1,
    totalPages = 1,
    getOptionLabel,
    onOptionSelected,
    optionValueKey = 'id',
    rowHeight = 40,
    visibleRows = 6,
    handleInputChange,
    handleNextPage,
    handlePrevPage,
  } = props;

  const [field, meta, helpers] = useField<string | null>(name);
  const { setValue } = helpers;
  const selectedOption = options.find((opt) => opt[optionValueKey] === field.value) || null;
  const windowHeight = rowHeight * visibleRows;

  const handleChange = (_: React.SyntheticEvent, value: T | null) => {
    if (value && optionValueKey) {
      // Set the field value
      setValue(value[optionValueKey], true); // Added 'true' to trigger validation
      if (onOptionSelected) {
        onOptionSelected(value);
      }
    } else {
      setValue(null, true); // Added 'true' to trigger validation
    }
    // Mark field as touched
    helpers.setTouched(true, false);
  };

  const handleScroll = React.useMemo(
    () =>
      debounce(({ scrollOffset }: { scrollOffset: number }) => {
        const scrollTop = scrollOffset;
        const scrollHeight = options.length * rowHeight;
        const clientHeight = windowHeight;

        if (scrollTop + clientHeight >= scrollHeight - rowHeight && !isFetching && page < totalPages) {
          handleNextPage();
        }
        if (scrollTop <= rowHeight && !isFetching && page > 1) {
          handlePrevPage();
        }
      }, 150),
    [options.length, rowHeight, windowHeight, isFetching, page, totalPages]
  );

  const ListboxComponent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }
  >((props, ref) => (
    <VirtualListbox
      ref={ref}
      items={React.Children.toArray(props.children).filter((child): child is React.ReactElement =>
        React.isValidElement(child)
      )}
      windowHeight={windowHeight}
      rowHeight={rowHeight}
      isLoading={isLoading}
      noOptionsText={noOptionsText}
      onScroll={handleScroll}
    />
  ));

  return (
    <Grid2 container direction="column">
      <Grid2>
        <Label
          isRequired={isRequired}
          isReadOnly={isReadOnly}
          isError={meta.touched && Boolean(meta.error)}
          name={name}
          label={label}
        />
      </Grid2>
      <Grid2>
        <Autocomplete
          id={name}
          size="small"
          value={selectedOption}
          onChange={handleChange}
          onInputChange={handleInputChange}
          options={options}
          getOptionLabel={getOptionLabel}
          isOptionEqualToValue={(option, value) => option[optionValueKey] === value[optionValueKey]}
          noOptionsText={noOptionsText}
          loading={isFetching || isLoading}
          disabled={isReadOnly}
          filterOptions={(x) => x}
          blurOnSelect // Add this to close popup on selection
          selectOnFocus // Add this to allow selection on focus
          clearOnBlur={false}
          renderInput={(params) => (
            <TextField
              {...params}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched ? meta.error : isFetching ? 'Loading more...' : ''}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading && <CircularProgress color="inherit" size={20} />}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          ListboxComponent={ListboxComponent}
          componentsProps={{
            paper: {
              sx: {
                overflow: 'hidden',
                '& .MuiAutocomplete-listbox': {
                  overflow: 'hidden',
                },
              },
            },
          }}
        />
      </Grid2>
    </Grid2>
  );
}
