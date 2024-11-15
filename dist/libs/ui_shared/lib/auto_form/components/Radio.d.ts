import { RadioGroupProps } from '@mui/material';
import { default as React } from 'react';

type RadioGroupInputProps = RadioGroupProps & {
    isRequired: boolean;
    label: string;
    name: string;
    value: string | undefined | null;
    options: Array<{
        label: string;
        value: string;
    }>;
    handleChange?: any;
};
export declare const RadioGroupInput: React.FC<RadioGroupInputProps>;
export {};
