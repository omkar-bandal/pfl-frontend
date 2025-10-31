import { sharedRoutes } from '@prime-fresh/shared/modules';
import { AllNotifications } from '@prime-fresh/components';
import {
  CustomerForm,
  CustomerTable,
  CustomerView,
  Dashboard,
  FarmerForm,
  FarmerTable,
  FarmerView,
  ProductCreateForm,
  ProductTable,
  ProductUpdateForm,
  ProductVariantTable,
  ProductView,
  StockLocationWiseTable,
  StockProductWiseTable,
  StockTable,
  UserReports,
  VendorForm,
  VendorTable,
  VendorView,
} from '@prime-fresh/shared/components';

export const SharedRoutes = [
  {
    path: sharedRoutes.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: sharedRoutes.USER_REPORTS,
    element: <UserReports />,
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
    path: `${sharedRoutes.GET_STOCK_BY_LOCATION}/:location/:companyName`,
    element: <StockLocationWiseTable />,
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
    path: sharedRoutes.PRODUCT,
    children: [
      {
        path: sharedRoutes.VIEW_ALL_PRODUCT,
        element: <ProductTable />,
      },
      {
        path: `${sharedRoutes.VIEW_ALL_PRODUCT_VARIANTS}/:id`,
        element: <ProductVariantTable />,
      },
      {
        path: sharedRoutes.CREATE_PRODUCT,
        element: <ProductCreateForm />,
      },
      {
        path: `${sharedRoutes.UPDATE_PRODUCT}/:id`,
        element: <ProductUpdateForm />,
      },
      {
        path: `${sharedRoutes.VIEW_A_PRODUCT}/:id`,
        element: <ProductView />,
      }
    ]
  },
  {
    path: sharedRoutes.REGISTRATION,
    children: [
      {
        path: sharedRoutes.CUSTOMER,
        children: [
          {
            path: sharedRoutes.VIEW_ALL_CUSTOMER,
            element: <CustomerTable />,
          },
          {
            path: sharedRoutes.CREATE_CUSTOMER,
            element: <CustomerForm />,
          },
          {
            path: `${sharedRoutes.UPDATE_CUSTOMER}/:id`,
            element: <CustomerForm />,
          },
          {
            path: `${sharedRoutes.VIEW_A_CUSTOMER}/:id`,
            element: <CustomerView />,
          }
        ]
      },
      {
        path: sharedRoutes.VENDOR,
        children: [
          {
            path: sharedRoutes.VIEW_ALL_VENDOR,
            element: <VendorTable />,
          },
          {
            path: sharedRoutes.CREATE_VENDOR,
            element: <VendorForm />,
          },
          {
            path: `${sharedRoutes.UPDATE_VENDOR}/:id`,
            element: <VendorForm />,
          },
          {
            path: `${sharedRoutes.VIEW_A_VENDOR}/:id`,
            element: <VendorView />,
          }
        ]
      },
      {
        path: sharedRoutes.FARMER,
        children: [
          {
            path: sharedRoutes.VIEW_ALL_FARMER,
            element: <FarmerTable />,
          },
          {
            path: sharedRoutes.CREATE_FARMER,
            element: <FarmerForm />,
          },
          {
            path: `${sharedRoutes.UPDATE_FARMER}/:id`,
            element: <FarmerForm />,
          },
          {
            path: `${sharedRoutes.VIEW_A_FARMER}/:id`,
            element: <FarmerView />,
          }
        ]
      }
    ]
  },
]
// export const SharedRoutes = () => {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route path={sharedRoutes.DASHBOARD} element={<Dashboard />} />
//         <Route path={sharedRoutes.ALL_NOTIFICATIONS} element={<AllNotifications />} />
//         <Route path={sharedRoutes.GET_ALL_STOCK} element={<StockTable />} />
//         <Route path={sharedRoutes.PRODUCT}>
//           <Route path={sharedRoutes.VIEW_ALL_PRODUCT} element={<ProductTable />} />
//           <Route path={sharedRoutes.VIEW_A_PRODUCT} element={<ProductView />} />
//           <Route path={sharedRoutes.CREATE_PRODUCT} element={<ProductCreateForm />} />
//           <Route path={sharedRoutes.UPDATE_PRODUCT} element={<ProductUpdateForm />} />
//         </Route>
//         <Route path={sharedRoutes.REGISTRATION}>
//           <Route path={sharedRoutes.VENDOR}>
//             <Route index path={sharedRoutes.VIEW_ALL_VENDOR} element={<VendorTable />} />
//             <Route index path={sharedRoutes.VIEW_A_VENDOR} element={<VendorView />} />
//             <Route index path={sharedRoutes.CREATE_VENDOR} element={<VendorForm />} />
//             <Route index path={sharedRoutes.UPDATE_VENDOR} element={<VendorForm />} />
//           </Route>
//           <Route path={sharedRoutes.FARMER}>
//             <Route index path={sharedRoutes.VIEW_ALL_FARMER} element={<FarmerTable />} />
//             <Route index path={sharedRoutes.VIEW_A_FARMER} element={<FarmerView />} />
//             <Route index path={sharedRoutes.CREATE_FARMER} element={<FarmerForm />} />
//             <Route index path={sharedRoutes.UPDATE_FARMER} element={<FarmerForm />} />
//           </Route>
//           <Route path={sharedRoutes.CUSTOMER}>
//             <Route index path={sharedRoutes.VIEW_ALL_CUSTOMER} element={<CustomerTable />} />
//             <Route index path={sharedRoutes.VIEW_A_CUSTOMER} element={<CustomerView />} />
//             <Route index path={sharedRoutes.CREATE_CUSTOMER} element={<CustomerForm />} />
//             <Route index path={sharedRoutes.UPDATE_CUSTOMER} element={<CustomerForm />} />
//           </Route>
//         </Route>
//       </Route>
//     </Routes>
//   );
// };
