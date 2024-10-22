import { ADMIN_ROUTES } from "@prime-fresh/admin_modules";
import { DashboardAdmin } from "@prime-fresh/admin_components";

export const AdminRoutes = [
    {
        path: ADMIN_ROUTES.DASHBOARD_ADMIN,
        element: <DashboardAdmin />,
    }
]
