"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealSlipDataReducer = exports.dealSlipDataState = exports.setDealSlipFormPreview = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    dealSlipFormPreview: null,
};
const dealSlipDataSlice = (0, toolkit_1.createSlice)({
    name: 'dealSlipData',
    initialState,
    reducers: {
        setDealSlipFormPreview: (state, action) => {
            state.dealSlipFormPreview = action.payload;
        }
    }
});
exports.setDealSlipFormPreview = dealSlipDataSlice.actions.setDealSlipFormPreview;
const dealSlipDataState = (state) => state.dealSlipData;
exports.dealSlipDataState = dealSlipDataState;
exports.dealSlipDataReducer = dealSlipDataSlice.reducer;
//# sourceMappingURL=deal-slip.slice.js.map