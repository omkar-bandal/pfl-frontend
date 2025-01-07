import { FormikErrors, FormikTouched } from 'formik';
import { RadioGroupProps } from '@mui/material';
import { default as React } from 'react';

type RadioGroupInputProps = RadioGroupProps & {
    isRequired: boolean;
    label: string;
    name: string;
    value: string | boolean | undefined | null;
    alignment?: "horizontal" | "vertical";
    options: Array<{
        label: string;
        value: string | number | boolean;
    }>;
    handleChange?: any;
    touched?: FormikTouched<{
        [key: string]: any;
    }>;
    errors?: FormikErrors<{
        [key: string]: any;
    }>;
};
export declare const RadioGroupInput: React.FC<RadioGroupInputProps>;
export {};
