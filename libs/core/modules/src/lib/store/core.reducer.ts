import { authReducer, layoutReducer, previewReducer, dialogBoxReducer, notificationReducer, drawerContainerReducer } from "./slices";
import { queryParamsReducer } from "./slices/query-params.slice";
 
export const coreReducer = {
    auth: authReducer,
    layout: layoutReducer,
    preview: previewReducer,
    dialogBox: dialogBoxReducer,
    drawerContainer: drawerContainerReducer,
    notifications: notificationReducer,
    queryParams: queryParamsReducer,
}