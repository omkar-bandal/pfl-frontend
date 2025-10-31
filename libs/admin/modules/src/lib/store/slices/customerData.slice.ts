import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { ICustomer } from '@prime-fresh/services';

type customerDataState = {
    customers: ICustomer[];
    customerFormPreview: ICustomer | null,
}
const initialState: customerDataState = {
    customers: [],
    customerFormPreview: null
}
const customerDataSlice = createSlice({
    name: 'customerData',
    initialState,
    reducers: {
        setCustomerData: (state, action: PayloadAction<ICustomer[]>) => {
            state.customers = action.payload;
        },
        setCustomerFormPreview: (state, action: PayloadAction<ICustomer>) => {
            state.customerFormPreview = action.payload;
        }
    }
})

export const { setCustomerData, setCustomerFormPreview } = customerDataSlice.actions;

export const customersStates = (state: RootState) => state.customerData.customers;

export const customerDataReducer = customerDataSlice.reducer;