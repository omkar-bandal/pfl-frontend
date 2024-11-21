import { Alert, Snackbar } from '@mui/material'
import { hideNotification, notificationState, useAppSelector } from '@prime-fresh/modules'
import { useDispatch } from 'react-redux'

export const Notification = () => {
    const { isOpen, message, severity } = useAppSelector(notificationState);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(hideNotification());
    };
    return (
        <Snackbar
            open={isOpen}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={3000}
            onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

