import React, { FC } from 'react';
import { Edit } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';

type EditIconBtnProps = IconButtonProps;
export const EditIconBtn: FC<EditIconBtnProps> = (props) => {
  return (
    <IconButton {...props} aria-label="edit">
      <Edit color="secondary" />
    </IconButton>
  );
};
