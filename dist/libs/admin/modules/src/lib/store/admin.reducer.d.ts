export declare const adminReducer: {
    formContainer: import("@reduxjs/toolkit").Reducer<{
        openDrawer: boolean;
        openFor: "create" | "update";
        dataId: string;
    }>;
    customerData: import("@reduxjs/toolkit").Reducer<{
        customers: import("@prime-fresh/admin_api").GetCustomer[];
    }>;
    vendorData: import("@reduxjs/toolkit").Reducer<{
        allVendors: import("@prime-fresh/admin_api").GetVendor[] | [];
        allVendorsFiltered: import("@prime-fresh/admin_api").GetAllFilteredVendorData[];
        selectedVendor: import("@prime-fresh/admin_api").GetAllFilteredVendorData | null | undefined;
    }>;
    vendorCategoryData: import("@reduxjs/toolkit").Reducer<{
        allVendorCategories: import("@prime-fresh/admin_api").GetVendorCategory[];
        selectedVendorCategory: import("@prime-fresh/admin_api").GetVendorCategory | null;
    }>;
    employeeData: import("@reduxjs/toolkit").Reducer<{
        employees: import("@prime-fresh/admin_api").GetEmployee[];
    }>;
    farmerData: import("@reduxjs/toolkit").Reducer<{
        allFarmers: import("@prime-fresh/admin_api").GetFarmer[];
        allFarmersFiltered: import("@prime-fresh/admin_api").GetAllFilteredFarmerData[];
        selectedFarmer: import("@prime-fresh/admin_api").GetAllFilteredFarmerData | null | undefined;
    }>;
    productData: import("@reduxjs/toolkit").Reducer<{
        allProducts: import("@prime-fresh/admin_api").GetProduct[];
        selectedProduct: import("@prime-fresh/admin_api").GetProduct | null | undefined;
        productCat: import("@prime-fresh/admin_api").GetProductCategory[];
        productSubCat: import("@prime-fresh/admin_api").GetProductSubcategory[];
    }>;
    uomData: import("@reduxjs/toolkit").Reducer<{
        allUOMs: import("@prime-fresh/admin_api").GetUOM[];
        selectedUOM: import("@prime-fresh/admin_api").GetUOM | undefined;
        allUOMConvMat: import("@prime-fresh/admin_api").GetUOMConversionMatrix[];
        selectedUOMConvMat: import("@prime-fresh/admin_api").GetUOMConversionMatrix | undefined;
    }>;
    officesData: import("@reduxjs/toolkit").Reducer<{
        offices: import("@prime-fresh/admin_api").GetOffices[];
        officeType: import("@prime-fresh/admin_api").OfficeType;
        selectedOffices: import("@prime-fresh/admin_api").GetOffices | undefined;
    }>;
    branchesData: import("@reduxjs/toolkit").Reducer<{
        branches: import("@prime-fresh/admin_api").GetBranches[] | undefined;
        BranchType: import("@prime-fresh/admin_api").BranchType;
        selectedBranches: import("@prime-fresh/admin_api").GetBranches | undefined;
    }>;
    alertSnackbar: import("@reduxjs/toolkit").Reducer<{
        open: boolean;
        message: string;
        severity: "success" | "error";
    }>;
};
