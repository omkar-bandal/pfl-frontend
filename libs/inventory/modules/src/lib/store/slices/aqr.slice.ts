import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAQR } from "@prime-fresh/inventory_api";
import { RootState } from "../store.inventory";

type AQRState = {
    aqrFormPreview: Omit<IAQR, 'id'> | undefined;
}
const initialState : AQRState = {
    aqrFormPreview: undefined,
}

const AQRSlice = createSlice({
    name: "aqr",
    initialState,
    reducers: {
        setAQRFormPreview: (state, action: PayloadAction<Omit<IAQR, 'id'> | undefined>) => {
            state.aqrFormPreview = action.payload;
        }
    }
})
export const {setAQRFormPreview } = AQRSlice.actions;

export const aqrStates = (store: RootState) => store.aqr;

export const aqrReducer = AQRSlice.reducer;