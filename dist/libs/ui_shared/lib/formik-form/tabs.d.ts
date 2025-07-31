import { default as React } from 'react';

export type TabOptions = {
    label: string;
    isDisabled: boolean;
};
type FormTabsProps = {
    tabOptions: TabOptions[];
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};
export declare const FormTabs: React.FC<FormTabsProps>;
export {};
