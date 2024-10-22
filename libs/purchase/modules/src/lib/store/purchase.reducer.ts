import {
    rfpaDataReducer,
    dealSlipDataReducer,
    grnDataReducer,
    mcVoucherReducer,
    tpVoucherReducer,
    lpVoucherReducer,
    pmpVoucherReducer
} from './slices';

export const purchaseReducer = {
    rfpaData: rfpaDataReducer,
    dealSlipData: dealSlipDataReducer,
    grnData: grnDataReducer,
    mc_voucher: mcVoucherReducer,
    lp_voucher: lpVoucherReducer,
    tp_voucher: tpVoucherReducer,
    pmp_voucher: pmpVoucherReducer,
}
