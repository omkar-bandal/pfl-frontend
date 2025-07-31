import { default as React } from 'react';
import { TextFieldProps } from '@mui/material';

type DateInputPros = Omit<TextFieldProps, 'name' | 'type' | 'id'> & {
    name: string;
};
export declare const DateInput: React.FC<DateInputPros>;
export {};
