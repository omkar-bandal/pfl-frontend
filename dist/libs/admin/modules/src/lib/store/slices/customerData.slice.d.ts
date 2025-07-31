import { RootState } from "../store.admin";
import { GetCustomer, PostCustomer } from "@prime-fresh/admin_api";
type customerDataState = {
    customers: GetCustomer[];
    customerFormPreview: PostCustomer | null;
};
export declare const setCustomerData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetCustomer[], "customerData/setCustomerData">, setCustomerFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<PostCustomer, "customerData/setCustomerFormPreview">;
export declare const customersStates: (state: RootState) => GetCustomer[];
export declare const customerDataReducer: import("@reduxjs/toolkit").Reducer<customerDataState>;
export {};
