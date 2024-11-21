import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetVendor } from "@prime-fresh/admin_api";

type vendorDataState = {
    allVendors: GetVendor[] | [];
    selectedVendor: GetVendor | null | undefined;
}
const initialState: vendorDataState = {
    allVendors: [],
    selectedVendor: null,
}
const vendorDataSlice = createSlice({
    name: 'vendorData',
    initialState,
    reducers: {
        setVendorData: (state, action: PayloadAction<GetVendor[]>) => {
            state.allVendors = action.payload;
        },
        setSelectedVendor: (state, action: PayloadAction<GetVendor | null | undefined>) =>{
            state.selectedVendor = action.payload;
        }
    }
})

export const { setVendorData, setSelectedVendor } = vendorDataSlice.actions;

export const vendorsDataState = (state: RootState) => state.vendorData;

export const vendorDataReducer = vendorDataSlice.reducer;