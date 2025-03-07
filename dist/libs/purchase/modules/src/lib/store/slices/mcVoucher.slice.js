"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcVoucherReducer = exports.mcVoucherState = exports.setSelectedMCVoucher = exports.setPreviewMCVoucher = exports.setMCVouchers = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    mcVouchers: [],
    selectedMCVoucher: undefined,
    previewMCVoucher: undefined,
};
const mcVoucherSlice = (0, toolkit_1.createSlice)({
    name: "mc_voucher",
    initialState,
    reducers: {
        setMCVouchers: (state, action) => {
            state.mcVouchers = action.payload;
        },
        setSelectedMCVoucher: (state, action) => {
            state.selectedMCVoucher = action.payload;
        },
        setPreviewMCVoucher: (state, action) => {
            state.previewMCVoucher = action.payload;
        }
    }
});
_a = mcVoucherSlice.actions, exports.setMCVouchers = _a.setMCVouchers, exports.setPreviewMCVoucher = _a.setPreviewMCVoucher, exports.setSelectedMCVoucher = _a.setSelectedMCVoucher;
const mcVoucherState = (state) => state.mc_voucher;
exports.mcVoucherState = mcVoucherState;
exports.mcVoucherReducer = mcVoucherSlice.reducer;
//# sourceMappingURL=mcVoucher.slice.js.map