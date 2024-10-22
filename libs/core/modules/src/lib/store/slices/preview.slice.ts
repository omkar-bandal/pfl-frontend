import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.core";

type PreviewStateType = {
    preview: boolean,
}
const initialState: PreviewStateType = {
   preview: false,
};
export const previewSlice = createSlice({
    name: "preview",
    initialState,
    reducers: {
        setPreview: (state, action: PayloadAction<boolean>) => {
            state.preview = action.payload;
        },
    }
})

export const {setPreview} = previewSlice.actions;
export const previewState = (state: RootState) => state.preview.preview;
export const previewReducer = previewSlice.reducer;
  