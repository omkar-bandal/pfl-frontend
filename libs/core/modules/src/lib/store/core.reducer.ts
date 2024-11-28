import { layoutReducer, notificationReducer, previewReducer } from "./slices";
 
export const coreReducer = {
    layout: layoutReducer,
    preview: previewReducer,
    notification: notificationReducer,
}