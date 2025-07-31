import { RootState } from "../store.admin";
import { IEmployee } from "@prime-fresh/admin_api";
type customerDataState = {
    employees: IEmployee[];
    employeeFormPreview: IEmployee | null;
};
export declare const setEmployeeData: import("@reduxjs/toolkit").ActionCreatorWithPayload<IEmployee[], "employeeData/setEmployeeData">, setEmployeeFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<IEmployee, "employeeData/setEmployeeFormPreview">;
export declare const employeesStates: (state: RootState) => IEmployee[];
export declare const employeeDataReducer: import("@reduxjs/toolkit").Reducer<customerDataState>;
export {};
