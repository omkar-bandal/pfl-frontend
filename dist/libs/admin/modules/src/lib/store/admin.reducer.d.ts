export declare const adminReducer: {
    approvalFlow: import("@reduxjs/toolkit").Reducer<{
        showReplaceForm: boolean;
    }>;
    customerData: import("@reduxjs/toolkit").Reducer<{
        customers: import("@prime-fresh/admin_api").GetCustomer[];
        customerFormPreview: import("@prime-fresh/admin_api").PostCustomer | null;
    }>;
    vendorData: import("@reduxjs/toolkit").Reducer<{
        allVendors: import("@prime-fresh/admin_api").GetVendor[] | [];
        allVendorssPartialData: import("@prime-fresh/common_api").VendorPartialData[];
        selectedVendorPartialData: import("@prime-fresh/common_api").VendorPartialData | null | undefined;
        vendorFormPreview: import("@prime-fresh/admin_api").PostVendor | null;
    }>;
    employeeData: import("@reduxjs/toolkit").Reducer<{
        employees: import("@prime-fresh/admin_api").IEmployee[];
        employeeFormPreview: import("@prime-fresh/admin_api").IEmployee | null;
    }>;
    farmerData: import("@reduxjs/toolkit").Reducer<{
        allFarmers: import("@prime-fresh/admin_api").GetFarmer[];
        allFarmersPartialData: import("@prime-fresh/common_api").FarmerPartialData[];
        selectedFarmerPartialData: import("@prime-fresh/common_api").FarmerPartialData | null | undefined;
        farmerFormPreview: import("@prime-fresh/admin_api").PostFarmer | null;
    }>;
    productData: import("@reduxjs/toolkit").Reducer<{
        allProducts: import("@prime-fresh/admin_api").GetProduct[];
        selectedProduct: import("@prime-fresh/admin_api").GetProduct | null | undefined;
        productCat: import("@prime-fresh/admin_api").GetProductCategory[];
        productSubCat: import("@prime-fresh/admin_api").GetProductSubcategory[];
        productPartialData: import("@prime-fresh/admin_api").ProductPartialData[];
        productFormPreview: import("@prime-fresh/admin_api").PostProduct | null;
    }>;
    officesData: import("@reduxjs/toolkit").Reducer<{
        offices: import("@prime-fresh/admin_api").GetOffices[];
        officeType: import("@prime-fresh/admin_api").OfficeType;
        selectedOffices: import("@prime-fresh/admin_api").GetOffices | undefined;
        officeFormPreview: import("@prime-fresh/admin_api").PostOffices | null;
    }>;
    branchesData: import("@reduxjs/toolkit").Reducer<{
        branches: import("@prime-fresh/admin_api").GetBranches[] | undefined;
        BranchType: import("@prime-fresh/admin_api").BranchType;
        selectedBranches: import("@prime-fresh/admin_api").GetBranches | undefined;
        branchFormPreview: import("@prime-fresh/admin_api").PostBranches | null;
    }>;
    packagingMaterialData: import("@reduxjs/toolkit").Reducer<{
        packagingMaterialFormPreview: import("@prime-fresh/admin_api").PostPackagingMaterial | null;
    }>;
};
