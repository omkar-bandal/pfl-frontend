import { RootState } from '../store.core';

type DrawerStateType = {
    isDrawerOpen: boolean;
};
export declare const drawerContainerSlice: import('@reduxjs/toolkit').Slice<DrawerStateType, {
    openDrawer: (state: import('immer').WritableDraft<DrawerStateType>) => void;
    closeDrawer: (state: import('immer').WritableDraft<DrawerStateType>) => void;
}, "drawerContainer", "drawerContainer", import('@reduxjs/toolkit').SliceSelectors<DrawerStateType>>;
export declare const openDrawer: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"drawerContainer/openDrawer">, closeDrawer: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"drawerContainer/closeDrawer">;
export declare const drawerContainerActionCreators: {
    openDrawer: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"drawerContainer/openDrawer">;
    closeDrawer: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"drawerContainer/closeDrawer">;
};
export declare const drawerContainerState: (state: RootState) => boolean;
export declare const drawerContainerReducer: import('redux').Reducer<DrawerStateType>;
export {};
