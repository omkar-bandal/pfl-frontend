import * as React from 'react';
import { AppBar, Typography, IconButton, Box, Avatar, MenuItem, Menu, ListItemIcon, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { isClosingState, mobileOpenState, setMobileOpen, useAppSelector } from '@prime-fresh/modules';
import { convertInTitleCase } from '@prime-fresh/shared/utils';
import { Logout } from '@mui/icons-material';

export function Appbar({ drawerWidth }: { drawerWidth: number }) {
  const dispatch = useDispatch();
  const isClosing = useAppSelector(isClosingState);
  const mobileOpen = useAppSelector(mobileOpenState);
  const user = localStorage.getItem("userName");
  const username = convertInTitleCase(user || "");

  const handleDrawerToggle = () => {
    if (!isClosing) {
      dispatch(setMobileOpen(!mobileOpen));
    }
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: 40,
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "#FFFFFF",
        boxShadow: "none",
        boxSizing: 'border-box',
      }}
    >
      <Box width='100%' height='100%' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: 2 }}>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "center" }}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 30, height: 30, background: "#00cc66" }}>{username.charAt(0)}</Avatar>
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
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
          <Typography variant="body1" noWrap component="div" textAlign="center" sx={{ color: "#000", fontWeight: 600, padding: 1 }}>
            {username}
          </Typography>
          <Divider/>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </AppBar>
  );
}
