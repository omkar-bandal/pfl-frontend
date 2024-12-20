import { Button, ButtonProps } from "@mui/material"
import React from "react"
type FormButtonProps = ButtonProps & {
    type: "submit" | "reset" | "button",
    label: string,
}
export const FormButton: React.FC<FormButtonProps> = ({type, label}) => {
    return(
        <Button
        type={type}
        variant="contained"
        size="large"
        sx={{ width: 150, textTransform: "none" }}
      >
       {label}
      </Button>
    )
}