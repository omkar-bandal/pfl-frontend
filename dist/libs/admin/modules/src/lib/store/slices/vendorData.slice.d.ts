import { RootState } from "../store.admin";
import { GetVendor } from "@prime-fresh/admin_api";
import { VendorPartialData } from "@prime-fresh/common_api";
type vendorDataState = {
    allVendors: GetVendor[] | [];
    allVendorssPartialData: VendorPartialData[];
    selectedVendorPartialData: VendorPartialData | null | undefined;
};
export declare const setVendorData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetVendor[], "vendorData/setVendorData">, setAllVendorsPartialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<VendorPartialData[], "vendorData/setAllVendorsPartialData">, setSelectedVendorPartialData: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<VendorPartialData | null | undefined, "vendorData/setSelectedVendorPartialData">;
export declare const vendorsDataState: (state: RootState) => vendorDataState;
export declare const vendorDataReducer: import("@reduxjs/toolkit").Reducer<vendorDataState>;
export {};
