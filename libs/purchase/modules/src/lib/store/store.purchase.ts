import { configureStore } from '@reduxjs/toolkit';
import {
    rfpaDataReducer,
    dealSlipDataReducer,
    grnDataReducer,
    mcVoucherReducer,
    tpVoucherReducer,
    lpVoucherReducer,
    pmpVoucherReducer,
    deliveryChallanReducer,
    paymentReqReducer
} from './slices';

export const purchaseStore = configureStore({
    reducer: {
        rfpaData: rfpaDataReducer,
        dealSlipData: dealSlipDataReducer,
        grnData: grnDataReducer,
        mc_voucher: mcVoucherReducer,
        lp_voucher: lpVoucherReducer,
        tp_voucher: tpVoucherReducer,
        pmp_voucher: pmpVoucherReducer,
        delivery_challan: deliveryChallanReducer,
        payment_request: paymentReqReducer,
    }
})

export type RootState = ReturnType<typeof purchaseStore.getState>;

export type AppDispatch = typeof purchaseStore.dispatch;

