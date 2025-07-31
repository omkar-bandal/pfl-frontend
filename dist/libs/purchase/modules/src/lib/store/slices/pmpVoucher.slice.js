"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pmpVoucherReducer = exports.pmpVoucherState = exports.setPMPVoucherFormPreview = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    pmpVoucherFormPreview: undefined,
};
const pmpVoucherSlice = (0, toolkit_1.createSlice)({
    name: 'pmp_voucher',
    initialState,
    reducers: {
        setPMPVoucherFormPreview: (state, action) => {
            state.pmpVoucherFormPreview = action.payload;
        },
    },
});
exports.setPMPVoucherFormPreview = pmpVoucherSlice.actions.setPMPVoucherFormPreview;
const pmpVoucherState = (state) => state.pmp_voucher;
exports.pmpVoucherState = pmpVoucherState;
exports.pmpVoucherReducer = pmpVoucherSlice.reducer;
//# sourceMappingURL=pmpVoucher.slice.js.map