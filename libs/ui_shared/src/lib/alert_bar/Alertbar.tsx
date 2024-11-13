import * as React from 'react';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

type AlertbarType = SnackbarProps & AlertProps & {
  open: boolean,
  error: Error | null,
  resMessage: { status: string, message: string } | undefined,
}
export const Alertbar: React.FC<AlertbarType> = ({ open, error, resMessage }: AlertbarType) => {
  return (
    <div>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000}>
        <Alert severity={open ? 'error' : 'success'}>
          {open ? 'Creating' : error?.message || resMessage?.message}
        </Alert>
      </Snackbar>
      {/* <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={open ? 'error' : 'success'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {open ? 'Creating' : error?.message || resMessage?.message}
        </Alert>
      </Snackbar> */}
    </div >
  );
}
