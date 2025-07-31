import { default as React } from 'react';
import { DialogProps } from '@mui/material';

type DialogBoxProp = Omit<DialogProps, 'open' | 'onClose'> & {
    title: string;
    children: React.ReactNode;
    handleSubmit: any;
    handleReset: any;
};
export declare const DialogBox: React.FC<DialogBoxProp>;
export {};
