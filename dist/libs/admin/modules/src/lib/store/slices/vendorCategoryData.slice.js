"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorCategoryDataReducer = exports.vendorCategoryState = exports.setSelectedVendorCategory = exports.setAllVendorCategories = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    allVendorCategories: [],
    selectedVendorCategory: null,
};
const vendorCategoryDataSlice = (0, toolkit_1.createSlice)({
    name: "vendorCategoryData",
    initialState,
    reducers: {
        setAllVendorCategories: (state, action) => {
            state.allVendorCategories = action.payload;
        },
        setSelectedVendorCategory: (state, action) => {
            state.selectedVendorCategory = action.payload;
        }
    }
});
_a = vendorCategoryDataSlice.actions, exports.setAllVendorCategories = _a.setAllVendorCategories, exports.setSelectedVendorCategory = _a.setSelectedVendorCategory;
const vendorCategoryState = (state) => state.vendorCategoryData;
exports.vendorCategoryState = vendorCategoryState;
exports.vendorCategoryDataReducer = vendorCategoryDataSlice.reducer;
//# sourceMappingURL=vendorCategoryData.slice.js.map