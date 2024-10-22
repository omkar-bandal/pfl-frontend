import { createBrowserRouter, Outlet } from "react-router-dom";
import { AUTH_ROUTES, SignIn } from "@prime-fresh/authentication";
import { ErrorPage } from "@prime-fresh/ui_shared";
import {Layout} from "@prime-fresh/components";
import { STRINGS } from "@prime-fresh/modules";
import { ADMIN_ROUTES } from "@prime-fresh/admin_modules";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { AdminRoutes } from "./admin.routes";
import { PurchaseRoutes } from "./purchase.routes";

export const HostRoutes = createBrowserRouter([
    {
        path: AUTH_ROUTES.SIGN_IN,
        element: <SignIn />,
        errorElement: <ErrorPage />
    },
    {
        path: ADMIN_ROUTES.ADMIN,
        element:
            (<Layout role={STRINGS.ROLE_ADMIN}>
                <Outlet />
            </Layout>),
        errorElement: <ErrorPage />,
        children: AdminRoutes
    },
    {
        path: PURCHASE_ROUTES.PURCHASE,
        element: (<Layout role={STRINGS.ROLE_EMPLOYEE}>
            <Outlet />
        </Layout>),
        errorElement: <ErrorPage />,
        children: PurchaseRoutes,
    }
])