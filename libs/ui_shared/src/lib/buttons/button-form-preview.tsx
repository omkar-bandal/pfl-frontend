import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type PreviewButtonProps = ButtonProps & {
    onClick: () => void;
}

export const FormPreviewBtn: React.FC<PreviewButtonProps> = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            color='info'
            size='large'
            sx={{ width: 150, textTransform: 'none' }}
            onClick={onClick}>
            Preview
        </Button>
    );
};

