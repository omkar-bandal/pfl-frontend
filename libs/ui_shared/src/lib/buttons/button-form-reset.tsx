/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ButtonProps } from "@mui/material"

type FormResetBtnProps = ButtonProps & {
    label: string,
    handleReset: (e?: React.SyntheticEvent<any>) => void
}
export const FormResetBtn: React.FC<FormResetBtnProps> = ({ label, handleReset }) => {
    return (
        <Button
            type="reset"
            variant="contained"
            color="secondary"
            size="large"
            sx={{
                width: 150,
                textTransform: "none",
                margin: 2
            }}
            onClick={handleReset}>
            {label}
        </Button>
    )
}