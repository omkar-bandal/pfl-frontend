"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.grnDataReducer = exports.grnDataState = exports.setTotAmtWords = exports.setTotalAmt = exports.setSubTotalAmt = exports.setPreviewGRN = exports.setSelectedGRN = exports.setGRNData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    grn: [],
    selectedGRN: undefined,
    previewGRN: undefined,
    subTotalAmt: 0,
    totalAmt: 0,
    totAmtWords: "",
};
const grnDataSlice = (0, toolkit_1.createSlice)({
    name: 'grnData',
    initialState,
    reducers: {
        setGRNData: (state, action) => {
            state.grn = action.payload;
        },
        setSelectedGRN: (state, action) => {
            state.selectedGRN = action.payload;
        },
        setPreviewGRN: (state, action) => {
            state.previewGRN = action.payload;
        },
        setSubTotalAmt: (state, action) => {
            state.subTotalAmt = action.payload;
        },
        setTotalAmt: (state, action) => {
            state.totalAmt = action.payload;
        },
        setTotAmtWords: (state, action) => {
            state.totAmtWords = action.payload;
        },
    }
});
_a = grnDataSlice.actions, exports.setGRNData = _a.setGRNData, exports.setSelectedGRN = _a.setSelectedGRN, exports.setPreviewGRN = _a.setPreviewGRN, exports.setSubTotalAmt = _a.setSubTotalAmt, exports.setTotalAmt = _a.setTotalAmt, exports.setTotAmtWords = _a.setTotAmtWords;
const grnDataState = (state) => state.grnData;
exports.grnDataState = grnDataState;
exports.grnDataReducer = grnDataSlice.reducer;
//# sourceMappingURL=grn.slice.js.map