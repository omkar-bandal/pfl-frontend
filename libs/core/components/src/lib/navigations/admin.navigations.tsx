import { AddShoppingCart } from '@mui/icons-material';
import {
  GridViewOutlined,
  Groups2,
  LocationOn,
  Scale,
  MoreHoriz
} from "@mui/icons-material";
import { Navigations } from '@prime-fresh/modules';
import { STRINGS } from "@prime-fresh/modules";
import {ADMIN_ROUTES} from "@prime-fresh/admin_modules";

export const adminNavigations: Navigations[] = [
  {
    name: "Dashboard",
    logo: <GridViewOutlined />,
    path: ADMIN_ROUTES.DASHBOARD_ADMIN,
    roles: [STRINGS.ROLE_ADMIN, STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
    depts: [STRINGS.DEPT_ADMIN]
  },
  {
    name: "Users",
    logo: <Groups2 />,
    roles: [STRINGS.ROLE_ADMIN],
    depts: [STRINGS.DEPT_ADMIN],
    children: [
      { name: "Employee", path: ADMIN_ROUTES.GET_ALL_EMPLOYEES, roles: [STRINGS.ROLE_ADMIN, STRINGS.ROLE_MANAGER], depts:[STRINGS.DEPT_ADMIN] },
      { name: "Vendors", path: ADMIN_ROUTES.GET_ALL_VENDORS, roles: [STRINGS.ROLE_ADMIN], depts:[STRINGS.DEPT_ADMIN] },
      { name: "Customers", path: ADMIN_ROUTES.GET_ALL_CUSTOMERS, roles: [STRINGS.ROLE_ADMIN], depts:[STRINGS.DEPT_ADMIN] },
      { name: "Farmers", path: ADMIN_ROUTES.GET_ALL_FARMERS, roles: [STRINGS.ROLE_ADMIN], depts:[STRINGS.DEPT_ADMIN] },
    ],
  },
  {
    name: "Products",
    logo: <AddShoppingCart />,
    roles: [STRINGS.ROLE_ADMIN],
    depts: [STRINGS.DEPT_ADMIN],
    children: [
      { name: "Products", path: ADMIN_ROUTES.GET_ALL_PRODUCTS, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
      { name: "Produces Category", path: ADMIN_ROUTES.GET_ALL_PRODUCT_CAT, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
      { name: "Produces Subcategory", path: ADMIN_ROUTES.GET_ALL_PRODUCT_SUBCAT, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
    ],
  },
  {
    name: "UOM",
    logo: <Scale />,
    roles: [STRINGS.ROLE_ADMIN],
    depts: [STRINGS.DEPT_ADMIN],
    children: [
      { name: "UOM", path: ADMIN_ROUTES.GET_ALL_UOMs, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
      { name: "UOM Conversion", path: ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
    ],
  },
  {
    name: "Locations",
    logo: <LocationOn />,
    roles: [STRINGS.ROLE_ADMIN],
    depts: [STRINGS.DEPT_ADMIN],
    children: [
      { name: "Registered Office", path: ADMIN_ROUTES.GET_REGISTERED_OFFICE, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
      { name: "Corporate Office", path: ADMIN_ROUTES.GET_CORPORATE_OFFICE, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
      {
        name: "Branches",
        roles: [STRINGS.ROLE_ADMIN],
        depts: [STRINGS.DEPT_ADMIN],
        grandChildren: [
          { name: "Collection Center (CC)", path: ADMIN_ROUTES.LOCATIONS_BRANCHES_CC, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
          { name: "Distribution Center (DC)", path: ADMIN_ROUTES.LOCATIONS_BRANCHES_DC, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
          { name: "Seasonal CC", path: ADMIN_ROUTES.LOCATIONS_BRANCHES_SEASONAL_CC, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
          { name: "Warehouses (WH)", path: ADMIN_ROUTES.LOCATIONS_BRANCHES_WAREHOUSES_WH, roles: [STRINGS.ROLE_ADMIN], depts: [STRINGS.DEPT_ADMIN] },
        ]
      },
    ]
  },
  {
    name: "Others",
    logo: <MoreHoriz />,
    roles: [STRINGS.ROLE_ADMIN],
    depts: [STRINGS.DEPT_ADMIN],
    children: [
      {
        name: "Vendor Category",
        path: ADMIN_ROUTES.GET_ALL_VENDORS,
        roles: [STRINGS.ROLE_ADMIN],
        depts: [STRINGS.DEPT_ADMIN]
      },
      {
        name: "Customer Category",
        path: ADMIN_ROUTES.GET_ALL_VENDORS,
        roles: [STRINGS.ROLE_ADMIN],
        depts: [STRINGS.DEPT_ADMIN]
      },
    ],
  },
];
