export declare const rootReducer: import('redux').Reducer<{
    inwardRegister: {
        inwardRegisterFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IInwardRegister, "id"> | undefined;
    };
    dumpRegister: {
        dumpRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').IDumpRegister | undefined;
    };
    aqr: {
        aqrFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IAQR, "id"> | undefined;
    };
    secondSaleRegister: {
        secondSaleRegisterFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').ISecondSaleRegister, "id"> | undefined;
    };
    vehicleDispatchRegister: {
        vehicleDispatchRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').PostVehicleDispatchRegister | undefined;
    };
    eodReport: {
        eodReportFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IEODReport, "id"> | undefined;
    };
    rbc: {
        rbcFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IReturnByCustomer, "id"> | null;
    };
    rfpaData: {
        rfpaFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IRFPA, "id"> | undefined;
    };
    dealSlipData: {
        dealSlipFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IDealSlip, "id"> | null;
    };
    grnData: {
        grn: import('../../../../../api/purchase_api/src/index.ts').IGRN[];
        selectedGRN: import('../../../../../api/purchase_api/src/index.ts').IGRN | undefined;
        grnFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IGRN, "id"> | undefined;
        grnActionType: "approve" | "reject" | null;
        reasonForGRNAction: string;
    };
    mc_voucher: {
        mcVoucherFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IMultiCashVoucher, "id"> | undefined;
    };
    lp_voucher: {
        lpVoucherFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').ILaborPaymentVoucher, "id"> | null;
    };
    tp_voucher: {
        tpVoucherFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').ITranportPaymentVoucher, "id"> | undefined;
    };
    pmp_voucher: {
        pmpVoucherFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IPackingMaterialPaymentVoucher, "id"> | undefined;
    };
    delivery_challan: {
        previewDCTypeCustomer: import('../../../../../api/purchase_api/src/index.ts').IDeliveryChallanTypeCustomer | undefined;
        previewDCTypeStockTransfer: import('../../../../../api/purchase_api/src/index.ts').IDeliveryChallanTypeStockTransfer | undefined;
    };
    payment_request: {
        paymentReq: import('../../../../../api/purchase_api/src/index.ts').GetPaymentRequest[];
        selectedPaymentReq: import('../../../../../api/purchase_api/src/index.ts').GetPaymentRequest | undefined;
        previewPaymentReq: import('../../../../../api/purchase_api/src/index.ts').PostPaymentRequest | undefined;
    };
    approvalFlow: {
        showReplaceForm: boolean;
    };
    customerData: {
        customers: import('../../../../../api/admin_api/src/index.ts').GetCustomer[];
        customerFormPreview: import('../../../../../api/admin_api/src/index.ts').PostCustomer | null;
    };
    vendorData: {
        allVendors: import('../../../../../api/admin_api/src/index.ts').GetVendor[] | [];
        allVendorssPartialData: import('../../../../../api/common_api/src/index.ts').VendorPartialData[];
        selectedVendorPartialData: import('../../../../../api/common_api/src/index.ts').VendorPartialData | null | undefined;
        vendorFormPreview: import('../../../../../api/admin_api/src/index.ts').PostVendor | null;
    };
    employeeData: {
        employees: import('../../../../../api/admin_api/src/index.ts').IEmployee[];
        employeeFormPreview: import('../../../../../api/admin_api/src/index.ts').IEmployee | null;
    };
    farmerData: {
        allFarmers: import('../../../../../api/admin_api/src/index.ts').GetFarmer[];
        allFarmersPartialData: import('../../../../../api/common_api/src/index.ts').FarmerPartialData[];
        selectedFarmerPartialData: import('../../../../../api/common_api/src/index.ts').FarmerPartialData | null | undefined;
        farmerFormPreview: import('../../../../../api/admin_api/src/index.ts').PostFarmer | null;
    };
    productData: {
        allProducts: import('../../../../../api/admin_api/src/index.ts').GetProduct[];
        selectedProduct: import('../../../../../api/admin_api/src/index.ts').GetProduct | null | undefined;
        productCat: import('../../../../../api/admin_api/src/index.ts').GetProductCategory[];
        productSubCat: import('../../../../../api/admin_api/src/index.ts').GetProductSubcategory[];
        productPartialData: import('../../../../../api/admin_api/src/index.ts').ProductPartialData[];
        productFormPreview: import('../../../../../api/admin_api/src/index.ts').PostProduct | null;
    };
    officesData: {
        offices: import('../../../../../api/admin_api/src/index.ts').GetOffices[];
        officeType: import('../../../../../api/admin_api/src/index.ts').OfficeType;
        selectedOffices: import('../../../../../api/admin_api/src/index.ts').GetOffices | undefined;
        officeFormPreview: import('../../../../../api/admin_api/src/index.ts').PostOffices | null;
    };
    branchesData: {
        branches: import('../../../../../api/admin_api/src/index.ts').GetBranches[] | undefined;
        BranchType: import('../../../../../api/admin_api/src/index.ts').BranchType;
        selectedBranches: import('../../../../../api/admin_api/src/index.ts').GetBranches | undefined;
        branchFormPreview: import('../../../../../api/admin_api/src/index.ts').PostBranches | null;
    };
    packagingMaterialData: {
        packagingMaterialFormPreview: import('../../../../../api/admin_api/src/index.ts').PostPackagingMaterial | null;
    };
    auth: import('../../../../../api/auth_api/src/index.ts').AuthState;
    layout: {
        mobileOpen: boolean;
        isSidebarClosing: boolean;
    };
    preview: {
        preview: boolean;
    };
    dialogBox: {
        isDialogBoxOpen: boolean;
    };
    drawerContainer: {
        isDrawerOpen: boolean;
    };
    notifications: import('./slices').NotificationState;
}, import('redux').UnknownAction, Partial<{
    inwardRegister: {
        inwardRegisterFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IInwardRegister, "id"> | undefined;
    } | undefined;
    dumpRegister: {
        dumpRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').IDumpRegister | undefined;
    } | undefined;
    aqr: {
        aqrFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IAQR, "id"> | undefined;
    } | undefined;
    secondSaleRegister: {
        secondSaleRegisterFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').ISecondSaleRegister, "id"> | undefined;
    } | undefined;
    vehicleDispatchRegister: {
        vehicleDispatchRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').PostVehicleDispatchRegister | undefined;
    } | undefined;
    eodReport: {
        eodReportFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IEODReport, "id"> | undefined;
    } | undefined;
    rbc: {
        rbcFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IReturnByCustomer, "id"> | null;
    } | undefined;
    rfpaData: {
        rfpaFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IRFPA, "id"> | undefined;
    } | undefined;
    dealSlipData: {
        dealSlipFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IDealSlip, "id"> | null;
    } | undefined;
    grnData: {
        grn: import('../../../../../api/purchase_api/src/index.ts').IGRN[];
        selectedGRN: import('../../../../../api/purchase_api/src/index.ts').IGRN | undefined;
        grnFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IGRN, "id"> | undefined;
        grnActionType: "approve" | "reject" | null;
        reasonForGRNAction: string;
    } | undefined;
    mc_voucher: {
        mcVoucherFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IMultiCashVoucher, "id"> | undefined;
    } | undefined;
    lp_voucher: {
        lpVoucherFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').ILaborPaymentVoucher, "id"> | null;
    } | undefined;
    tp_voucher: {
        tpVoucherFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').ITranportPaymentVoucher, "id"> | undefined;
    } | undefined;
    pmp_voucher: {
        pmpVoucherFormPreview: Omit<import('../../../../../api/purchase_api/src/index.ts').IPackingMaterialPaymentVoucher, "id"> | undefined;
    } | undefined;
    delivery_challan: {
        previewDCTypeCustomer: import('../../../../../api/purchase_api/src/index.ts').IDeliveryChallanTypeCustomer | undefined;
        previewDCTypeStockTransfer: import('../../../../../api/purchase_api/src/index.ts').IDeliveryChallanTypeStockTransfer | undefined;
    } | undefined;
    payment_request: {
        paymentReq: import('../../../../../api/purchase_api/src/index.ts').GetPaymentRequest[];
        selectedPaymentReq: import('../../../../../api/purchase_api/src/index.ts').GetPaymentRequest | undefined;
        previewPaymentReq: import('../../../../../api/purchase_api/src/index.ts').PostPaymentRequest | undefined;
    } | undefined;
    approvalFlow: {
        showReplaceForm: boolean;
    } | undefined;
    customerData: {
        customers: import('../../../../../api/admin_api/src/index.ts').GetCustomer[];
        customerFormPreview: import('../../../../../api/admin_api/src/index.ts').PostCustomer | null;
    } | undefined;
    vendorData: {
        allVendors: import('../../../../../api/admin_api/src/index.ts').GetVendor[] | [];
        allVendorssPartialData: import('../../../../../api/common_api/src/index.ts').VendorPartialData[];
        selectedVendorPartialData: import('../../../../../api/common_api/src/index.ts').VendorPartialData | null | undefined;
        vendorFormPreview: import('../../../../../api/admin_api/src/index.ts').PostVendor | null;
    } | undefined;
    employeeData: {
        employees: import('../../../../../api/admin_api/src/index.ts').IEmployee[];
        employeeFormPreview: import('../../../../../api/admin_api/src/index.ts').IEmployee | null;
    } | undefined;
    farmerData: {
        allFarmers: import('../../../../../api/admin_api/src/index.ts').GetFarmer[];
        allFarmersPartialData: import('../../../../../api/common_api/src/index.ts').FarmerPartialData[];
        selectedFarmerPartialData: import('../../../../../api/common_api/src/index.ts').FarmerPartialData | null | undefined;
        farmerFormPreview: import('../../../../../api/admin_api/src/index.ts').PostFarmer | null;
    } | undefined;
    productData: {
        allProducts: import('../../../../../api/admin_api/src/index.ts').GetProduct[];
        selectedProduct: import('../../../../../api/admin_api/src/index.ts').GetProduct | null | undefined;
        productCat: import('../../../../../api/admin_api/src/index.ts').GetProductCategory[];
        productSubCat: import('../../../../../api/admin_api/src/index.ts').GetProductSubcategory[];
        productPartialData: import('../../../../../api/admin_api/src/index.ts').ProductPartialData[];
        productFormPreview: import('../../../../../api/admin_api/src/index.ts').PostProduct | null;
    } | undefined;
    officesData: {
        offices: import('../../../../../api/admin_api/src/index.ts').GetOffices[];
        officeType: import('../../../../../api/admin_api/src/index.ts').OfficeType;
        selectedOffices: import('../../../../../api/admin_api/src/index.ts').GetOffices | undefined;
        officeFormPreview: import('../../../../../api/admin_api/src/index.ts').PostOffices | null;
    } | undefined;
    branchesData: {
        branches: import('../../../../../api/admin_api/src/index.ts').GetBranches[] | undefined;
        BranchType: import('../../../../../api/admin_api/src/index.ts').BranchType;
        selectedBranches: import('../../../../../api/admin_api/src/index.ts').GetBranches | undefined;
        branchFormPreview: import('../../../../../api/admin_api/src/index.ts').PostBranches | null;
    } | undefined;
    packagingMaterialData: {
        packagingMaterialFormPreview: import('../../../../../api/admin_api/src/index.ts').PostPackagingMaterial | null;
    } | undefined;
    auth: import('../../../../../api/auth_api/src/index.ts').AuthState | undefined;
    layout: {
        mobileOpen: boolean;
        isSidebarClosing: boolean;
    } | undefined;
    preview: {
        preview: boolean;
    } | undefined;
    dialogBox: {
        isDialogBoxOpen: boolean;
    } | undefined;
    drawerContainer: {
        isDrawerOpen: boolean;
    } | undefined;
    notifications: import('./slices').NotificationState | undefined;
}>>;
