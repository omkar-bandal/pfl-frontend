"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rfpaDataReducer = exports.rfpaDataState = exports.setRFPAFormPreview = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    rfpaFormPreview: undefined,
};
const rfpaDataSlice = (0, toolkit_1.createSlice)({
    name: 'rfpaData',
    initialState,
    reducers: {
        setRFPAFormPreview: (state, action) => {
            state.rfpaFormPreview = action.payload;
        }
    }
});
exports.setRFPAFormPreview = rfpaDataSlice.actions.setRFPAFormPreview;
const rfpaDataState = (state) => state.rfpaData;
exports.rfpaDataState = rfpaDataState;
exports.rfpaDataReducer = rfpaDataSlice.reducer;
//# sourceMappingURL=rfpa.slice.js.map