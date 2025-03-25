import React from 'react';
import { ButtonProps } from '@mui/material';
import { StyledButton } from './styled-button';
import { UseReactToPrintHookContent } from 'react-to-print/lib/types/UseReactToPrintHookContent';

type PrintButtonProps = ButtonProps & {
    label?: string;
    onClick: (content?: UseReactToPrintHookContent) => void;
}

export const PrintButton: React.FC<PrintButtonProps> = ({ label, onClick }) => {
    return (
        <StyledButton
            variant="contained"
            color='info'
            onClick={onClick}>
            {label ? label : 'Print'}
        </StyledButton>
    );
};

