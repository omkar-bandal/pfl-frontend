export declare const useAppSelector: import("react-redux").UseSelector<{
    rfpaData: {
        rfpaFormPreview: Omit<import("@prime-fresh/purchase_api").IRFPA, "id"> | undefined;
    };
    dealSlipData: {
        dealSlipFormPreview: Omit<import("@prime-fresh/purchase_api").IDealSlip, "id"> | null;
    };
    grnData: {
        grn: import("@prime-fresh/purchase_api").IGRN[];
        selectedGRN: import("@prime-fresh/purchase_api").IGRN | undefined;
        grnFormPreview: Omit<import("@prime-fresh/purchase_api").IGRN, "id"> | undefined;
        grnActionType: "approve" | "reject" | null;
        reasonForGRNAction: string;
    };
    mc_voucher: {
        mcVoucherFormPreview: Omit<import("@prime-fresh/purchase_api").IMultiCashVoucher, "id"> | undefined;
    };
    lp_voucher: {
        lpVoucherFormPreview: Omit<import("@prime-fresh/purchase_api").ILaborPaymentVoucher, "id"> | null;
    };
    tp_voucher: {
        tpVoucherFormPreview: Omit<import("@prime-fresh/purchase_api").ITranportPaymentVoucher, "id"> | undefined;
    };
    pmp_voucher: {
        pmpVoucherFormPreview: Omit<import("@prime-fresh/purchase_api").IPackingMaterialPaymentVoucher, "id"> | undefined;
    };
    delivery_challan: {
        previewDCTypeCustomer: import("@prime-fresh/purchase_api").IDeliveryChallanTypeCustomer | undefined;
        previewDCTypeStockTransfer: import("@prime-fresh/purchase_api").IDeliveryChallanTypeStockTransfer | undefined;
    };
    payment_request: {
        paymentReq: import("@prime-fresh/purchase_api").GetPaymentRequest[];
        selectedPaymentReq: import("@prime-fresh/purchase_api").GetPaymentRequest | undefined;
        previewPaymentReq: import("@prime-fresh/purchase_api").PostPaymentRequest | undefined;
    };
}>;
