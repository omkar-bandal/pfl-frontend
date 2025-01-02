import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.purchase";
import { GetRFPA, PostRFPA } from "@prime-fresh/purchase_api";

type rfpaDataState = {
    rfpa: GetRFPA[];
    selectedRFPA: GetRFPA | undefined;
    previewRFPA: PostRFPA | GetRFPA | undefined;
}
const initialState: rfpaDataState = {
    rfpa: [],
    selectedRFPA: undefined,
    previewRFPA: undefined,
}
const rfpaDataSlice = createSlice({
    name: 'rfpaData',
    initialState,
    reducers: {
        setRFPAData: (state, action: PayloadAction<GetRFPA[]>) => {
            state.rfpa = action.payload;
        },
        setSelectedRFPA: (state, action: PayloadAction<GetRFPA|undefined>) => {
            state.selectedRFPA = action.payload;
        },
        setPreviewRFPA: (state, action: PayloadAction<PostRFPA | GetRFPA | undefined>) => {
            state.previewRFPA = action.payload;
        }
    }
})

export const { setRFPAData, setSelectedRFPA, setPreviewRFPA } = rfpaDataSlice.actions;

export const rfpaDataState = (state: RootState) => state.rfpaData;

export const rfpaDataReducer = rfpaDataSlice.reducer;