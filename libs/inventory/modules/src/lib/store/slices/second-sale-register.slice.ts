import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostSecondSaleRegister } from "@prime-fresh/inventory_api";
import { RootState } from "../store.inventory";

type SecondSaleRegisterState = {
    secondSaleRegisterFormPreview: PostSecondSaleRegister | undefined;
}
const initialState : SecondSaleRegisterState = {
    secondSaleRegisterFormPreview: undefined,
}

const secondSaleRegisterSlice = createSlice({
    name: "secondSaleRegister",
    initialState,
    reducers: {
        setSecondSaleRegisterFormPreview: (state, action: PayloadAction<PostSecondSaleRegister | undefined>) => {
            state.secondSaleRegisterFormPreview = action.payload;
        }
    }
})
export const {setSecondSaleRegisterFormPreview } = secondSaleRegisterSlice.actions;

export const secondSaleRegisterStates = (store: RootState) => store.secondSaleRegister;

export const secondSaleRegisterReducer = secondSaleRegisterSlice.reducer;