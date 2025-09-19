export interface Option {
  label: string;
  value: string;
}

export interface VirtualizedAutocompleteProps<T> {
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
  handleInputChange: (event: React.SyntheticEvent, value: string) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export interface VirtualListboxProps {
  items: React.ReactElement[];
  windowHeight: number;
  rowHeight: number;
  isLoading?: boolean;
  noOptionsText?: string;
  onScroll: (scrollData: { scrollOffset: number; scrollDirection: string }) => void;
}
