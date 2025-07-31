import { IPackingMaterialPaymentVoucher } from '@prime-fresh/purchase_api';
import { RootState } from '../store.purchase';
type pmpVoucherState = {
    pmpVoucherFormPreview: Omit<IPackingMaterialPaymentVoucher, 'id'> | undefined;
};
export declare const setPMPVoucherFormPreview: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Omit<IPackingMaterialPaymentVoucher, "id"> | undefined, "pmp_voucher/setPMPVoucherFormPreview">;
export declare const pmpVoucherState: (state: RootState) => pmpVoucherState;
export declare const pmpVoucherReducer: import("@reduxjs/toolkit").Reducer<pmpVoucherState>;
export {};
