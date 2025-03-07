import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout, SignIn } from "@prime-fresh/components";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { PurchaseRoutes } from "./purchase.routes";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { AdminRoutes } from "./admin.routes";
import { CustomerForm } from "@prime-fresh/shared/masters/customer";
// import { VendorCreateForm } from "@prime-fresh/shared/masters/vendor";
// import { FarmerCreateForm } from "@prime-fresh/shared/masters/farmer";
import { ProductCreateForm } from "@prime-fresh/shared/masters/products";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { InventoryRoutes } from "./inventory.routes";
import { ErrorBoundary, ErrorFallback } from "@prime-fresh/ui_shared";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";
import { SalesRoutes } from "./sales.routes";
import { VendorRegistrationForm, FarmerRegistrationForm } from "@prime-fresh/shared/components";

export const HostRoutes = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: ADMIN_ROUTES.CREATE_CUSTOMER,
                element:
                    (<ErrorBoundary FallbackCompnent={ErrorFallback}>
                        <CustomerForm />
                    </ErrorBoundary>),
            },
            {
                path: ADMIN_ROUTES.CREATE_VENDOR,
                element:
                    (<ErrorBoundary FallbackCompnent={ErrorFallback}>
                        <VendorRegistrationForm />
                    </ErrorBoundary>),
            },
            {
                path: ADMIN_ROUTES.CREATE_FARMER,
                element:
                    (<ErrorBoundary FallbackCompnent={ErrorFallback}>
                        <FarmerRegistrationForm />
                    </ErrorBoundary>),
            },
            {
                path: ADMIN_ROUTES.CREATE_PRODUCT,
                element:
                    (<ErrorBoundary FallbackCompnent={ErrorFallback}>
                        <ProductCreateForm />
                    </ErrorBoundary>),
            },
            {
                path: ADMIN_ROUTES.ADMIN,
                element:
                    (<ErrorBoundary FallbackCompnent={ErrorFallback}>
                        <Outlet />
                    </ErrorBoundary>),
                children: AdminRoutes
            },
            {
                path: PURCHASE_ROUTES.PURCHASE,
                element: (<ErrorBoundary FallbackCompnent={ErrorFallback}>
                    <Outlet />
                </ErrorBoundary>),
                children: PurchaseRoutes,
            },
            {
                path: SALES_ROUTES.SALES,
                element: (<ErrorBoundary FallbackCompnent={ErrorFallback}>
                    <Outlet />
                </ErrorBoundary>),
                children: SalesRoutes,
            },
            {
                path: inventoryRouteConstants.INVENTORY,
                element: (<ErrorBoundary FallbackCompnent={ErrorFallback}>
                    <Outlet />
                </ErrorBoundary>),
                children: InventoryRoutes,
            }
        ]
    },

])