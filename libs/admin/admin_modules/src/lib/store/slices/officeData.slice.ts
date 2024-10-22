import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { Offices, OfficeType } from "../../models";

type OfficesDataState = {
    offices: Offices[],
    officeType: OfficeType,
    selectedOffices: Offices,
}

const initialState: OfficesDataState = {
    offices: [],
    officeType: OfficeType.REGISTERED_OFFICE,
    selectedOffices: {
        id: "",
        name: "",
        cFirstName: "",
        cMiddleName: "",
        cLastName: "",
        contactNumber: "",
        officeEmail: "",
        notes: "",
        type: OfficeType.REGISTERED_OFFICE,
        address: {
            address1: "",
            address2: "",
            location: "",
            city: "",
            state: "",
            pincode: ""
        }
    }
}
export const officesDataSlice = createSlice({
    name: "officesData",
    initialState,
    reducers: {
        setOfficesData: (state, action: PayloadAction<Offices[]>) => {
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