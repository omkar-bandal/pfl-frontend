import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.core";

type DrawerStateType = {
    isDrawerOpen: boolean,
}
const initialState: DrawerStateType = {
    isDrawerOpen: false,
};
export const drawerContainerSlice = createSlice({
    name: "drawerContainer",
    initialState,
    reducers: {
        openDrawer: (state) => {
            state.isDrawerOpen = true;
        },
        closeDrawer: (state) => {
            state.isDrawerOpen = false;
        },
    }
})

export const {openDrawer, closeDrawer} = drawerContainerSlice.actions;
export const drawerContainerActionCreators = {openDrawer, closeDrawer};
export const drawerContainerState = (state: RootState) => state.drawerContainer.isDrawerOpen;
export const drawerContainerReducer = drawerContainerSlice.reducer;
  