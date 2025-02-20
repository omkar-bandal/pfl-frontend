import { authReducer, layoutReducer, previewReducer } from "./slices";
 
export const coreReducer = {
    auth: authReducer,
    layout: layoutReducer,
    preview: previewReducer,
}