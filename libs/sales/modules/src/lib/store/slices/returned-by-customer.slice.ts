import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.sales";
import { IReturnByCustomer } from "@prime-fresh/sales_api";

type ReturnedByCustomerState = {
    rbcFormPreview: Omit<IReturnByCustomer, 'id'> | null;
}
const initialState : ReturnedByCustomerState = {
    rbcFormPreview: null,
}

const returnedByCustomerSlice = createSlice({
    name: "rbc",
    initialState,
    reducers: {
        setRBCFormPreview: (state, action: PayloadAction<Omit<IReturnByCustomer, 'id'> | null>) => {
            state.rbcFormPreview = action.payload;
        }
    }
})
export const {setRBCFormPreview } = returnedByCustomerSlice.actions;

export const rbcFormPreviewStates = (store: RootState) => store.rbc.rbcFormPreview;

export const returnedByCustomerReducer = returnedByCustomerSlice.reducer;