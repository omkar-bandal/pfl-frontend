import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetEmployee, PostEmployee } from "@prime-fresh/admin_api";

type customerDataState = {
    employees: GetEmployee[];
    employeeFormPreview: PostEmployee | null,
}
const initialState: customerDataState = {
    employees: [],
    employeeFormPreview: null,
}
const employeeDataSlice = createSlice({
    name: 'employeeData',
    initialState,
    reducers: {
        setEmployeeData: (state, action: PayloadAction<GetEmployee[]>) => {
            state.employees = action.payload;
        },
        setEmployeeFormPreview: (state, action: PayloadAction<PostEmployee>) => {
            state.employeeFormPreview = action.payload;
        }
    }
})

export const { setEmployeeData, setEmployeeFormPreview } = employeeDataSlice.actions;

export const employeesStates = (state: RootState) => state.employeeData.employees;

export const employeeDataReducer = employeeDataSlice.reducer;