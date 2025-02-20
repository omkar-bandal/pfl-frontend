import * as React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Appbar, Sidebar } from './components';
import { Provider } from 'react-redux';
import {coreStore} from '@prime-fresh/modules';

const drawerWidth = 250;

export function Layout({ children, role }: {
  children: React.ReactNode;
  role: string;
}) {
  return (
    <Provider store={coreStore}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Appbar drawerWidth={drawerWidth} />
        <Sidebar drawerWidth={drawerWidth} role={role} />
        <Box component="main"
          sx={{
            flexGrow: 1,
            paddingX: 1,
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}>
          <Toolbar variant='dense' sx={{minHeight: 30}} />
          {children}
        </Box>
      </Box>
    </Provider>
  );
}
