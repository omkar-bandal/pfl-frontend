import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostAQR } from "@prime-fresh/inventory_api";
import { RootState } from "../store.inventory";

type AQRState = {
    aqrFormPreview: PostAQR | undefined;
}
const initialState : AQRState = {
    aqrFormPreview: undefined,
}

const AQRSlice = createSlice({
    name: "aqr",
    initialState,
    reducers: {
        setAQRFormPreview: (state, action: PayloadAction<PostAQR | undefined>) => {
            state.aqrFormPreview = action.payload;
        }
    }
})
export const {setAQRFormPreview } = AQRSlice.actions;

export const aqrStates = (store: RootState) => store.aqr;

export const aqrReducer = AQRSlice.reducer;