import { default as React } from 'react';

type AlertSnackbarProp = {
    open: boolean;
    message: string;
    severity: 'success' | 'error';
};
export declare const AlertSnackbar: React.FC<AlertSnackbarProp>;
export {};
