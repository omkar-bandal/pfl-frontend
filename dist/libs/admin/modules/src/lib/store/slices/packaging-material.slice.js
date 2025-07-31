"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packagingMaterialDataReducer = exports.packagingMaterialDataStates = exports.setPackagingMaterialFormPreview = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    packagingMaterialFormPreview: null,
};
const packagingMaterialDataSlice = (0, toolkit_1.createSlice)({
    name: 'packagingMaterialData',
    initialState,
    reducers: {
        setPackagingMaterialFormPreview: (state, action) => {
            state.packagingMaterialFormPreview = action.payload;
        },
    },
});
exports.setPackagingMaterialFormPreview = packagingMaterialDataSlice.actions.setPackagingMaterialFormPreview;
const packagingMaterialDataStates = (state) => state.packagingMaterialData;
exports.packagingMaterialDataStates = packagingMaterialDataStates;
exports.packagingMaterialDataReducer = packagingMaterialDataSlice.reducer;
//# sourceMappingURL=packaging-material.slice.js.map