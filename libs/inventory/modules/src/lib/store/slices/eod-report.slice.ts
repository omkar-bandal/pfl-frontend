import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostEODReport } from "@prime-fresh/inventory_api";
import { RootState } from "../store.inventory";

type EODReportState = {
    eodReportFormPreview: PostEODReport | undefined;
}
const initialState : EODReportState = {
    eodReportFormPreview: undefined,
}

const eodReportSlice = createSlice({
    name: "eodReport",
    initialState,
    reducers: {
        setEODReportFormPreview: (state, action: PayloadAction<PostEODReport | undefined>) => {
            state.eodReportFormPreview = action.payload;
        }
    }
})
export const {setEODReportFormPreview } = eodReportSlice.actions;

export const eodReportStates = (store: RootState) => store.eodReport;

export const eodReportReducer = eodReportSlice.reducer;