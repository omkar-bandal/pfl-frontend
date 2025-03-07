import { RootState } from '../store.core';

type LayoutState = {
    mobileOpen: boolean;
    isClosing: boolean;
    pageTitle: string;
};
export declare const setMobileOpen: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setMobileOpen">, setIsClosing: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setIsClosing">, setPageTitle: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "layout/setPageTitle">;
export declare const layoutActionCreators: {
    setMobileOpen: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setMobileOpen">;
    setIsClosing: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setIsClosing">;
    setPageTitle: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "layout/setPageTitle">;
};
export declare const mobileOpenState: (state: RootState) => boolean;
export declare const isClosingState: (state: RootState) => boolean;
export declare const pageTitleState: (state: RootState) => string;
export declare const layoutReducer: import('redux').Reducer<LayoutState>;
export {};
