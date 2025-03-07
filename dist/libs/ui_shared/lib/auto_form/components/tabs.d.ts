import { default as React } from 'react';

type FormTabsProps = {
    tabLabels: string[];
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};
export declare const FormTabs: React.FC<FormTabsProps>;
export {};
