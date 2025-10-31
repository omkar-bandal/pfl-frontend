import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReturnByCustomer } from '@prime-fresh/services';
import { RootState } from "../store.operations";

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

export const rbcStates = (store: RootState) => store.rbc;

export const returnedByCustomerReducer = returnedByCustomerSlice.reducer;