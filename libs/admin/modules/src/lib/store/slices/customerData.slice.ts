import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetCustomer, PostCustomer } from "@prime-fresh/admin_api";

type customerDataState = {
    customers: GetCustomer[];
    customerFormPreview: PostCustomer | null,
}
const initialState: customerDataState = {
    customers: [],
    customerFormPreview: null
}
const customerDataSlice = createSlice({
    name: 'customerData',
    initialState,
    reducers: {
        setCustomerData: (state, action: PayloadAction<GetCustomer[]>) => {
            state.customers = action.payload;
        },
        setCustomerFormPreview: (state, action: PayloadAction<PostCustomer>) => {
            state.customerFormPreview = action.payload;
        }
    }
})

export const { setCustomerData, setCustomerFormPreview } = customerDataSlice.actions;

export const customersStates = (state: RootState) => state.customerData.customers;

export const customerDataReducer = customerDataSlice.reducer;