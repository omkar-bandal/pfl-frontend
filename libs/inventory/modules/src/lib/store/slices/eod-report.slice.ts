import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEODReport } from "@prime-fresh/inventory_api";
import { RootState } from "../store.inventory";

type EODReportState = {
    eodReportFormPreview: Omit<IEODReport, 'id'> | undefined;
}
const initialState : EODReportState = {
    eodReportFormPreview: undefined,
}

const eodReportSlice = createSlice({
    name: "eodReport",
    initialState,
    reducers: {
        setEODReportFormPreview: (state, action: PayloadAction<Omit<IEODReport, 'id'> | undefined>) => {
            state.eodReportFormPreview = action.payload;
        }
    }
})
export const {setEODReportFormPreview } = eodReportSlice.actions;

export const eodReportStates = (store: RootState) => store.eodReport;

export const eodReportReducer = eodReportSlice.reducer;