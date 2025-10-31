import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.admin';
import { IFarmer } from '@prime-fresh/services';
import { FarmerPartialData } from '@prime-fresh/services';

type farmerDataState = {
  allFarmers: IFarmer[];
  allFarmersPartialData: FarmerPartialData[];
  selectedFarmerPartialData: FarmerPartialData | null | undefined;
  farmerFormPreview: IFarmer | null;
};
const initialState: farmerDataState = {
  allFarmers: [],
  allFarmersPartialData: [],
  selectedFarmerPartialData: null,
  farmerFormPreview: null,
};
const farmerDataSlice = createSlice({
  name: 'farmerData',
  initialState,
  reducers: {
    setFarmerData: (state, action: PayloadAction<IFarmer[]>) => {
      state.allFarmers = action.payload;
    },
    setAllFarmersPartialData: (
      state,
      action: PayloadAction<FarmerPartialData[]>
    ) => {
      state.allFarmersPartialData = action.payload;
    },
    setSelectedFarmerPartialData: (
      state,
      action: PayloadAction<FarmerPartialData | null | undefined>
    ) => {
      state.selectedFarmerPartialData = action.payload;
    },
    setFarmerFormPreview: (state, action: PayloadAction<IFarmer>) => {
      state.farmerFormPreview = action.payload;
    },
  },
});

export const {
  setFarmerData,
  setAllFarmersPartialData,
  setSelectedFarmerPartialData,
  setFarmerFormPreview,
} = farmerDataSlice.actions;

export const farmersDataStates = (state: RootState) => state.farmerData;

export const farmerDataReducer = farmerDataSlice.reducer;
