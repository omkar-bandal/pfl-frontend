import { ButtonProps } from '@mui/material';
import { FC } from 'react';

type AddNewButtonProps = ButtonProps & {
    handleClick: () => void;
};
export declare const AddNewButton: FC<AddNewButtonProps>;
export {};
