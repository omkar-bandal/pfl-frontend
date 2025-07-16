import * as React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Appbar, Sidebar } from '../components';
import { Provider } from 'react-redux';
import { coreStore } from '@prime-fresh/modules';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary, ErrorFallback } from '@prime-fresh/ui_shared';
import SocketInitializer from '../notifications/socketInitializer';

const drawerWidth = 250;

export function Layout() {
  return (
    <Provider store={coreStore}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SocketInitializer />
        <Appbar drawerWidth={drawerWidth} />
        <Sidebar drawerWidth={drawerWidth} />
        <Box component="main"
          sx={{
            flexGrow: 1,
            paddingX: 1,
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}>
          <Toolbar variant='dense' sx={{ minHeight: 40 }} />
          <ErrorBoundary FallbackCompnent={ErrorFallback}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </React.Suspense>
          </ErrorBoundary>
        </Box>
      </Box>
    </Provider>
  );
}
