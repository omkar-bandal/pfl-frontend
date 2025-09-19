import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { dialogContainerState, useActions, useAppSelector } from '@prime-fresh/modules';

type DialogContainerPropType = {
  dialogKey: string;
  dialogTitle: string;
  dialogContent: React.ReactNode;
  dialogActionLabel: string;
  dialogActionBtnColor?: ButtonProps['color'];
  dialogActionFn: any;
};
export const DialogContainer: React.FC<DialogContainerPropType> = React.memo(({
  dialogKey,
  dialogTitle,
  dialogContent,
  dialogActionLabel,
  dialogActionFn,
  dialogActionBtnColor = 'primary',
}) => {
  const isDialogOpen = useAppSelector(dialogContainerState);
  const { closeDialog } = useActions();

  return (
    <Dialog open={isDialogOpen[dialogKey]} onClose={() => closeDialog({key: dialogKey})}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>{dialogContent}</DialogContent>
      <DialogActions>
        <Button onClick={() => closeDialog({key: dialogKey})}>Cancel</Button>
        <Button color={dialogActionBtnColor} onClick={dialogActionFn}>
          {dialogActionLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
});
