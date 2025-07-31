import { default as React } from 'react';

export type Option = {
    label: string;
    value: string;
};
export interface SrollableAutocompleteProps {
    label: string;
    value: Option | null;
    options: Option[];
    loading?: boolean;
    onChange: (event: React.SyntheticEvent, newValue: Option | null) => void;
    onScrollEnd?: () => void;
}
export declare const SrollableAutocomplete: React.FC<SrollableAutocompleteProps>;
