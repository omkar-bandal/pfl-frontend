import { RootState } from "../store.admin";
import { GetCustomer } from "@prime-fresh/admin_api";
type customerDataState = {
    customers: GetCustomer[];
};
export declare const setCustomerData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetCustomer[], "customerData/setCustomerData">;
export declare const customersState: (state: RootState) => GetCustomer[];
export declare const customerDataReducer: import("@reduxjs/toolkit").Reducer<customerDataState>;
export {};
