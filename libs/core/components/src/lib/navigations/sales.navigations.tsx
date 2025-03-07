import { Article, FormatIndentDecrease, FormatListBulleted, GridViewOutlined } from "@mui/icons-material";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { Navigations, stringConstants } from "@prime-fresh/modules";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";

export const salesNavigations: Navigations[] = [
    {
        name: "Dashboard",
        logo: <GridViewOutlined />,
        path: SALES_ROUTES.DASHBOARD_SALES,
        roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_SALES]
    },
    {
        name: "Sales Orders",
        logo: <Article />,
        path: SALES_ROUTES.GET_ALL_SALES_ORDER,
        roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_SALES]
    },
    {
        name: "Return By Customer",
        logo: <FormatListBulleted />,
        path: SALES_ROUTES.GET_ALL_RBC,
        roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_SALES]
    },
    {
        name: "Second Sale",
        logo: <FormatIndentDecrease />,
        path: inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER,
        roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_SALES]
    }
]