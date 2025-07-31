import { FC } from 'react';
import { ButtonProps } from '@mui/material';

type BtnSmallProps = Omit<ButtonProps, 'startIcon' | 'variant' | 'size'> & {
    label: string;
    icon?: React.ReactNode;
};
export declare const BtnSmall: FC<BtnSmallProps>;
export {};
