import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { Employee } from "../../models";

type customerDataState = {
    employees: Employee[];
}
const initialState: customerDataState = {
    employees: [],
}
export const employeeDataSlice = createSlice({
    name: 'employeeData',
    initialState,
    reducers: {
        setEmployeeData: (state, action: PayloadAction<Employee[]>) => {
            state.employees = action.payload;
        },
    }
})

export const { setEmployeeData } = employeeDataSlice.actions;

export const employeesState = (state: RootState) => state.employeeData.employees;

export const employeeDataReducer = employeeDataSlice.reducer;