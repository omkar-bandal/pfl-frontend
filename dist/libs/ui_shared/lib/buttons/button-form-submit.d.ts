import { ButtonProps } from '@mui/material';
import { default as React } from 'react';

type FormSubmitBtnProps = ButtonProps & {
    label: string;
    isSubmitting: boolean;
    isError: boolean;
};
export declare const FormSubmitBtn: React.FC<FormSubmitBtnProps>;
export {};
