import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { Vendor } from "../../models";

type vendorDataState = {
    allVendors: Vendor[];
    selectedVendor: Vendor | undefined;
}
const initialState: vendorDataState = {
    allVendors: [],
    selectedVendor: undefined,
}
export const vendorDataSlice = createSlice({
    name: 'vendorData',
    initialState,
    reducers: {
        setVendorData: (state, action: PayloadAction<Vendor[]>) => {
            state.allVendors = action.payload;
        },
        setSelectedVendor: (state, action: PayloadAction<Vendor | undefined>) =>{
            state.selectedVendor = action.payload;
        }
    }
})

export const { setVendorData, setSelectedVendor } = vendorDataSlice.actions;

export const vendorsDataState = (state: RootState) => state.vendorData;

export const vendorDataReducer = vendorDataSlice.reducer;