import { GetVendorCategory } from "@prime-fresh/admin_api"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";

type VendorCategoryDataState = {
    allVendorCategories: GetVendorCategory[];
    selectedVendorCategory: GetVendorCategory | null;
}

const initialState: VendorCategoryDataState = {
    allVendorCategories: [],
    selectedVendorCategory: null,
}

const vendorCategoryDataSlice = createSlice({
    name: "vendorCategoryData",
    initialState,
    reducers: {
        setAllVendorCategories: (state, action: PayloadAction<GetVendorCategory[] | []>) => {
            state.allVendorCategories = action.payload;
        },
        setSelectedVendorCategory: (state, action: PayloadAction<GetVendorCategory | null>) => {
            state.selectedVendorCategory = action.payload;
        }
    }
})
export const {setAllVendorCategories, setSelectedVendorCategory} = vendorCategoryDataSlice.actions;

export const vendorCategoryState = (state: RootState) => state.vendorCategoryData;

export const vendorCategoryDataReducer = vendorCategoryDataSlice.reducer;
