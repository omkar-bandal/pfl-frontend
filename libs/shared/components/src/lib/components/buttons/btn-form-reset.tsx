/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonProps } from "@mui/material"
import { StyledButton } from "./styled-button"

type FormResetBtnProps = ButtonProps & {
    label: string,
    handleReset: (e?: React.SyntheticEvent<any>) => void
}
export const FormResetBtn: React.FC<FormResetBtnProps> = ({ label, handleReset }) => {
    return (
        <StyledButton
            type="reset"
            variant="contained"
            color="secondary"
            onClick={handleReset}>
            {label}
        </StyledButton>
    )
}