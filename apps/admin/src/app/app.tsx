import { RouterProvider } from "react-router-dom";
import { CommonProvider } from "../providers/CommonProvider";
import { AdminRoutes } from "../routes/admin.routes";
import { muiTheme } from "@prime-fresh/admin_modules";
import { storeCore } from "@prime-fresh/modules";

export function App() {
  return (
    <CommonProvider store={storeCore} theme={muiTheme}>
      <RouterProvider router={AdminRoutes} />
    </CommonProvider>
  );
}

export default App;
