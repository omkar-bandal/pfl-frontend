import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.core';

type LayoutState = {
  mobileOpen: boolean;
  isSidebarClosing: boolean;
};

const initialState: LayoutState = {
  mobileOpen: false,
  isSidebarClosing: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setMobileOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileOpen = action.payload;
    },
    setIsSidebarClosing: (state, action: PayloadAction<boolean>) => {
      state.isSidebarClosing = action.payload;
    },
  },
});

export const { setMobileOpen, setIsSidebarClosing } = layoutSlice.actions;
export const layoutActionCreators = { setMobileOpen, setIsSidebarClosing };
// Other code such as selectors can use the imported `RootState` type
export const mobileOpenState = (state: RootState) => state.layout.mobileOpen;
export const isSidebarClosingState = (state: RootState) => state.layout.isSidebarClosing;
export const layoutStates = (state: RootState) => state.layout;
export const layoutReducer = layoutSlice.reducer;
