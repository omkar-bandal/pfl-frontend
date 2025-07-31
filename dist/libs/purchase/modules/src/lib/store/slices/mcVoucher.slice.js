"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcVoucherReducer = exports.mcVoucherState = exports.setMCVoucherFormPreview = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    mcVoucherFormPreview: undefined,
};
const mcVoucherSlice = (0, toolkit_1.createSlice)({
    name: 'mc_voucher',
    initialState,
    reducers: {
        setMCVoucherFormPreview: (state, action) => {
            state.mcVoucherFormPreview = action.payload;
        },
    },
});
exports.setMCVoucherFormPreview = mcVoucherSlice.actions.setMCVoucherFormPreview;
const mcVoucherState = (state) => state.mc_voucher;
exports.mcVoucherState = mcVoucherState;
exports.mcVoucherReducer = mcVoucherSlice.reducer;
//# sourceMappingURL=mcVoucher.slice.js.map