export interface GenericAutocompleteProps<T> {
    isRequired: boolean;
    name: string;
    label: string;
    options: T[];
    isLoading?: boolean;
    noOptionsText?: string;
    onInputChange: (value: string) => void;
    getOptionLabel: (option: T) => string;
    onOptionSelected?: (option: T) => void;
    optionValueKey?: keyof T;
}
export declare function FormikAutocomplete<T extends {
    [key: string]: any;
}>(props: GenericAutocompleteProps<T>): import("react/jsx-runtime").JSX.Element;
