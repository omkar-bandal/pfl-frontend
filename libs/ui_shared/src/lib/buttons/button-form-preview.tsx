import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type PreviewButtonProps = ButtonProps & {
    label?: string;
    onClick: () => void;
}

export const FormPreviewBtn: React.FC<PreviewButtonProps> = ({ label, onClick }) => {
    return (
        <Button
            variant="contained"
            color='info'
            size='large'
            sx={{ width: 150, textTransform: 'none', margin: 2 }}
            onClick={onClick}>
            {label? label : 'Preview'}
        </Button>
    );
};

