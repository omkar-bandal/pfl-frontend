import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { Branches, BranchType } from "../../models";

type BranchesDataState = {
    branches: Branches[],
    BranchType: BranchType,
    selectedBranches: Branches,
}
const initialState: BranchesDataState = {
    branches: [],
    BranchType: BranchType.COLLECTION_CENTER,
    selectedBranches: {
        id: "",
        name: "",
        cFirstName: "",
        cMiddleName: "",
        cLastName: "",
        contactNumber: "",
        balanceCapacity: 0,
        currentCapacity: 0,
        totalCapacity: 0,
        type: BranchType.COLLECTION_CENTER,
        notes: "",
        address: {
            address1: "",
            address2: "",
            location: "",
            city: "",
            state: "",
            pincode: ""
        }
    }
}
export const branchesDataSlice = createSlice({
    name: "branchesData",
    initialState,
    reducers: {
        setBranchesData: (state, action: PayloadAction<Branches[]>) => {
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