import { default as React } from 'react';

type MultipleTextInputProps = {
    isRequired: boolean;
    name: string;
    label: string;
    values: string[];
    setFieldValue: (field: string, value: string[]) => void;
};
export declare const MultipleTextInput: React.FC<MultipleTextInputProps>;
export {};
