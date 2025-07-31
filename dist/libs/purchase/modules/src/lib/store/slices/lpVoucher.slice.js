"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lpVoucherReducer = exports.lpVoucherState = exports.setLPVoucherFormPreview = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    lpVoucherFormPreview: null,
};
const lpVoucherSlice = (0, toolkit_1.createSlice)({
    name: 'lp_voucher',
    initialState,
    reducers: {
        setLPVoucherFormPreview: (state, action) => {
            state.lpVoucherFormPreview = action.payload;
        },
    },
});
exports.setLPVoucherFormPreview = lpVoucherSlice.actions.setLPVoucherFormPreview;
const lpVoucherState = (state) => state.lp_voucher;
exports.lpVoucherState = lpVoucherState;
exports.lpVoucherReducer = lpVoucherSlice.reducer;
//# sourceMappingURL=lpVoucher.slice.js.map