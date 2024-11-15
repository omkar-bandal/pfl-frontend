"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentReqReducer = exports.paymentReqState = exports.setSelectedPaymentReq = exports.setPreviewPaymentReq = exports.setPaymentReqs = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    paymentReq: [],
    selectedPaymentReq: undefined,
    previewPaymentReq: undefined,
};
const paymentReqSlice = (0, toolkit_1.createSlice)({
    name: "payment_request",
    initialState,
    reducers: {
        setPaymentReqs: (state, action) => {
            state.paymentReq = action.payload;
        },
        setSelectedPaymentReq: (state, action) => {
            state.selectedPaymentReq = action.payload;
        },
        setPreviewPaymentReq: (state, action) => {
            state.previewPaymentReq = action.payload;
        }
    }
});
_a = paymentReqSlice.actions, exports.setPaymentReqs = _a.setPaymentReqs, exports.setPreviewPaymentReq = _a.setPreviewPaymentReq, exports.setSelectedPaymentReq = _a.setSelectedPaymentReq;
const paymentReqState = (state) => state.payment_request;
exports.paymentReqState = paymentReqState;
exports.paymentReqReducer = paymentReqSlice.reducer;
//# sourceMappingURL=paymentReq.slice.js.map