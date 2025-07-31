import { UseReactToPrintHookContent } from 'react-to-print/lib/types/UseReactToPrintHookContent';
import { ButtonProps } from '@mui/material';
import { default as React } from 'react';

type PrintButtonProps = ButtonProps & {
    label?: string;
    onClick: (content?: UseReactToPrintHookContent) => void;
};
export declare const PrintButton: React.FC<PrintButtonProps>;
export {};
