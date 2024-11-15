"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.branchesDataReducer = exports.branchesDataState = exports.setBranchType = exports.setBranchesData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const admin_api_1 = require("@prime-fresh/admin_api");
const initialState = {
    branches: [],
    BranchType: admin_api_1.BranchType.COLLECTION_CENTER,
    selectedBranches: undefined
};
const branchesDataSlice = (0, toolkit_1.createSlice)({
    name: "branchesData",
    initialState,
    reducers: {
        setBranchesData: (state, action) => {
            state.branches = action.payload;
        },
        setBranchType: (state, action) => {
            state.BranchType = action.payload;
        },
    }
});
_a = branchesDataSlice.actions, exports.setBranchesData = _a.setBranchesData, exports.setBranchType = _a.setBranchType;
const branchesDataState = (state) => state.branchesData;
exports.branchesDataState = branchesDataState;
exports.branchesDataReducer = branchesDataSlice.reducer;
//# sourceMappingURL=branchesData.slice.js.map