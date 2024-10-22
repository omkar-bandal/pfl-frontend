import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { Farmer } from "../../models";

type farmerDataState = {
    allFarmers: Farmer[];
    selectedFarmer: Farmer | undefined;
}
const initialState : farmerDataState = {
    allFarmers: [],
    selectedFarmer: undefined,
}
export const farmerDataSlice = createSlice({
    name: 'farmerData',
    initialState,
    reducers: {
        setFarmerData: (state, action: PayloadAction<Farmer[]>) => {
            state.allFarmers = action.payload;
        },
        setSelectedFarmer: (state, action: PayloadAction<Farmer | undefined>) => {
            state.selectedFarmer = action.payload;
        }
    }
})

export const {setFarmerData, setSelectedFarmer} = farmerDataSlice.actions;

export const farmersDataState = (state: RootState) => state.farmerData;

export const farmerDataReducer = farmerDataSlice.reducer;