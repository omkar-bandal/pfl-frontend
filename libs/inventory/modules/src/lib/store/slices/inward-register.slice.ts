import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInwardRegister } from "@prime-fresh/inventory_api";
import { RootState } from "../store.inventory";

type InwardRegisterState = {
    inwardRegisterFormPreview: Omit<IInwardRegister, 'id'> | undefined;
}
const initialState : InwardRegisterState = {
    inwardRegisterFormPreview: undefined,
}

const inwardRegisterSlice = createSlice({
    name: "inwardRegister",
    initialState,
    reducers: {
        setInwardRegisterFormPreview: (state, action: PayloadAction<Omit<IInwardRegister, 'id'> | undefined>) => {
            state.inwardRegisterFormPreview = action.payload;
        }
    }
})
export const {setInwardRegisterFormPreview } = inwardRegisterSlice.actions;

export const inwardRegisterStates = (store: RootState) => store.inwardRegister;

export const inwardRegisterReducer = inwardRegisterSlice.reducer;