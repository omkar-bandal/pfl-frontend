import { ChangeEvent } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { TextFieldProps } from '@mui/material';

type TextInputProps = TextFieldProps & {
    isRequired: boolean;
    label: string;
    name: string;
    value: string | number | Date | undefined | null;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    isReadOnly?: boolean;
    touched?: FormikTouched<{
        [key: string]: any;
    }>;
    errors?: FormikErrors<{
        [key: string]: any;
    }>;
};
export declare const TextInput: React.FC<TextInputProps>;
export {};
