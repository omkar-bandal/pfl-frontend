import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { Customer } from "../../models";

type customerDataState = {
    customers: Customer[];
}
const initialState: customerDataState = {
    customers: [],
}
export const customerDataSlice = createSlice({
    name: 'customerData',
    initialState,
    reducers: {
        setCustomerData: (state, action: PayloadAction<Customer[]>) => {
            state.customers = action.payload;
        },
    }
})

export const { setCustomerData } = customerDataSlice.actions;

export const customersState = (state: RootState) => state.customerData.customers;

export const customerDataReducer = customerDataSlice.reducer;