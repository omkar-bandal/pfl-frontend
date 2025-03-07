"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.farmerDataReducer = exports.farmersDataState = exports.setSelectedFarmerPartialData = exports.setAllFarmersPartialData = exports.setFarmerData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    allFarmers: [],
    allFarmersPartialData: [],
    selectedFarmerPartialData: null,
};
const farmerDataSlice = (0, toolkit_1.createSlice)({
    name: 'farmerData',
    initialState,
    reducers: {
        setFarmerData: (state, action) => {
            state.allFarmers = action.payload;
        },
        setAllFarmersPartialData: (state, action) => {
            state.allFarmersPartialData = action.payload;
        },
        setSelectedFarmerPartialData: (state, action) => {
            state.selectedFarmerPartialData = action.payload;
        }
    }
});
_a = farmerDataSlice.actions, exports.setFarmerData = _a.setFarmerData, exports.setAllFarmersPartialData = _a.setAllFarmersPartialData, exports.setSelectedFarmerPartialData = _a.setSelectedFarmerPartialData;
const farmersDataState = (state) => state.farmerData;
exports.farmersDataState = farmersDataState;
exports.farmerDataReducer = farmerDataSlice.reducer;
//# sourceMappingURL=farmerData.slice.js.map