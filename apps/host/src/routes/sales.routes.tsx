import { salesRoutes } from "@prime-fresh/sales/modules";
import { Outlet } from "react-router-dom";
import {
    DashboardSales,
    SalesOrderCreateForm,
    SalesOrderTable,
    SalesOrderUpdateForm,
    SalesOrderView,
    ReturnedByCustomerForm,
    ReturnedByCustomerTable,
    ReturnedByCustomerView
} from "@prime-fresh/sales/components";

export const SalesRoutes = [
    {
        path: salesRoutes.DASHBOARD_SALES,
        element: <DashboardSales />,
    },
    {
        path: salesRoutes.SALES_ORDER,
        element: <Outlet />,
        children: [
            {
                path: salesRoutes.GET_ALL_SALES_ORDER,
                element: <SalesOrderTable />
            },
            {
                path: salesRoutes.CREATE_SALES_ORDER,
                element: <SalesOrderCreateForm />
            },
            {
                path: `${salesRoutes.VIEW_SALES_ORDER}/:id`,
                element: <SalesOrderView />
            },
            {
                path: `${salesRoutes.UPDATE_SALES_ORDER}/:id`,
                element: <SalesOrderUpdateForm />
            },
        ]
    },
    {
        path: salesRoutes.RBC,
        element: <Outlet />,
        children: [
            {
                path: salesRoutes.GET_ALL_RBC,
                element: <ReturnedByCustomerTable />
            },
            {
                path: salesRoutes.CREATE_RBC,
                element: <ReturnedByCustomerForm />
            },
            {
                path: `${salesRoutes.VIEW_RBC}/:id`,
                element: <ReturnedByCustomerView />
            },
            {
                path: `${salesRoutes.UPDATE_RBC}/:id`,
                element: <ReturnedByCustomerForm />
            },
        ]
    },
]