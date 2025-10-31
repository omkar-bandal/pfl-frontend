import { adminRoutes } from '@prime-fresh/admin/modules';
import {
  ApprovalFlowForm,
  BranchForm,
  EmployeeTable,
  OfficeForm,
  ProductCatForm,
  ProductCatTable,
  ProductClassForm,
  ProductClassTable,
  ProductSubcatForm,
  ProductSubCatTable,
  UOMConvMatrixForm,
  UOMConvMatrixTable,
  UOMForm,
  UOMTable,
  ViewEmployee,
  EmployeeForm,
  VendorCatForm,
  VendorCatTable,
  VendorSubcatForm,
  VendorSubcatTable,
  BranchTable,
  OfficeTable,
  OfficeView,
  BranchView,
  CustomerTypeTable,
  CustomerTypeForm,
  CustomerCategoryForm,
  CustomerCategoryTable,
  PackagingMaterialTable,
  PackagingMaterialForm,
  PackagingMaterialView,
  ApprovalFlowTable,
} from '@prime-fresh/admin/components';
import {DashboardAdmin} from '@prime-fresh/shared/components';
export const AdminRoutes = [
  {
    path: adminRoutes.DASHBOARD_ADMIN,
    element: <DashboardAdmin />,
  },
  {
    path: adminRoutes.APPROVAL_FLOW,
    children: [
      {
        path: `${adminRoutes.CREATE_APPROVAL_FLOW}/:documentType`,
        element: <ApprovalFlowForm />,
      },
      {
        path: `${adminRoutes.VIEW_ALL_APPROVAL_FLOWS}/:documentType`,
        element: <ApprovalFlowTable />,
      },
      {
        path: `${adminRoutes.UPDATE_APPROVAL_FLOW}/:documentType/:id`,
        element: <ApprovalFlowForm />,
      },
    ],
  },
  {
    path: adminRoutes.EMPLOYEE,
    children: [
      {
        path: adminRoutes.VIEW_ALL_EMPLOYEES,
        element: <EmployeeTable />,
      },
      {
        path: adminRoutes.CREATE_EMPLOYEE,
        element: <EmployeeForm />,
      },
      {
        path: `${adminRoutes.UPDATE_EMPLOYEE}/:id`,
        element: <EmployeeForm />,
      },
      {
        path: `${adminRoutes.VIEW_EMPLOYEE}/:id`,
        element: <ViewEmployee />,
      },
    ]
  },
  {
    path: adminRoutes.CUSTOMER_TYPES,
    children: [
      {
        path: adminRoutes.VIEW_ALL_CUSTOMER_TYPES,
        element: <CustomerTypeTable />,
      },
      {
        path: adminRoutes.CREATE_CUSTOMER_TYPE,
        element: <CustomerTypeForm />,
      },
      {
        path: `${adminRoutes.UPDATE_CUSTOMER_TYPE}/:id`,
        element: <CustomerTypeForm />,
      },
    ]
  },
  {
    path: adminRoutes.CUSTOMER_CAT,
    children: [
      {
        path: adminRoutes.VIEW_ALL_CUSTOMER_CAT,
        element: <CustomerCategoryTable />,
      },
      {
        path: adminRoutes.CREATE_CUSTOMER_CAT,
        element: <CustomerCategoryForm />,
      },
      {
        path: `${adminRoutes.UPDATE_CUSTOMER_CAT}/:id`,
        element: <CustomerCategoryForm />,
      },
    ]
  },
  {
    path: adminRoutes.VENDOR_CAT,
    children: [
      {
        path: adminRoutes.CREATE_VENDORS_CAT,
        element: <VendorCatForm />,
      },
      {
        path: `${adminRoutes.UPDATE_VENDORS_CAT}/:id`,
        element: <VendorCatForm />,
      },
      {
        path: adminRoutes.VIEW_ALL_VENDORS_CAT,
        element: <VendorCatTable />,
      },
    ]
  },
  {
    path: adminRoutes.VENDOR_SUBCAT,
    children: [
      {
        path: adminRoutes.CREATE_VENDORS_SUBCAT,
        element: <VendorSubcatForm />,
      },
      {
        path: `${adminRoutes.UPDATE_VENDORS_SUBCAT}/:id`,
        element: <VendorSubcatForm />,
      },
      {
        path: adminRoutes.VIEW_ALL_VENDORS_SUBCAT,
        element: <VendorSubcatTable />,
      },
    ]
  },
  {
    path: adminRoutes.PRODUCT_CLASS,
    children: [
      {
        path: adminRoutes.VIEW_ALL_PRODUCT_CLASS,
        element: <ProductClassTable />,
      },
      {
        path: adminRoutes.CREATE_PRODUCT_CLASS,
        element: <ProductClassForm />,
      },
      {
        path: `${adminRoutes.UPDATE_PRODUCT_CLASS}/:id`,
        element: <ProductClassForm />,
      },
    ],
  },
  {
    path: adminRoutes.PRODUCT_CAT,
    children: [
      {
        path: adminRoutes.VIEW_ALL_PRODUCT_CAT,
        element: <ProductCatTable />,
      },
      {
        path: adminRoutes.CREATE_PRODUCT_CAT,
        element: <ProductCatForm />,
      },
      {
        path: `${adminRoutes.UPDATE_PRODUCT_CAT}/:id`,
        element: <ProductCatForm />,
      },
    ],
  },
  {
    path: adminRoutes.PRODUCT_SUBCAT,
    children: [
      {
        path: adminRoutes.VIEW_ALL_PRODUCT_SUBCAT,
        element: <ProductSubCatTable />,
      },
      {
        path: adminRoutes.CREATE_PRODUCT_SUBCAT,
        element: <ProductSubcatForm />,
      },
      {
        path: `${adminRoutes.UPDATE_PRODUCT_SUBCAT}/:id`,
        element: <ProductSubcatForm />,
      },
    ],
  },
  {
    path: adminRoutes.UOM,
    children: [
      {
        path: adminRoutes.VIEW_ALL_UOMs,
        element: <UOMTable />,
      },
      {
        path: adminRoutes.CREATE_UOM,
        element: <UOMForm />,
      },
      {
        path: `${adminRoutes.UPDATE_UOM}/:id`,
        element: <UOMForm />,
      },
      {
        path: adminRoutes.VIEW_ALL_UOMs_CONV_MATRIX,
        element: <UOMConvMatrixTable />,
      },
      {
        path: adminRoutes.CREATE_UOMs_CONV_MATRIX,
        element: <UOMConvMatrixForm />,
      },
      {
        path: `${adminRoutes.UPDATE_UOMs_CONV_MATRIX}/:oid`,
        element: <UOMConvMatrixForm />,
      },
    ],
  },
  {
    path: adminRoutes.PACKAGING_MATERIAL,
    children: [
      {
        path: adminRoutes.VIEW_ALL_PACKAGING_MATERIAL,
        element: <PackagingMaterialTable />,
      },
      {
        path: adminRoutes.CREATE_PACKAGING_MATERIAL,
        element: <PackagingMaterialForm />,
      },
      {
        path: `${adminRoutes.UPDATE_PACKAGING_MATERIAL}/:id`,
        element: <PackagingMaterialForm />,
      },
      {
        path: `${adminRoutes.VIEW_PACKAGING_MATERIAL}/:id`,
        element: <PackagingMaterialView />,
      },
    ],
  },
  {
    path: adminRoutes.LOCATIONS,
    children: [
      {
        path: adminRoutes.OFFICES,
        children: [
          {
            path: `${adminRoutes.VIEW_ALL_OFFICES}/:officeType`,
            element: <OfficeTable />,
          },
          {
            path: `${adminRoutes.CREATE_OFFICE}/:officeType`,
            element: <OfficeForm />,
          },
          {
            path: `${adminRoutes.UPDATE_OFFICE}/:officeType/:id`,
            element: <OfficeForm />,
          },
          {
            path: `${adminRoutes.VIEW_AN_OFFICE}/:officeType/:id`,
            element: <OfficeView />,
          },
        ]
      },
      {
        path: adminRoutes.BRANCHES,
        children: [
          {
            path: `${adminRoutes.VIEW_ALL_BRANCHES}/:branchType`,
            element: <BranchTable />,
          },
          {
            path: `${adminRoutes.CREATE_BRANCHES}/:branchType`,
            element: <BranchForm />,
          },
          {
            path: `${adminRoutes.UPDATE_BRANCHES}/:branchType/:id`,
            element: <BranchForm />,
          },
          {
            path: `${adminRoutes.VIEW_A_BRANCHES}/:branchType/:id`,
            element: <BranchView />,
          },
        ],
      },
    ],
  },
];

// export const AdminRoutes = () => {
//   return (
//     <>
//       <Route path={ADMIN_ROUTES.DASHBOARD_ADMIN} element={<DashboardAdmin />} />

//       {/* Approval Flow Routes */}
//       <Route path={adminRoutes.APPROVAL_FLOW}>
//         <Route path={`${adminRoutes.CREATE_APPROVAL_FLOW}/:documentType`} element={<ApprovalFlowForm />} />
//         <Route path={`${adminRoutes.VIEW_ALL_APPROVAL_FLOWS}/:documentType`} element={<ApprovalFlowTable />} />
//         <Route path={`${adminRoutes.UPDATE_APPROVAL_FLOW}/:documentType/:id`} element={<ApprovalFlowForm />} />
//       </Route>

//       {/* Users Routes */}
//       <Route path={ADMIN_ROUTES.USERS}>
//         <Route path={adminRoutes.VIEW_ALL_EMPLOYEES} element={<EmployeeTable />} />
//         <Route path={adminRoutes.CREATE_EMPLOYEE} element={<EmployeeForm />} />
//         <Route path={`${adminRoutes.UPDATE_EMPLOYEE}/:id`} element={<EmployeeForm />} />
//         <Route path={`${adminRoutes.VIEW_EMPLOYEE}/:id`} element={<ViewEmployee />} />
//         <Route path={ADMIN_ROUTES.GET_ALL_CUSTOMER_TYPES} element={<CustomerTypeTable />} />
//         <Route path={ADMIN_ROUTES.CREATE_CUSTOMER_TYPE} element={<CustomerTypeForm />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_CUSTOMER_TYPE}/:id`} element={<CustomerTypeForm />} />
//         <Route path={ADMIN_ROUTES.GET_ALL_CUSTOMER_CAT} element={<CustomerCategoryTable />} />
//         <Route path={ADMIN_ROUTES.CREATE_CUSTOMER_CAT} element={<CustomerCategoryForm />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_CUSTOMER_CAT}/:id`} element={<CustomerCategoryForm />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_VENDORS_CAT}/:id`} element={<VendorCatForm />} />
//         <Route path={ADMIN_ROUTES.GET_ALL_VENDORS_CAT} element={<VendorCatTable />} />
//         <Route path={ADMIN_ROUTES.CREATE_VENDORS_SUBCAT} element={<VendorSubcatForm />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_VENDORS_SUBCAT}/:id`} element={<VendorSubcatForm />} />
//         <Route path={ADMIN_ROUTES.GET_ALL_VENDORS_SUBCAT} element={<VendorSubcatTable />} />
//       </Route>

//       {/* Products Routes */}
//       <Route path={ADMIN_ROUTES.PRODUCTS}>
//         <Route path={ADMIN_ROUTES.GET_ALL_PRODUCTS} element={<ProductTable />} />
//         <Route path={`${ADMIN_ROUTES.GET_A_PRODUCT}/:id`} element={<ViewProduct />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_PRODUCT}/:id`} element={<ProductUpdateForm />} />
//         <Route path={`${ADMIN_ROUTES.GET_ALL_PRODUCT_VARIANTS}/:id`} element={<ProductVariantTable />} />
//         <Route path={ADMIN_ROUTES.GET_ALL_PRODUCT_CLASS} element={<ProductClassTable />} />
//         <Route path={ADMIN_ROUTES.CREATE_PRODUCT_CLASS} element={<ProductClassForm />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_PRODUCT_CLASS}/:id`} element={<ProductClassForm />} />
//         <Route path={ADMIN_ROUTES.GET_ALL_PRODUCT_CAT} element={<ProductCatTable />} />
//         <Route path={ADMIN_ROUTES.CREATE_PRODUCT_CAT} element={<ProductCatForm />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_PRODUCT_CAT}/:id`} element={<ProductCatForm />} />
//         <Route path={ADMIN_ROUTES.GET_ALL_PRODUCT_SUBCAT} element={<ProductSubCatTable />} />
//         <Route path={ADMIN_ROUTES.CREATE_PRODUCT_SUBCAT} element={<ProductSubcatForm />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_PRODUCT_SUBCAT}/:id`} element={<ProductSubcatForm />} />
//       </Route>

//       {/* Packaging Material Routes */}
//       <Route path={adminRoutes.PACKAGING_MATERIAL}>
//         <Route path={adminRoutes.VIEW_ALL_PACKAGING_MATERIAL} element={<PackagingMaterialTable />} />
//         <Route path={adminRoutes.CREATE_PACKAGING_MATERIAL} element={<PackagingMaterialForm />} />
//         <Route path={`${adminRoutes.UPDATE_PACKAGING_MATERIAL}/:id`} element={<PackagingMaterialForm />} />
//         <Route path={`${adminRoutes.VIEW_PACKAGING_MATERIAL}/:id`} element={<PackagingMaterialView />} />
//       </Route>

//       {/* UOM Routes */}
//       <Route path={ADMIN_ROUTES.UOM}>
//         <Route path={ADMIN_ROUTES.GET_ALL_UOMs} element={<UOMTable />} />
//         <Route path={ADMIN_ROUTES.CREATE_UOM} element={<UOMForm />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_UOM}/:id`} element={<UOMForm />} />
//         <Route path={ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX} element={<UOMConvMatrixTable />} />
//         <Route path={ADMIN_ROUTES.CREATE_UOMs_CONV_MATRIX} element={<UOMConvMatrixForm />} />
//         <Route path={`${ADMIN_ROUTES.UPDATE_UOMs_CONV_MATRIX}/:oid`} element={<UOMConvMatrixForm />} />
//       </Route>

//       {/* Locations Routes */}
//       <Route path={ADMIN_ROUTES.LOCATIONS}>
//         <Route path={`${ADMIN_ROUTES.GET_ALL_OFFICES}/:officeType`} element={<OfficeTable />} />
//         <Route path={`${ADMIN_ROUTES.CREATE_OFFICE}/:officeType`} element={<OfficeForm />} />
//         <Route path={`${ADMIN_ROUTES.EDIT_OFFICE}/:officeType/:id`} element={<OfficeForm />} />
//         <Route path={`${ADMIN_ROUTES.VIEW_OFFICE}/:officeType/:id`} element={<OfficeView />} />

//         <Route path={ADMIN_ROUTES.BRANCHES}>
//           <Route path={`${ADMIN_ROUTES.GET_ALL_BRANCHES}/:branchType`} element={<BranchTable />} />
//           <Route path={`${ADMIN_ROUTES.CREATE_BRANCHES}/:branchType`} element={<BranchForm />} />
//           <Route path={`${ADMIN_ROUTES.EDIT_BRANCHES}/:branchType/:id`} element={<BranchForm />} />
//           <Route path={`${ADMIN_ROUTES.VIEW_BRANCHES}/:branchType/:id`} element={<BranchView />} />
//         </Route>
//       </Route>
//     </>
//   );
// };