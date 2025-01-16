import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout, SignIn } from "@prime-fresh/components";
import { stringConstants } from "@prime-fresh/modules";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { PurchaseRoutes } from "./purchase.routes";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { AdminRoutes } from "./admin.routes";
import { CustomerForm } from "@prime-fresh/shared/masters/customer";
import { VendorCreateForm } from "@prime-fresh/shared/masters/vendor";
import { FarmerCreateForm } from "@prime-fresh/shared/masters/farmer";
import { ProductCreateForm } from "@prime-fresh/shared/masters/products";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { InventoryRoutes } from "./inventory.routes";
import { ErrorBoundary, ErrorFallback } from "@prime-fresh/ui_shared";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";
import { SalesRoutes } from "./sales.routes";

export const HostRoutes = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
    },
    {
        path: ADMIN_ROUTES.CREATE_CUSTOMER,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <ErrorBoundary FallbackCompnent={ErrorFallback}>
                    <CustomerForm />
                </ErrorBoundary>
            </Layout>),
    },
    {
        path: ADMIN_ROUTES.CREATE_VENDOR,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <ErrorBoundary FallbackCompnent={ErrorFallback}>
                    <VendorCreateForm />
                </ErrorBoundary>
            </Layout>),
    },
    {
        path: ADMIN_ROUTES.CREATE_FARMER,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <ErrorBoundary FallbackCompnent={ErrorFallback}>
                    <FarmerCreateForm />
                </ErrorBoundary>
            </Layout>),
    },
    {
        path: ADMIN_ROUTES.CREATE_PRODUCT,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <ErrorBoundary FallbackCompnent={ErrorFallback}>
                    <ProductCreateForm/>
                </ErrorBoundary>
            </Layout>),
    },
    {
        path: ADMIN_ROUTES.ADMIN,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <ErrorBoundary FallbackCompnent={ErrorFallback}>
                    <Outlet />
                </ErrorBoundary>
            </Layout>),
        children: AdminRoutes
    },
    {
        path: PURCHASE_ROUTES.PURCHASE,
        element: (<Layout role={stringConstants.ROLE_EMPLOYEE}>
            <ErrorBoundary FallbackCompnent={ErrorFallback}>
                <Outlet />
            </ErrorBoundary>
        </Layout>),
        children: PurchaseRoutes,
    },
    {
        path: SALES_ROUTES.SALES,
        element: (<Layout role={stringConstants.ROLE_EMPLOYEE}>
            <ErrorBoundary FallbackCompnent={ErrorFallback}>
                <Outlet />
            </ErrorBoundary>
        </Layout>),
        children: SalesRoutes,
    },
    {
        path: inventoryRouteConstants.INVENTORY,
        element: (<Layout role={stringConstants.ROLE_EMPLOYEE}>
            <ErrorBoundary FallbackCompnent={ErrorFallback}>
                <Outlet />
            </ErrorBoundary>
        </Layout>),
        children: InventoryRoutes,
    }
])