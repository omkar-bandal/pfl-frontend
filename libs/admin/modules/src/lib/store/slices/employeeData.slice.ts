import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { IEmployee } from '@prime-fresh/services';

type customerDataState = {
    employees: IEmployee[];
    employeeFormPreview: IEmployee | null,
}
const initialState: customerDataState = {
    employees: [],
    employeeFormPreview: null,
}
const employeeDataSlice = createSlice({
    name: 'employeeData',
    initialState,
    reducers: {
        setEmployeeData: (state, action: PayloadAction<IEmployee[]>) => {
            state.employees = action.payload;
        },
        setEmployeeFormPreview: (state, action: PayloadAction<IEmployee>) => {
            state.employeeFormPreview = action.payload;
        }
    }
})

export const { setEmployeeData, setEmployeeFormPreview } = employeeDataSlice.actions;

export const employeesStates = (state: RootState) => state.employeeData.employees;

export const employeeDataReducer = employeeDataSlice.reducer;