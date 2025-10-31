import { NavigationConfig } from './navigation.type';
import { sharedRoutes } from '@prime-fresh/shared/modules';
import { adminRoutes, adminStaticData } from '@prime-fresh/admin/modules';
import {
  Approval,
  Category,
  Inventory,
  LocalMall,
  GridViewOutlined,
  Groups2,
  LocationOn,
  Scale,
  Person,
} from '@mui/icons-material';

export const adminNavigations: NavigationConfig[] = [
  {
    name: 'Dashboard',
    uniqueKey: 'dashboard',
    logo: <GridViewOutlined />,
    path: adminRoutes.DASHBOARD_ADMIN,
  },
  {
    name: 'Users',
    uniqueKey: 'employees',
    logo: <Person/>,
    path: adminRoutes.VIEW_ALL_EMPLOYEES,
  },
  {
    name: 'Users Reports',
    uniqueKey: 'employees',
    logo: <Person/>,
    path: sharedRoutes.USER_REPORTS,
  },
  {
    name: 'Approval Module',
    uniqueKey: 'approval-module',
    logo: <Approval />,
    children: [
      {
        name: 'For Procurement',
        uniqueKey: 'approval-module-for-purchase',
        path: `${adminRoutes.VIEW_ALL_APPROVAL_FLOWS}/${adminStaticData.documentType.PURCHASE}`,
      },
      {
        name: 'For Sales',
        uniqueKey: 'approval-module-for-purchase',
        path: `${adminRoutes.VIEW_ALL_APPROVAL_FLOWS}/${adminStaticData.documentType.SALES}`,
      },
      {
        name: 'For Operations',
        uniqueKey: 'approval-module-for-purchase',
        path: `${adminRoutes.VIEW_ALL_APPROVAL_FLOWS}/${adminStaticData.documentType.OPERATIONS}`,
      },
    ],
  },
  {
    name: 'Registrations',
    uniqueKey: 'registrations',
    logo: <Groups2 />,
    children: [
      {
        name: 'Farmers',
        uniqueKey: 'farmers',
        path: sharedRoutes.VIEW_ALL_FARMER,
      },
      {
        name: 'Vendors',
        uniqueKey: 'vendors',
        grandChildren: [
          {
            name: 'Vendor',
            uniqueKey: 'vendors',
            path: sharedRoutes.VIEW_ALL_VENDOR,
          },
          {
            name: 'Vendor Category',
            uniqueKey: 'vendor-category',
            logo: <Category />,
            path: adminRoutes.VIEW_ALL_VENDORS_CAT,
          },
          {
            name: 'Vendor Subategory',
            uniqueKey: 'vendor-subcategory',
            logo: <Category />,
            path: adminRoutes.VIEW_ALL_VENDORS_SUBCAT,
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
            path: sharedRoutes.VIEW_ALL_CUSTOMER,
          },
          {
            name: 'Customer Type',
            uniqueKey: 'customer-type',
            path: adminRoutes.VIEW_ALL_CUSTOMER_TYPES,
          },
          {
            name: 'Customer Category',
            uniqueKey: 'customer-category',
            path: adminRoutes.VIEW_ALL_CUSTOMER_CAT,
          },
        ],
      },
    ],
  },
  {
    name: 'Product',
    uniqueKey: 'products',
    logo: <LocalMall />,
    children: [
      {
        name: 'Products',
        path: sharedRoutes.VIEW_ALL_PRODUCT,
        uniqueKey: 'products',
      },
      {
        name: 'Product Classification',
        uniqueKey: 'products-claasification',
        path: adminRoutes.VIEW_ALL_PRODUCT_CLASS,
      },
      {
        name: 'Product Category',
        uniqueKey: 'products-category',
        path: adminRoutes.VIEW_ALL_PRODUCT_CAT,
      },
      {
        name: 'Product Subcategory',
        uniqueKey: 'products-subcategory',
        path: adminRoutes.VIEW_ALL_PRODUCT_SUBCAT,
      },
    ],
  },
  {
    name: 'Packaging Material',
    uniqueKey: 'packing-material',
    logo: <Inventory />,
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
        path: adminRoutes.VIEW_ALL_UOMs,
      },
      {
        name: 'UOM Conversion',
        uniqueKey: 'uom-conversion',
        path: adminRoutes.VIEW_ALL_UOMs_CONV_MATRIX,
      },
    ],
  },
  {
    name: 'Locations',
    uniqueKey: 'location',
    logo: <LocationOn />,
    children: [
      {
        name: 'Registered Office',
        path: `${adminRoutes.VIEW_ALL_OFFICES}/${adminStaticData.officeType.REGISTERED_OFFICE}`,
        uniqueKey: 'registered-office',
      },
      {
        name: 'Corporate Office',
        uniqueKey: 'corporate-office',
        path: `${adminRoutes.VIEW_ALL_OFFICES}/${adminStaticData.officeType.CORPORATE_OFFICE}`,
      },
      {
        name: 'Branches',
        uniqueKey: 'branches',
        grandChildren: [
          {
            name: 'Collection Center (CC)',
            uniqueKey: 'cc',
            path: `${adminRoutes.VIEW_ALL_BRANCHES}/${adminStaticData.branchType.CC}`,
          },
          {
            name: 'Distribution Center (DC)',
            uniqueKey: 'dc',
            path: `${adminRoutes.VIEW_ALL_BRANCHES}/${adminStaticData.branchType.DC}`,
          },
          {
            name: 'Seasonal CC',
            uniqueKey: 'seasonal-cc',
            path: `${adminRoutes.VIEW_ALL_BRANCHES}/${adminStaticData.branchType.SEASONAL_CC}`,
          },
          {
            name: 'Warehouses (WH)',
            uniqueKey: 'wh',
            path: `${adminRoutes.VIEW_ALL_BRANCHES}/${adminStaticData.branchType.WH}`,
          },
        ],
      },
    ],
  },
];
