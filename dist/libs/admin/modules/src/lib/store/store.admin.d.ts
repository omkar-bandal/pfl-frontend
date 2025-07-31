export declare const storeAdmin: import("@reduxjs/toolkit").EnhancedStore<{
    approvalFlow: {
        showReplaceForm: boolean;
    };
    customerData: {
        customers: import("@prime-fresh/admin_api").GetCustomer[];
        customerFormPreview: import("@prime-fresh/admin_api").PostCustomer | null;
    };
    vendorData: {
        allVendors: import("@prime-fresh/admin_api").GetVendor[] | [];
        allVendorssPartialData: import("@prime-fresh/common_api").VendorPartialData[];
        selectedVendorPartialData: import("@prime-fresh/common_api").VendorPartialData | null | undefined;
        vendorFormPreview: import("@prime-fresh/admin_api").PostVendor | null;
    };
    employeeData: {
        employees: import("@prime-fresh/admin_api").IEmployee[];
        employeeFormPreview: import("@prime-fresh/admin_api").IEmployee | null;
    };
    farmerData: {
        allFarmers: import("@prime-fresh/admin_api").GetFarmer[];
        allFarmersPartialData: import("@prime-fresh/common_api").FarmerPartialData[];
        selectedFarmerPartialData: import("@prime-fresh/common_api").FarmerPartialData | null | undefined;
        farmerFormPreview: import("@prime-fresh/admin_api").PostFarmer | null;
    };
    productData: {
        allProducts: import("@prime-fresh/admin_api").GetProduct[];
        selectedProduct: import("@prime-fresh/admin_api").GetProduct | null | undefined;
        productCat: import("@prime-fresh/admin_api").GetProductCategory[];
        productSubCat: import("@prime-fresh/admin_api").GetProductSubcategory[];
        productPartialData: import("@prime-fresh/admin_api").ProductPartialData[];
        productFormPreview: import("@prime-fresh/admin_api").PostProduct | null;
    };
    officesData: {
        offices: import("@prime-fresh/admin_api").GetOffices[];
        officeType: import("@prime-fresh/admin_api").OfficeType;
        selectedOffices: import("@prime-fresh/admin_api").GetOffices | undefined;
        officeFormPreview: import("@prime-fresh/admin_api").PostOffices | null;
    };
    branchesData: {
        branches: import("@prime-fresh/admin_api").GetBranches[] | undefined;
        BranchType: import("@prime-fresh/admin_api").BranchType;
        selectedBranches: import("@prime-fresh/admin_api").GetBranches | undefined;
        branchFormPreview: import("@prime-fresh/admin_api").PostBranches | null;
    };
    packagingMaterialData: {
        packagingMaterialFormPreview: import("@prime-fresh/admin_api").PostPackagingMaterial | null;
    };
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        approvalFlow: {
            showReplaceForm: boolean;
        };
        customerData: {
            customers: import("@prime-fresh/admin_api").GetCustomer[];
            customerFormPreview: import("@prime-fresh/admin_api").PostCustomer | null;
        };
        vendorData: {
            allVendors: import("@prime-fresh/admin_api").GetVendor[] | [];
            allVendorssPartialData: import("@prime-fresh/common_api").VendorPartialData[];
            selectedVendorPartialData: import("@prime-fresh/common_api").VendorPartialData | null | undefined;
            vendorFormPreview: import("@prime-fresh/admin_api").PostVendor | null;
        };
        employeeData: {
            employees: import("@prime-fresh/admin_api").IEmployee[];
            employeeFormPreview: import("@prime-fresh/admin_api").IEmployee | null;
        };
        farmerData: {
            allFarmers: import("@prime-fresh/admin_api").GetFarmer[];
            allFarmersPartialData: import("@prime-fresh/common_api").FarmerPartialData[];
            selectedFarmerPartialData: import("@prime-fresh/common_api").FarmerPartialData | null | undefined;
            farmerFormPreview: import("@prime-fresh/admin_api").PostFarmer | null;
        };
        productData: {
            allProducts: import("@prime-fresh/admin_api").GetProduct[];
            selectedProduct: import("@prime-fresh/admin_api").GetProduct | null | undefined;
            productCat: import("@prime-fresh/admin_api").GetProductCategory[];
            productSubCat: import("@prime-fresh/admin_api").GetProductSubcategory[];
            productPartialData: import("@prime-fresh/admin_api").ProductPartialData[];
            productFormPreview: import("@prime-fresh/admin_api").PostProduct | null;
        };
        officesData: {
            offices: import("@prime-fresh/admin_api").GetOffices[];
            officeType: import("@prime-fresh/admin_api").OfficeType;
            selectedOffices: import("@prime-fresh/admin_api").GetOffices | undefined;
            officeFormPreview: import("@prime-fresh/admin_api").PostOffices | null;
        };
        branchesData: {
            branches: import("@prime-fresh/admin_api").GetBranches[] | undefined;
            BranchType: import("@prime-fresh/admin_api").BranchType;
            selectedBranches: import("@prime-fresh/admin_api").GetBranches | undefined;
            branchFormPreview: import("@prime-fresh/admin_api").PostBranches | null;
        };
        packagingMaterialData: {
            packagingMaterialFormPreview: import("@prime-fresh/admin_api").PostPackagingMaterial | null;
        };
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export type RootState = ReturnType<typeof storeAdmin.getState>;
export type AppDispatch = typeof storeAdmin.dispatch;
