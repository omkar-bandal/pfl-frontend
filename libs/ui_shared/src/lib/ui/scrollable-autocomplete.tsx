import React from "react";
import { Grid2, Autocomplete, TextField, CircularProgress } from "@mui/material";
import { ListChildComponentProps, FixedSizeList } from "react-window";
import { Label } from "../formik-form";

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
  currentPage: number;
  totalPages?: number;
  noOptionsText?: string;
  error?: boolean;
  helperText?: string;
  rowHeight?: number;
  visibleRows?: number;
  onNextPage: any;
  onPrevPage: any;
  onInputChange: any;
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
    currentPage,
    totalPages = 1,
    noOptionsText = 'No options available',
    error = false,
    helperText = '',
    rowHeight = 30,
    visibleRows = 5,
    onNextPage,
    onPrevPage,
    onInputChange
  
  } = props;

  // find the object matching the current ID
  const selectedObject = options.find(item => item[optionValueKey] === value) || null;

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
                currentPage < totalPages
              ) {
                onNextPage();
              }
              if (scrollDirection === 'backward' && scrollOffset <= 1 && !isFetching) {
                onPrevPage();
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
          onInputChange={onInputChange}
          options={options}
          getOptionLabel={getOptionLabel}
          isOptionEqualToValue={(opt, val) =>
            val != null && opt[optionValueKey] === (val as any)[optionValueKey]
          }
          noOptionsText={noOptionsText}
          loading={isFetching || isLoading}
          disabled={isReadOnly}
          ListboxComponent={ListboxComponent}
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