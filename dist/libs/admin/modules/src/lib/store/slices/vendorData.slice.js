"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorDataReducer = exports.vendorsDataState = exports.setSelectedVendor = exports.setVendorData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    allVendors: [],
    selectedVendor: undefined,
};
const vendorDataSlice = (0, toolkit_1.createSlice)({
    name: 'vendorData',
    initialState,
    reducers: {
        setVendorData: (state, action) => {
            state.allVendors = action.payload;
        },
        setSelectedVendor: (state, action) => {
            state.selectedVendor = action.payload;
        }
    }
});
_a = vendorDataSlice.actions, exports.setVendorData = _a.setVendorData, exports.setSelectedVendor = _a.setSelectedVendor;
const vendorsDataState = (state) => state.vendorData;
exports.vendorsDataState = vendorsDataState;
exports.vendorDataReducer = vendorDataSlice.reducer;
//# sourceMappingURL=vendorData.slice.js.map