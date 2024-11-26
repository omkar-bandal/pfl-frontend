import * as React from 'react';
import {AppBar, Typography, IconButton, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {isClosingState, mobileOpenState, setMobileOpen, useAppSelector} from '@prime-fresh/modules';
import {AUTH_ROUTES} from "@prime-fresh/authentication";

export function Appbar({ drawerWidth }: { drawerWidth: number }) {
  const location = useLocation().pathname.split('/').slice(-2)[0];
  const pageName = location.replace(/_/g, " ");
  const dispatch = useDispatch();
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isClosing = useAppSelector(isClosingState);
  const mobileOpen = useAppSelector(mobileOpenState);
  const navigate = useNavigate();
  // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   navigate(AUTH_ROUTES.SIGN_IN);
  //   localStorage.clear();
  //   setAnchorEl(null);
  // };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      dispatch(setMobileOpen(!mobileOpen));
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate(AUTH_ROUTES.SIGN_IN)
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: 50,
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "#FFFFFF",
        boxShadow: "none",
        boxSizing: 'border-box'
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600, color: "#000000" }}>
          {pageName}
        </Typography>
        <div>
          {/* <IconButton 
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <AccountCircle fontSize="inherit" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>*/}/
          <Button variant='text' sx={{textTransform: 'none', fontSize: 15, fontWeight: 700}} onClick={() => handleLogout()}>Logout</Button>
        </div>

      </Box>
    </AppBar>
  );
}
