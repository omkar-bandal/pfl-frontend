"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeDataReducer = exports.employeesStates = exports.setEmployeeFormPreview = exports.setEmployeeData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    employees: [],
    employeeFormPreview: null,
};
const employeeDataSlice = (0, toolkit_1.createSlice)({
    name: 'employeeData',
    initialState,
    reducers: {
        setEmployeeData: (state, action) => {
            state.employees = action.payload;
        },
        setEmployeeFormPreview: (state, action) => {
            state.employeeFormPreview = action.payload;
        }
    }
});
_a = employeeDataSlice.actions, exports.setEmployeeData = _a.setEmployeeData, exports.setEmployeeFormPreview = _a.setEmployeeFormPreview;
const employeesStates = (state) => state.employeeData.employees;
exports.employeesStates = employeesStates;
exports.employeeDataReducer = employeeDataSlice.reducer;
//# sourceMappingURL=employeeData.slice.js.map