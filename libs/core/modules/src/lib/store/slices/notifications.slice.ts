import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.core';
export interface NotificationState {
  notifications: Array<{
    message: string,
    date: string,
    time: string,
    isRead: boolean
  }>;
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<{
      message: string,
      date: string,
      time: string,
      isRead: boolean
    }>) => {
      state.notifications.push(action.payload);
    },
    clearNotifications: state => {
      state.notifications = [];
    },
    setNotifications: (state, action: PayloadAction<{
      message: string,
      date: string,
      time: string,
      isRead: boolean
    }[]>) => {
      state.notifications = action.payload;
    }
  },
});

export const { addNotification, clearNotifications, setNotifications } = notificationSlice.actions;
export const notificationActionCreators = { addNotification, clearNotifications, setNotifications };
export const notificationsState = (state: RootState) => state.notifications.notifications;
export const notificationReducer = notificationSlice.reducer;