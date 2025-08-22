import { createBrowserRouter, Outlet } from 'react-router-dom';
import { AllNotifications, Layout, SignIn } from '@prime-fresh/components';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { PurchaseRoutes } from './purchase.routes';
import { ADMIN_ROUTES } from '@prime-fresh/admin/modules';
import { AdminRoutes } from './admin.routes';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { InventoryRoutes } from './inventory.routes';
import { ErrorBoundary, ErrorFallback } from '@prime-fresh/ui_shared';
import { salesRoutes } from '@prime-fresh/sales/modules';
import { SalesRoutes } from './sales.routes';
import { lazy } from 'react';
import { sharedRoutes } from '@prime-fresh/shared/modules';
import { StockTable } from '@prime-fresh/inventory/components';

const Dashboard = lazy(() =>
  import('@prime-fresh/shared/components').then((mod) => ({
    default: mod.Dashboard,
  }))
);
const CustomerForm = lazy(() =>
  import('@prime-fresh/shared/components').then((mod) => ({
    default: mod.CustomerRegistrationForm,
  }))
);
const VendorForm = lazy(() =>
  import('@prime-fresh/shared/components').then((mod) => ({
    default: mod.VendorRegistrationForm,
  }))
);
const FarmerForm = lazy(() =>
  import('@prime-fresh/shared/components').then((mod) => ({
    default: mod.FarmerRegistrationForm,
  }))
);
const ProductForm = lazy(() =>
  import('@prime-fresh/shared/components').then((mod) => ({
    default: mod.ProductCreateForm,
  }))
);
// const StockTable = lazy(() =>
//   import('@prime-fresh/shared/components').then((mod) => ({
//     default: mod.StockTable,
//   }))
// );
const StockLocationWiseTable = lazy(() =>
  import('@prime-fresh/shared/components').then((mod) => ({
    default: mod.StockLocationWiseTable,
  }))
);
const StockProductWiseTable = lazy(() =>
  import('@prime-fresh/shared/components').then((mod) => ({
    default: mod.StockProductWiseTable,
  }))
);
const StockView = lazy(() =>
  import('@prime-fresh/shared/components').then((mod) => ({
    default: mod.StockView,
  }))
);

export const HostRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: sharedRoutes.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: sharedRoutes.ALL_NOTIFICATIONS,
        element: <AllNotifications />,
      },
      {
        path: sharedRoutes.GET_ALL_STOCK,
        element: <StockTable />,
      },
      {
        path: `${sharedRoutes.GET_STOCK_BY_LOCATION}/:location/:companyName`,
        element: <StockLocationWiseTable />,
      },
      {
        path: `${sharedRoutes.GET_STOCK_BY_PRODUCT}/:product/:location/:companyName`,
        element: <StockProductWiseTable />,
      },
      {
        path: `${sharedRoutes.GET_STOCK_BY_ID}/:id`,
        element: <StockView />,
      },
      {
        path: sharedRoutes.CREATE_CUSTOMER,
        element: <CustomerForm />,
      },
      {
        path: sharedRoutes.CREATE_VENDOR,
        element: <VendorForm />,
      },
      {
        path: sharedRoutes.CREATE_FARMER,
        element: <FarmerForm />,
      },
      {
        path: sharedRoutes.CREATE_PRODUCT,
        element: <ProductForm />,
      },
      {
        path: ADMIN_ROUTES.ADMIN,
        element: (
          <ErrorBoundary FallbackCompnent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        ),
        children: AdminRoutes,
      },
      {
        path: PURCHASE_ROUTES.PURCHASE,
        element: (
          <ErrorBoundary FallbackCompnent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        ),
        children: PurchaseRoutes,
      },
      {
        path: salesRoutes.SALES,
        element: (
          <ErrorBoundary FallbackCompnent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        ),
        children: SalesRoutes,
      },
      {
        path: inventoryRouteConstants.INVENTORY,
        element: (
          <ErrorBoundary FallbackCompnent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        ),
        children: InventoryRoutes,
      },
    ],
  },
]);
