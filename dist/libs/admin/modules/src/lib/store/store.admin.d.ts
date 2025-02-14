export declare const storeAdmin: import("@reduxjs/toolkit").EnhancedStore<{
    formContainer: {
        openDrawer: boolean;
        openFor: "create" | "update";
        dataId: string;
    };
    customerData: {
        customers: import("@prime-fresh/admin_api").GetCustomer[];
    };
    vendorData: {
        allVendors: import("@prime-fresh/admin_api").GetVendor[] | [];
        allVendorsFiltered: import("@prime-fresh/admin_api").GetAllFilteredVendorData[];
        selectedVendor: import("@prime-fresh/admin_api").GetAllFilteredVendorData | null | undefined;
    };
    vendorCategoryData: {
        allVendorCategories: import("@prime-fresh/admin_api").GetVendorCategory[];
        selectedVendorCategory: import("@prime-fresh/admin_api").GetVendorCategory | null;
    };
    employeeData: {
        employees: import("@prime-fresh/admin_api").GetEmployee[];
    };
    farmerData: {
        allFarmers: import("@prime-fresh/admin_api").GetFarmer[];
        allFarmersFiltered: import("@prime-fresh/admin_api").GetAllFilteredFarmerData[];
        selectedFarmer: import("@prime-fresh/admin_api").GetAllFilteredFarmerData | null | undefined;
    };
    productData: {
        allProducts: import("@prime-fresh/admin_api").GetProduct[];
        selectedProduct: import("@prime-fresh/admin_api").GetProduct | null | undefined;
        productCat: import("@prime-fresh/admin_api").GetProductCategory[];
        productSubCat: import("@prime-fresh/admin_api").GetProductSubcategory[];
        productPartialData: import("@prime-fresh/admin_api").ProductPartialData[];
    };
    uomData: {
        allUOMs: import("@prime-fresh/admin_api").GetUOM[];
        selectedUOM: import("@prime-fresh/admin_api").GetUOM | undefined;
        allUOMConvMat: import("@prime-fresh/admin_api").GetUOMConversionMatrix[];
        selectedUOMConvMat: import("@prime-fresh/admin_api").GetUOMConversionMatrix | undefined;
    };
    officesData: {
        offices: import("@prime-fresh/admin_api").GetOffices[];
        officeType: import("@prime-fresh/admin_api").OfficeType;
        selectedOffices: import("@prime-fresh/admin_api").GetOffices | undefined;
    };
    branchesData: {
        branches: import("@prime-fresh/admin_api").GetBranches[] | undefined;
        BranchType: import("@prime-fresh/admin_api").BranchType;
        selectedBranches: import("@prime-fresh/admin_api").GetBranches | undefined;
    };
    alertSnackbar: {
        open: boolean;
        message: string;
        severity: "success" | "error";
    };
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        formContainer: {
            openDrawer: boolean;
            openFor: "create" | "update";
            dataId: string;
        };
        customerData: {
            customers: import("@prime-fresh/admin_api").GetCustomer[];
        };
        vendorData: {
            allVendors: import("@prime-fresh/admin_api").GetVendor[] | [];
            allVendorsFiltered: import("@prime-fresh/admin_api").GetAllFilteredVendorData[];
            selectedVendor: import("@prime-fresh/admin_api").GetAllFilteredVendorData | null | undefined;
        };
        vendorCategoryData: {
            allVendorCategories: import("@prime-fresh/admin_api").GetVendorCategory[];
            selectedVendorCategory: import("@prime-fresh/admin_api").GetVendorCategory | null;
        };
        employeeData: {
            employees: import("@prime-fresh/admin_api").GetEmployee[];
        };
        farmerData: {
            allFarmers: import("@prime-fresh/admin_api").GetFarmer[];
            allFarmersFiltered: import("@prime-fresh/admin_api").GetAllFilteredFarmerData[];
            selectedFarmer: import("@prime-fresh/admin_api").GetAllFilteredFarmerData | null | undefined;
        };
        productData: {
            allProducts: import("@prime-fresh/admin_api").GetProduct[];
            selectedProduct: import("@prime-fresh/admin_api").GetProduct | null | undefined;
            productCat: import("@prime-fresh/admin_api").GetProductCategory[];
            productSubCat: import("@prime-fresh/admin_api").GetProductSubcategory[];
            productPartialData: import("@prime-fresh/admin_api").ProductPartialData[];
        };
        uomData: {
            allUOMs: import("@prime-fresh/admin_api").GetUOM[];
            selectedUOM: import("@prime-fresh/admin_api").GetUOM | undefined;
            allUOMConvMat: import("@prime-fresh/admin_api").GetUOMConversionMatrix[];
            selectedUOMConvMat: import("@prime-fresh/admin_api").GetUOMConversionMatrix | undefined;
        };
        officesData: {
            offices: import("@prime-fresh/admin_api").GetOffices[];
            officeType: import("@prime-fresh/admin_api").OfficeType;
            selectedOffices: import("@prime-fresh/admin_api").GetOffices | undefined;
        };
        branchesData: {
            branches: import("@prime-fresh/admin_api").GetBranches[] | undefined;
            BranchType: import("@prime-fresh/admin_api").BranchType;
            selectedBranches: import("@prime-fresh/admin_api").GetBranches | undefined;
        };
        alertSnackbar: {
            open: boolean;
            message: string;
            severity: "success" | "error";
        };
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export type RootState = ReturnType<typeof storeAdmin.getState>;
export type AppDispatch = typeof storeAdmin.dispatch;
