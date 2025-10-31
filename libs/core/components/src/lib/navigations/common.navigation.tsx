import { NavigationConfig } from "./navigation.type";
import { sharedRoutes } from "@prime-fresh/shared/modules";
import { GridViewOutlined, HowToReg, Inventory } from "@mui/icons-material";

export const commonNavigation: NavigationConfig[] = [
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
  {
    name: 'Registrations',
    uniqueKey: 'registrations',
    logo: <HowToReg />,
    children: [
      {
        name: 'Farmers',
        uniqueKey: 'farmers',
        path: sharedRoutes.VIEW_ALL_FARMER
      },
      {
        name: 'Vendors',
        uniqueKey: 'vendors',
        path: sharedRoutes.VIEW_ALL_VENDOR,
      },
      {
        name: 'Customers',
        uniqueKey: 'customer',
        path: sharedRoutes.VIEW_ALL_CUSTOMER,
      },
    ],
  },
]