import { FC } from 'react'
import { Add } from '@mui/icons-material'
import { Button, ButtonProps, styled } from '@mui/material'

type AddNewButtonProps = ButtonProps & {
    handleClick: () => void;
}
const StyledButton = styled(Button)({
    textTransform: 'none',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: '#00cc66',
        borderColor: '#00cc66',
        boxShadow: 'none',
        color: "#ffffff"
    },
});
export const AddNewButton: FC<AddNewButtonProps> = ({ handleClick }) => {
    return (
        <StyledButton
            variant="outlined"
            size="small"
            startIcon={<Add />}
            onClick={handleClick}>
            Add New
        </StyledButton>
    )
}

