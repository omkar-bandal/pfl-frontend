"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseStore = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const slices_1 = require("./slices");
exports.purchaseStore = (0, toolkit_1.configureStore)({
    reducer: {
        rfpaData: slices_1.rfpaDataReducer,
        dealSlipData: slices_1.dealSlipDataReducer,
        grnData: slices_1.grnDataReducer,
        mc_voucher: slices_1.mcVoucherReducer,
        lp_voucher: slices_1.lpVoucherReducer,
        tp_voucher: slices_1.tpVoucherReducer,
        pmp_voucher: slices_1.pmpVoucherReducer,
        delivery_challan: slices_1.deliveryChallanReducer,
        payment_request: slices_1.paymentReqReducer,
    }
});
//# sourceMappingURL=store.purchase.js.map