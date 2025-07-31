import { RootState } from '../store.core';

type DialogBoxStateType = {
    isDialogBoxOpen: boolean;
};
export declare const dialogBoxSlice: import('@reduxjs/toolkit').Slice<DialogBoxStateType, {
    openDialogBox: (state: import('immer').WritableDraft<DialogBoxStateType>) => void;
    closeDialogBox: (state: import('immer').WritableDraft<DialogBoxStateType>) => void;
}, "dialogBox", "dialogBox", import('@reduxjs/toolkit').SliceSelectors<DialogBoxStateType>>;
export declare const openDialogBox: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"dialogBox/openDialogBox">, closeDialogBox: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"dialogBox/closeDialogBox">;
export declare const dialogBoxActionCreators: {
    openDialogBox: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"dialogBox/openDialogBox">;
    closeDialogBox: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"dialogBox/closeDialogBox">;
};
export declare const dialogBoxState: (state: RootState) => boolean;
export declare const dialogBoxReducer: import('redux').Reducer<DialogBoxStateType>;
export {};
