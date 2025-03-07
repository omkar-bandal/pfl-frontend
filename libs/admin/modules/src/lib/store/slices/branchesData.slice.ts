import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { BranchType, GetBranches } from "@prime-fresh/admin_api";

type BranchesDataState = {
    branches: GetBranches[] | undefined,
    BranchType: BranchType,
    selectedBranches: GetBranches | undefined,
}
const initialState: BranchesDataState = {
    branches: [],
    BranchType: BranchType["collection-center"],
    selectedBranches: undefined
}
const branchesDataSlice = createSlice({
    name: "branchesData",
    initialState,
    reducers: {
        setBranchesData: (state, action: PayloadAction<GetBranches[]>) => {
            state.branches = action.payload;
        },
        setBranchType: (state, action: PayloadAction<BranchType>) => {
            state.BranchType = action.payload;
        },
    }
})

export const { setBranchesData, setBranchType } = branchesDataSlice.actions;

export const branchesDataState = (state: RootState) => state.branchesData;

export const branchesDataReducer = branchesDataSlice.reducer;