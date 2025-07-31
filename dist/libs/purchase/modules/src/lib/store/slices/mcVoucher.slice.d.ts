import { IMultiCashVoucher } from '@prime-fresh/purchase_api';
import { RootState } from '../store.purchase';
type MCVoucherState = {
    mcVoucherFormPreview: Omit<IMultiCashVoucher, 'id'> | undefined;
};
export declare const setMCVoucherFormPreview: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Omit<IMultiCashVoucher, "id"> | undefined, "mc_voucher/setMCVoucherFormPreview">;
export declare const mcVoucherState: (state: RootState) => MCVoucherState;
export declare const mcVoucherReducer: import("@reduxjs/toolkit").Reducer<MCVoucherState>;
export {};
