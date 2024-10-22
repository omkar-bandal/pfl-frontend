import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.core';

type LayoutState = {
  mobileOpen: boolean;
  isClosing: boolean;
  pageTitle: string;
};

const initialState: LayoutState = {
  mobileOpen: false,
  isClosing: false,
  pageTitle: "Dashboard",
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setMobileOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileOpen = action.payload;
    },
    setIsClosing: (state, action: PayloadAction<boolean>) => {
      state.isClosing = action.payload;
    },
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.pageTitle = action.payload;
    },
  },
});

export const { setMobileOpen, setIsClosing, setPageTitle } = layoutSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const mobileOpenState = (state: RootState) => state.layout.mobileOpen;
export const isClosingState = (state: RootState) => state.layout.isClosing;
export const pageTitleState = (state: RootState) => state.layout.pageTitle;

export const layoutReducer = layoutSlice.reducer;
