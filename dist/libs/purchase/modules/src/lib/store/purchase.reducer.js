"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseReducer = void 0;
const slices_1 = require("./slices");
exports.purchaseReducer = {
    rfpaData: slices_1.rfpaDataReducer,
    dealSlipData: slices_1.dealSlipDataReducer,
    grnData: slices_1.grnDataReducer,
    mc_voucher: slices_1.mcVoucherReducer,
    lp_voucher: slices_1.lpVoucherReducer,
    tp_voucher: slices_1.tpVoucherReducer,
    pmp_voucher: slices_1.pmpVoucherReducer,
    delivery_challan: slices_1.deliveryChallanReducer,
    payment_request: slices_1.paymentReqReducer,
};
//# sourceMappingURL=purchase.reducer.js.map