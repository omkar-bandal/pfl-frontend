import { authReducer, layoutReducer, previewReducer, dialogBoxReducer, notificationReducer, drawerContainerReducer } from "./slices";
 
export const coreReducer = {
    auth: authReducer,
    layout: layoutReducer,
    preview: previewReducer,
    dialogBox: dialogBoxReducer,
    drawerContainer: drawerContainerReducer,
    notifications: notificationReducer,
}