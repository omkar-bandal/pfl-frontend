import { RootState } from '../store.core';
import { PayloadAction } from '@reduxjs/toolkit';

type LayoutState = {
    mobileOpen: boolean;
    isClosing: boolean;
    pageTitle: string;
};
export declare const layoutSlice: import('@reduxjs/toolkit').Slice<LayoutState, {
    setMobileOpen: (state: import('immer').WritableDraft<LayoutState>, action: PayloadAction<boolean>) => void;
    setIsClosing: (state: import('immer').WritableDraft<LayoutState>, action: PayloadAction<boolean>) => void;
    setPageTitle: (state: import('immer').WritableDraft<LayoutState>, action: PayloadAction<string>) => void;
}, "layout", "layout", import('@reduxjs/toolkit').SliceSelectors<LayoutState>>;
export declare const setMobileOpen: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setMobileOpen">, setIsClosing: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setIsClosing">, setPageTitle: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "layout/setPageTitle">;
export declare const mobileOpenState: (state: RootState) => boolean;
export declare const isClosingState: (state: RootState) => boolean;
export declare const pageTitleState: (state: RootState) => string;
export declare const layoutReducer: import('redux').Reducer<LayoutState>;
export {};
