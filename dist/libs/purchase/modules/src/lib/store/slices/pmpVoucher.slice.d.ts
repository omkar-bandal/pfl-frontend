import { GetPMPvoucher, PostPMPvoucher } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";
type pmpVoucherState = {
    pmpVouchers: GetPMPvoucher[];
    selectedPMPVoucher: GetPMPvoucher | undefined;
    previewPMPVoucher: PostPMPvoucher | undefined;
};
export declare const setPMPVouchers: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetPMPvoucher[], "pmp_voucher/setPMPVouchers">, setPreviewPMPVoucher: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<PostPMPvoucher | undefined, "pmp_voucher/setPreviewPMPVoucher">, setSelectedPMPVoucher: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetPMPvoucher | undefined, "pmp_voucher/setSelectedPMPVoucher">;
export declare const pmpVoucherState: (state: RootState) => pmpVoucherState;
export declare const pmpVoucherReducer: import("@reduxjs/toolkit").Reducer<pmpVoucherState>;
export {};
