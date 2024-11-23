import { FormikErrors, FormikTouched } from 'formik';
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
    handleChange?: (event: any, newValue: AutoCompleteOption | null) => void;
    touched?: FormikTouched<{
        [key: string]: any;
    }>;
    errors?: FormikErrors<{
        [key: string]: any;
    }>;
};
export declare const AutoCompleteInput: React.FC<AutoCompleteInputProps>;
export {};
