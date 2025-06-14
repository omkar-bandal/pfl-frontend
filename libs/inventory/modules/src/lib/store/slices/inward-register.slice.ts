import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostInwardRegister } from "@prime-fresh/inventory_api";
import { RootState } from "../store.inventory";

type InwardRegisterState = {
    inwardRegisterFormPreview: PostInwardRegister | undefined;
}
const initialState : InwardRegisterState = {
    inwardRegisterFormPreview: undefined,
}

const inwardRegisterSlice = createSlice({
    name: "inwardRegister",
    initialState,
    reducers: {
        setInwardRegisterFormPreview: (state, action: PayloadAction<PostInwardRegister | undefined>) => {
            state.inwardRegisterFormPreview = action.payload;
        }
    }
})
export const {setInwardRegisterFormPreview } = inwardRegisterSlice.actions;

export const inwardRegisterStates = (store: RootState) => store.inwardRegister;

export const inwardRegisterReducer = inwardRegisterSlice.reducer;