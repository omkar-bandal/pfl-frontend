import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetEmployee } from "@prime-fresh/admin_api";

type customerDataState = {
    employees: GetEmployee[];
}
const initialState: customerDataState = {
    employees: [],
}
const employeeDataSlice = createSlice({
    name: 'employeeData',
    initialState,
    reducers: {
        setEmployeeData: (state, action: PayloadAction<GetEmployee[]>) => {
            state.employees = action.payload;
        },
    }
})

export const { setEmployeeData } = employeeDataSlice.actions;

export const employeesState = (state: RootState) => state.employeeData.employees;

export const employeeDataReducer = employeeDataSlice.reducer;