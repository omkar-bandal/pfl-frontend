import { FC } from 'react'
import { Settings } from '@mui/icons-material'
import { Button, ButtonProps, styled } from '@mui/material'

type ColumnSettingButtonProps = ButtonProps & {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 600,
    margin: 1,
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        borderColor: '#00cc66',
        boxShadow: 'none',
        color: "#ffffff"
    },
}));
export const ColumnSettingButton: FC<ColumnSettingButtonProps> = ({ handleClick }) => {
    return (
        <StyledButton
            variant="contained"
            size="small"
            startIcon={<Settings />}
            onClick={handleClick}>
            Columns
        </StyledButton>
    )
}

