import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetOffices, OfficeType } from "@prime-fresh/admin_api";

type OfficesDataState = {
    offices: GetOffices[],
    officeType: OfficeType,
    selectedOffices: GetOffices | undefined,
}

const initialState: OfficesDataState = {
    offices: [],
    officeType: OfficeType.REGISTERED_OFFICE,
    selectedOffices: undefined
}
const officesDataSlice = createSlice({
    name: "officesData",
    initialState,
    reducers: {
        setOfficesData: (state, action: PayloadAction<GetOffices[]>) => {
            state.offices = action.payload;
        },
        setOfficeType: (state, action: PayloadAction<OfficeType>) => {
            state.officeType = action.payload;
        },
    }
})

export const { setOfficesData, setOfficeType } = officesDataSlice.actions;

export const officesDataState = (state: RootState) => state.officesData;


export const officesDataReducer = officesDataSlice.reducer;