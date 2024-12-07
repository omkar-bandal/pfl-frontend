import { Analytics, Assessment, DeleteSweep, FormatIndentDecrease, FormatIndentIncrease, FormatListBulleted, GridViewOutlined, Group, Inventory, LocalShipping } from "@mui/icons-material";
import { Navigations, stringConstants } from "@prime-fresh/modules";
import {inventoryRouteConstants} from "@prime-fresh/inventory/modules";

export const inventoryNavigations: Navigations[] = [
    {
        name: "Dashboard",
        logo: <GridViewOutlined />,
        path: inventoryRouteConstants.DASHBOARD_INVENTORY,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Delivery Challan",
        logo: <LocalShipping />,
        path: inventoryRouteConstants.CREATE_DELIVERY_CHALLAN,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Inward Register",
        logo: <FormatIndentIncrease />,
        path: inventoryRouteConstants.CREATE_INWARD_REGISTER,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "AQR",
        logo: <Analytics />,
        path: inventoryRouteConstants.CREATE_AQR,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "GRN",
        logo: <FormatListBulleted />,
        path: inventoryRouteConstants.CREATE_GRN,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Labour Register",
        logo: <Group />,
        path: inventoryRouteConstants.CREATE_LABOUR_REGISTER,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Dump Register",
        logo: <DeleteSweep />,
        path: inventoryRouteConstants.CREATE_DUMP_REGISTER,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Dispatch Register",
        logo: <FormatIndentDecrease />,
        path: inventoryRouteConstants.CREATE_DISPATCH_REGISTER,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Second Sale",
        logo: <GridViewOutlined />,
        path: inventoryRouteConstants.CREATE_SECOND_SALE_REGISTER,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Stock Register",
        logo: <Inventory />,
        path: inventoryRouteConstants.CREATE_STOCK_REGISTER,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "EOD Report",
        logo: <Assessment />,
        path: inventoryRouteConstants.CREATE_EOD,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
]