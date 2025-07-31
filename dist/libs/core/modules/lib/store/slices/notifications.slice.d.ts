import { INotification } from '../../models';
import { RootState } from '../store.core';

export interface NotificationState {
    notifications: INotification[];
}
export declare const addNotification: import('@reduxjs/toolkit').ActionCreatorWithPayload<INotification, "notifications/addNotification">, clearNotifications: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"notifications/clearNotifications">, setNotifications: import('@reduxjs/toolkit').ActionCreatorWithPayload<INotification[], "notifications/setNotifications">;
export declare const notificationActionCreators: {
    addNotification: import('@reduxjs/toolkit').ActionCreatorWithPayload<INotification, "notifications/addNotification">;
    clearNotifications: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"notifications/clearNotifications">;
    setNotifications: import('@reduxjs/toolkit').ActionCreatorWithPayload<INotification[], "notifications/setNotifications">;
};
export declare const notificationsState: (state: RootState) => INotification[];
export declare const notificationReducer: import('redux').Reducer<NotificationState>;
