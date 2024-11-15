"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryChallanReducer = exports.dcState = exports.setSelectedDC = exports.setPreviewDC = exports.setDCs = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    dcs: [],
    selectedDC: undefined,
    previewDC: undefined,
};
const deliveryChallanSlice = (0, toolkit_1.createSlice)({
    name: "delivery_challan",
    initialState,
    reducers: {
        setDCs: (state, action) => {
            state.dcs = action.payload;
        },
        setSelectedDC: (state, action) => {
            state.selectedDC = action.payload;
        },
        setPreviewDC: (state, action) => {
            state.previewDC = action.payload;
        }
    }
});
_a = deliveryChallanSlice.actions, exports.setDCs = _a.setDCs, exports.setPreviewDC = _a.setPreviewDC, exports.setSelectedDC = _a.setSelectedDC;
const dcState = (state) => state.delivery_challan;
exports.dcState = dcState;
exports.deliveryChallanReducer = deliveryChallanSlice.reducer;
//# sourceMappingURL=deliveryChallan.slice.js.map