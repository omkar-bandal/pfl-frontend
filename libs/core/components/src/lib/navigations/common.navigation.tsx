import { GridViewOutlined, Inventory } from "@mui/icons-material";
import { Navigations } from "@prime-fresh/modules";
import { sharedRoutes } from "@prime-fresh/shared/modules";

export const commonNavigation: Navigations[] = [
    {
        name: 'Dashboard',
        uniqueKey: 'dashboard',
        logo: <GridViewOutlined />,
        path: sharedRoutes.DASHBOARD,
      },
      {
        name: 'Inventory',
        uniqueKey: 'stock',
        logo: <Inventory />,
        path: sharedRoutes.GET_ALL_STOCK,
      },
]