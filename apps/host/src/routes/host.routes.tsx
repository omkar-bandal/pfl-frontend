import { createBrowserRouter, Outlet } from "react-router-dom";
import { AUTH_ROUTES, SignIn } from "@prime-fresh/authentication";
import { ErrorPage } from "@prime-fresh/ui_shared";
import { Layout } from "@prime-fresh/components";
import { STRINGS } from "@prime-fresh/modules";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { PurchaseRoutes } from "./purchase.routes";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { AdminRoutes } from "./admin.routes";
import { CustomerForm } from "@prime-fresh/shared/masters/customer";
import { VendorForm } from "@prime-fresh/shared/masters/vendor";
import { FarmerForm } from "@prime-fresh/shared/masters/farmer";
import { ProductForm } from "@prime-fresh/shared/masters/products";

export const HostRoutes = createBrowserRouter([
    {
        path: AUTH_ROUTES.SIGN_IN,
        element: <SignIn />,
        errorElement: <ErrorPage />
    },
    {
        path: ADMIN_ROUTES.CREATE_CUSTOMER,
        element:
            (<Layout role={STRINGS.ROLE_ADMIN}>
                <CustomerForm />
            </Layout>),
        errorElement: <ErrorPage />,
    },
    {
        path: ADMIN_ROUTES.CREATE_VENDOR,
        element:
            (<Layout role={STRINGS.ROLE_ADMIN}>
                <VendorForm />
            </Layout>),
        errorElement: <ErrorPage />,
    },
    {
        path: ADMIN_ROUTES.CREATE_FARMER,
        element:
            (<Layout role={STRINGS.ROLE_ADMIN}>
                <FarmerForm />
            </Layout>),
        errorElement: <ErrorPage />,
    },
    {
        path: ADMIN_ROUTES.CREATE_PRODUCT,
        element:
            (<Layout role={STRINGS.ROLE_ADMIN}>
                <ProductForm />
            </Layout>),
        errorElement: <ErrorPage />,
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