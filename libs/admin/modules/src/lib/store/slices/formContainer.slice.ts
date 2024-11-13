import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";

type FormContainerState = {
  openDrawer: boolean;
  openFor: 'create' | 'update';
  dataId: string;
};

const initialState: FormContainerState = {
  openDrawer: false,
  openFor: 'create',
  dataId: '',
};
const formContainerSlice = createSlice({
  name: "formContainer",
  initialState,
  reducers: {
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.openDrawer = action.payload;
    },
    setOpenFor: (state, action: PayloadAction<'create' | 'update'> ) => {
      state.openFor = action.payload;
    },
    setDataId: (state, action: PayloadAction<string>) => {
      state.dataId = action.payload;
    }
  },
});

export const { setDrawerOpen, setOpenFor, setDataId } = formContainerSlice.actions;

export const openDrawerState = (state: RootState) => state.formContainer.openDrawer;
export const openForState = (state: RootState) => state.formContainer.openFor;
export const dataIdState = (state: RootState) => state.formContainer.dataId;
export const formContainerState = (state: RootState) => state.formContainer;

export const formContainerReducer = formContainerSlice.reducer;
