import { RootState } from "../store.admin";
type AlertSnackbarType = {
    open: boolean;
    message: string;
    severity: 'success' | 'error';
};
export declare const openAlertbar: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "alertSnackbar/openAlertbar">, closeAlertbar: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "alertSnackbar/closeAlertbar">, addMessageSevirity: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    message: string;
    severity: "success" | "error";
}, "alertSnackbar/addMessageSevirity">, removeMessageSeverity: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"alertSnackbar/removeMessageSeverity">;
export declare const alertSnackbarState: (state: RootState) => AlertSnackbarType;
export declare const alertSnackbarReducer: import("@reduxjs/toolkit").Reducer<AlertSnackbarType>;
export {};
