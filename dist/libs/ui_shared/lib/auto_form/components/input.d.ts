import { ChangeEvent } from 'react';
import { TextFieldProps } from '@mui/material';

type TextInputProps = TextFieldProps & {
    isRequired: boolean;
    label: string;
    name: string;
    value: string | number | Date | undefined | null;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    isReadOnly?: boolean;
};
export declare const TextInput: React.FC<TextInputProps>;
export {};
