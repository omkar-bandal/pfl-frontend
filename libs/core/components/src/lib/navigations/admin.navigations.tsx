import { AddShoppingCart, Approval, Category } from '@mui/icons-material';
import { GridViewOutlined, Groups2, LocationOn, Scale } from '@mui/icons-material';
import { Navigations } from '@prime-fresh/modules';
import { stringConstants } from '@prime-fresh/modules';
import { ADMIN_ROUTES, adminRoutes, STRINGS } from '@prime-fresh/admin/modules';

export const adminNavigations: Navigations[] = [
  {
    name: 'Dashboard',
    uniqueKey: 'dashboard',
    logo: <GridViewOutlined />,
    path: ADMIN_ROUTES.DASHBOARD_ADMIN,
  },
  // {
  //   name: "Level",
  //   logo: <GridViewOutlined />,
  //   path: adminRoutes.CREATE_LEVEL,
  // },
  {
    name: 'Users',
    uniqueKey: 'users',
    logo: <Groups2 />,
    children: [
      {
        name: 'Employee',
        uniqueKey: 'employees',
        path: ADMIN_ROUTES.GET_ALL_EMPLOYEES,
      },
      { name: 'Farmers', uniqueKey: 'farmers', path: ADMIN_ROUTES.GET_ALL_FARMERS },
      {
        name: 'Vendors',
        uniqueKey: 'vendors',
        grandChildren: [
          {
            name: 'Vendor',
            uniqueKey: 'vendors',
            path: ADMIN_ROUTES.GET_ALL_VENDORS,
          },
          {
            name: 'Vendor Category',
            uniqueKey: 'vendor-category',
            logo: <Category />,
            path: ADMIN_ROUTES.GET_ALL_VENDORS_CAT,
          },
          {
            name: 'Vendor Subategory',
            uniqueKey: 'vendor-subcategory',
            logo: <Category />,
            path: ADMIN_ROUTES.GET_ALL_VENDORS_SUBCAT,
          },
        ],
      },
      {
        name: 'Customers',
        uniqueKey: 'customer',
        grandChildren: [
          {
            name: 'Customer',
            uniqueKey: 'customer',
            path: ADMIN_ROUTES.GET_ALL_CUSTOMERS,
          },
          {
            name: 'Customer Type',
            uniqueKey: 'customer-type',
            path: ADMIN_ROUTES.GET_ALL_CUSTOMER_TYPES,
          },
          {
            name: 'Customer Category',
            uniqueKey: 'customer-category',
            path: ADMIN_ROUTES.GET_ALL_CUSTOMER_CAT,
          },
        ],
      },
    ],
  },
  {
    name: 'Approval Module',
    uniqueKey: 'approval-module',
    logo: <Approval />,
    path: adminRoutes.CREATE_APPROVAL_FLOW
  },
  {
    name: 'Product',
    uniqueKey: 'products',
    logo: <AddShoppingCart />,
    children: [
      {
        name: 'Products',
        path: ADMIN_ROUTES.GET_ALL_PRODUCTS,
        uniqueKey: 'products',
      },
      {
        name: 'Product Classification',
        uniqueKey: 'products-claasification',
        path: ADMIN_ROUTES.GET_ALL_PRODUCT_CLASS,
      },
      {
        name: 'Product Category',
        uniqueKey: 'products-category',
        path: ADMIN_ROUTES.GET_ALL_PRODUCT_CAT,
      },
      {
        name: 'Product Subcategory',
        uniqueKey: 'products-subcategory',
        path: ADMIN_ROUTES.GET_ALL_PRODUCT_SUBCAT,
      },
    ],
  },
  {
    name: 'Packaging Material',
    uniqueKey: 'packing-material',
    logo: <AddShoppingCart />,
    path: adminRoutes.VIEW_ALL_PACKAGING_MATERIAL,
  },
  {
    name: 'UoM',
    uniqueKey: 'uom',
    logo: <Scale />,
    children: [
      {
        name: 'Units',
        uniqueKey: 'units',
        path: ADMIN_ROUTES.GET_ALL_UOMs,
      },
      {
        name: 'UOM Conversion',
        uniqueKey: 'uom-conversion',
        path: ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX,
      },
    ],
  },
  {
    name: 'Locations',
    uniqueKey: 'location',
    logo: <LocationOn />,
    depts: [stringConstants.DEPT_ADMIN],
    children: [
      {
        name: 'Registered Office',
        path: `${ADMIN_ROUTES.GET_ALL_OFFICES}/${STRINGS.REGISTERED_OFFICE}`,
        uniqueKey: 'registered-office',
      },
      {
        name: 'Corporate Office',
        uniqueKey: 'corporate-office',
        path: `${ADMIN_ROUTES.GET_ALL_OFFICES}/${STRINGS.CORPORATE_OFFICE}`,
      },
      {
        name: 'Branches',
        uniqueKey: 'branches',
        grandChildren: [
          {
            name: 'Collection Center (CC)',
            uniqueKey: 'cc',
            path: `${ADMIN_ROUTES.GET_ALL_BRANCHES}/${STRINGS.CC}`,
            depts: [stringConstants.DEPT_ADMIN],
          },
          {
            name: 'Distribution Center (DC)',
            uniqueKey: 'dc',
            path: `${ADMIN_ROUTES.GET_ALL_BRANCHES}/${STRINGS.DC}`,
            depts: [stringConstants.DEPT_ADMIN],
          },
          {
            name: 'Seasonal CC',
            uniqueKey: 'seasonal-cc',
            path: `${ADMIN_ROUTES.GET_ALL_BRANCHES}/${STRINGS.SEASONAL_CC}`,
            depts: [stringConstants.DEPT_ADMIN],
          },
          {
            name: 'Warehouses (WH)',
            uniqueKey: 'wh',
            path: `${ADMIN_ROUTES.GET_ALL_BRANCHES}/${STRINGS.WH}`,
            depts: [stringConstants.DEPT_ADMIN],
          },
        ],
      },
    ],
  },
];
