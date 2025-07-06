import { authReducer, layoutReducer, previewReducer, dialogBoxReducer } from "./slices";
 
export const coreReducer = {
    auth: authReducer,
    layout: layoutReducer,
    preview: previewReducer,
    dialogBox: dialogBoxReducer
}