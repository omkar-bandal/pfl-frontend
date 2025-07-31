"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.grnDataReducer = exports.grnDataState = exports.setReasonForGRNAction = exports.setGRNActionType = exports.setGRNFormPreview = exports.setSelectedGRN = exports.setGRNData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    grn: [],
    selectedGRN: undefined,
    grnFormPreview: undefined,
    grnActionType: null,
    reasonForGRNAction: '',
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
        setGRNFormPreview: (state, action) => {
            state.grnFormPreview = action.payload;
        },
        setGRNActionType: (state, action) => {
            state.grnActionType = action.payload;
        },
        setReasonForGRNAction: (state, action) => {
            state.reasonForGRNAction = action.payload;
        },
    },
});
_a = grnDataSlice.actions, exports.setGRNData = _a.setGRNData, exports.setSelectedGRN = _a.setSelectedGRN, exports.setGRNFormPreview = _a.setGRNFormPreview, exports.setGRNActionType = _a.setGRNActionType, exports.setReasonForGRNAction = _a.setReasonForGRNAction;
const grnDataState = (state) => state.grnData;
exports.grnDataState = grnDataState;
exports.grnDataReducer = grnDataSlice.reducer;
//# sourceMappingURL=grn.slice.js.map