export declare const purchaseReducer: {
    rfpaData: import("@reduxjs/toolkit").Reducer<{
        rfpa: import("@prime-fresh/purchase_api").GetRFPA[];
        selectedRFPA: import("@prime-fresh/purchase_api").GetRFPA | undefined;
        previewRFPA: import("@prime-fresh/purchase_api").PostRFPA | import("@prime-fresh/purchase_api").GetRFPA | undefined;
    }>;
    dealSlipData: import("@reduxjs/toolkit").Reducer<{
        dealSlip: import("@prime-fresh/purchase_api").GetDealSlip[];
        selectedDealSlip: import("@prime-fresh/purchase_api").GetDealSlip | undefined;
    }>;
    grnData: import("@reduxjs/toolkit").Reducer<{
        grn: import("@prime-fresh/purchase_api").GetGRN[];
        selectedGRN: import("@prime-fresh/purchase_api").GetGRN | undefined;
        previewGRN: import("@prime-fresh/purchase_api").PostGRN | import("@prime-fresh/purchase_api").GetGRN | undefined;
        subTotalAmt: number;
        totalAmt: number;
        totAmtWords: string;
    }>;
    mc_voucher: import("@reduxjs/toolkit").Reducer<{
        mcVouchers: import("@prime-fresh/purchase_api").GetMCvoucher[];
        selectedMCVoucher: import("@prime-fresh/purchase_api").GetMCvoucher | undefined;
        previewMCVoucher: import("@prime-fresh/purchase_api").PostMCvoucher | import("@prime-fresh/purchase_api").GetMCvoucher | undefined;
    }>;
    lp_voucher: import("@reduxjs/toolkit").Reducer<{
        lpVouchers: import("@prime-fresh/purchase_api").GetLPvoucher[];
        selectedLPVoucher: import("@prime-fresh/purchase_api").GetLPvoucher | undefined;
        previewLPVoucher: import("@prime-fresh/purchase_api").PostLPvoucher | import("@prime-fresh/purchase_api").GetLPvoucher | undefined;
    }>;
    tp_voucher: import("@reduxjs/toolkit").Reducer<{
        tpVouchers: import("@prime-fresh/purchase_api").GetTPvoucher[];
        selectedTPVoucher: import("@prime-fresh/purchase_api").GetTPvoucher | undefined;
        previewTPVoucher: import("@prime-fresh/purchase_api").PostTPvoucher | undefined;
    }>;
    pmp_voucher: import("@reduxjs/toolkit").Reducer<{
        pmpVouchers: import("@prime-fresh/purchase_api").GetPMPvoucher[];
        selectedPMPVoucher: import("@prime-fresh/purchase_api").GetPMPvoucher | undefined;
        previewPMPVoucher: import("@prime-fresh/purchase_api").PostPMPvoucher | undefined;
    }>;
    delivery_challan: import("@reduxjs/toolkit").Reducer<{
        dcs: import("@prime-fresh/purchase_api").GetDeliveryChallan[];
        selectedDC: import("@prime-fresh/purchase_api").GetDeliveryChallan | undefined;
        previewDC: import("@prime-fresh/purchase_api").PostDeliveryChallan | import("@prime-fresh/purchase_api").GetDeliveryChallan | undefined;
    }>;
    payment_request: import("@reduxjs/toolkit").Reducer<{
        paymentReq: import("@prime-fresh/purchase_api").GetPaymentRequest[];
        selectedPaymentReq: import("@prime-fresh/purchase_api").GetPaymentRequest | undefined;
        previewPaymentReq: import("@prime-fresh/purchase_api").PostPaymentRequest | undefined;
    }>;
};
