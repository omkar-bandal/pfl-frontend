"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorDataReducer = exports.vendorsDataState = exports.setSelectedVendorPartialData = exports.setAllVendorsPartialData = exports.setVendorData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    allVendors: [],
    allVendorssPartialData: [],
    selectedVendorPartialData: null,
};
const vendorDataSlice = (0, toolkit_1.createSlice)({
    name: 'vendorData',
    initialState,
    reducers: {
        setVendorData: (state, action) => {
            state.allVendors = action.payload;
        },
        setAllVendorsPartialData: (state, action) => {
            state.allVendorssPartialData = action.payload;
        },
        setSelectedVendorPartialData: (state, action) => {
            state.selectedVendorPartialData = action.payload;
        }
    }
});
_a = vendorDataSlice.actions, exports.setVendorData = _a.setVendorData, exports.setAllVendorsPartialData = _a.setAllVendorsPartialData, exports.setSelectedVendorPartialData = _a.setSelectedVendorPartialData;
const vendorsDataState = (state) => state.vendorData;
exports.vendorsDataState = vendorsDataState;
exports.vendorDataReducer = vendorDataSlice.reducer;
//# sourceMappingURL=vendorData.slice.js.map