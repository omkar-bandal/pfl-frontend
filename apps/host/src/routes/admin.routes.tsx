import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { BranchForm, 
    CCTable, 
    CorporateOfficeTable, 
    CustomerTable, 
    DashboardAdmin, 
    DCTable, 
    EmployeeTable, 
    FarmerTable, 
    OfficeForm, 
    ViewOffice, 
    ProductCatForm, 
    ProductCatTable, 
    ProductClassForm,
     ProductClassTable, 
     ProductSubcatForm, 
     ProductSubCatTable, 
     ProductTable, 
     RegisteredOfficeTable, 
     SeasonalCCTable, 
     UOMConvMatrixForm, 
     UOMConvMatrixTable, 
     UOMForm, 
     UOMTable,
    VendorTable, 
    ViewFarmer, 
    ViewVendor, 
    WHTable, 
    ViewEmployee, 
    EmployeeForm, 
    ViewCustomer,
    VendorCatForm,
    VendorCatTable,
    VendorSubcatForm,
    VendorSubcatTable,
    ViewBranch,
    ViewProduct
} from "@prime-fresh/admin/components";
import { Outlet } from "react-router-dom";
import { VendorForm } from "@prime-fresh/shared/masters/vendor";

export const AdminRoutes = [
    {
        path: ADMIN_ROUTES.DASHBOARD_ADMIN,
        element: <DashboardAdmin />,
    },
    {
        path: ADMIN_ROUTES.USERS,
        element: <Outlet />,
        children: [
            {
                path: ADMIN_ROUTES.GET_ALL_EMPLOYEES,
                element: <EmployeeTable />,
            },
            {
                path: ADMIN_ROUTES.CREATE_EMPLOYEE,
                element: <EmployeeForm />,
            },
            {
                path: `${ADMIN_ROUTES.VIEW_EMPLOYEE}/:id`,
                element: <ViewEmployee />,
            },
            {
                path: ADMIN_ROUTES.GET_ALL_CUSTOMERS,
                element: <CustomerTable />,
            },
            {
                path: `${ADMIN_ROUTES.VIEW_CUSTOMER}/:id`,
                element: <ViewCustomer />,
            },
            {
                path: ADMIN_ROUTES.GET_ALL_VENDORS,
                element: <VendorTable />,
            },
            {
                path: `${ADMIN_ROUTES.VIEW_VENDOR}/:id`,
                element: <ViewVendor />,
            },
            {
                path: `${ADMIN_ROUTES.EDIT_VENDOR}/:id`,
                element: <VendorForm />,
            },
            {
                path: ADMIN_ROUTES.CREATE_VENDORS_CAT,
                element: <VendorCatForm />
            },
            {
                path: `${ADMIN_ROUTES.UPDATE_VENDORS_CAT}/:id`,
                element: <VendorCatForm />
            },
            {
                path: ADMIN_ROUTES.GET_ALL_VENDORS_CAT,
                element: <VendorCatTable />
            },
            {
                path: ADMIN_ROUTES.CREATE_VENDORS_SUBCAT,
                element: <VendorSubcatForm />
            },
            {
                path: `${ADMIN_ROUTES.UPDATE_VENDORS_SUBCAT}/:id`,
                element: <VendorSubcatForm />
            },
            {
                path: ADMIN_ROUTES.GET_ALL_VENDORS_SUBCAT,
                element: <VendorSubcatTable />
            },
            {
                path: ADMIN_ROUTES.GET_ALL_FARMERS,
                element: <FarmerTable />,
            },
            // {
            //     path: ADMIN_ROUTES.CREATE_FARMER,
            //     element: <CreateFarmer />,
            // },
            {
                path: `${ADMIN_ROUTES.VIEW_FARMER}/:id`,
                element: <ViewFarmer />,
            },
        ]
    },
    {
        path: ADMIN_ROUTES.PRODUCTS,
        element: <Outlet />,
        children: [
            {
                path: ADMIN_ROUTES.GET_ALL_PRODUCTS,
                element: <ProductTable />,
            },
            {
                path: `${ADMIN_ROUTES.GET_A_PRODUCT}/:id`,
                element: <ViewProduct />,
            },
            {
                path: ADMIN_ROUTES.GET_ALL_PRODUCT_CLASS,
                element: <ProductClassTable />,
            },
            {
                path: ADMIN_ROUTES.CREATE_PRODUCT_CLASS,
                element: <ProductClassForm />,
            },
            {
                path: `${ADMIN_ROUTES.UPDATE_PRODUCT_CLASS}/:id`,
                element: <ProductClassForm />,
            },
            {
                path: ADMIN_ROUTES.GET_ALL_PRODUCT_CAT,
                element: <ProductCatTable />,
            },
            {
                path: ADMIN_ROUTES.CREATE_PRODUCT_CAT,
                element: <ProductCatForm />,
            },
            {
                path: `${ADMIN_ROUTES.UPDATE_PRODUCT_CAT}/:id`,
                element: <ProductCatForm />,
            },
            {
                path: ADMIN_ROUTES.GET_ALL_PRODUCT_SUBCAT,
                element: <ProductSubCatTable />,
            },
            {
                path: ADMIN_ROUTES.CREATE_PRODUCT_SUBCAT,
                element: <ProductSubcatForm />,
            },
            {
                path: `${ADMIN_ROUTES.UPDATE_PRODUCT_SUBCAT}/:id`,
                element: <ProductSubcatForm />,
            },
        ]
    },
    {
        path: ADMIN_ROUTES.UOM,
        element: <Outlet />,
        children: [
            {
                path: ADMIN_ROUTES.GET_ALL_UOMs,
                element: <UOMTable />,
            },
            {
                path: ADMIN_ROUTES.CREATE_UOM,
                element: <UOMForm />
            },
            {
                path: `${ADMIN_ROUTES.UPDATE_UOM}/:id`,
                element: <UOMForm />
            },
            {
                path: ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX,
                element: <UOMConvMatrixTable />,
            },
            {
                path: ADMIN_ROUTES.CREATE_UOMs_CONV_MATRIX,
                element: <UOMConvMatrixForm />,
            },
            {
                path: `${ADMIN_ROUTES.UPDATE_UOMs_CONV_MATRIX}/:oid`,
                element: <UOMConvMatrixForm />,
            },
        ]
    },
    {
        path: ADMIN_ROUTES.LOCATIONS,
        element: <Outlet />,
        children: [
            {
                path: ADMIN_ROUTES.GET_CORPORATE_OFFICE,
                element: <CorporateOfficeTable />
            },
            {
                path: ADMIN_ROUTES.GET_REGISTERED_OFFICE,
                element: <RegisteredOfficeTable />
            },
            {
                path: `${ADMIN_ROUTES.CREATE_OFFICE}/:type`,
                element: <OfficeForm/>
            },
            {
                path: `${ADMIN_ROUTES.EDIT_OFFICE}/:type/:id`,
                element: <OfficeForm />
            },
            {
                path: `${ADMIN_ROUTES.VIEW_OFFICE}/:type/:id`,
                element: <ViewOffice />,
            },
            {
                path: ADMIN_ROUTES.BRANCHES,
                element: <Outlet />,
                children: [
                    {
                        path: ADMIN_ROUTES.LOCATIONS_BRANCHES_CC,
                        element: <CCTable />
                    },
                    {
                        path: ADMIN_ROUTES.LOCATIONS_BRANCHES_DC,
                        element: <DCTable />
                    },
                    {
                        path: ADMIN_ROUTES.LOCATIONS_BRANCHES_SEASONAL_CC,
                        element: <SeasonalCCTable />
                    },
                    {
                        path: ADMIN_ROUTES.LOCATIONS_BRANCHES_WAREHOUSES_WH,
                        element: <WHTable />
                    },
                    {
                        path: `${ADMIN_ROUTES.CREATE_BRANCHES}/:branchType`,
                        element: <BranchForm />
                    },
                    {
                        path: `${ADMIN_ROUTES.EDIT_BRANCHES}/:branchType/:id`,
                        element: <BranchForm />
                    },
                    {
                        path: `${ADMIN_ROUTES.VIEW_BRANCHES}/:branchType/:id`,
                        element: <ViewBranch />
                    },
                ]
            }
        ]
    },
]
