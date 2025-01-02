import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout, SignIn } from "@prime-fresh/components";
import { stringConstants } from "@prime-fresh/modules";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { PurchaseRoutes } from "./purchase.routes";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { AdminRoutes } from "./admin.routes";
import { CustomerForm } from "@prime-fresh/shared/masters/customer";
import { VendorForm } from "@prime-fresh/shared/masters/vendor";
import { FarmerForm } from "@prime-fresh/shared/masters/farmer";
import { ProductForm } from "@prime-fresh/shared/masters/products";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { InventoryRoutes } from "./inventory.routes";

export const HostRoutes = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
    },
    {
        path: ADMIN_ROUTES.CREATE_CUSTOMER,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <CustomerForm />
            </Layout>),
    },
    {
        path: ADMIN_ROUTES.CREATE_VENDOR,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <VendorForm />
            </Layout>),
    },
    {
        path: ADMIN_ROUTES.CREATE_FARMER,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <FarmerForm />
            </Layout>),
    },
    {
        path: ADMIN_ROUTES.CREATE_PRODUCT,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <ProductForm />
            </Layout>),
    },
    {
        path: ADMIN_ROUTES.ADMIN,
        element:
            (<Layout role={stringConstants.ROLE_ADMIN}>
                <Outlet />
            </Layout>),
        children: AdminRoutes
    },
    {
        path: PURCHASE_ROUTES.PURCHASE,
        element: (<Layout role={stringConstants.ROLE_EMPLOYEE}>
            <Outlet />
        </Layout>),
        children: PurchaseRoutes,
    },
    {
        path: inventoryRouteConstants.INVENTORY,
        element: (<Layout role={stringConstants.ROLE_EMPLOYEE}>
            <Outlet />
        </Layout>),
        children: InventoryRoutes,
    }
])