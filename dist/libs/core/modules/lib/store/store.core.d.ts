export declare const coreStore: import('@reduxjs/toolkit').EnhancedStore<{
    formContainer: {
        openDrawer: boolean;
        openFor: "create" | "update";
        dataId: string;
    };
    customerData: {
        customers: import('../../../../../api/admin_api/src/index.ts').GetCustomer[];
    };
    vendorData: {
        allVendors: import('../../../../../api/admin_api/src/index.ts').GetVendor[] | [];
        allVendorsFiltered: import('../../../../../api/admin_api/src/index.ts').GetAllFilteredVendorData[];
        selectedVendor: import('../../../../../api/admin_api/src/index.ts').GetAllFilteredVendorData | null | undefined;
    };
    vendorCategoryData: {
        allVendorCategories: import('../../../../../api/admin_api/src/index.ts').GetVendorCategory[];
        selectedVendorCategory: import('../../../../../api/admin_api/src/index.ts').GetVendorCategory | null;
    };
    employeeData: {
        employees: import('../../../../../api/admin_api/src/index.ts').GetEmployee[];
    };
    farmerData: {
        allFarmers: import('../../../../../api/admin_api/src/index.ts').GetFarmer[];
        allFarmersFiltered: import('../../../../../api/admin_api/src/index.ts').GetAllFilteredFarmerData[];
        selectedFarmer: import('../../../../../api/admin_api/src/index.ts').GetAllFilteredFarmerData | null | undefined;
    };
    productData: {
        allProducts: import('../../../../../api/admin_api/src/index.ts').GetProduct[];
        selectedProduct: import('../../../../../api/admin_api/src/index.ts').GetProduct | null | undefined;
        productCat: import('../../../../../api/admin_api/src/index.ts').GetProductCategory[];
        productSubCat: import('../../../../../api/admin_api/src/index.ts').GetProductSubcategory[];
        productPartialData: import('../../../../../api/admin_api/src/index.ts').ProductPartialData[];
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
    rfpaData: {
        rfpa: import('../../../../../api/purchase_api/src/index.ts').GetRFPA[];
        selectedRFPA: import('../../../../../api/purchase_api/src/index.ts').GetRFPA | undefined;
        previewRFPA: import('../../../../../api/purchase_api/src/index.ts').PostRFPA | import('../../../../../api/purchase_api/src/index.ts').GetRFPA | undefined;
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
        previewMCVoucher: import('../../../../../api/purchase_api/src/index.ts').PostMCvoucher | import('../../../../../api/purchase_api/src/index.ts').GetMCvoucher | undefined;
    };
    lp_voucher: {
        lpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher[];
        selectedLPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher | undefined;
        previewLPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostLPvoucher | import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher | undefined;
    };
    tp_voucher: {
        tpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher[];
        selectedTPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher | undefined;
        previewTPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostTPvoucher | import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher | undefined;
    };
    pmp_voucher: {
        pmpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher[];
        selectedPMPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher | undefined;
        previewPMPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostPMPvoucher | import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher | undefined;
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
    auth: import('../../../../../api/auth_api/src/index.ts').AuthState;
    layout: {
        mobileOpen: boolean;
        isClosing: boolean;
        pageTitle: string;
    };
    preview: {
        preview: boolean;
    };
}, import('redux').UnknownAction, import('@reduxjs/toolkit').Tuple<[import('redux').StoreEnhancer<{
    dispatch: import('redux-thunk').ThunkDispatch<{
        formContainer: {
            openDrawer: boolean;
            openFor: "create" | "update";
            dataId: string;
        };
        customerData: {
            customers: import('../../../../../api/admin_api/src/index.ts').GetCustomer[];
        };
        vendorData: {
            allVendors: import('../../../../../api/admin_api/src/index.ts').GetVendor[] | [];
            allVendorsFiltered: import('../../../../../api/admin_api/src/index.ts').GetAllFilteredVendorData[];
            selectedVendor: import('../../../../../api/admin_api/src/index.ts').GetAllFilteredVendorData | null | undefined;
        };
        vendorCategoryData: {
            allVendorCategories: import('../../../../../api/admin_api/src/index.ts').GetVendorCategory[];
            selectedVendorCategory: import('../../../../../api/admin_api/src/index.ts').GetVendorCategory | null;
        };
        employeeData: {
            employees: import('../../../../../api/admin_api/src/index.ts').GetEmployee[];
        };
        farmerData: {
            allFarmers: import('../../../../../api/admin_api/src/index.ts').GetFarmer[];
            allFarmersFiltered: import('../../../../../api/admin_api/src/index.ts').GetAllFilteredFarmerData[];
            selectedFarmer: import('../../../../../api/admin_api/src/index.ts').GetAllFilteredFarmerData | null | undefined;
        };
        productData: {
            allProducts: import('../../../../../api/admin_api/src/index.ts').GetProduct[];
            selectedProduct: import('../../../../../api/admin_api/src/index.ts').GetProduct | null | undefined;
            productCat: import('../../../../../api/admin_api/src/index.ts').GetProductCategory[];
            productSubCat: import('../../../../../api/admin_api/src/index.ts').GetProductSubcategory[];
            productPartialData: import('../../../../../api/admin_api/src/index.ts').ProductPartialData[];
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
        rfpaData: {
            rfpa: import('../../../../../api/purchase_api/src/index.ts').GetRFPA[];
            selectedRFPA: import('../../../../../api/purchase_api/src/index.ts').GetRFPA | undefined;
            previewRFPA: import('../../../../../api/purchase_api/src/index.ts').PostRFPA | import('../../../../../api/purchase_api/src/index.ts').GetRFPA | undefined;
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
            previewMCVoucher: import('../../../../../api/purchase_api/src/index.ts').PostMCvoucher | import('../../../../../api/purchase_api/src/index.ts').GetMCvoucher | undefined;
        };
        lp_voucher: {
            lpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher[];
            selectedLPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher | undefined;
            previewLPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostLPvoucher | import('../../../../../api/purchase_api/src/index.ts').GetLPvoucher | undefined;
        };
        tp_voucher: {
            tpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher[];
            selectedTPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher | undefined;
            previewTPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostTPvoucher | import('../../../../../api/purchase_api/src/index.ts').GetTPvoucher | undefined;
        };
        pmp_voucher: {
            pmpVouchers: import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher[];
            selectedPMPVoucher: import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher | undefined;
            previewPMPVoucher: import('../../../../../api/purchase_api/src/index.ts').PostPMPvoucher | import('../../../../../api/purchase_api/src/index.ts').GetPMPvoucher | undefined;
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
        auth: import('../../../../../api/auth_api/src/index.ts').AuthState;
        layout: {
            mobileOpen: boolean;
            isClosing: boolean;
            pageTitle: string;
        };
        preview: {
            preview: boolean;
        };
    }, undefined, import('redux').UnknownAction>;
}>, import('redux').StoreEnhancer]>>;
export type RootState = ReturnType<typeof coreStore.getState>;
export type AppDispatch = typeof coreStore.dispatch;
