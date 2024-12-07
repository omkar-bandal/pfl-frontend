import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetAllFilteredFarmerData, GetFarmer } from "@prime-fresh/admin_api";

type farmerDataState = {
    allFarmers: GetFarmer[];
    allFarmersFiltered: GetAllFilteredFarmerData[],
    selectedFarmer: GetAllFilteredFarmerData | null | undefined;
}
const initialState : farmerDataState = {
    allFarmers: [],
    allFarmersFiltered: [],
    selectedFarmer: null,
}
const farmerDataSlice = createSlice({
    name: 'farmerData',
    initialState,
    reducers: {
        setFarmerData: (state, action: PayloadAction<GetFarmer[]>) => {
            state.allFarmers = action.payload;
        },
        setFilteredFarmerData: (state, action: PayloadAction<GetAllFilteredFarmerData[]>) => {
            state.allFarmersFiltered = action.payload
        },
        setSelectedFarmer: (state, action: PayloadAction<GetAllFilteredFarmerData | null | undefined>) => {
            state.selectedFarmer = action.payload;
        }
    }
})

export const {setFarmerData, setFilteredFarmerData, setSelectedFarmer} = farmerDataSlice.actions;

export const farmersDataState = (state: RootState) => state.farmerData;

export const farmerDataReducer = farmerDataSlice.reducer;