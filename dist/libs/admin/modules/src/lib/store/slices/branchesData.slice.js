"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.branchesDataReducer = exports.branchesDataStates = exports.setBranchFormPreview = exports.setBranchType = exports.setBranchesData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const admin_api_1 = require("@prime-fresh/admin_api");
const initialState = {
    branches: [],
    BranchType: admin_api_1.BranchType["collection-center"],
    selectedBranches: undefined,
    branchFormPreview: null,
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
        setBranchFormPreview: (state, action) => {
            state.branchFormPreview = action.payload;
        }
    }
});
_a = branchesDataSlice.actions, exports.setBranchesData = _a.setBranchesData, exports.setBranchType = _a.setBranchType, exports.setBranchFormPreview = _a.setBranchFormPreview;
const branchesDataStates = (state) => state.branchesData;
exports.branchesDataStates = branchesDataStates;
exports.branchesDataReducer = branchesDataSlice.reducer;
//# sourceMappingURL=branchesData.slice.js.map