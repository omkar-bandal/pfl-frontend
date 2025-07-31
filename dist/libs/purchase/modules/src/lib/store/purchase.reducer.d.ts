export declare const purchaseReducer: {
    rfpaData: import("@reduxjs/toolkit").Reducer<{
        rfpaFormPreview: Omit<import("@prime-fresh/purchase_api").IRFPA, "id"> | undefined;
    }>;
    dealSlipData: import("@reduxjs/toolkit").Reducer<{
        dealSlipFormPreview: Omit<import("@prime-fresh/purchase_api").IDealSlip, "id"> | null;
    }>;
    grnData: import("@reduxjs/toolkit").Reducer<{
        grn: import("@prime-fresh/purchase_api").IGRN[];
        selectedGRN: import("@prime-fresh/purchase_api").IGRN | undefined;
        grnFormPreview: Omit<import("@prime-fresh/purchase_api").IGRN, "id"> | undefined;
        grnActionType: "approve" | "reject" | null;
        reasonForGRNAction: string;
    }>;
    mc_voucher: import("@reduxjs/toolkit").Reducer<{
        mcVoucherFormPreview: Omit<import("@prime-fresh/purchase_api").IMultiCashVoucher, "id"> | undefined;
    }>;
    lp_voucher: import("@reduxjs/toolkit").Reducer<{
        lpVoucherFormPreview: Omit<import("@prime-fresh/purchase_api").ILaborPaymentVoucher, "id"> | null;
    }>;
    tp_voucher: import("@reduxjs/toolkit").Reducer<{
        tpVoucherFormPreview: Omit<import("@prime-fresh/purchase_api").ITranportPaymentVoucher, "id"> | undefined;
    }>;
    pmp_voucher: import("@reduxjs/toolkit").Reducer<{
        pmpVoucherFormPreview: Omit<import("@prime-fresh/purchase_api").IPackingMaterialPaymentVoucher, "id"> | undefined;
    }>;
    delivery_challan: import("@reduxjs/toolkit").Reducer<{
        previewDCTypeCustomer: import("@prime-fresh/purchase_api").IDeliveryChallanTypeCustomer | undefined;
        previewDCTypeStockTransfer: import("@prime-fresh/purchase_api").IDeliveryChallanTypeStockTransfer | undefined;
    }>;
    payment_request: import("@reduxjs/toolkit").Reducer<{
        paymentReq: import("@prime-fresh/purchase_api").GetPaymentRequest[];
        selectedPaymentReq: import("@prime-fresh/purchase_api").GetPaymentRequest | undefined;
        previewPaymentReq: import("@prime-fresh/purchase_api").PostPaymentRequest | undefined;
    }>;
};
