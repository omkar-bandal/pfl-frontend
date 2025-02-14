import { Analytics, Article, Assessment, DeleteSweep, FormatIndentDecrease, FormatIndentIncrease, FormatListBulleted, GridViewOutlined, Group, LocalShipping, Remove } from "@mui/icons-material";
import { Navigations, stringConstants } from "@prime-fresh/modules";
import {inventoryRouteConstants} from "@prime-fresh/inventory/modules";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";

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
        path: inventoryRouteConstants.GET_ALL_DELIVERY_CHALLAN,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Inward Register",
        logo: <FormatIndentIncrease />,
        path: inventoryRouteConstants.GET_ALL_INWARD_REGISTERS,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "AQR",
        logo: <Analytics />,
        path: inventoryRouteConstants.GET_ALL_AQR,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "GRN",
        logo: <FormatListBulleted />,
        path: inventoryRouteConstants.GET_ALL_GRN,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Labor Register",
        logo: <Group />,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
        children: [
            {
                name: "Permanent Labors",
                logo: <Remove />,
                path: inventoryRouteConstants.GET_ALL_LABOUR_REGISTER,
                roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
                depts: [stringConstants.DEPT_INVENTORY],
            },
            {
                name: "Labor Attendance",
                logo: <Remove />,
                path: inventoryRouteConstants.GET_ALL_LABOUR_ATTENDANCE,
                roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
                depts: [stringConstants.DEPT_INVENTORY],
            },
        ]
    },
    {
        name: "Dump Register",
        logo: <DeleteSweep />,
        path: inventoryRouteConstants.GET_ALL_DUMP_REGISTERS,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Dispatch Register",
        logo: <FormatIndentDecrease />,
        path: inventoryRouteConstants.GET_ALL_VEHILCE_DISPATCH_REGISTER,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Second Sale",
        logo: <GridViewOutlined />,
        path: inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "EOD Report",
        logo: <Assessment />,
        path: inventoryRouteConstants.GET_ALL_EOD_REPORT,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY],
    },
    {
        name: "Sales Orders",
        logo: <Article />,
        path: SALES_ROUTES.GET_ALL_SALES_ORDER,
        roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY]
    },
    {
        name: "Return By Customer",
        logo: <FormatListBulleted />,
        path: SALES_ROUTES.GET_ALL_RBC,
        roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY]
    },
    {
        name: "Proforma Invoices",
        logo: <Analytics />,
        path: inventoryRouteConstants.GET_ALL_PROFORMA_INVOICES,
        roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_INVENTORY]
    },
   
]