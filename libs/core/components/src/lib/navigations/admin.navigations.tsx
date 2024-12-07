import { AddShoppingCart, Category } from '@mui/icons-material';
import {
  GridViewOutlined,
  Groups2,
  LocationOn,
  Scale,
  MoreHoriz
} from "@mui/icons-material";
import { Navigations } from '@prime-fresh/modules';
import { stringConstants } from "@prime-fresh/modules";
import {ADMIN_ROUTES} from "@prime-fresh/admin/modules";

export const adminNavigations: Navigations[] = [
  {
    name: "Dashboard",
    logo: <GridViewOutlined />,
    path: ADMIN_ROUTES.DASHBOARD_ADMIN,
    roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
    depts: [stringConstants.DEPT_ADMIN]
  },
  {
    name: "Users",
    logo: <Groups2 />,
    roles: [stringConstants.ROLE_ADMIN],
    depts: [stringConstants.DEPT_ADMIN],
    children: [
      { name: "Employee", path: ADMIN_ROUTES.GET_ALL_EMPLOYEES, roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER], depts:[stringConstants.DEPT_ADMIN] },
      { name: "Vendors", path: ADMIN_ROUTES.GET_ALL_VENDORS, roles: [stringConstants.ROLE_ADMIN], depts:[stringConstants.DEPT_ADMIN] },
      { name: "Customers", path: ADMIN_ROUTES.GET_ALL_CUSTOMERS, roles: [stringConstants.ROLE_ADMIN], depts:[stringConstants.DEPT_ADMIN] },
      { name: "Farmers", path: ADMIN_ROUTES.GET_ALL_FARMERS, roles: [stringConstants.ROLE_ADMIN], depts:[stringConstants.DEPT_ADMIN] },
    ],
  },
  {
    name: "Products",
    logo: <AddShoppingCart />,
    roles: [stringConstants.ROLE_ADMIN],
    depts: [stringConstants.DEPT_ADMIN],
    children: [
      { name: "Products", path: ADMIN_ROUTES.GET_ALL_PRODUCTS, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
      { name: "Product Classification", path: ADMIN_ROUTES.GET_ALL_PRODUCT_CLASS, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
      { name: "Product Category", path: ADMIN_ROUTES.GET_ALL_PRODUCT_CAT, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
      { name: "Product Subcategory", path: ADMIN_ROUTES.GET_ALL_PRODUCT_SUBCAT, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
    ],
  },
  {
    name: "UOM",
    logo: <Scale />,
    roles: [stringConstants.ROLE_ADMIN],
    depts: [stringConstants.DEPT_ADMIN],
    children: [
      { name: "UOM", path: ADMIN_ROUTES.GET_ALL_UOMs, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
      { name: "UOM Conversion", path: ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
    ],
  },
  {
    name: "Locations",
    logo: <LocationOn />,
    roles: [stringConstants.ROLE_ADMIN],
    depts: [stringConstants.DEPT_ADMIN],
    children: [
      { name: "Registered Office", path: ADMIN_ROUTES.GET_REGISTERED_OFFICE, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
      { name: "Corporate Office", path: ADMIN_ROUTES.GET_CORPORATE_OFFICE, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
      {
        name: "Branches",
        roles: [stringConstants.ROLE_ADMIN],
        depts: [stringConstants.DEPT_ADMIN],
        grandChildren: [
          { name: "Collection Center (CC)", path: ADMIN_ROUTES.LOCATIONS_BRANCHES_CC, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
          { name: "Distribution Center (DC)", path: ADMIN_ROUTES.LOCATIONS_BRANCHES_DC, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
          { name: "Seasonal CC", path: ADMIN_ROUTES.LOCATIONS_BRANCHES_SEASONAL_CC, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
          { name: "Warehouses (WH)", path: ADMIN_ROUTES.LOCATIONS_BRANCHES_WAREHOUSES_WH, roles: [stringConstants.ROLE_ADMIN], depts: [stringConstants.DEPT_ADMIN] },
        ]
      },
    ]
  },
  {
    name: "Others",
    logo: <MoreHoriz />,
    roles: [stringConstants.ROLE_ADMIN],
    depts: [stringConstants.DEPT_ADMIN],
    children: [
      {
        name: "Vendor Category",
        logo: <Category />,
        path: ADMIN_ROUTES.GET_ALL_VENDORS_CAT,
        roles: [stringConstants.ROLE_ADMIN],
        depts: [stringConstants.DEPT_ADMIN]
      },
      {
        name: "Vendor Subategory",
        logo: <Category />,
        path: ADMIN_ROUTES.GET_ALL_VENDORS_SUBCAT,
        roles: [stringConstants.ROLE_ADMIN],
        depts: [stringConstants.DEPT_ADMIN]
      },
    ],
  },
];
