import { AlertProps } from '@mui/material/Alert';
import { SnackbarProps } from '@mui/material/Snackbar';
import * as React from 'react';
type AlertbarType = SnackbarProps & AlertProps & {
    open: boolean;
    error: Error | null;
    resMessage: {
        status: string;
        message: string;
    } | undefined;
};
export declare const Alertbar: React.FC<AlertbarType>;
export {};
