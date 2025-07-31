import { SelectChangeEvent, SelectProps as MuiSelectProps } from '@mui/material';
import { default as React } from 'react';

export interface Option {
    label: string;
    value: string | number;
}
interface SelectProps extends Omit<MuiSelectProps, 'onChange'> {
    name: string;
    label: string;
    value: string | number;
    options?: Option[] | null;
    onChange: (event: SelectChangeEvent<any>) => void;
}
export declare const Select: React.FC<SelectProps>;
export {};
