import { FC } from 'react';
import { Preview } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';

type ViewIconBtnProps = IconButtonProps;

export const ViewIconBtn: FC<ViewIconBtnProps> = (props) => {
  return (
    <IconButton {...props} aria-label="view">
      <Preview color="primary" />
    </IconButton>
  );
};
