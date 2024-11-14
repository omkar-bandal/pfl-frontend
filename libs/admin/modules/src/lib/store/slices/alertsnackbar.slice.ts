import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";

type AlertSnackbarType = {
    open: boolean;
    message: string;
    severity: 'success' | 'error';
}
const initialState: AlertSnackbarType = {
    open: false,
    message: '',
    severity: 'success',
}

const alertSnackbarSlice = createSlice({
    name: 'alertSnackbar',
    initialState,
    reducers: {
        openAlertbar: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload
        },
        closeAlertbar: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload
        },
        addMessageSevirity: (state, action: PayloadAction<{message: string, severity: 'success' | 'error'}>) => {
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        removeMessageSeverity: (state) => {
            state.message = "";
            state.severity='success';
        },
    }
})

export const { openAlertbar, closeAlertbar, addMessageSevirity, removeMessageSeverity } = alertSnackbarSlice.actions;

export const alertSnackbarState = (state: RootState) => state.alertSnackbar;

export const alertSnackbarReducer = alertSnackbarSlice.reducer;