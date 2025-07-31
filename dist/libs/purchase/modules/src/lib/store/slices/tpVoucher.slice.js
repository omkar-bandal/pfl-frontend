"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tpVoucherReducer = exports.tpVoucherState = exports.setTPVoucherFormPreview = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    tpVoucherFormPreview: undefined,
};
const tpVoucherSlice = (0, toolkit_1.createSlice)({
    name: 'tp_voucher',
    initialState,
    reducers: {
        setTPVoucherFormPreview: (state, action) => {
            state.tpVoucherFormPreview = action.payload;
        },
    },
});
exports.setTPVoucherFormPreview = tpVoucherSlice.actions.setTPVoucherFormPreview;
const tpVoucherState = (state) => state.tp_voucher;
exports.tpVoucherState = tpVoucherState;
exports.tpVoucherReducer = tpVoucherSlice.reducer;
//# sourceMappingURL=tpVoucher.slice.js.map