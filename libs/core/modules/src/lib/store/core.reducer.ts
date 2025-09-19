import { authReducer, layoutReducer, previewReducer, dialogBoxReducer, notificationReducer, drawerContainerReducer, dialogContainerReducer, datagridTableReducer } from "./slices";
import { queryParamsReducer } from "./slices/query-params.slice";
 
export const coreReducer = {
    auth: authReducer,
    layout: layoutReducer,
    preview: previewReducer,
    dialogBox: dialogBoxReducer,
    drawerContainer: drawerContainerReducer,
    dialogContainer: dialogContainerReducer,
    notifications: notificationReducer,
    // queryParams: queryParamsReducer,
    datagridTable: datagridTableReducer
}