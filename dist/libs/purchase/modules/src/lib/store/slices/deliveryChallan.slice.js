"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryChallanReducer = exports.dcState = exports.setPreviewDCTypeStockTransfer = exports.setPreviewDCTypeCustomer = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    previewDCTypeCustomer: undefined,
    previewDCTypeStockTransfer: undefined
};
const deliveryChallanSlice = (0, toolkit_1.createSlice)({
    name: "delivery_challan",
    initialState,
    reducers: {
        setPreviewDCTypeCustomer: (state, action) => {
            state.previewDCTypeCustomer = action.payload;
        },
        setPreviewDCTypeStockTransfer: (state, action) => {
            state.previewDCTypeStockTransfer = action.payload;
        }
    }
});
_a = deliveryChallanSlice.actions, exports.setPreviewDCTypeCustomer = _a.setPreviewDCTypeCustomer, exports.setPreviewDCTypeStockTransfer = _a.setPreviewDCTypeStockTransfer;
const dcState = (state) => state.delivery_challan;
exports.dcState = dcState;
exports.deliveryChallanReducer = deliveryChallanSlice.reducer;
//# sourceMappingURL=deliveryChallan.slice.js.map