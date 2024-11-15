import { RootState } from "../store.admin";
type FormContainerState = {
    openDrawer: boolean;
    openFor: 'create' | 'update';
    dataId: string;
};
export declare const setDrawerOpen: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "formContainer/setDrawerOpen">, setOpenFor: import("@reduxjs/toolkit").ActionCreatorWithPayload<"create" | "update", "formContainer/setOpenFor">, setDataId: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "formContainer/setDataId">;
export declare const openDrawerState: (state: RootState) => boolean;
export declare const openForState: (state: RootState) => "create" | "update";
export declare const dataIdState: (state: RootState) => string;
export declare const formContainerState: (state: RootState) => FormContainerState;
export declare const formContainerReducer: import("@reduxjs/toolkit").Reducer<FormContainerState>;
export {};
