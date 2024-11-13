import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetFarmer } from "@prime-fresh/admin_api";

type farmerDataState = {
    allFarmers: GetFarmer[];
    selectedFarmer: GetFarmer | undefined;
}
const initialState : farmerDataState = {
    allFarmers: [],
    selectedFarmer: undefined,
}
export const farmerDataSlice = createSlice({
    name: 'farmerData',
    initialState,
    reducers: {
        setFarmerData: (state, action: PayloadAction<GetFarmer[]>) => {
            state.allFarmers = action.payload;
        },
        setSelectedFarmer: (state, action: PayloadAction<GetFarmer | undefined>) => {
            state.selectedFarmer = action.payload;
        }
    }
})

export const {setFarmerData, setSelectedFarmer} = farmerDataSlice.actions;

export const farmersDataState = (state: RootState) => state.farmerData;

export const farmerDataReducer = farmerDataSlice.reducer;