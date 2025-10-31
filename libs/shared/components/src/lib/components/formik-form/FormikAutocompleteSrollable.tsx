/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo } from 'react';
import { useField } from 'formik';
import { Label } from './FormikLabel';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { Autocomplete, CircularProgress, TextField, Grid2, Typography, Box, useTheme } from '@mui/material';

export type Option = {
  label: string;
  value: string;
};

export interface SrollableAutocompleteProps<T> {
  isRequired?: boolean;
  isReadOnly?: boolean;
  name: string;
  label: string;
  options: T[];
  isLoading?: boolean;
  isFetching?: boolean;
  noOptionsText?: string;
  page: number;
  totalPages: number;
  getOptionLabel: (option: T) => string;
  onOptionSelected?: (option: T) => void;
  optionValueKey?: keyof T;
  rowHeight?: number;
  visibleRows?: number;
  handleInputChange: (event: React.SyntheticEvent, value: string, reason: 'input' | 'reset' | 'clear') => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleOpenList: () => void;
}

export function FormikScrollableAutocomplete<T extends { [key: string]: any }>(props: SrollableAutocompleteProps<T>) {
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
    rowHeight = 30,
    visibleRows = 5,
    handleInputChange,
    handleNextPage,
    handlePrevPage,
    handleOpenList,
  } = props;
  const theme = useTheme();
  const [field, meta, helpers] = useField<string | null>(name);
  const { setValue } = helpers;

  console.log('Options:', options);
  const selectedOption = options.find((opt) => opt[optionValueKey] === field.value) || null;
  console.log('Selected Option:', selectedOption);

  // Memoize computed values
  const { virtualHeight, windowHeight } = useMemo(() => {
    const vHeight = options.length * rowHeight;
    const wHeight = rowHeight * visibleRows;
    return {
      virtualHeight: vHeight,
      windowHeight: wHeight,
    };
  }, [options, rowHeight, visibleRows]);

  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(
    ({ scrollOffset, scrollDirection }: { scrollOffset: number; scrollDirection: string }) => {
      // Only handle pagination, not search-related API calls
      if (
        scrollDirection === 'forward' &&
        scrollOffset + windowHeight >= virtualHeight - 1 &&
        !isFetching &&
        page < totalPages
      ) {
        handleNextPage();
      }
      if (scrollDirection === 'backward' && scrollOffset <= 1 && !isFetching && page > 1) {
        handlePrevPage();
      }
    },
    [windowHeight, virtualHeight, isFetching, page, totalPages, handleNextPage, handlePrevPage]
  );

  // Memoize the row renderer
  const renderRow = useCallback((props: ListChildComponentProps) => {
    const { index, style, data } = props;
    return React.cloneElement(data[index] as React.ReactElement, {
      style: { ...style, top: (style.top as number) + 0 },
    });
  }, []);

  // Handle option selection (this should NOT trigger search API calls)
  const handleChange = useCallback(
    (_: React.SyntheticEvent, value: T | null) => {
      if (value && optionValueKey) {
        setValue(value[optionValueKey]);
        if (onOptionSelected) {
          onOptionSelected(value);
        }
      } else {
        setValue(null);
      }
    },
    [setValue, optionValueKey, onOptionSelected]
  );

  // Separate input change handler to avoid API calls on selection
  const handleInputChangeWrapper = useCallback(
    (event: React.SyntheticEvent, value: string, reason: string) => {
      // Only trigger API calls for actual typing, not for selection
      if (reason === 'input') {
        handleInputChange(event, value, reason);
      }
      // Don't call handleInputChange for 'reset' or 'clear' reasons
    },
    [handleInputChange]
  );

  // Memoize ListboxComponent
  const ListboxComponent = useMemo(
    () =>
      React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(function ListboxComponent(
        { children, ...other },
        ref
      ) {
        const items = React.Children.toArray(children);
        return (
          <div ref={ref} role="listbox" {...other}>
            <FixedSizeList
              height={windowHeight}
              itemCount={items.length}
              itemSize={rowHeight}
              width="100%"
              itemData={items}
              outerElementType="ul"
              onScroll={handleScroll}
            >
              {renderRow}
            </FixedSizeList>
          </div>
        );
      }),
    [windowHeight, rowHeight, handleScroll, renderRow]
  );

  return (
    <Grid2 container direction="column">
      <Grid2 size="auto">
        <Label
          isRequired={isRequired}
          isReadOnly={isReadOnly}
          isError={meta.touched && Boolean(meta.error)}
          name={name}
          label={label}
        />
      </Grid2>
      <Grid2 size="auto">
        <Autocomplete
          size="small"
          value={selectedOption}
          options={options}
          getOptionLabel={getOptionLabel}
          isOptionEqualToValue={(option, value) => option[optionValueKey] === value[optionValueKey]}
          noOptionsText={noOptionsText}
          filterOptions={(x) => x}
          loading={isFetching || isLoading}
          disabled={isReadOnly}
          ListboxComponent={ListboxComponent}
          onOpen={handleOpenList}
          onChange={handleChange}
          onInputChange={(event, newInput, reason) => {
            if (!handleInputChange) return;
            if (reason === 'input' || reason === 'clear') {
              handleInputChange(event, newInput, reason);
            }
          }}
          renderOption={(props, option, { selected }) => {
            const label = getOptionLabel(option);
            return (
              <li {...props} style={{ ...props.style, padding: 1 }}>
                <Box
                  sx={{
                    width: `100%`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    paddingY: 0.5,
                    paddingX: 0.5,
                    background: selected ? theme.palette.action.selected : 'transparent',
                    transition: 'background 150ms ease',
                    cursor: 'pointer',
                    borderBottom: `1px solid #DCDCDC`,
                  }}
                >
                  <Typography noWrap variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                    {label}
                  </Typography>
                </Box>
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
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
