export declare const coreReducer: {
    layout: import('redux').Reducer<{
        mobileOpen: boolean;
        isClosing: boolean;
        pageTitle: string;
    }>;
    preview: import('redux').Reducer<{
        preview: boolean;
    }>;
    formContainer: import('redux').Reducer<{
        openDrawer: boolean;
        openFor: "create" | "update";
        dataId: string;
    }>;
    customerData: import('redux').Reducer<{
        customers: import('../../../../../api/admin_api/src/index.ts').GetCustomer[];
    }>;
    vendorData: import('redux').Reducer<{
        allVendors: import('../../../../../api/admin_api/src/index.ts').GetVendor[];
        selectedVendor: import('../../../../../api/admin_api/src/index.ts').GetVendor | undefined;
    }>;
    employeeData: import('redux').Reducer<{
        employees: import('../../../../../api/admin_api/src/index.ts').GetEmployee[];
    }>;
    farmerData: import('redux').Reducer<{
        allFarmers: import('../../../../../api/admin_api/src/index.ts').GetFarmer[];
        selectedFarmer: import('../../../../../api/admin_api/src/index.ts').GetFarmer | undefined;
    }>;
    productData: import('redux').Reducer<{
        allProducts: import('../../../../../api/admin_api/src/index.ts').GetProduct[];
        selectedProduct: import('../../../../../api/admin_api/src/index.ts').GetProduct | undefined;
        productCat: import('../../../../../api/admin_api/src/index.ts').GetProductCategory[];
        productSubCat: import('../../../../../api/admin_api/src/index.ts').GetProductSubcategory[];
    }>;
    uomData: import('redux').Reducer<{
        allUOMs: import('../../../../../api/admin_api/src/index.ts').GetUOM[];
        selectedUOM: import('../../../../../api/admin_api/src/index.ts').GetUOM | undefined;
        allUOMConvMat: import('../../../../../api/admin_api/src/index.ts').GetUOMConversionMatrix[];
        selectedUOMConvMat: import('../../../../../api/admin_api/src/index.ts').GetUOMConversionMatrix | undefined;
    }>;
    officesData: import('redux').Reducer<{
        offices: import('../../../../../api/admin_api/src/index.ts').GetOffices[];
        officeType: import('../../../../../api/admin_api/src/index.ts').OfficeType;
        selectedOffices: import('../../../../../api/admin_api/src/index.ts').GetOffices | undefined;
    }>;
    branchesData: import('redux').Reducer<{
        branches: import('../../../../../api/admin_api/src/index.ts').GetBranches[] | undefined;
        BranchType: import('../../../../../api/admin_api/src/index.ts').BranchType;
        selectedBranches: import('../../../../../api/admin_api/src/index.ts').GetBranches | undefined;
    }>;
    alertSnackbar: import('redux').Reducer<{
        open: boolean;
        message: string;
        severity: "success" | "error";
    }>;
};
