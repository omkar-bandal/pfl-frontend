import { SALES_ROUTES } from "@prime-fresh/sales/modules";
import { Outlet } from "react-router-dom";
import { DashboardSales, RBCCreateForm, RBCTable, RBCUpdateForm, RBCView, SalesOrderCreateForm, SalesOrderTable, SalesOrderUpdateForm, SalesOrderView } from "@prime-fresh/sales/components";

export const SalesRoutes = [
    {
        path: SALES_ROUTES.DASHBOARD_SALES,
        element: <DashboardSales />,
    },
    {
        path: SALES_ROUTES.SALES_ORDER,
        element: <Outlet />,
        children: [
            {
                path: SALES_ROUTES.GET_ALL_SALES_ORDER,
                element: <SalesOrderTable />
            },
            {
                path: SALES_ROUTES.CREATE_SALES_ORDER,
                element: <SalesOrderCreateForm />
            },
            {
                path: `${SALES_ROUTES.VIEW_SALES_ORDER}/:id`,
                element: <SalesOrderView />
            },
            {
                path: `${SALES_ROUTES.UPDATE_SALES_ORDER}/:id`,
                element: <SalesOrderUpdateForm />
            },
        ]
    },
    {
        path: SALES_ROUTES.RBC,
        element: <Outlet />,
        children: [
            {
                path: SALES_ROUTES.GET_ALL_RBC,
                element: <RBCTable />
            },
            {
                path: SALES_ROUTES.CREATE_RBC,
                element: <RBCCreateForm />
            },
            {
                path: `${SALES_ROUTES.VIEW_RBC}/:id`,
                element: <RBCView />
            },
            {
                path: `${SALES_ROUTES.UPDATE_RBC}/:id`,
                element: <RBCUpdateForm />
            },
        ]
    },
]