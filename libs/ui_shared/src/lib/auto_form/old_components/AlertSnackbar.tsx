import React from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import {Close} from '@mui/icons-material';
import { useDispatch } from "react-redux";

type AlertSnackbarProp = {
    open: boolean;
    message: string;
    severity: 'success' | 'error';
}

export const AlertSnackbar: React.FC<AlertSnackbarProp> = ({ open, message, severity }) => {
  const dispatch = useDispatch();
  const handleCloseSnackbar = () => { console.log("kkk")};
    return (
        <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleCloseSnackbar}
          >
            <Close fontSize="inherit" />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Snackbar>
    )
}

