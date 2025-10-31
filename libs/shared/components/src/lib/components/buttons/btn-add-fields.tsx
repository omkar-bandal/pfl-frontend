/* eslint-disable @typescript-eslint/no-explicit-any */

//Button used with Formik FieldArray to add new fields in the form
import { Add } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";

interface AddFieldButtonProps extends ButtonProps {
  label?: string;
  onClickFn?: () => void;
}

export const AddFieldButton: React.FC<AddFieldButtonProps> = ({
  label = "Add More",
  onClickFn,
  ...rest
}) => {
  return (
    <Button
      startIcon={<Add />}
      variant="text"
      color="success"
      size="small"
      sx={{
        width: 150,
        fontWeight: 700,
        "&:hover": { 
            backgroundColor: "transparent" 
        },
      }}
      onClick={onClickFn}
      {...rest}
    >
      {label}
    </Button>
  );
};
