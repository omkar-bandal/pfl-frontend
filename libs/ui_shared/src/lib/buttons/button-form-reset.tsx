import { Button, ButtonProps } from "@mui/material"

type FormResetBtnProps = ButtonProps & {
    label: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleReset: (e?: React.SyntheticEvent<any>) => void
}
export const FormResetBtn: React.FC<FormResetBtnProps> = ({ label, handleReset }) => {
    return (
        <Button
            type="reset"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ width: 150, textTransform: "none" }}
            onClick={handleReset}>
            {label}
        </Button>
    )
}