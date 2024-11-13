import { createBrowserRouter, Outlet } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { ErrorPage } from "@prime-fresh/ui_shared";
import { SignIn } from "@prime-fresh/authentication";
import {Layout} from "@prime-fresh/components";
import { STRINGS } from "@prime-fresh/modules";
import {DashboardAdmin} from "@prime-fresh/admin/components";

export const AdminRoutes = createBrowserRouter([
    {
        path: "/",
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
        children: [
            {
                path: ADMIN_ROUTES.DASHBOARD_ADMIN,
                element: <DashboardAdmin />,
            }
        ],
    },

])