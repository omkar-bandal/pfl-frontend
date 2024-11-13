import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetGRN, PostGRN } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";

type grnDataState = {
    grn: GetGRN[];
    selectedGRN: GetGRN | undefined;
    previewGRN: PostGRN | GetGRN| undefined;
    subTotalAmt: number;
    totalAmt: number;
    totAmtWords: string;
}
const initialState: grnDataState = {
    grn: [],
    selectedGRN: undefined,
    previewGRN: undefined,
    subTotalAmt: 0,
    totalAmt: 0,
    totAmtWords: "",
}
export const grnDataSlice = createSlice({
    name: 'grnData',
    initialState,
    reducers: {
        setGRNData: (state, action: PayloadAction<GetGRN[]>) => {
            state.grn = action.payload;
        },
        setSelectedGRN: (state, action: PayloadAction<GetGRN|undefined>) => {
            state.selectedGRN = action.payload;
        },
        setPreviewGRN:(state, action: PayloadAction<PostGRN| GetGRN |undefined>) => {
            state.previewGRN = action.payload;
        },
        setSubTotalAmt: (state, action: PayloadAction<number>)=>{
            state.subTotalAmt = action.payload;
        },
        setTotalAmt: (state, action: PayloadAction<number>)=>{
            state.totalAmt = action.payload;
        },
        setTotAmtWords: (state, action: PayloadAction<string>)=>{
            state.totAmtWords = action.payload;
        },
    }
})

export const { setGRNData, setSelectedGRN, setPreviewGRN, setSubTotalAmt, setTotalAmt, setTotAmtWords  } = grnDataSlice.actions;

export const grnDataState = (state: RootState) => state.grnData;

export const grnDataReducer = grnDataSlice.reducer;