import { ButtonProps } from '@mui/material';

type FormResetBtnProps = ButtonProps & {
    label: string;
    handleReset: (e?: React.SyntheticEvent<any>) => void;
};
export declare const FormResetBtn: React.FC<FormResetBtnProps>;
export {};
