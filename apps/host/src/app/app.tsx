import { RouterProvider } from "react-router-dom";
import { CommonProvider } from "../providers/CommonProvider";
import { HostRoutes } from "../routes";
import { coreStore, muiTheme } from "@prime-fresh/modules";

export function App() {
  return (
    <CommonProvider store={coreStore} theme={muiTheme}>
        <RouterProvider router={HostRoutes} />
    </CommonProvider>
  );
}

export default App;
