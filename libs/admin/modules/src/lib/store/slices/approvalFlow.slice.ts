import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";

type ApprovalFlowStateType = {
    showReplaceForm: boolean;
}
const initialState: ApprovalFlowStateType = {
   showReplaceForm: false
}
const approvalFlowSlice = createSlice({
    name: "approvalFlow",
    initialState,
    reducers: {
        setShowReplaceForm: (state) => {
            state.showReplaceForm = !state.showReplaceForm; 
        },
    }
})

export const { setShowReplaceForm } = approvalFlowSlice.actions;

export const approvalFlowStates = (state: RootState) => state.approvalFlow;

export const approvalFlowReducer = approvalFlowSlice.reducer;