import { RootState } from '../store.core';

type NotificationStateType = {
    isOpen: boolean;
    severity: 'success' | 'error';
    message: string;
};
export declare const showNotification: import('@reduxjs/toolkit').ActionCreatorWithPayload<{
    severity: "success" | "error";
    message: string;
}, "notification/showNotification">, hideNotification: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"notification/hideNotification">;
export declare const notificationState: (state: RootState) => NotificationStateType;
export declare const notificationReducer: import('redux').Reducer<NotificationStateType>;
export {};
