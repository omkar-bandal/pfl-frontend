import { authReducer, layoutReducer, previewReducer, dialogBoxReducer, notificationReducer, drawerContainerReducer, dialogContainerReducer, datagridTableReducer } from "./slices";
 
export const coreReducer = {
    auth: authReducer,
    layout: layoutReducer,
    preview: previewReducer,
    dialogBox: dialogBoxReducer,
    drawerContainer: drawerContainerReducer,
    dialogContainer: dialogContainerReducer,
    notifications: notificationReducer,
    datagridTable: datagridTableReducer
}