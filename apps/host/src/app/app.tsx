import { RouterProvider } from "react-router-dom";
import { CommonProvider } from "../providers/CommonProvider";
import { HostRoutes } from "../routes";
import { coreStore, muiTheme } from "@prime-fresh/modules";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function App() {
  return (
    <CommonProvider store={coreStore} theme={muiTheme}>
        <RouterProvider router={HostRoutes} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </CommonProvider>
  );
}

export default App;
