import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import {
    BranchForm,
    CustomerTable,
    DashboardAdmin,
    EmployeeTable,
    FarmerTable,
    OfficeForm,
    ProductCatForm,
    ProductCatTable,
    ProductClassForm,
    ProductClassTable,
    ProductSubcatForm,
    ProductSubCatTable,
    ProductTable,
    UOMConvMatrixForm,
    UOMConvMatrixTable,
    UOMForm,
    UOMTable,
    VendorTable,
    ViewFarmer,
    ViewVendor,
    ViewEmployee,
    EmployeeForm,
    ViewCustomer,
    VendorCatForm,
    VendorCatTable,
    VendorSubcatForm,
    VendorSubcatTable,
    ViewProduct,
    BranchTable,
    ProductUpdateForm,
    OfficeTable,
    OfficeView,
    BranchView
} from "@prime-fresh/admin/components";
import { Outlet } from "react-router-dom";
import { VendorRegistrationForm } from "@prime-fresh/shared/components";

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
                path: `${ADMIN_ROUTES.EDIT_EMPLOYEE}/:id`,
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
                element: <VendorRegistrationForm />,
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
            //     element: <FarmerRegistrationForm />,
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
                path: `${ADMIN_ROUTES.UPDATE_PRODUCT}/:id`,
                element: <ProductUpdateForm />,
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
                path: `${ADMIN_ROUTES.GET_ALL_OFFICES}/:officeType`,
                element: <OfficeTable />
            },
            {
                path: `${ADMIN_ROUTES.CREATE_OFFICE}/:officeType`,
                element: <OfficeForm />
            },
            {
                path: `${ADMIN_ROUTES.EDIT_OFFICE}/:officeType/:id`,
                element: <OfficeForm />
            },
            {
                path: `${ADMIN_ROUTES.VIEW_OFFICE}/:id`,
                element: <OfficeView />
            },
            {
                path: ADMIN_ROUTES.BRANCHES,
                element: <Outlet />,
                children: [
                    {
                        path: `${ADMIN_ROUTES.GET_ALL_BRANCHES}/:branchType`,
                        element: <BranchTable />
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
                        path: `${ADMIN_ROUTES.VIEW_BRANCHES}/:id`,
                        element: <BranchView />
                    },
                ]
            }
        ]
    },
]
