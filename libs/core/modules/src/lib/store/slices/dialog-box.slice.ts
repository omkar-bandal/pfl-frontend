import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.core";

type DialogBoxStateType = {
    isDialogBoxOpen: boolean,
}
const initialState: DialogBoxStateType = {
    isDialogBoxOpen: false,
};
export const dialogBoxSlice = createSlice({
    name: "dialogBox",
    initialState,
    reducers: {
        openDialogBox: (state) => {
            state.isDialogBoxOpen = true;
        },
        closeDialogBox: (state) => {
            state.isDialogBoxOpen = false;
        },
    }
})

export const {openDialogBox, closeDialogBox} = dialogBoxSlice.actions;
export const dialogBoxActionCreators = {openDialogBox, closeDialogBox};
export const dialogBoxState = (state: RootState) => state.dialogBox.isDialogBoxOpen;
export const dialogBoxReducer = dialogBoxSlice.reducer;
  