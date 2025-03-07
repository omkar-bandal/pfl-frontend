import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetVendor } from "@prime-fresh/admin_api";
import { VendorPartialData } from "@prime-fresh/common_api";

type vendorDataState = {
    allVendors: GetVendor[] | [];
    allVendorssPartialData : VendorPartialData[];
    selectedVendorPartialData : VendorPartialData | null | undefined;
}
const initialState: vendorDataState = {
    allVendors: [],
    allVendorssPartialData: [],
   selectedVendorPartialData: null,
}
const vendorDataSlice = createSlice({
    name: 'vendorData',
    initialState,
    reducers: {
        setVendorData: (state, action: PayloadAction<GetVendor[]>) => {
            state.allVendors = action.payload;
        },
        setAllVendorsPartialData: (state, action: PayloadAction<VendorPartialData[]>) => {
            state.allVendorssPartialData = action.payload
        },
        setSelectedVendorPartialData: (state, action: PayloadAction<VendorPartialData | null | undefined>) => {
            state.selectedVendorPartialData = action.payload;
        }
    }
})

export const { setVendorData, setAllVendorsPartialData, setSelectedVendorPartialData } = vendorDataSlice.actions;

export const vendorsDataState = (state: RootState) => state.vendorData;

export const vendorDataReducer = vendorDataSlice.reducer;