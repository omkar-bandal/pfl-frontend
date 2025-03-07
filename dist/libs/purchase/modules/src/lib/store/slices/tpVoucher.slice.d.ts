import { GetTPvoucher, PostTPvoucher } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";
type tpVoucherState = {
    tpVouchers: GetTPvoucher[];
    selectedTPVoucher: GetTPvoucher | undefined;
    previewTPVoucher: PostTPvoucher | GetTPvoucher | undefined;
};
export declare const setPreviewTPVoucher: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<PostTPvoucher | GetTPvoucher | undefined, "tp_voucher/setPreviewTPVoucher">, setSelectedTPVoucher: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetTPvoucher | undefined, "tp_voucher/setSelectedTPVoucher">, setTPVouchers: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetTPvoucher[], "tp_voucher/setTPVouchers">;
export declare const tpVoucherState: (state: RootState) => tpVoucherState;
export declare const tpVoucherReducer: import("@reduxjs/toolkit").Reducer<tpVoucherState>;
export {};
