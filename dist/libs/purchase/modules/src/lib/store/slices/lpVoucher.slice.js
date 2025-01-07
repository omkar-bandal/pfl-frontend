"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.lpVoucherReducer = exports.lpVoucherState = exports.setSelectedLPVoucher = exports.setPreviewLPVoucher = exports.setLPVouchers = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    lpVouchers: [],
    selectedLPVoucher: undefined,
    previewLPVoucher: undefined,
};
const lpVoucherSlice = (0, toolkit_1.createSlice)({
    name: "lp_voucher",
    initialState,
    reducers: {
        setLPVouchers: (state, action) => {
            state.lpVouchers = action.payload;
        },
        setSelectedLPVoucher: (state, action) => {
            state.selectedLPVoucher = action.payload;
        },
        setPreviewLPVoucher: (state, action) => {
            state.previewLPVoucher = action.payload;
        }
    }
});
_a = lpVoucherSlice.actions, exports.setLPVouchers = _a.setLPVouchers, exports.setPreviewLPVoucher = _a.setPreviewLPVoucher, exports.setSelectedLPVoucher = _a.setSelectedLPVoucher;
const lpVoucherState = (state) => state.lp_voucher;
exports.lpVoucherState = lpVoucherState;
exports.lpVoucherReducer = lpVoucherSlice.reducer;
//# sourceMappingURL=lpVoucher.slice.js.map