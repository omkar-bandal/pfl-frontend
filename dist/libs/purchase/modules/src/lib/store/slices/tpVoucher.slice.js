"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tpVoucherReducer = exports.tpVoucherState = exports.setTPVouchers = exports.setSelectedTPVoucher = exports.setPreviewTPVoucher = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    tpVouchers: [],
    selectedTPVoucher: undefined,
    previewTPVoucher: undefined,
};
const tpVoucherSlice = (0, toolkit_1.createSlice)({
    name: "tp_voucher",
    initialState,
    reducers: {
        setTPVouchers: (state, action) => {
            state.tpVouchers = action.payload;
        },
        setSelectedTPVoucher: (state, action) => {
            state.selectedTPVoucher = action.payload;
        },
        setPreviewTPVoucher: (state, action) => {
            state.previewTPVoucher = action.payload;
        }
    }
});
_a = tpVoucherSlice.actions, exports.setPreviewTPVoucher = _a.setPreviewTPVoucher, exports.setSelectedTPVoucher = _a.setSelectedTPVoucher, exports.setTPVouchers = _a.setTPVouchers;
const tpVoucherState = (state) => state.tp_voucher;
exports.tpVoucherState = tpVoucherState;
exports.tpVoucherReducer = tpVoucherSlice.reducer;
//# sourceMappingURL=tpVoucher.slice.js.map