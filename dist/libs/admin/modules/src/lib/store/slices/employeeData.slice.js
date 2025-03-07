"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeDataReducer = exports.employeesState = exports.setEmployeeData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    employees: [],
};
const employeeDataSlice = (0, toolkit_1.createSlice)({
    name: 'employeeData',
    initialState,
    reducers: {
        setEmployeeData: (state, action) => {
            state.employees = action.payload;
        },
    }
});
exports.setEmployeeData = employeeDataSlice.actions.setEmployeeData;
const employeesState = (state) => state.employeeData.employees;
exports.employeesState = employeesState;
exports.employeeDataReducer = employeeDataSlice.reducer;
//# sourceMappingURL=employeeData.slice.js.map