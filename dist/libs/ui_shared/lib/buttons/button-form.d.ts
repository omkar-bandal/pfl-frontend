import { default as React } from 'react';
import { ButtonProps } from '@mui/material';

type FormButtonProps = ButtonProps & {
    type: "submit" | "reset" | "button";
    label: string;
};
export declare const FormButton: React.FC<FormButtonProps>;
export {};
