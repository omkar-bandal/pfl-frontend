import { ILaborPaymentVoucher } from '@prime-fresh/purchase_api';
import { RootState } from '../store.purchase';
type lpVoucherState = {
    lpVoucherFormPreview: Omit<ILaborPaymentVoucher, 'id'> | null;
};
export declare const setLPVoucherFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<Omit<ILaborPaymentVoucher, "id"> | null, "lp_voucher/setLPVoucherFormPreview">;
export declare const lpVoucherState: (state: RootState) => lpVoucherState;
export declare const lpVoucherReducer: import("@reduxjs/toolkit").Reducer<lpVoucherState>;
export {};
