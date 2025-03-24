import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    fontWeight: 500,
    margin: theme.spacing(2),
    width: 140,
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
        width: 100,
        fontSize: 14,
    },
    "&:disabled": {
        backgroundColor: "#A5D6A7",
    },
}));