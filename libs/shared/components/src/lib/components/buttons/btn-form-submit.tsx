import React from "react"
import { ButtonProps, CircularProgress} from "@mui/material";
import { StyledButton } from "./styled-button";

type FormSubmitBtnProps = ButtonProps & {
    label: string,
    isSubmitting: boolean,
    isError: Error | null,
}

export const FormSubmitBtn: React.FC<FormSubmitBtnProps> = ({ label, size, isSubmitting, isError }) => {
    return (
        <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting && !isError} 
            >
            {isSubmitting && !isError ? <CircularProgress color='inherit' size={25} /> : label}
        </StyledButton>
    )
}