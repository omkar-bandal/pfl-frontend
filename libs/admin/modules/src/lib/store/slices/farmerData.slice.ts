import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.admin';
import { GetFarmer, PostFarmer } from '@prime-fresh/admin_api';
import { FarmerPartialData } from '@prime-fresh/common_api';

type farmerDataState = {
  allFarmers: GetFarmer[];
  allFarmersPartialData: FarmerPartialData[];
  selectedFarmerPartialData: FarmerPartialData | null | undefined;
  farmerFormPreview: PostFarmer | null;
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
    setFarmerData: (state, action: PayloadAction<GetFarmer[]>) => {
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
    setFarmerFormPreview: (state, action: PayloadAction<PostFarmer>) => {
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
