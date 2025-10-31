import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetOffices, OfficeType, PostOffices } from '@prime-fresh/services';

type OfficesDataState = {
    offices: GetOffices[],
    officeType: OfficeType,
    selectedOffices: GetOffices | undefined,
    officeFormPreview: PostOffices | null,
}

const initialState: OfficesDataState = {
    offices: [],
    officeType: OfficeType["registered-office"],
    selectedOffices: undefined,
    officeFormPreview: null,
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
        setOfficeFormPreview: (state, action: PayloadAction<PostOffices>) => {
            state.officeFormPreview = action.payload;
        }
    }
})

export const { setOfficesData, setOfficeType, setOfficeFormPreview } = officesDataSlice.actions;

export const officesDataStates = (state: RootState) => state.officesData;

export const officesDataReducer = officesDataSlice.reducer;