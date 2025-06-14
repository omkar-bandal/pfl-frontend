import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostDumpRegister } from "@prime-fresh/inventory_api";
import { RootState } from "../store.inventory";

type DumpRegisterState = {
    dumpRegisterFormPreview: PostDumpRegister | undefined;
}
const initialState : DumpRegisterState = {
    dumpRegisterFormPreview: undefined,
}

const dumpRegisterSlice = createSlice({
    name: "dumpRegister",
    initialState,
    reducers: {
        setDumpRegisterFormPreview: (state, action: PayloadAction<PostDumpRegister | undefined>) => {
            state.dumpRegisterFormPreview = action.payload;
        }
    }
})
export const {setDumpRegisterFormPreview } = dumpRegisterSlice.actions;

export const dumpRegisterStates = (store: RootState) => store.dumpRegister;

export const dumpRegisterReducer = dumpRegisterSlice.reducer;