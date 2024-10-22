import { RouterProvider } from "react-router-dom";
import { CommonProvider } from "../providers/CommonProvider";
import { PurchaseRoutes } from "../routes/purchase.routes";
import { muiTheme } from "@prime-fresh/purchase_modules";
import { storeCore } from "@prime-fresh/modules";

export function App() {
  return (
    <CommonProvider store={storeCore} theme={muiTheme}>
      <RouterProvider router={PurchaseRoutes}/>
    </CommonProvider>
  );
}
export default App;
