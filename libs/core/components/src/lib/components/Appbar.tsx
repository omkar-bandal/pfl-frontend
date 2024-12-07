import * as React from 'react';
import { AppBar, Typography, IconButton, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { authRouteConstants, isClosingState, mobileOpenState, setMobileOpen, useAppSelector } from '@prime-fresh/modules';
import { AUTH_API_URL, useSignOutService } from '@prime-fresh/auth_api';
import { getAccessToken, getRefreshToken } from '@prime-fresh/common_api';

export function Appbar({ drawerWidth }: { drawerWidth: number }) {
  const location = useLocation().pathname.split('/').slice(-2)[0];
  const pageName = location.replace(/_/g, " ");
  const dispatch = useDispatch();
  const isClosing = useAppSelector(isClosingState);
  const mobileOpen = useAppSelector(mobileOpenState);
  const navigate = useNavigate();
  const tokens = {
    access_token: getAccessToken() ? getAccessToken() : '',
    refresh_token: getRefreshToken() ? getRefreshToken() : '',
  }
  const { mutateAsync } = useSignOutService(AUTH_API_URL.SIGNOUT);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      dispatch(setMobileOpen(!mobileOpen));
    }
  };

  const handleLogout = async () => {
    const result = await mutateAsync(tokens);
    if (result) {
      navigate(authRouteConstants.SIGN_IN);
      console.log(result.message);
    }
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
        <Box>
          <Button variant='text' sx={{ textTransform: 'none', fontSize: 15, fontWeight: 700 }} onClick={() => handleLogout()}>Logout</Button>
        </Box>
      </Box>
    </AppBar>
  );
}
