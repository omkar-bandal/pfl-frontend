import { FC } from 'react'
import { Add } from '@mui/icons-material'
import { Button, ButtonProps, styled } from '@mui/material'

type AddNewButtonProps = ButtonProps & {
    handleClick: () => void;
}
const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 600,
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        borderColor: '#00cc66',
        boxShadow: 'none',
        color: "#ffffff"
    },
}));
export const AddNewButton: FC<AddNewButtonProps> = ({ handleClick }) => {
    return (
        <StyledButton
            variant="contained"
            size="small"
            startIcon={<Add />}
            onClick={handleClick}>
            Add New
        </StyledButton>
    )
}

