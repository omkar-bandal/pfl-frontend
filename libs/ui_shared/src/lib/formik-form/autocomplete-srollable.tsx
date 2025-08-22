/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Autocomplete, CircularProgress, TextField, Grid2 } from '@mui/material';
import { nextPage, prevPage, queryParamsState, setSearchText, useAppDispatch, useAppSelector } from '@prime-fresh/modules';
import { useField } from 'formik';
import { Label } from './label';
import { debounce } from '@prime-fresh/shared/modules';
import { FixedSizeList, ListChildComponentProps, } from 'react-window';

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
  totalPages: number;
  getOptionLabel: (option: T) => string;
  onOptionSelected?: (option: T) => void;
  optionValueKey?: keyof T;
}

export function SrollableAutocomplete<T extends { [key: string]: any }>(props: SrollableAutocompleteProps<T>) {
  const {
    isRequired = false,
    isReadOnly = false,
    name,
    label,
    options,
    noOptionsText = 'No options available',
    isFetching,
    isLoading,
    totalPages = 1,
    getOptionLabel,
    onOptionSelected,
    optionValueKey = 'id',
  } = props;

  const [field, meta, helpers] = useField<string | null>(name);
  const { setValue } = helpers;
  const dispatch = useAppDispatch();
  const { page } = useAppSelector(queryParamsState);
  // Determine the selected option from the options list using the stored id.
  const selectedOption = options.find(opt => opt[optionValueKey] === field.value) || null;

  const handleInputChange = (_: React.SyntheticEvent, newInputValue: string) => {
    debounce(() => {
      dispatch(setSearchText(newInputValue));
    }, 2000)
  }

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
  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const listboxNode = event.currentTarget;
    const nearBottom =
      listboxNode.scrollTop + listboxNode.clientHeight >=
      listboxNode.scrollHeight - 1;

    if (
      nearBottom &&
      !isFetching &&
      page < totalPages
    ) {
      dispatch(nextPage());
    }
  };
  return (
    <Grid2 container direction="column">
      <Grid2 size="auto">
        <Label
          isRequired={isRequired}
          isReadOnly={isReadOnly}
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
          loading={isFetching || isLoading}
          disabled={isReadOnly}
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
          ListboxProps={{
            onScroll: handleScroll,
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export interface NonFormikAutocompleteProps<
  T extends Record<string, any>,
  K extends keyof T = keyof T
> {
  name: string;
  label: string;
  value: T[K] | null;
  onChange: (id: T[K] | null) => void;
  options: T[];
  getOptionLabel: (option: T) => string;
  optionValueKey: K;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isLoading?: boolean;
  isFetching?: boolean;
  totalPages?: number;
  noOptionsText?: string;
  error?: boolean;
  helperText?: string;
  rowHeight?: number;
  visibleRows?: number;
}

export function NonFormikAutocomplete<
  T extends Record<string, any>,
  K extends keyof T = keyof T
>(props: NonFormikAutocompleteProps<T, K>) {
  const {
    name,
    label,
    value,
    onChange,
    options,
    getOptionLabel,
    optionValueKey,
    isRequired = false,
    isReadOnly = false,
    isLoading = false,
    isFetching = false,
    totalPages = 1,
    noOptionsText = 'No options available',
    error = false,
    helperText = '',
    rowHeight = 30,
    visibleRows = 5,
  } = props;
  const dispatch = useAppDispatch();
  const { page } = useAppSelector(queryParamsState);

  // find the object matching the current ID
  const selectedObject = options.find(item => item[optionValueKey] === value) || null;
  const debouncedInputChange = React.useCallback(
    debounce((value: string) => {
      dispatch(setSearchText(value));
    }, 1000),
    []
  );
  const handleInputChange = (_: any, newInput: string) => {
    debouncedInputChange(newInput)
  };

  // const handleScroll = (e: React.UIEvent<HTMLElement>) => {
  //   const node = e.currentTarget;
  //   if (
  //     node.scrollTop + node.clientHeight >= node.scrollHeight - 1 &&
  //     !isFetching &&
  //     page < totalPages
  //   ) {
  //     dispatch(nextPage());
  //   }
  //   if (
  //     node.scrollTop <= 1 &&
  //     !isFetching &&
  //     page > 1
  //   ) {
  //     dispatch(prevPage()); // You need to define a prevPage() action if not already
  //   }
  // };
  // total virtual height in px
  const virtualHeight = options.length * rowHeight;
  // visible window height in px
  const windowHeight = rowHeight * visibleRows;

  // Renders each <li> passed in via children
  const renderRow = (props: ListChildComponentProps) => {
    const { index, style, data } = props;
    // Clone the original <li> with our computed style
    return React.cloneElement(data[index] as React.ReactElement, {
      style: { ...style, top: (style.top as number) + 0 },
    });
  };

  // Single-scroll ListboxComponent
  const ListboxComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(
    function ListboxComponent({ children, ...other }, ref) {
      // MUI passes an array of <li> elements as children
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
            onScroll={({ scrollOffset, scrollDirection }) => {
              // when scrolled to bottom of virtual list
              if (
                scrollDirection === 'forward' &&
                scrollOffset + windowHeight >= virtualHeight - 1 &&
                !isFetching &&
                page < totalPages
              ) {
                dispatch(nextPage());
              }
              if (scrollDirection === 'backward' && scrollOffset <= 1 && !isFetching) {
                dispatch(prevPage());
              }
            }}
          >
            {renderRow}
          </FixedSizeList>
        </div>
      );
    }
  );

  return (
    <Grid2 container size={12} columnSpacing={1}>
      <Grid2 size={12}>
        <Label
          name={name}
          label={label}
          isRequired={isRequired}
          isReadOnly={isReadOnly}
          isError={error}
        />
      </Grid2>
      <Grid2 size={12}>
        <Autocomplete
          fullWidth
          size="small"
          value={selectedObject}
          onChange={(_, obj) => {
            if (obj) onChange(obj[optionValueKey]);
            else onChange(null);
          }}
          onInputChange={handleInputChange}
          options={options}
          getOptionLabel={getOptionLabel}
          isOptionEqualToValue={(opt, val) =>
            val != null && opt[optionValueKey] === (val as any)[optionValueKey]
          }
          noOptionsText={noOptionsText}
          loading={isFetching || isLoading}
          disabled={isReadOnly}
          ListboxComponent={ListboxComponent}
          // ListboxProps={{
          //   onScroll: handleScroll,
          //   style: {
          //     height: 150,
          //     overflowY: 'scroll',
          //   },
          // }}
          renderInput={params => (
            <TextField
              {...params}
              error={error}
              helperText={helperText}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {(isFetching || isLoading) && <CircularProgress size={20} color="inherit" />}
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
