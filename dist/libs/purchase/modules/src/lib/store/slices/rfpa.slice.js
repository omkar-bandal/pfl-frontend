"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.rfpaDataReducer = exports.rfpaDataState = exports.setPreviewRFPA = exports.setSelectedRFPA = exports.setRFPAData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    rfpa: [],
    selectedRFPA: undefined,
    previewRFPA: undefined,
};
const rfpaDataSlice = (0, toolkit_1.createSlice)({
    name: 'rfpaData',
    initialState,
    reducers: {
        setRFPAData: (state, action) => {
            state.rfpa = action.payload;
        },
        setSelectedRFPA: (state, action) => {
            state.selectedRFPA = action.payload;
        },
        setPreviewRFPA: (state, action) => {
            state.previewRFPA = action.payload;
        }
    }
});
_a = rfpaDataSlice.actions, exports.setRFPAData = _a.setRFPAData, exports.setSelectedRFPA = _a.setSelectedRFPA, exports.setPreviewRFPA = _a.setPreviewRFPA;
const rfpaDataState = (state) => state.rfpaData;
exports.rfpaDataState = rfpaDataState;
exports.rfpaDataReducer = rfpaDataSlice.reducer;
//# sourceMappingURL=rfpa.slice.js.map