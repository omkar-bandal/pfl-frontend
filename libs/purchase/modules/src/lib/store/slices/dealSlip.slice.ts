import { GetDealSlip } from "@prime-fresh/purchase_api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.purchase";

type dealSlipDataState = {
    dealSlip: GetDealSlip[];
    selectedDealSlip: GetDealSlip | undefined;
}
const initialState: dealSlipDataState = {
    dealSlip: [],
    selectedDealSlip: undefined,
}
export const dealSlipDataSlice = createSlice({
    name: 'dealSlipData',
    initialState,
    reducers: {
        setDealSlipData: (state, action: PayloadAction<GetDealSlip[]>) => {
            state.dealSlip = action.payload;
        },
        setSelectedDealSlip: (state, action: PayloadAction<GetDealSlip|undefined>) => {
            state.selectedDealSlip = action.payload;
        }
    }
})

export const { setDealSlipData, setSelectedDealSlip } = dealSlipDataSlice.actions;

export const dealSlipDataState = (state: RootState) => state.dealSlipData;

export const dealSlipDataReducer = dealSlipDataSlice.reducer;