import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.purchase";
import { IRFPA } from "@prime-fresh/purchase_api";

type rfpaDataState = {
    rfpaFormPreview: Omit<IRFPA, 'id'> | undefined;
}
const initialState: rfpaDataState = {

    rfpaFormPreview: undefined,
}
const rfpaDataSlice = createSlice({
    name: 'rfpaData',
    initialState,
    reducers: {
        setRFPAFormPreview: (state, action: PayloadAction<Omit<IRFPA, 'id'>| undefined>) => {
            state.rfpaFormPreview = action.payload;
        }
    }
})

export const { setRFPAFormPreview } = rfpaDataSlice.actions;

export const rfpaDataState = (state: RootState) => state.rfpaData;

export const rfpaDataReducer = rfpaDataSlice.reducer;