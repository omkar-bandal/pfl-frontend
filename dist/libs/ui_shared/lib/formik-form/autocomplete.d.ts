import { LabelProps } from './label';
import { default as React } from 'react';

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
export declare const AutoCompleteInput: React.FC<AutoCompleteInputProps>;
export {};
