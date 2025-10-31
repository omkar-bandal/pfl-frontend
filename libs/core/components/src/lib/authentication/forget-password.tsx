import { toast } from 'react-toastify';
import { authState, useActions, useAppSelector, useResetPassword } from '@prime-fresh/modules';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export const ForgetPasswordDialog = ({ message }: { message: string }) => {
  const { isForgetPswdDialog } = useAppSelector(authState);
  const { closeForgetPasswordDialog } = useActions();
  const { mutateAsync, isPending, isError, error } = useResetPassword();
  const handleConfirmation = () => {
    mutateAsync({ email: message })
      .then((data) => {
        toast.success(data ? data.message : 'Link sent successfully to your mail');
        closeForgetPasswordDialog();
      })
      .catch(() => {
        toast.error(error ? error.message : 'Error while sending link. Please try again later.');
        closeForgetPasswordDialog();
      });
  };
  return (
    <Dialog
      open={isForgetPswdDialog}
      onClose={() => closeForgetPasswordDialog()}
      aria-labelledby="forget-password-dialog"
      aria-describedby="forget-password-dialog-description"
    >
      <DialogTitle id="forget-password-dialog">Forget Password ?</DialogTitle>
      <DialogContent>
        <DialogContentText id="forget-password-dialog-description">
          Link to reset password will send on {message} email.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{ fontWeight: 700 }} color="error" onClick={() => closeForgetPasswordDialog()}>
          Cancel
        </Button>
        <Button
          sx={{ fontWeight: 700 }}
          color="success"
          onClick={handleConfirmation}
          autoFocus
          disabled={isPending && !isError}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
