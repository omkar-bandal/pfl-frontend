import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.core';

type NotificationStateType = {
    isOpen: boolean,
    severity: 'success' | 'error',
    message: string,
}
const initialState: NotificationStateType = {
  isOpen: false,
  severity: 'success',
  message: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<{ severity: 'success' | 'error', message: string }>) => {
      state.isOpen = true;
      state.severity = action.payload.severity;
      state.message = action.payload.message;
    },
    hideNotification: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export const notificationState = (state: RootState) => state.notification;
export const notificationReducer =  notificationSlice.reducer;