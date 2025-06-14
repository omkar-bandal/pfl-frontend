import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { BranchType, GetBranches, PostBranches } from "@prime-fresh/admin_api";

type BranchesDataState = {
    branches: GetBranches[] | undefined,
    BranchType: BranchType,
    selectedBranches: GetBranches | undefined,
    branchFormPreview: PostBranches | null,
}
const initialState: BranchesDataState = {
    branches: [],
    BranchType: BranchType["collection-center"],
    selectedBranches: undefined,
    branchFormPreview: null,
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
        setBranchFormPreview: (state, action: PayloadAction<PostBranches>) => {
            state.branchFormPreview = action.payload;
        }
    }
})

export const { setBranchesData, setBranchType, setBranchFormPreview } = branchesDataSlice.actions;

export const branchesDataStates = (state: RootState) => state.branchesData;

export const branchesDataReducer = branchesDataSlice.reducer;