"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealSlipDataReducer = exports.dealSlipDataState = exports.setSelectedDealSlip = exports.setDealSlipData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    dealSlip: [],
    selectedDealSlip: undefined,
};
const dealSlipDataSlice = (0, toolkit_1.createSlice)({
    name: 'dealSlipData',
    initialState,
    reducers: {
        setDealSlipData: (state, action) => {
            state.dealSlip = action.payload;
        },
        setSelectedDealSlip: (state, action) => {
            state.selectedDealSlip = action.payload;
        }
    }
});
_a = dealSlipDataSlice.actions, exports.setDealSlipData = _a.setDealSlipData, exports.setSelectedDealSlip = _a.setSelectedDealSlip;
const dealSlipDataState = (state) => state.dealSlipData;
exports.dealSlipDataState = dealSlipDataState;
exports.dealSlipDataReducer = dealSlipDataSlice.reducer;
//# sourceMappingURL=dealSlip.slice.js.map