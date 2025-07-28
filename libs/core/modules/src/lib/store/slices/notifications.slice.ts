import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.core';
import { INotification } from '../../models';

export interface NotificationState {
  notifications: INotification[];
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<INotification>) => {
      state.notifications.push(action.payload);
    },
    clearNotifications: state => {
      state.notifications = [];
    },
    setNotifications: (state, action: PayloadAction<INotification[]>) => {
      state.notifications = action.payload;
    }
  },
});

export const { addNotification, clearNotifications, setNotifications } = notificationSlice.actions;
export const notificationActionCreators = { addNotification, clearNotifications, setNotifications };
export const notificationsState = (state: RootState) => state.notifications.notifications;
export const notificationReducer = notificationSlice.reducer;