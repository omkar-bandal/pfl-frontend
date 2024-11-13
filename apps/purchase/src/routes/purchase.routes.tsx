import { createBrowserRouter, Outlet } from "react-router-dom";
import { SignIn } from "@prime-fresh/authentication";
import { ErrorPage } from "@prime-fresh/ui_shared";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import {Layout} from "@prime-fresh/components";
import { STRINGS } from "@prime-fresh/modules";
import {RFPAForm, DashboardPurchase} from "@prime-fresh/purchase/components";

export const PurchaseRoutes = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
        errorElement: <ErrorPage />
    },
    {
        path: PURCHASE_ROUTES.PURCHASE,
        element: (<Layout role={STRINGS.ROLE_EMPLOYEE}>
            <Outlet />
        </Layout>),
        errorElement: <ErrorPage />,
        children: [
            {
                path: PURCHASE_ROUTES.DASHBOARD_PURCHASE,
                element: <DashboardPurchase />
            },
            {
                path: PURCHASE_ROUTES.GET_ALL_RFPA,
                element: <RFPAForm/>
            }
        ]
    }
])