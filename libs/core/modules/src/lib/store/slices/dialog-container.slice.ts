import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.core';

type DialogContainerStateType = {
  isDialogOpen: Record<string, boolean>;
};

type DialogContainerStatePayload = {
  key: string;
};

const initialState: DialogContainerStateType = {
  isDialogOpen: {},
};

export const dialogContainerSlice = createSlice({
  name: 'dialogContainer',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<DialogContainerStatePayload>) => {
      const { key } = action.payload;
      state.isDialogOpen[key] = true;
    },
    closeDialog: (state, action: PayloadAction<DialogContainerStatePayload>) => {
      const { key } = action.payload;
      state.isDialogOpen[key] = false;
    },
    toggleDialog: (state, action: PayloadAction<DialogContainerStatePayload>) => {
      const { key } = action.payload;
      state.isDialogOpen[key] = !state.isDialogOpen[key];
    },
  },
});

export const { openDialog, closeDialog, toggleDialog } = dialogContainerSlice.actions;
export const dialogContainerActionCreators = { openDialog, closeDialog, toggleDialog };
export const dialogContainerState = (state: RootState) => state.dialogContainer.isDialogOpen;
export const dialogContainerReducer = dialogContainerSlice.reducer;
