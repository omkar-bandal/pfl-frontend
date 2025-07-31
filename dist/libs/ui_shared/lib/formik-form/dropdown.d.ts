import { SelectProps, SelectChangeEvent } from '@mui/material';
import { default as React } from 'react';

type SelectInputProps = SelectProps & {
    isRequired: boolean;
    label: string;
    name: string;
    value: string | number | undefined | null;
    options: Array<{
        label: string | number;
        value: string | number;
    }> | Array<string> | undefined;
    noOptionsMessage?: string;
    handleChange?: ((event: SelectChangeEvent<unknown>) => void) | undefined | any;
    disable?: boolean;
};
export declare const SelectInput: React.FC<SelectInputProps>;
export {};
