import { SelectProps, SelectChangeEvent } from '@mui/material';
import { default as React, ReactNode } from 'react';

type SelectInputProps = SelectProps & {
    isRequired: boolean;
    label: string;
    name: string;
    value: string | number | undefined | null;
    options: Array<{
        label: string | number;
        value: string | number;
    }> | undefined;
    noOptionsMessage?: string;
    handleChange?: ((event: SelectChangeEvent<unknown>, child: ReactNode) => void) | undefined | any;
};
export declare const SelectInput: React.FC<SelectInputProps>;
export {};
