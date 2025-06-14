import React from 'react';
import { ButtonProps } from '@mui/material';
import { StyledButton } from './styled-button';

type PreviewButtonProps = ButtonProps & {
    label?: string;
    onClick: () => void;
}

export const FormPreviewBtn: React.FC<PreviewButtonProps> = ({ label, onClick }) => {
    return (
        <StyledButton
            variant="contained"
            color='info'
            onClick={onClick}>
            {label ? label : 'Preview'}
        </StyledButton>
    );
};

