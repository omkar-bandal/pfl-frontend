import { default as React } from 'react';

export interface FormButtonGroupProps {
    isSubmitting: boolean;
    isSubmitError: Error | null;
    submitLabel: string;
    resetLabel: string;
    onReset: (e?: React.SyntheticEvent<any>) => void;
    onPreview?: () => void;
    previewLabel?: string;
}
export declare const FormButtonGroup: React.FC<FormButtonGroupProps>;
