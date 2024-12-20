import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetAllFilteredVendorData, GetVendor } from "@prime-fresh/admin_api";

type vendorDataState = {
    allVendors: GetVendor[] | [];
    allVendorsFiltered: GetAllFilteredVendorData[];
    selectedVendor: GetAllFilteredVendorData | null | undefined;
}
const initialState: vendorDataState = {
    allVendors: [],
    allVendorsFiltered: [],
    selectedVendor: null,
}
const vendorDataSlice = createSlice({
    name: 'vendorData',
    initialState,
    reducers: {
        setVendorData: (state, action: PayloadAction<GetVendor[]>) => {
            state.allVendors = action.payload;
        },
        setFilteredVendorData: (state, action: PayloadAction<GetAllFilteredVendorData[]>) => {
            state.allVendorsFiltered = action.payload
        },
        setSelectedVendor: (state, action: PayloadAction<GetAllFilteredVendorData | null | undefined>) =>{
            state.selectedVendor = action.payload;
        }
    }
})

export const { setVendorData, setFilteredVendorData, setSelectedVendor } = vendorDataSlice.actions;

export const vendorsDataState = (state: RootState) => state.vendorData;

export const vendorDataReducer = vendorDataSlice.reducer;