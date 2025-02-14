export declare const useAppSelector: import("react-redux").UseSelector<{
    rfpaData: {
        rfpa: import("@prime-fresh/purchase_api").GetRFPA[];
        selectedRFPA: import("@prime-fresh/purchase_api").GetRFPA | undefined;
        previewRFPA: import("@prime-fresh/purchase_api").PostRFPA | import("@prime-fresh/purchase_api").GetRFPA | undefined;
    };
    dealSlipData: {
        dealSlip: import("@prime-fresh/purchase_api").GetDealSlip[];
        selectedDealSlip: import("@prime-fresh/purchase_api").GetDealSlip | undefined;
    };
    grnData: {
        grn: import("@prime-fresh/purchase_api").GetGRN[];
        selectedGRN: import("@prime-fresh/purchase_api").GetGRN | undefined;
        previewGRN: import("@prime-fresh/purchase_api").PostGRN | import("@prime-fresh/purchase_api").GetGRN | undefined;
        subTotalAmt: number;
        totalAmt: number;
        totAmtWords: string;
    };
    mc_voucher: {
        mcVouchers: import("@prime-fresh/purchase_api").GetMCvoucher[];
        selectedMCVoucher: import("@prime-fresh/purchase_api").GetMCvoucher | undefined;
        previewMCVoucher: import("@prime-fresh/purchase_api").PostMCvoucher | import("@prime-fresh/purchase_api").GetMCvoucher | undefined;
    };
    lp_voucher: {
        lpVouchers: import("@prime-fresh/purchase_api").GetLPvoucher[];
        selectedLPVoucher: import("@prime-fresh/purchase_api").GetLPvoucher | undefined;
        previewLPVoucher: import("@prime-fresh/purchase_api").PostLPvoucher | import("@prime-fresh/purchase_api").GetLPvoucher | undefined;
    };
    tp_voucher: {
        tpVouchers: import("@prime-fresh/purchase_api").GetTPvoucher[];
        selectedTPVoucher: import("@prime-fresh/purchase_api").GetTPvoucher | undefined;
        previewTPVoucher: import("@prime-fresh/purchase_api").PostTPvoucher | import("@prime-fresh/purchase_api").GetTPvoucher | undefined;
    };
    pmp_voucher: {
        pmpVouchers: import("@prime-fresh/purchase_api").GetPMPvoucher[];
        selectedPMPVoucher: import("@prime-fresh/purchase_api").GetPMPvoucher | undefined;
        previewPMPVoucher: import("@prime-fresh/purchase_api").PostPMPvoucher | import("@prime-fresh/purchase_api").GetPMPvoucher | undefined;
    };
    delivery_challan: {
        dcs: import("@prime-fresh/purchase_api").GetDeliveryChallan[];
        selectedDC: import("@prime-fresh/purchase_api").GetDeliveryChallan | undefined;
        previewDC: import("@prime-fresh/purchase_api").PostDeliveryChallan | import("@prime-fresh/purchase_api").GetDeliveryChallan | undefined;
    };
    payment_request: {
        paymentReq: import("@prime-fresh/purchase_api").GetPaymentRequest[];
        selectedPaymentReq: import("@prime-fresh/purchase_api").GetPaymentRequest | undefined;
        previewPaymentReq: import("@prime-fresh/purchase_api").PostPaymentRequest | undefined;
    };
}>;
