"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.uomDataReducer = exports.uomsDataState = exports.setSelectedUOMConvMat = exports.setUOMConvMat = exports.setSelectedUOM = exports.setUOMs = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    allUOMs: [],
    selectedUOM: undefined,
    allUOMConvMat: [],
    selectedUOMConvMat: undefined,
};
const uomDataSlice = (0, toolkit_1.createSlice)({
    name: 'uomData',
    initialState,
    reducers: {
        setUOMs: (state, action) => {
            state.allUOMs = action.payload;
        },
        setSelectedUOM: (state, action) => {
            state.selectedUOM = action.payload;
        },
        setUOMConvMat: (state, action) => {
            state.allUOMConvMat = action.payload;
        },
        setSelectedUOMConvMat: (state, action) => {
            state.selectedUOMConvMat = action.payload;
        }
    }
});
_a = uomDataSlice.actions, exports.setUOMs = _a.setUOMs, exports.setSelectedUOM = _a.setSelectedUOM, exports.setUOMConvMat = _a.setUOMConvMat, exports.setSelectedUOMConvMat = _a.setSelectedUOMConvMat;
const uomsDataState = (state) => state.uomData;
exports.uomsDataState = uomsDataState;
exports.uomDataReducer = uomDataSlice.reducer;
//# sourceMappingURL=uomData.slice.js.map