import { ButtonProps } from '@mui/material';
import { default as React } from 'react';

type PreviewButtonProps = ButtonProps & {
    label?: string;
    onClick: () => void;
};
export declare const FormPreviewBtn: React.FC<PreviewButtonProps>;
export {};
