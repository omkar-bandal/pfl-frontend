import { default as React } from 'react';

type AutoCompleteOption = {
    label: string;
    value: string;
};
type AutoCompleteInputProps = {
    isRequired?: boolean;
    label: string;
    name: string;
    loading?: boolean;
    options: AutoCompleteOption[];
    value?: AutoCompleteOption | null;
    handleBlur?: any;
    handleChange?: (event: React.SyntheticEvent, newValue: AutoCompleteOption | string | null) => void;
};
export declare const AutoCompleteInput: React.FC<AutoCompleteInputProps>;
export {};
