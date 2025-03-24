import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout, SignIn } from "@prime-fresh/components";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { PurchaseRoutes } from "./purchase.routes";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { AdminRoutes } from "./admin.routes";
// import { CustomerForm } from "@prime-fresh/shared/masters/customer";
// import { VendorCreateForm } from "@prime-fresh/shared/masters/vendor";
// import { FarmerCreateForm } from "@prime-fresh/shared/masters/farmer";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { InventoryRoutes } from "./inventory.routes";
import { ErrorBoundary, ErrorFallback } from "@prime-fresh/ui_shared";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";
import { SalesRoutes } from "./sales.routes";
import { lazy } from "react";

const CustomerForm = lazy(() => import("@prime-fresh/shared/masters/customer").then(mod => ({ default: mod.CustomerForm })));
const VendorForm = lazy(() => import("@prime-fresh/shared/components").then(mod => ({ default: mod.VendorRegistrationForm })));
const FarmerForm = lazy(() => import("@prime-fresh/shared/components").then(mod => ({ default: mod.FarmerRegistrationForm })));
const ProductForm = lazy(() => import("@prime-fresh/shared/components").then(mod => ({ default: mod.ProductCreateForm })));

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
                element: <CustomerForm />,
            },
            {
                path: ADMIN_ROUTES.CREATE_VENDOR,
                element: <VendorForm />,
            },
            {
                path: ADMIN_ROUTES.CREATE_FARMER,
                element: <FarmerForm />,
            },
            {
                path: ADMIN_ROUTES.CREATE_PRODUCT,
                element: <ProductForm />,
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