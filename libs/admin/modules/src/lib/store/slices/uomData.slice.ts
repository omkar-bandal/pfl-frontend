import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store.admin"
import { GetUOM, GetUOMConversionMatrix } from "@prime-fresh/admin_api"

type UOMDataState = {
    allUOMs: GetUOM[],
    selectedUOM: GetUOM | undefined,
    allUOMConvMat: GetUOMConversionMatrix[],
    selectedUOMConvMat: GetUOMConversionMatrix | undefined,
}

const initialState: UOMDataState = {
    allUOMs: [],
    selectedUOM: undefined,
    allUOMConvMat: [],
    selectedUOMConvMat: undefined,
}

const uomDataSlice = createSlice({
    name: 'uomData',
    initialState,
    reducers: {
        setUOMs: (state, action: PayloadAction<GetUOM[]>) => {
            state.allUOMs = action.payload;
        },
        setSelectedUOM: (state, action: PayloadAction<GetUOM | undefined>) => {
            state.selectedUOM = action.payload;
        },
        setUOMConvMat: (state, action: PayloadAction<GetUOMConversionMatrix[]>) => {
            state.allUOMConvMat = action.payload;
        },
        setSelectedUOMConvMat: (state, action: PayloadAction<GetUOMConversionMatrix | undefined>) => {
            state.selectedUOMConvMat = action.payload;
        }
    }
})
export const {setUOMs, setSelectedUOM, setUOMConvMat, setSelectedUOMConvMat} = uomDataSlice.actions;

export const uomsDataState = (state: RootState) => state.uomData;

export const uomDataReducer = uomDataSlice.reducer;