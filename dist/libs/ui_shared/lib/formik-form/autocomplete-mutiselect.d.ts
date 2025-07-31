import { LabelProps } from './label';
import { TextFieldProps } from '@mui/material/TextField';

export interface OptionType {
    id: string | number;
    [key: string]: any;
}
interface FormikAutocompleteProps<T extends OptionType> extends Omit<LabelProps, 'isReadOnly' | 'isError'> {
    placeholder?: string;
    helperText?: string;
    textFieldProps?: Partial<TextFieldProps>;
    options: T[];
    getOptionLabel: (option: T) => string;
    limitTags?: number;
    isLoading?: boolean;
    selectAllId?: string;
}
export declare function MultiSelectAutocomplete<T extends OptionType>(props: FormikAutocompleteProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
