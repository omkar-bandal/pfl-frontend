import { RootState } from '../store.core';

type LayoutState = {
    mobileOpen: boolean;
    isSidebarClosing: boolean;
};
export declare const setMobileOpen: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setMobileOpen">, setIsSidebarClosing: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setIsSidebarClosing">;
export declare const layoutActionCreators: {
    setMobileOpen: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setMobileOpen">;
    setIsSidebarClosing: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setIsSidebarClosing">;
};
export declare const mobileOpenState: (state: RootState) => boolean;
export declare const isSidebarClosingState: (state: RootState) => boolean;
export declare const layoutStates: (state: RootState) => LayoutState;
export declare const layoutReducer: import('redux').Reducer<LayoutState>;
export {};
