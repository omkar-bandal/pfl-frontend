import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVehicleDispatchRegister } from "@prime-fresh/inventory_api";
import { RootState } from "../store.inventory";

type VehicleDispatchRegisterState = {
    vehicleDispatchRegisterFormPreview: Omit<IVehicleDispatchRegister, 'id'> | undefined;
}
const initialState: VehicleDispatchRegisterState = {
    vehicleDispatchRegisterFormPreview: undefined,
}

const vehicleDispatchRegisterSlice = createSlice({
    name: "vehicleDispatchRegister",
    initialState,
    reducers: {
        setVehicleDispatchRegisterFormPreview: (state, action: PayloadAction<Omit<IVehicleDispatchRegister, 'id'> | undefined>) => {
            state.vehicleDispatchRegisterFormPreview = action.payload;
        }
    }
})
export const { setVehicleDispatchRegisterFormPreview } = vehicleDispatchRegisterSlice.actions;

export const vehicleDispatchRegisterStates = (store: RootState) => store.vehicleDispatchRegister;

export const vehicleDispatchRegisterReducer = vehicleDispatchRegisterSlice.reducer;