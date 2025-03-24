import * as React from 'react';
import { AppBar, Typography, IconButton, Box, MenuItem, Menu, ListItemIcon, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { authRouteConstants, isClosingState, mobileOpenState, setMobileOpen, useActions, useAppSelector } from '@prime-fresh/modules';
import { Logout, Settings } from '@mui/icons-material';
import { SignOutRequest, useSignOut } from '@prime-fresh/auth_api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

export function Appbar({ drawerWidth }: { drawerWidth: number }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isClosing = useAppSelector(isClosingState);
  const mobileOpen = useAppSelector(mobileOpenState);
  const username = convertInTitleCase(localStorage.getItem('userName') || "");
  const { setLoggedInUserInfo } = useActions();

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

  const { mutateAsync, isError, error } = useSignOut();

  const handleLogout = () => {

    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (accessToken && refreshToken) {

      const tokens: SignOutRequest = {
        access_token: accessToken,
        refresh_token: refreshToken,
      }

      mutateAsync(tokens)
        .then(() => {
          localStorage.clear();
          setLoggedInUserInfo(null);
          handleClose();
          navigate(authRouteConstants.SIGN_IN);
        })
        .catch(() => {
          if (isError) {
            localStorage.clear();
            setLoggedInUserInfo(null);
            toast.error(error ? error.message : "Error while logout");
            navigate(authRouteConstants.SIGN_IN)
          }
        })
    } else {
      throw new Error("Unable to logout please refresh the page.")
    }
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: 30,
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
            <Settings fontSize='small' />
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
          <Divider />
          <MenuItem onClick={handleLogout}>
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
