import * as React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Appbar, Sidebar } from './components';
import { Provider } from 'react-redux';
import {coreStore} from '@prime-fresh/modules';
import { Outlet } from 'react-router-dom';

const drawerWidth = 250;

export function Layout() {
  return (
    <Provider store={coreStore}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Appbar drawerWidth={drawerWidth} />
        <Sidebar drawerWidth={drawerWidth} />
        <Box component="main"
          sx={{
            flexGrow: 1,
            paddingX: 1,
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}>
          <Toolbar variant='dense' sx={{minHeight: 30}} />
          <Outlet />
        </Box>
      </Box>
    </Provider>
  );
}
