import * as React from 'react';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

type AlertbarType = SnackbarProps & AlertProps & {
  open : boolean, 
  error : Error | null, 
  resMessage: {status: string, message: string} | undefined,
}
export const Alertbar:React.FC<AlertbarType> = ({open, error, resMessage}: AlertbarType) => {
  return (
    <div>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000}>
        <Alert severity={open ? 'error' : 'success'}>
          {open ? 'Creating' : error?.message || resMessage?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
