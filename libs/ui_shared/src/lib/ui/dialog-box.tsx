/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogProps, IconButton, Box, Typography } from '@mui/material';
import { dialogBoxState, useActions, useAppSelector } from '@prime-fresh/modules';
import React from 'react';
import { BtnSmall } from '../buttons';
import { Close } from '@mui/icons-material';

type DialogBoxProp = Omit<DialogProps, 'open' | 'onClose'> & {
  title: string;
  children: React.ReactNode;
  handleSubmit: any;
  handleReset: any;
};

export const DialogBox: React.FC<DialogBoxProp> = (props) => {
  const { title, children, handleSubmit, handleReset, ...rest } = props;
  const isDialogBoxOpen = useAppSelector(dialogBoxState);
  const { closeDialogBox } = useActions();
  return (
    <Dialog open={isDialogBoxOpen} scroll="paper" onClose={() => closeDialogBox()} {...rest}>
      <DialogTitle
        id="scroll-dialog-title"
        height={20}
        boxSizing='content-box'
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography component='div' variant='subtitle1' sx={{fontWeight: 700}}>{title}</Typography>
          <IconButton size="medium" color="error" onClick={() => closeDialogBox()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <BtnSmall label="Reset" color="secondary" onClick={handleReset} />
        <BtnSmall label="Submit" color="success" onClick={handleSubmit} />
      </DialogActions>
    </Dialog>
  );
};
