import { ButtonProps } from '@mui/material';
import { FC } from 'react';

type ColumnSettingButtonProps = ButtonProps & {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare const ColumnSettingButton: FC<ColumnSettingButtonProps>;
export {};
