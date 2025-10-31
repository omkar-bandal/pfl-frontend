import { RouterProvider } from 'react-router-dom';
import { CommonProvider } from '../providers/CommonProvider';
import { coreStore, muiTheme } from '@prime-fresh/modules';
import { HostRoutes } from '../routes/host.routes';
import { queryClient } from '@prime-fresh/services';
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function App() {
  return (
    <CommonProvider store={coreStore} theme={muiTheme} queryClient={queryClient}>
      <RouterProvider router={HostRoutes} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </CommonProvider>
  );
}

export default App;
