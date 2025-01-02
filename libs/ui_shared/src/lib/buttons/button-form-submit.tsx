import React from "react"
import { Button, ButtonProps, CircularProgress } from "@mui/material";

type FormSubmitBtnProps = ButtonProps & {
    label: string,
    isSubmitting: boolean,
    isError: boolean,
}
export const FormSubmitBtn: React.FC<FormSubmitBtnProps> = ({ label, isSubmitting, isError }) => {
    return (
        <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
            disabled={isSubmitting} sx={{
                width: 150, textTransform: 'none', '&:disabled': {
                    backgroundColor: "#A5D6A7",
                },
            }}>
            {isSubmitting && isError ? <CircularProgress color='inherit' size={25} /> : label}
        </Button>
    )
}