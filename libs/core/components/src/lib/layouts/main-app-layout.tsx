import * as React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Appbar, Sidebar } from '../components';
import { Provider } from 'react-redux';
import { coreStore } from '@prime-fresh/modules';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary, ErrorFallback } from '@prime-fresh/ui_shared';
import { SocketInitializer } from '../notifications';

const drawerWidth = 250;

export function Layout() {
  // const { mobileOpen } = useAppSelector(layoutStates);
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
          {/* <Main open={mobileOpen}> */}
          <Toolbar variant='dense' sx={{ minHeight: 40 }} />
          <ErrorBoundary FallbackCompnent={ErrorFallback}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </React.Suspense>
          </ErrorBoundary>
          {/* </Main> */}
        </Box>
      </Box>
    </Provider>
  );
}
