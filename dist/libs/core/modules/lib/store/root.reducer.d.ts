export declare const rootReducer: import('redux').Reducer<{
    rfpaData: {
        rfpa: import('../../../../../api/purchase_api/src/index.ts').GetRFPA[];
        selectedRFPA: import('../../../../../api/purchase_api/src/index.ts').GetRFPA | undefined;
        previewRFPA: import('../../../../../api/purchase_api/src/index.ts').PostRFPA | undefined;
    };
    dealSlipData: {
        dealSlip: import('../../../../../api/purchase_api/src/index.ts').GetDealSlip[];
        selectedDealSlip: import('../../../../../api/purchase_api/src/index.ts').GetDealSlip | undefined;
    };
    grnData: {
        grn: import('../../../../../api/purchase_api/src/index.ts').GetGRN[];
        selectedGRN: import('../../../../../api/purchase_api/src/index.ts').GetGRN | undefined;
        previewGRN: import('../../../../../api/purchase_api/src/index.ts').PostGRN | import('../../../../../api/purchase_api/src/index.ts').GetGRN | undefined;
        subTotalAmt: number;
        totalAmt: number;
        totAmtWords: string;
    };
    mc_voucher: {
        mcVouchers: import('../../../../../api/purchase_api/src/index.ts').GetMCvoucher[];
        selectedMCVoucher: import('../../../../../api/purchase_api/src/index.ts').GetMCvoucher | undefined;
        previewMCVoucher: import('../../../../../api/purchase_api/src/index.ts').PostMCvoucher | undefined;
    };
    lp_voucher: {
        lpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher[];
        selectedLPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher | undefined;
        previewLPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostLPvoucher | import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher | undefined;
    };
    tp_voucher: {
        tpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher[];
        selectedTPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher | undefined;
        previewTPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostTPvoucher | undefined;
    };
    pmp_voucher: {
        pmpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher[];
        selectedPMPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher | undefined;
        previewPMPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostPMPvoucher | undefined;
    };
    delivery_challan: {
        dcs: import('../../../../../api/purchase_api/src/index.ts').GetDeliveryChallan[];
        selectedDC: import('../../../../../api/purchase_api/src/index.ts').GetDeliveryChallan | undefined;
        previewDC: import('../../../../../api/purchase_api/src/index.ts').PostDeliveryChallan | import('../../../../../api/purchase_api/src/index.ts').GetDeliveryChallan | undefined;
    };
    payment_request: {
        paymentReq: import('../../../../../api/purchase_api/src/index.ts').GetPaymentRequest[];
        selectedPaymentReq: import('../../../../../api/purchase_api/src/index.ts').GetPaymentRequest | undefined;
        previewPaymentReq: import('../../../../../api/purchase_api/src/index.ts').PostPaymentRequest | undefined;
    };
    layout: {
        mobileOpen: boolean;
        isClosing: boolean;
        pageTitle: string;
    };
    preview: {
        preview: boolean;
    };
    formContainer: {
        openDrawer: boolean;
        openFor: "create" | "update";
        dataId: string;
    };
    customerData: {
        customers: import('../../../../../api/admin_api/src/index.ts').GetCustomer[];
    };
    vendorData: {
        allVendors: import('../../../../../api/admin_api/src/index.ts').GetVendor[];
        selectedVendor: import('../../../../../api/admin_api/src/index.ts').GetVendor | undefined;
    };
    employeeData: {
        employees: import('../../../../../api/admin_api/src/index.ts').GetEmployee[];
    };
    farmerData: {
        allFarmers: import('../../../../../api/admin_api/src/index.ts').GetFarmer[];
        selectedFarmer: import('../../../../../api/admin_api/src/index.ts').GetFarmer | undefined;
    };
    productData: {
        allProducts: import('../../../../../api/admin_api/src/index.ts').GetProduct[];
        selectedProduct: import('../../../../../api/admin_api/src/index.ts').GetProduct | undefined;
        productCat: import('../../../../../api/admin_api/src/index.ts').GetProductCategory[];
        productSubCat: import('../../../../../api/admin_api/src/index.ts').GetProductSubcategory[];
    };
    uomData: {
        allUOMs: import('../../../../../api/admin_api/src/index.ts').GetUOM[];
        selectedUOM: import('../../../../../api/admin_api/src/index.ts').GetUOM | undefined;
        allUOMConvMat: import('../../../../../api/admin_api/src/index.ts').GetUOMConversionMatrix[];
        selectedUOMConvMat: import('../../../../../api/admin_api/src/index.ts').GetUOMConversionMatrix | undefined;
    };
    officesData: {
        offices: import('../../../../../api/admin_api/src/index.ts').GetOffices[];
        officeType: import('../../../../../api/admin_api/src/index.ts').OfficeType;
        selectedOffices: import('../../../../../api/admin_api/src/index.ts').GetOffices | undefined;
    };
    branchesData: {
        branches: import('../../../../../api/admin_api/src/index.ts').GetBranches[] | undefined;
        BranchType: import('../../../../../api/admin_api/src/index.ts').BranchType;
        selectedBranches: import('../../../../../api/admin_api/src/index.ts').GetBranches | undefined;
    };
    alertSnackbar: {
        open: boolean;
        message: string;
        severity: "success" | "error";
    };
}, import('redux').UnknownAction, Partial<{
    rfpaData: {
        rfpa: import('../../../../../api/purchase_api/src/index.ts').GetRFPA[];
        selectedRFPA: import('../../../../../api/purchase_api/src/index.ts').GetRFPA | undefined;
        previewRFPA: import('../../../../../api/purchase_api/src/index.ts').PostRFPA | undefined;
    } | undefined;
    dealSlipData: {
        dealSlip: import('../../../../../api/purchase_api/src/index.ts').GetDealSlip[];
        selectedDealSlip: import('../../../../../api/purchase_api/src/index.ts').GetDealSlip | undefined;
    } | undefined;
    grnData: {
        grn: import('../../../../../api/purchase_api/src/index.ts').GetGRN[];
        selectedGRN: import('../../../../../api/purchase_api/src/index.ts').GetGRN | undefined;
        previewGRN: import('../../../../../api/purchase_api/src/index.ts').PostGRN | import('../../../../../api/purchase_api/src/index.ts').GetGRN | undefined;
        subTotalAmt: number;
        totalAmt: number;
        totAmtWords: string;
    } | undefined;
    mc_voucher: {
        mcVouchers: import('../../../../../api/purchase_api/src/index.ts').GetMCvoucher[];
        selectedMCVoucher: import('../../../../../api/purchase_api/src/index.ts').GetMCvoucher | undefined;
        previewMCVoucher: import('../../../../../api/purchase_api/src/index.ts').PostMCvoucher | undefined;
    } | undefined;
    lp_voucher: {
        lpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher[];
        selectedLPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher | undefined;
        previewLPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostLPvoucher | import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher | undefined;
    } | undefined;
    tp_voucher: {
        tpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher[];
        selectedTPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher | undefined;
        previewTPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostTPvoucher | undefined;
    } | undefined;
    pmp_voucher: {
        pmpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher[];
        selectedPMPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher | undefined;
        previewPMPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostPMPvoucher | undefined;
    } | undefined;
    delivery_challan: {
        dcs: import('../../../../../api/purchase_api/src/index.ts').GetDeliveryChallan[];
        selectedDC: import('../../../../../api/purchase_api/src/index.ts').GetDeliveryChallan | undefined;
        previewDC: import('../../../../../api/purchase_api/src/index.ts').PostDeliveryChallan | import('../../../../../api/purchase_api/src/index.ts').GetDeliveryChallan | undefined;
    } | undefined;
    payment_request: {
        paymentReq: import('../../../../../api/purchase_api/src/index.ts').GetPaymentRequest[];
        selectedPaymentReq: import('../../../../../api/purchase_api/src/index.ts').GetPaymentRequest | undefined;
        previewPaymentReq: import('../../../../../api/purchase_api/src/index.ts').PostPaymentRequest | undefined;
    } | undefined;
    layout: {
        mobileOpen: boolean;
        isClosing: boolean;
        pageTitle: string;
    } | undefined;
    preview: {
        preview: boolean;
    } | undefined;
    formContainer: {
        openDrawer: boolean;
        openFor: "create" | "update";
        dataId: string;
    } | undefined;
    customerData: {
        customers: import('../../../../../api/admin_api/src/index.ts').GetCustomer[];
    } | undefined;
    vendorData: {
        allVendors: import('../../../../../api/admin_api/src/index.ts').GetVendor[];
        selectedVendor: import('../../../../../api/admin_api/src/index.ts').GetVendor | undefined;
    } | undefined;
    employeeData: {
        employees: import('../../../../../api/admin_api/src/index.ts').GetEmployee[];
    } | undefined;
    farmerData: {
        allFarmers: import('../../../../../api/admin_api/src/index.ts').GetFarmer[];
        selectedFarmer: import('../../../../../api/admin_api/src/index.ts').GetFarmer | undefined;
    } | undefined;
    productData: {
        allProducts: import('../../../../../api/admin_api/src/index.ts').GetProduct[];
        selectedProduct: import('../../../../../api/admin_api/src/index.ts').GetProduct | undefined;
        productCat: import('../../../../../api/admin_api/src/index.ts').GetProductCategory[];
        productSubCat: import('../../../../../api/admin_api/src/index.ts').GetProductSubcategory[];
    } | undefined;
    uomData: {
        allUOMs: import('../../../../../api/admin_api/src/index.ts').GetUOM[];
        selectedUOM: import('../../../../../api/admin_api/src/index.ts').GetUOM | undefined;
        allUOMConvMat: import('../../../../../api/admin_api/src/index.ts').GetUOMConversionMatrix[];
        selectedUOMConvMat: import('../../../../../api/admin_api/src/index.ts').GetUOMConversionMatrix | undefined;
    } | undefined;
    officesData: {
        offices: import('../../../../../api/admin_api/src/index.ts').GetOffices[];
        officeType: import('../../../../../api/admin_api/src/index.ts').OfficeType;
        selectedOffices: import('../../../../../api/admin_api/src/index.ts').GetOffices | undefined;
    } | undefined;
    branchesData: {
        branches: import('../../../../../api/admin_api/src/index.ts').GetBranches[] | undefined;
        BranchType: import('../../../../../api/admin_api/src/index.ts').BranchType;
        selectedBranches: import('../../../../../api/admin_api/src/index.ts').GetBranches | undefined;
    } | undefined;
    alertSnackbar: {
        open: boolean;
        message: string;
        severity: "success" | "error";
    } | undefined;
}>>;
