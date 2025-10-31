/* ...existing code... */
import React from 'react';
import { Label } from '../formik-form';
import { ListChildComponentProps, FixedSizeList } from 'react-window';
import { Grid2, Autocomplete, TextField, CircularProgress, useTheme, Box, Typography, Divider } from '@mui/material';

export interface ScrollableAutocompleteProps<T extends Record<string, any>, K extends keyof T = keyof T> {
  name: string;
  label: string;
  value: T[K] | null;
  onChange: any;
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
  onNextPage: () => void;
  onPrevPage: () => void;
  onInputChange?: (event: React.SyntheticEvent, value: string, reason: 'input' | 'reset' | 'clear') => void;
  onOpen: () => void;
}

export function ScrollableAutocomplete<T extends Record<string, any>, K extends keyof T = keyof T>(
  props: ScrollableAutocompleteProps<T, K>
) {
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
    onInputChange,
    onOpen,
  } = props;
  const theme = useTheme();
  // find the object matching the current ID (robust string compare to avoid number/string mismatch)
  const selectedObject = options.find((item) => String(item[optionValueKey]) === String(value)) || null;

  // total virtual height in px
  const virtualHeight = options.length * rowHeight;
  // visible window height in px
  const windowHeight = rowHeight * visibleRows;

  // Renders each <li> passed in via children
  const renderRow = (props: ListChildComponentProps) => {
    const { index, style, data } = props;
    // Clone the original <li> with our computed style
    return React.cloneElement(data[index] as React.ReactElement, {
      style: {
        ...style,
        top: (style.top as number) + 0,
        // small padding to separate items visually inside virtualized list
        padding: '4px 6px',
      },
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
            key={currentPage}
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
  ListboxComponent.displayName = 'NonFormikAutocompleteListbox';

  return (
    <Autocomplete
      fullWidth
      size="small"
      value={selectedObject}
      onOpen={onOpen}
      onChange={onChange}
      // Only forward input-change events caused by typing (reason === 'input')
      onInputChange={(event, newInput, reason) => {
        if (!onInputChange) return;
        if (reason === 'input' || reason === 'clear') {
          onInputChange(event, newInput, reason);
        }
      }}
      options={options}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={(opt, val) => {
        if (val == null) return false;
        // val might be the full option object or a primitive — handle both cases
        const valKey = (val as any)[optionValueKey] ?? val;
        return String(opt[optionValueKey]) === String(valKey);
      }}
      noOptionsText={noOptionsText}
      loading={isFetching || isLoading}
      disabled={isReadOnly}
      ListboxComponent={ListboxComponent}
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
          label={label}
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
  );
}
