import { RootState } from "../store.admin";
import { GetVendor } from "@prime-fresh/admin_api";
type vendorDataState = {
    allVendors: GetVendor[] | [];
    selectedVendor: GetVendor | null | undefined;
};
export declare const setVendorData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetVendor[], "vendorData/setVendorData">, setSelectedVendor: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetVendor | null | undefined, "vendorData/setSelectedVendor">;
export declare const vendorsDataState: (state: RootState) => vendorDataState;
export declare const vendorDataReducer: import("@reduxjs/toolkit").Reducer<vendorDataState>;
export {};
