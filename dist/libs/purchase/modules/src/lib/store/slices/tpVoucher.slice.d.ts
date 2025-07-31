import { ITranportPaymentVoucher } from '@prime-fresh/purchase_api';
import { RootState } from '../store.purchase';
type tpVoucherState = {
    tpVoucherFormPreview: Omit<ITranportPaymentVoucher, 'id'> | undefined;
};
export declare const setTPVoucherFormPreview: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Omit<ITranportPaymentVoucher, "id"> | undefined, "tp_voucher/setTPVoucherFormPreview">;
export declare const tpVoucherState: (state: RootState) => tpVoucherState;
export declare const tpVoucherReducer: import("@reduxjs/toolkit").Reducer<tpVoucherState>;
export {};
