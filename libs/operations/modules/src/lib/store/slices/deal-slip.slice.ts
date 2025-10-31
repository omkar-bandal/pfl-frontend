import { IDealSlip } from '@prime-fresh/services';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.operations";

type dealSlipDataState = {
    dealSlipFormPreview: Omit<IDealSlip, 'id'> | null;
}
const initialState: dealSlipDataState = {
    dealSlipFormPreview: null,
}
const dealSlipDataSlice = createSlice({
    name: 'dealSlipData',
    initialState,
    reducers: {
        setDealSlipFormPreview: (state, action: PayloadAction<Omit<IDealSlip, 'id'> | null>) => {
            state.dealSlipFormPreview = action.payload;
        }
    }
})

export const { setDealSlipFormPreview } = dealSlipDataSlice.actions;

export const dealSlipDataState = (state: RootState) => state.dealSlipData;

export const dealSlipDataReducer = dealSlipDataSlice.reducer;