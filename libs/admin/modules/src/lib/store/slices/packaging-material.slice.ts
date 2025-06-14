import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.admin';
import { PostPackagingMaterial } from '@prime-fresh/admin_api';

type PackagingMaterialDataState = {
  packagingMaterialFormPreview: PostPackagingMaterial | null;
};
const initialState: PackagingMaterialDataState = {
  packagingMaterialFormPreview: null,
};
const packagingMaterialDataSlice = createSlice({
  name: 'packagingMaterialData',
  initialState,
  reducers: {
    setPackagingMaterialFormPreview: (
      state,
      action: PayloadAction<PostPackagingMaterial>
    ) => {
      state.packagingMaterialFormPreview = action.payload;
    },
  },
});

export const { setPackagingMaterialFormPreview } =
  packagingMaterialDataSlice.actions;

export const packagingMaterialDataStates = (state: RootState) =>
  state.packagingMaterialData;

export const packagingMaterialDataReducer = packagingMaterialDataSlice.reducer;
