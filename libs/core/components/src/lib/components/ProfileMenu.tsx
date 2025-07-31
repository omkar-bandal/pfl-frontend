/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Divider, ListItemIcon, Menu, MenuItem, MenuProps, ListItemText } from '@mui/material';
import { FC, ReactNode } from 'react';

type ProfileMenuPropTypes = MenuProps & {
  loggedInUsername: string;
  menuoptions: { label: string; icon: ReactNode; onClickFn: any, disable?: boolean }[];
};
export const ProfileMenu: FC<ProfileMenuPropTypes> = (props) => {
  const { loggedInUsername, menuoptions, ...rest } = props;
  return (
    <Menu
      {...rest}
      id="profile-menu"
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Typography
        variant="body1"
        noWrap
        component="div"
        textAlign="center"
        sx={{ color: '#000', fontWeight: 600, padding: 1 }}
      >
        {loggedInUsername}
      </Typography>
      <Divider />
      {menuoptions.map((option, index) => (
        <MenuItem key={index} onClick={option.onClickFn} disabled={option.disable || false}>
          <ListItemIcon>{option.icon}</ListItemIcon>
          <ListItemText primary={option.label} />
        </MenuItem>
      ))}
    </Menu>
  );
};
