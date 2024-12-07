import { authReducer, layoutReducer, notificationReducer, previewReducer } from "./slices";
 
export const coreReducer = {
    auth: authReducer,
    layout: layoutReducer,
    preview: previewReducer,
    notification: notificationReducer,
}