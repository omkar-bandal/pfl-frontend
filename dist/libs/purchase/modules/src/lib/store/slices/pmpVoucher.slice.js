"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.pmpVoucherReducer = exports.pmpVoucherState = exports.setSelectedPMPVoucher = exports.setPreviewPMPVoucher = exports.setPMPVouchers = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    pmpVouchers: [],
    selectedPMPVoucher: undefined,
    previewPMPVoucher: undefined,
};
const pmpVoucherSlice = (0, toolkit_1.createSlice)({
    name: "pmp_voucher",
    initialState,
    reducers: {
        setPMPVouchers: (state, action) => {
            state.pmpVouchers = action.payload;
        },
        setSelectedPMPVoucher: (state, action) => {
            state.selectedPMPVoucher = action.payload;
        },
        setPreviewPMPVoucher: (state, action) => {
            state.previewPMPVoucher = action.payload;
        }
    }
});
_a = pmpVoucherSlice.actions, exports.setPMPVouchers = _a.setPMPVouchers, exports.setPreviewPMPVoucher = _a.setPreviewPMPVoucher, exports.setSelectedPMPVoucher = _a.setSelectedPMPVoucher;
const pmpVoucherState = (state) => state.pmp_voucher;
exports.pmpVoucherState = pmpVoucherState;
exports.pmpVoucherReducer = pmpVoucherSlice.reducer;
//# sourceMappingURL=pmpVoucher.slice.js.map