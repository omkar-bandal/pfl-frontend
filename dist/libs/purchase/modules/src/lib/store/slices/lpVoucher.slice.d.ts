import { GetLPvoucher, PostLPvoucher } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";
type lpVoucherState = {
    lpVouchers: GetLPvoucher[];
    selectedLPVoucher: GetLPvoucher | undefined;
    previewLPVoucher: PostLPvoucher | GetLPvoucher | undefined;
};
export declare const setLPVouchers: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetLPvoucher[], "lp_voucher/setLPVouchers">, setPreviewLPVoucher: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetLPvoucher | PostLPvoucher | undefined, "lp_voucher/setPreviewLPVoucher">, setSelectedLPVoucher: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetLPvoucher | undefined, "lp_voucher/setSelectedLPVoucher">;
export declare const lpVoucherState: (state: RootState) => lpVoucherState;
export declare const lpVoucherReducer: import("@reduxjs/toolkit").Reducer<lpVoucherState>;
export {};
