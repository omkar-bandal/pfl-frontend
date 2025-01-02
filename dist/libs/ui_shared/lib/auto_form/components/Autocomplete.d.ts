import { default as React } from 'react';

type AutoCompleteOption = {
    label: string;
    value: string;
};
type AutoCompleteInputProps = {
    isRequired?: boolean;
    label: string;
    name: string;
    options: AutoCompleteOption[];
    value?: AutoCompleteOption | null;
    handleBlur?: any;
    handleChange?: (event: any, newValue: AutoCompleteOption | null) => void;
};
export declare const AutoCompleteInput: React.FC<AutoCompleteInputProps>;
export {};
