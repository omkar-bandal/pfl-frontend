import { FormikErrors, FormikTouched } from 'formik';

type AutoCompleteInputProps = {
    isRequired: boolean;
    label: string;
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    handleChange?: ((event: any, newValue: {
        label: string;
        value: string;
    } | null) => void) | undefined;
    touched?: FormikTouched<{
        [key: string]: any;
    }>;
    errors?: FormikErrors<{
        [key: string]: any;
    }>;
};
export declare const AutoCompleteInput: React.FC<AutoCompleteInputProps>;
export {};
