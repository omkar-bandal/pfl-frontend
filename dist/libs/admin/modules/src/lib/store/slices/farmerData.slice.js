"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.farmerDataReducer = exports.farmersDataState = exports.setSelectedFarmer = exports.setFilteredFarmerData = exports.setFarmerData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    allFarmers: [],
    allFarmersFiltered: [],
    selectedFarmer: null,
};
const farmerDataSlice = (0, toolkit_1.createSlice)({
    name: 'farmerData',
    initialState,
    reducers: {
        setFarmerData: (state, action) => {
            state.allFarmers = action.payload;
        },
        setFilteredFarmerData: (state, action) => {
            state.allFarmersFiltered = action.payload;
        },
        setSelectedFarmer: (state, action) => {
            state.selectedFarmer = action.payload;
        }
    }
});
_a = farmerDataSlice.actions, exports.setFarmerData = _a.setFarmerData, exports.setFilteredFarmerData = _a.setFilteredFarmerData, exports.setSelectedFarmer = _a.setSelectedFarmer;
const farmersDataState = (state) => state.farmerData;
exports.farmersDataState = farmersDataState;
exports.farmerDataReducer = farmerDataSlice.reducer;
//# sourceMappingURL=farmerData.slice.js.map