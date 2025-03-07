import { RootState } from "../store.admin";
import { GetEmployee } from "@prime-fresh/admin_api";
type customerDataState = {
    employees: GetEmployee[];
};
export declare const setEmployeeData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetEmployee[], "employeeData/setEmployeeData">;
export declare const employeesState: (state: RootState) => GetEmployee[];
export declare const employeeDataReducer: import("@reduxjs/toolkit").Reducer<customerDataState>;
export {};
