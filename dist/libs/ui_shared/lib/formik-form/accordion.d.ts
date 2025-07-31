import { default as React } from 'react';

export type FormAccordionPropType = {
    panel: string;
    children: React.ReactNode;
    openOnError?: boolean;
};
export declare const FormAccordion: React.NamedExoticComponent<FormAccordionPropType>;
