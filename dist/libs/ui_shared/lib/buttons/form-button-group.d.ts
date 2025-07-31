import { default as React } from 'react';

export interface FormButtonGroupProps {
    isSubmitting: boolean;
    isSubmitError: Error | null;
    submitLabel: string;
    resetLabel: string;
    onReset: (e?: React.SyntheticEvent<any>) => void;
    onPreview?: any;
    previewLabel?: string;
}
export declare const FormButtonGroup: React.FC<FormButtonGroupProps>;
