import { GetMCvoucher, PostMCvoucher } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";
type mcVoucherState = {
    mcVouchers: GetMCvoucher[];
    selectedMCVoucher: GetMCvoucher | undefined;
    previewMCVoucher: PostMCvoucher | GetMCvoucher | undefined;
};
export declare const setMCVouchers: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetMCvoucher[], "mc_voucher/setMCVouchers">, setPreviewMCVoucher: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<PostMCvoucher | GetMCvoucher | undefined, "mc_voucher/setPreviewMCVoucher">, setSelectedMCVoucher: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetMCvoucher | undefined, "mc_voucher/setSelectedMCVoucher">;
export declare const mcVoucherState: (state: RootState) => mcVoucherState;
export declare const mcVoucherReducer: import("@reduxjs/toolkit").Reducer<mcVoucherState>;
export {};
