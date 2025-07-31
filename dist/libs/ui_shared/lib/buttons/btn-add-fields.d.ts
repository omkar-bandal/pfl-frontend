import { ButtonProps } from '@mui/material';

interface AddFieldButtonProps extends ButtonProps {
    label?: string;
    onClickFn?: () => void;
}
export declare const AddFieldButton: React.FC<AddFieldButtonProps>;
export {};
