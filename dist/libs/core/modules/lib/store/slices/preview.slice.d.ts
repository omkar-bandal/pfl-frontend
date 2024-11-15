import { RootState } from '../store.core';
import { PayloadAction } from '@reduxjs/toolkit';

type PreviewStateType = {
    preview: boolean;
};
export declare const previewSlice: import('@reduxjs/toolkit').Slice<PreviewStateType, {
    setPreview: (state: import('immer').WritableDraft<PreviewStateType>, action: PayloadAction<boolean>) => void;
}, "preview", "preview", import('@reduxjs/toolkit').SliceSelectors<PreviewStateType>>;
export declare const setPreview: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "preview/setPreview">;
export declare const previewState: (state: RootState) => boolean;
export declare const previewReducer: import('redux').Reducer<PreviewStateType>;
export {};
