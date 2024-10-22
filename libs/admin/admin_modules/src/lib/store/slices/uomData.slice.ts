import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store.admin"
import { UOM, UOMConversionMatrix } from "../../models"

type UOMDataState = {
    allUOMs: UOM[],
    selectedUOM: UOM | undefined,
    allUOMConvMat: UOMConversionMatrix[],
    selectedUOMConvMat: UOMConversionMatrix | undefined,
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
        setUOMs: (state, action: PayloadAction<UOM[]>) => {
            state.allUOMs = action.payload;
        },
        setSelectedUOM: (state, action: PayloadAction<UOM | undefined>) => {
            state.selectedUOM = action.payload;
        },
        setUOMConvMat: (state, action: PayloadAction<UOMConversionMatrix[]>) => {
            state.allUOMConvMat = action.payload;
        },
        setSelectedUOMConvMat: (state, action: PayloadAction<UOMConversionMatrix | undefined>) => {
            state.selectedUOMConvMat = action.payload;
        }
    }
})
export const {setUOMs, setSelectedUOM, setUOMConvMat, setSelectedUOMConvMat} = uomDataSlice.actions;

export const uomsDataState = (state: RootState) => state.uomData;

export const uomDataReducer = uomDataSlice.reducer;