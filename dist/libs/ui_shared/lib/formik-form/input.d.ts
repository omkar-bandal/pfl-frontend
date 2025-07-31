import { TextFieldProps } from '@mui/material';
import { default as React, ChangeEvent } from 'react';

type TextInputProps = TextFieldProps & {
    isRequired?: boolean;
    label: string;
    name: string;
    value?: string | number | Date | null;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    isReadOnly?: boolean;
    infoTipText?: string;
};
export declare const TextInput: React.FC<TextInputProps>;
export {};
